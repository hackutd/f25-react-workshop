"use client";


export default function Home() {
  const movies = [
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
      <div>
        {movies.map((movie) => (
          <div key={movie.id} className="m-4">
            <p>{movie.title}</p>
            <p>{movie.poster_path}</p>
            <p>{movie.release_date}</p>
          </div> ))
        }
      </div>
    </div>
  );
}
