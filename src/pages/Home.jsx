import MovieCard from "../components/MovieCard";
import "../styles/movie.css";

const dummyMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "Inception",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/edv5CZvW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

function Home() {
  return (
    <main>
      <h2 style={{ color: "white", marginBottom: "16px" }}>
        Popular Movies
      </h2>

      <div className="movie-grid">
        {dummyMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;