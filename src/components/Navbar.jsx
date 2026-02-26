import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">MovieApp</h1>

        <div className="nav-right">
          <input type="text" placeholder="Search" />
          <button
            className="navbar-settings"
            onClick={() => setOpen(true)}
            aria-label="Open settings"
          >
            ⚙️
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* BOTTOM SHEET (iOS STYLE) */}
      <div className={`bottom-sheet ${open ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close settings"
        >
          ✕
        </button>

        <h3>Settings</h3>

        <p>Profile</p>
        <p>Theme</p>
        <p>Language</p>
      </div>
    </>
  );
}

export default Navbar;