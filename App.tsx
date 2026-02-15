
import React, { useState, useEffect } from 'react';
import { geminiService } from './services/geminiService';
import { TRACKS, SHOWS, PHOTOS } from './constants';
import { Track } from './types';
import MusicSection from './components/MusicSection';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  const [bio, setBio] = useState<string>('');
  const [isLoadingBio, setIsLoadingBio] = useState(true);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const loadBio = async () => {
      const data = await geminiService.fetchBioInfo();
      setBio(data);
      setIsLoadingBio(false);
    };
    loadBio();
  }, []);

  const handlePlay = (track: Track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header / Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[60] py-6 px-6 md:px-12 flex items-center justify-between glass-card border-none bg-black/60">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-white font-syncopate shadow-lg shadow-red-600/30">PK</div>
          <span className="font-syncopate font-bold text-xl tracking-tighter text-white">DJPKILLA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-[0.2em]">
          <a href="#about" className="hover:text-red-600 transition">About</a>
          <a href="#music" className="hover:text-red-600 transition">Music</a>
          <a href="#shows" className="hover:text-red-600 transition">Shows</a>
          <a href="#gallery" className="hover:text-red-600 transition">Gallery</a>
          <a href="#booking" className="bg-red-600 text-white px-6 py-2.5 rounded-full hover:scale-105 transition active:scale-95 shadow-lg shadow-red-600/20">Book Now</a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[70] bg-black p-12 flex flex-col items-center justify-center gap-8 text-2xl font-syncopate font-bold uppercase">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          </button>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition">About</a>
          <a href="#music" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition">Music</a>
          <a href="#shows" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition">Shows</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition">Gallery</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/pkillahero/1920/1080" 
            alt="DJPKILLA Hero" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.5em] uppercase text-red-600 mb-4 animate-pulse">From Reading PA to Everywhere</h2>
          <h1 className="text-6xl md:text-9xl font-syncopate font-bold uppercase tracking-tighter mb-8 text-gradient">DJPKILLA</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#music" className="bg-red-600 text-white px-12 py-4 rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-red-600/40">Listen Now</a>
            <a href="#shows" className="glass-card text-white px-12 py-4 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all border border-white/20">Future Shows</a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-red-600 opacity-20 blur-3xl rounded-full"></div>
             <img 
              src="https://picsum.photos/seed/pkilla_bio/800/800" 
              alt="DJPKILLA Profile" 
              className="relative rounded-3xl w-full object-cover border border-white/10 grayscale hover:grayscale-0 transition duration-700 shadow-2xl shadow-red-900/20"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-8 uppercase">The Story</h2>
            {isLoadingBio ? (
              <div className="space-y-4">
                <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-white/10 rounded w-4/6 animate-pulse"></div>
              </div>
            ) : (
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {bio}
              </p>
            )}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2">Base</h4>
                <p className="text-2xl font-bold">Reading, PA</p>
              </div>
              <div>
                <h4 className="text-red-400 font-bold uppercase text-xs tracking-widest mb-2">Experience</h4>
                <p className="text-2xl font-bold">10+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Catalog Component */}
      <MusicSection onPlay={handlePlay} />

      {/* Shows Section */}
      <section id="shows" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-4 uppercase">Future Shows</h2>
            <p className="text-gray-400 text-lg">Catch me live across the city and beyond.</p>
          </div>
          
          <div className="space-y-4">
            {SHOWS.map(show => (
              <div 
                key={show.id} 
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl glass-card border-white/5 hover:border-red-600/30 transition-all duration-300 gap-6 hover:bg-red-900/5"
              >
                <div className="flex items-center gap-8">
                  <div className="text-center md:w-24">
                    <p className="text-xs uppercase font-bold text-red-600">{show.date.split(',')[1].trim()}</p>
                    <p className="text-2xl font-bold font-syncopate">{show.date.split(',')[0]}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-red-500 transition">{show.venue}</h3>
                    <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">{show.location} • {show.time}</p>
                  </div>
                </div>
                <div>
                  {show.isSoldOut ? (
                    <span className="px-8 py-3 rounded-full bg-red-600/10 text-red-600 border border-red-600/20 font-bold uppercase text-xs tracking-widest">Sold Out</span>
                  ) : (
                    <a 
                      href={show.ticketLink} 
                      className="inline-block px-8 py-3 rounded-full bg-red-600 text-white font-bold uppercase text-xs tracking-widest hover:bg-red-700 transition shadow-lg shadow-red-600/20"
                    >
                      Get Tickets
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-16 uppercase text-center">Moments</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PHOTOS.map((photo, i) => (
              <div 
                key={photo.id} 
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  i === 1 ? 'md:row-span-2' : ''
                } ${i === 3 ? 'md:col-span-2' : ''}`}
              >
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <p className="text-white font-bold tracking-widest text-sm uppercase">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Footer */}
      <section id="booking" className="py-24 px-6 bg-gradient-music border-t border-red-900/30">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-7xl font-syncopate font-bold mb-8 uppercase leading-tight">Bring the Vibe to your City</h2>
          <p className="text-xl md:text-2xl font-medium mb-12 opacity-80 max-w-2xl mx-auto">
            Currently booking for festivals, club residencies, and private high-energy events. 
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:booking@djpkilla.com" className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition active:scale-95 shadow-2xl">Email for Booking</a>
            <div className="flex items-center gap-4 text-white font-bold text-lg">
              <a href="#" className="hover:text-red-400 transition">Instagram</a>
              <span>•</span>
              <a href="#" className="hover:text-red-400 transition">TikTok</a>
              <span>•</span>
              <a href="#" className="hover:text-red-400 transition">SoundCloud</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 px-6 bg-black border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="font-syncopate font-bold text-2xl mb-4 text-white">DJPKILLA</div>
          <p>© 2024 DJPKILLA MUSIC GROUP. ALL RIGHTS RESERVED. READING, PA.</p>
        </div>
      </footer>

      {/* Global Audio Player */}
      <MusicPlayer 
        currentTrack={currentTrack} 
        onClose={() => setCurrentTrack(null)} 
      />
    </div>
  );
};

export default App;
