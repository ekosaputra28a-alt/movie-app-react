function MovieCard({ title, rating, image }) {
  return (
    <div
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "14px", marginBottom: "6px" }}>
          {title}
        </h3>
        <p style={{ color: "#facc15" }}>⭐ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;