import { CharacterPair } from '../types/characterPairs';
import { ArrowRight } from 'lucide-react';

interface CharacterPairsTableProps {
  pairs: CharacterPair[];
  selectedId: number | null;
  onSelectPair: (id: number) => void;
}

export default function CharacterPairsTable({ pairs, selectedId, onSelectPair }: CharacterPairsTableProps) {
  return (
    <div className="space-y-3 px-4 max-w-md mx-auto">
      {pairs.map((pair) => {
        const isActive = selectedId === pair.id;

        return (
          <div
            key={pair.id}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            aria-label={`Select ${pair.leftSide.primary} to see practice guidance`}
            onClick={() => onSelectPair(pair.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectPair(pair.id);
              }
            }}
            className={`
              character-pair-row group cursor-pointer
              grid grid-cols-[1fr_auto_1fr] gap-2 items-center
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-focus-ring rounded-lg
              ${isActive ? 'active' : ''}
            `}
          >
            <div
              className={`
                left-side p-3 rounded-l-lg bg-gray-50 border-l-4 border-left-side-gray
                transition-opacity duration-300
                ${isActive ? 'opacity-70' : 'group-hover:opacity-70'}
              `}
            >
              <div className="font-semibold text-text-primary text-sm mb-1">
                {pair.leftSide.primary}
              </div>
              <div className="text-xs text-text-secondary">
                {pair.leftSide.descriptors.join(', ')}
              </div>
            </div>

            <div className="divider flex items-center justify-center">
              <ArrowRight className="text-primary-gold" size={20} />
            </div>

            <div
              className={`
                right-side p-3 rounded-r-lg border-l-4 border-right-side-amber
                transition-all duration-300
                ${
                  isActive
                    ? 'bg-gradient-to-br from-[#FED7AA] to-[#FBBF24] border-[#F59E0B] shadow-lg shadow-right-side-amber/20'
                    : 'bg-background-warm group-hover:bg-gradient-to-br group-hover:from-background-warm group-hover:to-[#FED7AA] group-hover:shadow-md group-hover:shadow-right-side-amber/10'
                }
              `}
            >
              <div className="font-semibold text-primary-gold text-sm mb-1">
                {pair.rightSide.primary}
              </div>
              <div className="text-xs text-text-secondary">
                {pair.rightSide.descriptors.join(', ')}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
