import { Song } from '../types/song';

interface Props {
  song: Song;
}

export const SongCard = ({ song }: Props) => {
  return (
    <div className="border rounded p-4 mb-2 shadow">
      <h3 className="text-lg font-bold">{song.title} - {song.artist}</h3>
      <p className="text-sm text-gray-600">{song.reason}</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {song.tags.map((tag, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};