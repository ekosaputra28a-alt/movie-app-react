function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "20px 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      

      <h1>MovieApp</h1>
      <input
        type="text"
        placeholder="Search movie..."
        style={{ 
          backgroundColor: "#1f2937",
          color: "white",
            padding: "10px 16px",
            width: "280px",
            borderRadius: "12px",
            border: "1px solid #374151",
            outline: "none",
            fontSize: "14px",
        }}
      />
    </nav>
  );
}

export default Navbar;