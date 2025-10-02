"use client";

import { useState } from "react";

type Movie = {
  poster_path?: string;
  title?: string;
  release_date?: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  const [isFavorited, setIsFavorited] = useState(false);

  function onFavoriteClick() {
    setIsFavorited((v) => !v);
  }

  return (
    <div className="bg-black rounded">
      <div className="relative aspect-[2/3]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <button
          onClick={onFavoriteClick}
          className={`absolute top-2 right-2 p-2 text-white rounded-full ${
            isFavorited ? "text-red-500" : "bg-black/50"
          }`}
        >
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