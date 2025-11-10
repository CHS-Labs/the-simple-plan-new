import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';

export default function CompactAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.log('Audio play prevented:', err);
          setIsPlaying(false);
        });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/JellyRoll-Gospel.mp3" loop preload="metadata" />
      <button
        onClick={togglePlay}
        className="fixed bottom-24 right-6 w-16 h-16 rounded-full bg-brand-orange shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause className="text-white" size={24} fill="white" />
        ) : (
          <Music className="text-white" size={24} />
        )}
      </button>
    </>
  );
}
