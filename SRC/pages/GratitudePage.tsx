import { useState, useEffect } from 'react';
import { Heart, Plus, Trash2, X } from 'lucide-react';

interface GratitudeEntry {
  id: string;
  text: string;
  date: string;
}

export default function GratitudePage() {
  const [entries, setEntries] = useState<GratitudeEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('gratitudeEntries');
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const saveEntries = (updatedEntries: GratitudeEntry[]) => {
    setEntries(updatedEntries);
    localStorage.setItem('gratitudeEntries', JSON.stringify(updatedEntries));
  };

  const handleAdd = () => {
    if (!newEntry.trim()) return;

    const isAuthenticated = localStorage.getItem('userEmail') !== null;

    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    const entry: GratitudeEntry = {
      id: Date.now().toString(),
      text: newEntry.trim(),
      date: new Date().toISOString(),
    };
    saveEntries([entry, ...entries]);
    setNewEntry('');
  };

  const handleCreateAccount = () => {
    if (email.trim()) {
      localStorage.setItem('userEmail', email);
      setShowAuthModal(false);
      setEmail('');
      handleAdd();
    }
  };

  const handleDelete = (id: string) => {
    saveEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <main className="flex-1 py-8 pb-24 min-h-screen bg-gradient-to-b from-background-light to-background-warm">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-orange to-primary-gold rounded-full mb-4">
            <Heart className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Gratitude Journal
          </h2>
          <p className="text-text-secondary">
            What are you grateful for today?
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="I'm grateful for..."
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-focus-ring focus:border-brand-orange transition resize-none"
          />
          <button
            onClick={handleAdd}
            disabled={!newEntry.trim()}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange to-primary-gold text-white py-3 rounded-lg font-medium hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-focus-ring"
          >
            <Plus size={20} />
            Add Entry
          </button>
        </div>

        {entries.length === 0 ? (
          <div className="bg-background-warm border-l-4 border-primary-gold p-6 rounded text-center">
            <p className="text-text-secondary">
              Start your gratitude practice by adding your first entry.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Your Entries ({entries.length})
            </h3>
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-text-primary mb-2">{entry.text}</p>
                    <p className="text-xs text-text-secondary">
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-text-secondary hover:text-red-500 transition focus:outline-none focus:ring-4 focus:ring-focus-ring rounded p-2"
                    aria-label="Delete entry"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-background-warm border-l-4 border-primary-gold p-4 rounded">
          <p className="text-sm text-text-secondary">
            Practicing Gratitude helps shift focus from Character Defects to Spiritual Principles.
          </p>
        </div>
      </div>

      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-text-primary">
                Create Your Free Account
              </h3>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-text-secondary hover:text-text-primary transition focus:outline-none focus:ring-4 focus:ring-focus-ring rounded p-1"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-text-secondary mb-6">
              Your gratitude entries are private and secure. Create an account to save your journal.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-focus-ring focus:border-brand-orange transition mb-4"
            />
            <button
              onClick={handleCreateAccount}
              disabled={!email.trim()}
              className="w-full bg-gradient-to-r from-brand-orange to-primary-gold text-white py-3 rounded-lg font-medium hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-focus-ring mb-3"
            >
              Create Account
            </button>
            <p className="text-xs text-center text-text-secondary">
              We'll never share your data. Your entries are yours alone.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
