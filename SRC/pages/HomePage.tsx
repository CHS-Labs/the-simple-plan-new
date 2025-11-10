import { useState } from 'react';
import CharacterPairsTable from '../components/CharacterPairsTable';
import PracticeFlow from '../components/PracticeFlow';
import { characterPairs } from '../types/characterPairs';
import { HelpCircle, X } from 'lucide-react';

export default function HomePage() {
  const [selectedPairId, setSelectedPairId] = useState<number | null>(null);
  const [showPractice, setShowPractice] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const selectedPair = characterPairs.find(p => p.id === selectedPairId);

  const handleSelectPair = (id: number) => {
    setSelectedPairId(id);
    setShowPractice(true);
  };

  return (
    <>
      <main id="main-content" className="flex-1 py-8 pb-24">
        <div className="max-w-md mx-auto px-4 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-text-primary mb-3">
              What are you feeling right now?
            </h2>
            <p className="text-lg text-text-secondary mb-4">
              Choose what you're experiencing on the left side of the page.
            </p>
            <p className="text-base text-text-secondary">
              There's a simple practice that can help.
            </p>
          </div>

          <button
            onClick={() => setShowHowItWorks(true)}
            className="flex items-center gap-2 mx-auto text-primary-gold hover:text-active-gold transition mb-6 focus:outline-none focus:ring-4 focus:ring-focus-ring rounded px-2 py-1"
          >
            <HelpCircle size={20} />
            <span className="text-sm font-medium">How it works</span>
          </button>
        </div>

        <CharacterPairsTable
          pairs={characterPairs}
          selectedId={selectedPairId}
          onSelectPair={handleSelectPair}
        />
      </main>

      {showPractice && selectedPair && (
        <PracticeFlow
          pair={selectedPair}
          onClose={() => {
            setShowPractice(false);
            setSelectedPairId(null);
          }}
        />
      )}

      {showHowItWorks && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-text-primary">How it works</h3>
              <button
                onClick={() => setShowHowItWorks(false)}
                className="text-text-secondary hover:text-text-primary transition focus:outline-none focus:ring-4 focus:ring-focus-ring rounded"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4 text-text-primary">
              <p className="text-base leading-relaxed">
                The Simple Plan is a design for sober living based on spiritual principles.
              </p>
              <p className="text-base leading-relaxed">
                On the left side of the page, you'll see Character Defects like Resentment, Fear, and Dishonesty.
              </p>
              <p className="text-base leading-relaxed">
                On the right side of the page, you'll see Spiritual Principles like Forgiveness, Courage, and Honesty.
              </p>
              <p className="text-base leading-relaxed">
                When you notice a Character Defect arising in your thoughts or actions, tap it.
              </p>
              <p className="text-base leading-relaxed">
                You'll be guided through a simple 30-second practice to help you choose the Spiritual Principle instead.
              </p>
              <p className="text-base leading-relaxed">
                This is not a cure. This is not a replacement for your program. This is a tool.
              </p>
              <p className="text-base leading-relaxed font-semibold">
                You can choose differently, one moment at a time.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
