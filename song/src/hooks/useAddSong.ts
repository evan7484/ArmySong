import { useState } from 'react';
import { addSong } from '../services/songService';
import { CreateSongDto, Song } from '../types/song';

export const useAddSong = () => {
  const [loading, setLoading] = useState(false);

  const submit = async (dto: CreateSongDto): Promise<Song | null> => {
    try {
      setLoading(true);
      const result = await addSong(dto);
      return result;
    } catch (error) {
      console.error('등록 오류:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
};