import { useEffect, useState } from "react";
import { getSongs } from "../services/songService";
import { Song } from "../types/song";

export const useSongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSongs()
      .then(setSongs)
      .finally(() => setLoading(false));
  }, []);

  return { songs, loading, refetch: () => getSongs().then(setSongs) };
};
