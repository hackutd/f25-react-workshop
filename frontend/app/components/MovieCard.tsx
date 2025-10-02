"use client";

import { useState } from "react";

type Movie = {
  id: number;
  poster_path?: string;
  title?: string;
  release_date?: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const [isFavorited, setIsFavorited] = useState<boolean>(() => {
    const favs: Movie[] = JSON.parse(localStorage.getItem("favorite-movies") || "[]");
    return favs.some((m) => m.id === movie.id);
  });

  function onFavoriteClick() {
    const next = !isFavorited;
    setIsFavorited(next);

    const favs: Movie[] = JSON.parse(localStorage.getItem("favorite-movies") || "[]");
    const updated = next
      ? (favs.some((m) => m.id === movie.id)
          ? favs
          : [...favs, { id: movie.id, title: movie.title || "", poster_path: movie.poster_path, release_date: movie.release_date }])
      : favs.filter((m) => m.id !== movie.id);
    localStorage.setItem("favorite-movies", JSON.stringify(updated));
  }

  return (
    <div className="bg-black rounded">
      <div className="relative aspect-[2/3]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <button onClick={onFavoriteClick} className="absolute top-2 right-2 p-2 text-white rounded-full">
          {isFavorited ? "❤" : "♡"}
        </button>
      </div>

      <div className="p-3">
        <h3 className="text-white text-xl font-bold">{movie.title}</h3>
        <p className="text-white text-lg">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}