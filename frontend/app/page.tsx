"use client";
import MovieCard from "./components/MovieCard";
import {useState, useEffect} from "react";
import {searchMovies, getPopularMovies} from "./api/movies/route";

type Movie = {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: any) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (!searchQuery.trim()) return; // Ignore empty searches

    const fetchSearchResults = async () => {
      try {
        const results = await searchMovies(searchQuery);
        setMovies(results);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };

    fetchSearchResults();
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="m-4 flex">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="border rounded-l p-2 flex-1"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button type="submit" className="bg-blue-500 text-white rounded-r p-2">
          Search
        </button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-8">
        {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
