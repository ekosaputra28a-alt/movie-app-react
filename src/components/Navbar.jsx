function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>MovieApp</h1>
      <input
        type="text"
        placeholder="Search movie..."
        style={{ 
            padding: "8px 12px",
            width: "220px",
            borderRadius: "6px",
            border: "none",
        }}
      />
    </nav>
  );
}

export default Navbar;