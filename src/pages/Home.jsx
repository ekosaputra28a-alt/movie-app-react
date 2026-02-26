import MovieCard from "../components/MovieCard";
import "../styles/movie.css";
import { useState } from "react";

const topRatedMovies = [
  {
    id: 6,
    title: "Joker",
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "A failed comedian begins a slow descent into madness...",
  },
  {
    id: 7,
    title: "Spider-Man: No Way Home",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description: "Peter Parker seeks help from Doctor Strange...",
  },
  {
    id: 8,
    title: "Top Gun: Maverick",
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    description: "After thirty years, Maverick is still pushing the envelope...",
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    rating: 9.3,
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    description: "Two imprisoned men bond over a number of years...",
  },
  {
    id: 10,
    title: "The Batman",
    rating: 7.8,
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description: "Batman ventures into Gotham City's underworld...",
  },
];

const dummyMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "After the devastating events of Infinity War...",
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travel through a wormhole in space...",
  },
  {
    id: 3,
    title: "Inception",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/edv5CZvW6WMUDux911r6m7haRef0WH.jpg",
    description: "A thief who steals corporate secrets through dream-sharing...",
  },
  {
    id: 4,
    title: "The Dark Knight",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman raises the stakes in his war on crime...",
  },
  {
    id: 5,
    title: "Parasite",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "A poor family schemes to become employed by a wealthy household...",
  },
  {
    id: 1,
    title: "Avengers: Endgame",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "After the devastating events of Infinity War...",
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travel through a wormhole in space...",
  },
  {
    id: 3,
    title: "Inception",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/edv5CZvW6WMUDux911r6m7haRef0WH.jpg",
    description: "A thief who steals corporate secrets through dream-sharing...",
  },
  {
    id: 4,
    title: "The Dark Knight",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman raises the stakes in his war on crime...",
  },
  {
    id: 5,
    title: "Parasite",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "A poor family schemes to become employed by a wealthy household...",
  },
];

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <main>
      {/* Popular */}
      <section>
        <h2 className="section-title">Popular Movies</h2>
        <div className="movie-grid">
          {dummyMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section>
        <h2 className="section-title">Top Rated</h2>
        <div className="movie-grid">
          {topRatedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMovie && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
            />

            <div className="modal-text">
              <h2>{selectedMovie.title}</h2>
              <p>⭐ {selectedMovie.rating}</p>
              <p>
                {selectedMovie.description ||
                  "No description available."}
              </p>

              <button onClick={() => setSelectedMovie(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;