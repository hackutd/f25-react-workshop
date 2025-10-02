export const getPopularMovies = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
}