import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="hands">🙌</span> My Dua of the Day
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Duas</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
