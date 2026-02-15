
import React, { useState } from 'react';
import { TRACKS } from '../constants';
import { MusicCategory, Track } from '../types';

interface MusicSectionProps {
  onPlay: (track: Track) => void;
}

const MusicSection: React.FC<MusicSectionProps> = ({ onPlay }) => {
  const [filter, setFilter] = useState<MusicCategory | 'All'>('All');

  const filteredTracks = filter === 'All' 
    ? TRACKS 
    : TRACKS.filter(t => t.category === filter);

  const categories: (MusicCategory | 'All')[] = ['All', MusicCategory.REMIX, MusicCategory.BLEND, MusicCategory.MASHUP, MusicCategory.MIX];

  return (
    <section id="music" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-4 uppercase">The Beats</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Listen and download all my latest creations. Remixed, blended, and mashed up for your ears only. No registration, no fees. Just pure vibes from Reading, PA.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === cat 
                    ? 'bg-red-600 text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTracks.map(track => (
            <div 
              key={track.id} 
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col bg-white/[0.02]"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    onClick={() => onPlay(track)}
                    className="p-4 bg-red-600 text-white rounded-full hover:scale-110 transition shadow-xl shadow-red-600/40"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.75a16,16,0,0,1-16.2.3,15.86,15.86,0,0,1-8.12-13.9V40a15.86,15.86,0,0,1,8.12-13.9,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600/80 backdrop-blur-md text-[10px] font-bold uppercase rounded-full border border-white/10">
                    {track.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1 truncate">{track.title}</h3>
                <p className="text-gray-400 text-sm mb-4">DJPKILLA</p>
                
                <div className="mt-auto flex items-center justify-between gap-4">
                   <button 
                    onClick={() => onPlay(track)}
                    className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.75a16,16,0,0,1-16.2.3,15.86,15.86,0,0,1-8.12-13.9V40a15.86,15.86,0,0,1,8.12-13.9,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
                    Listen
                  </button>
                  <a 
                    href={track.downloadUrl} 
                    download
                    className="p-2 text-gray-400 hover:text-white transition"
                    title="Download Track"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M224,144v64a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a8,8,0,0,1,16,0v64H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V40a8,8,0,0,0-16,0v84.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
