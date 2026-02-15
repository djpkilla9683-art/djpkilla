
export enum MusicCategory {
  REMIX = 'Remix',
  BLEND = 'Blend',
  MASHUP = 'Mashup',
  MIX = 'Full Mix'
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  category: MusicCategory;
  duration: string;
  url: string;
  cover: string;
  downloadUrl: string;
}

export interface Show {
  id: string;
  date: string;
  venue: string;
  location: string;
  time: string;
  ticketLink?: string;
  isSoldOut?: boolean;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
}
