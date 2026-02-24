import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>
      <ul className="nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Popular</li>
      </ul>
      <input type="text" placeholder="Search movie..." />

      
    </nav>
  );
}

export default Navbar;