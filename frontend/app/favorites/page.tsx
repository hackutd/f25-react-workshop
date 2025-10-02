"use client"
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

type Movie = {
  id: number;
  poster_path?: string;
  title?: string;
  release_date?: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const data: Movie[] = JSON.parse(localStorage.getItem("favorite-movies") || "[]");
    setFavorites(data);
  }, []);

  return (
    <div>
      <div className="m-6">
        <h1 className="text-2xl font-semibold text-white mb-4">Favorites</h1>
        {favorites.length === 0 ? (
          <p className="text-gray-300">No favorites yet. Add some from the home page.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
