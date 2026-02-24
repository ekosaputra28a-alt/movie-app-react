import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>
      <input type="text" placeholder="Search movie..." />
    </nav>
  );
}

export default Navbar;