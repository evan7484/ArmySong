// src/types/song.ts
export interface Song {
  id: string;
  title: string;
  artist: string;
  reason: string;
  tags: string[];
}

export interface CreateSongDto {
  title: string;
  artist: string;
  reason: string;
  tags: string[];
}
