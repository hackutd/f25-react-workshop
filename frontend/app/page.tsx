"use client";
import MovieCard from "./components/MovieCard";
import {useState, useEffect} from "react";

type Movie = {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
};


export default function Home() {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      release_date: "2010-07-16"
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      release_date: "2008-07-18"
    },
    {
      id: 3,
      title: "Interstellar",
      poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      release_date: "2014-11-07"
    }
  ]

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-8">
        {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
