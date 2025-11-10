import { useState, useEffect, useRef } from 'react';
import { Share2, CheckCircle, Volume2, VolumeX } from 'lucide-react';
import { CharacterPair } from '../types/characterPairs';

interface PracticeFlowProps {
  pair: CharacterPair;
  onClose: () => void;
}

export default function PracticeFlow({ pair, onClose }: PracticeFlowProps) {
  const [timerState, setTimerState] = useState<'ready' | 'running' | 'complete'>('ready');
  const [timeLeft, setTimeLeft] = useState(30);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerState === 'running' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timerState === 'running' && timeLeft === 0) {
      setTimerState('complete');
    }
  }, [timerState, timeLeft]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (timerState === 'running' && musicEnabled) {
      audio.loop = true;
      audio.volume = 0;
      audio.play().catch(() => {});

      let volume = 0;
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = window.setInterval(() => {
        volume += 0.05;
        if (volume >= 0.5) {
          volume = 0.5;
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        }
        audio.volume = volume;
      }, 100);
    } else if (timerState === 'complete' || !musicEnabled) {
      let volume = audio.volume;
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = window.setInterval(() => {
        volume -= 0.05;
        if (volume <= 0) {
          volume = 0;
          audio.pause();
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        }
        audio.volume = volume;
      }, 100);
    }

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, [timerState, musicEnabled]);

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  const startPractice = () => {
    setTimerState('running');
    setTimeLeft(30);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'The Simple Plan',
      text: `I practiced choosing differently. When ${pair.leftSide.primary.toLowerCase()} showed up, I chose ${pair.rightSide.primary.toLowerCase()}. Try it:`,
      url: window.location.origin
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          navigator.clipboard.writeText(window.location.origin);
          alert('Link copied to clipboard!');
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied! Share it with someone who needs it.');
    }
  };

  const toggleMusic = () => {
    setMusicEnabled(!musicEnabled);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-text-primary text-lg mb-4">
              When you notice{' '}
              <span className="font-semibold text-left-side-gray">
                {pair.leftSide.primary}
              </span>
              , pause and choose{' '}
              <span className="font-semibold text-primary-gold">
                {pair.rightSide.primary}
              </span>.
            </p>
          </div>

          <div className="bg-background-warm border-l-4 border-primary-gold p-4 rounded mb-6">
            <p className="text-base text-text-primary">
              {pair.practicePrompt}
            </p>
          </div>

          {timerState === 'ready' && (
            <button
              onClick={startPractice}
              className="w-full bg-gradient-to-r from-primary-orange to-primary-gold text-white py-3 rounded-lg font-medium hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-focus-ring"
            >
              Start 30-Second Practice
            </button>
          )}

          {timerState === 'running' && (
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#FFF7ED"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#F39237"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - timeLeft / 30)}`}
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-gold">{timeLeft}</span>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                Breathe slowly. Stay present.
              </p>
            </div>
          )}

          {timerState === 'complete' && (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-orange to-primary-gold rounded-full flex items-center justify-center">
                <CheckCircle className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                Well done
              </h3>
              <p className="text-text-secondary mb-6">
                You chose differently. You can do this again, one moment at a time.
              </p>
              <button
                onClick={handleShare}
                className="w-full border-2 border-primary-gold text-primary-gold py-3 rounded-lg font-medium hover:bg-background-warm transition flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-focus-ring"
              >
                <Share2 size={20} />
                {shareSuccess ? 'Link copied!' : 'Share this with someone who needs it'}
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full mt-4 text-text-secondary hover:text-text-primary transition py-2 focus:outline-none focus:ring-4 focus:ring-focus-ring rounded"
          >
            Close
          </button>

          <button
            onClick={toggleMusic}
            className="w-full mt-2 text-sm text-text-secondary hover:text-text-primary transition py-2 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-focus-ring rounded"
          >
            {musicEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            {musicEnabled ? 'Music On' : 'Music Off'}
          </button>
        </div>
      </div>
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/10/audio_4a645a9238.mp3" crossOrigin="anonymous" />
    </div>
  );
}
