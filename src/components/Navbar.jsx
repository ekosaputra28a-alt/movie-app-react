import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">MovieApp</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Popular</li>
        </ul>

        <div className="nav-right">
          <input type="text" placeholder="Search movie..." />
          <button 
            className="navbar-settings"
            onClick={() => setOpen(true)}
          >
            ⚙️
          </button>
        </div>
      </nav>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
      
      <div className={`sidebar ${open ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
        <h3>Settings</h3>
        <p>Profile</p>
        <p>Theme</p>
        <p>Language</p>
      </div>
    </>
  );
}

export default Navbar;