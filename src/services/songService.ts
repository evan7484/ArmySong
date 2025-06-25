import { api } from "./api";
import { Song, CreateSongDto } from "../types/song";

export const getSongs = async (): Promise<Song[]> => {
  try {
    const res = await api.get<Song[]>("/songs");
    return res.data;
  } catch (err) {
    console.error("🎵 getSongs error:", err);
    return [];
  }
};

export const addSong = async (song: CreateSongDto): Promise<Song | null> => {
  try {
    const res = await api.post<Song>("/songs", song);
    return res.data;
  } catch (err) {
    console.error("➕ addSong error:", err);
    return null;
  }
};

export const deleteSong = async (id: string): Promise<boolean> => {
  try {
    await api.delete(`/songs/${id}`);
    return true;
  } catch (err) {
    console.error("❌ deleteSong error:", err);
    return false;
  }
};
