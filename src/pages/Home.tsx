import React from "react";
import { SongCard } from "../components/SongCard";
import { useSongs } from "../hooks/useSongs";
import { Link } from "react-router-dom";

export const Home = () => {
  const { songs, loading } = useSongs();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎵 입대곡 목록</h1>
      {loading ? (
        <p>로딩 중...</p>
      ) : songs.length === 0 ? (
        <p>등록된 곡이 없습니다.</p>
      ) : (
        <div>
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
      <Link to="/add" className="text-blue-500 underline">
        입대곡 등록하러 가기 →
      </Link>
    </div>
  );
};
