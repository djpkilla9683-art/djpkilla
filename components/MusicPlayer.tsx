
import React, { useState, useEffect, useRef } from 'react';
import { Track } from '../types';

interface MusicPlayerProps {
  currentTrack: Track | null;
  onClose: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentTrack, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-white/10 p-4 transition-all animate-slide-up bg-black/90">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-3 w-full md:w-1/3">
          <img 
            src={currentTrack.cover} 
            alt={currentTrack.title} 
            className="w-12 h-12 rounded-lg object-cover border border-white/10"
          />
          <div className="overflow-hidden">
            <h4 className="text-white font-semibold truncate">{currentTrack.title}</h4>
            <p className="text-gray-400 text-sm">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32V224a8,8,0,0,1-12.66,6.51L80,154.83V224a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0v69.17L195.34,25.49A8,8,0,0,1,208,32Z"></path></svg>
            </button>
            <button 
              onClick={togglePlay}
              className="bg-red-600 text-white p-3 rounded-full hover:scale-105 transition active:scale-95 shadow-lg shadow-red-600/20"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.75a16,16,0,0,1-16.2.3,15.86,15.86,0,0,1-8.12-13.9V40a15.86,15.86,0,0,1,8.12-13.9,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M192,32V101.17L76.66,25.49A8,8,0,0,0,64,32V224a8,8,0,0,0,12.66,6.51L192,154.83V224a8,8,0,0,0,16,0V32a8,8,0,0,0-16,0Z"></path></svg>
            </button>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Extra Actions */}
        <div className="hidden md:flex items-center justify-end gap-4 w-1/3">
          <a 
            href={currentTrack.downloadUrl} 
            download
            className="text-xs uppercase tracking-widest font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition"
          >
            Download Free
          </a>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          </button>
        </div>
      </div>
      <audio 
        ref={audioRef} 
        src={currentTrack.url} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default MusicPlayer;
