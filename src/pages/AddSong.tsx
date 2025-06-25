import React from "react";
import { FormEvent, useState } from "react";
import { useAddSong } from "../hooks/useAddSong";
import { CreateSongDto } from "../types/song";
import { useNavigate } from "react-router-dom";

export const AddSong = () => {
  const { submit, loading } = useAddSong();
  const navigate = useNavigate();

  const [form, setForm] = useState<CreateSongDto>({
    title: "",
    artist: "",
    reason: "",
    tags: [],
  });
  const [tagInput, setTagInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTag = () => {
    if (tagInput && !form.tags.includes(tagInput)) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput] }));
      setTagInput("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await submit(form);
    if (result) navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">➕ 입대곡 등록</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="곡 제목"
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          name="artist"
          value={form.artist}
          onChange={handleChange}
          placeholder="가수"
          className="w-full border p-2"
          required
        />
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="이 곡을 입대곡으로 고른 이유"
          className="w-full border p-2"
          required
        />
        <div className="flex gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="태그 입력 후 Enter"
            className="flex-1 border p-2"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="bg-blue-500 text-white px-3"
          >
            추가
          </button>
        </div>
        <div className="flex flex-wrap gap-1">
          {form.tags.map((tag, idx) => (
            <span key={idx} className="bg-blue-200 px-2 py-1 text-sm rounded">
              #{tag}
            </span>
          ))}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white w-full py-2"
        >
          {loading ? "등록 중..." : "등록하기"}
        </button>
      </form>
    </div>
  );
};
