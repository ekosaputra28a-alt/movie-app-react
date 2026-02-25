import "../styles/movie.css";

function MovieCard({ title, rating, image, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;