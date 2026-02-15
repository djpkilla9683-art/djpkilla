
import { MusicCategory, Track, Show, GalleryPhoto } from './types';

export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'Summer Heat Blend 2024',
    artist: 'DJPKILLA',
    category: MusicCategory.BLEND,
    duration: '04:15',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: 'https://picsum.photos/seed/music1/400/400',
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'Reading City Lockdown Mix',
    artist: 'DJPKILLA',
    category: MusicCategory.MIX,
    duration: '45:00',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: 'https://picsum.photos/seed/music2/400/400',
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'Old School Vibes Mashup',
    artist: 'DJPKILLA',
    category: MusicCategory.MASHUP,
    duration: '03:45',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: 'https://picsum.photos/seed/music3/400/400',
    downloadUrl: '#'
  },
  {
    id: '4',
    title: 'Hiphop vs Reggaeton Remix',
    artist: 'DJPKILLA',
    category: MusicCategory.REMIX,
    duration: '05:20',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    cover: 'https://picsum.photos/seed/music4/400/400',
    downloadUrl: '#'
  }
];

export const SHOWS: Show[] = [
  {
    id: '1',
    date: 'JUN 15, 2024',
    venue: 'Reverb',
    location: 'Reading, PA',
    time: '10:00 PM',
    ticketLink: '#'
  },
  {
    id: '2',
    date: 'JUL 04, 2024',
    venue: 'Reading City Park Festival',
    location: 'Reading, PA',
    time: '08:00 PM',
    ticketLink: '#'
  },
  {
    id: '3',
    date: 'AUG 12, 2024',
    venue: 'The Nitro Bar',
    location: 'West Reading, PA',
    time: '11:00 PM',
    isSoldOut: true
  },
  {
    id: '4',
    date: 'SEP 01, 2024',
    venue: 'Private Yacht Party',
    location: 'Philadelphia, PA',
    time: '07:00 PM'
  }
];

export const PHOTOS: GalleryPhoto[] = [
  { id: '1', url: 'https://picsum.photos/seed/dj1/800/600', caption: 'Live at Reverb Reading' },
  { id: '2', url: 'https://picsum.photos/seed/dj2/800/1000', caption: 'Backstage Vibes' },
  { id: '3', url: 'https://picsum.photos/seed/dj3/800/600', caption: 'Crowd Energy' },
  { id: '4', url: 'https://picsum.photos/seed/dj4/1200/800', caption: 'Studio Session' },
  { id: '5', url: 'https://picsum.photos/seed/dj5/800/800', caption: 'Vinyl Collection' },
  { id: '6', url: 'https://picsum.photos/seed/dj6/800/600', caption: 'Reading City Pride' }
];
