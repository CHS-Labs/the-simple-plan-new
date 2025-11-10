import { useState, useEffect } from 'react';
import { Calendar, Trophy, MapPin } from 'lucide-react';

export default function TrackerPage() {
  const [sobrietyDate, setSobrietyDate] = useState<string>('');
  const [savedDate, setSavedDate] = useState<string | null>(null);
  const [daysSober, setDaysSober] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('sobrietyDate');
    if (stored) {
      setSavedDate(stored);
      calculateDays(stored);
    }
  }, []);

  const calculateDays = (date: string) => {
    const soberDate = new Date(date);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - soberDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysSober(diffDays);
  };

  const handleSave = () => {
    if (sobrietyDate) {
      localStorage.setItem('sobrietyDate', sobrietyDate);
      setSavedDate(sobrietyDate);
      calculateDays(sobrietyDate);
    }
  };

  const handleClear = () => {
    localStorage.removeItem('sobrietyDate');
    setSavedDate(null);
    setDaysSober(null);
    setSobrietyDate('');
  };

  return (
    <main className="flex-1 py-8 pb-24 min-h-screen bg-gradient-to-b from-background-light to-background-warm">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-sand rounded-full mb-4">
            <Calendar className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Sobriety Date Tracker
          </h2>
          <p className="text-text-secondary">
            Track your journey, one day at a time
          </p>
        </div>

        {!savedDate ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <label className="block text-text-primary font-medium mb-3">
              When did you begin your journey?
            </label>
            <input
              type="date"
              value={sobrietyDate}
              onChange={(e) => setSobrietyDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-focus-ring focus:border-brand-orange transition"
            />
            <button
              onClick={handleSave}
              disabled={!sobrietyDate}
              className="w-full mt-4 bg-gradient-to-r from-brand-orange to-brand-sand text-white py-3 rounded-lg font-medium hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-focus-ring"
            >
              Save Date
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-brand-orange to-brand-sand rounded-lg shadow-xl p-8 text-center text-white">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <div className="text-6xl font-bold mb-2">{daysSober}</div>
              <div className="text-2xl font-medium">
                {daysSober === 1 ? 'Day' : 'Days'}
              </div>
              <div className="mt-4 text-white/90">
                Since {new Date(savedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-text-primary text-lg mb-4">
                You're doing great. Keep going, one day at a time.
              </p>
              <button
                onClick={handleClear}
                className="text-text-secondary hover:text-text-primary transition text-sm focus:outline-none focus:ring-4 focus:ring-focus-ring rounded px-4 py-2"
              >
                Reset Date
              </button>
            </div>

            <div className="bg-background-warm border-l-4 border-brand-orange p-4 rounded">
              <p className="text-sm text-text-secondary">
                Remember: Progress, not perfection. If you need to reset, that's okay too.
              </p>
            </div>
          </div>
        )}

        <div className="max-w-md mx-auto px-4 mt-6">
          <button
            onClick={() => window.open('https://aa-intergroup.org/meetings/', '_blank')}
            className="w-full border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors py-3 px-6 rounded-lg flex items-center justify-center gap-2"
          >
            <MapPin size={20} />
            Find an Online Meeting
          </button>
        </div>
      </div>
    </main>
  );
}
