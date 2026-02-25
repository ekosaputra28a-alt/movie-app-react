import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MovieApp</h1>

      {/* NAV LINKS di tengah */}
      <ul className="nav-links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Popular</li>
      </ul>

      {/* Kanan: Search + Settings */}
      <div className="nav-right">
        <input type="text" placeholder="Search movie..." />
        <button className="navbar-settings" title="Settings">⚙️</button>
      </div>
    </nav>
  );
}

export default Navbar;