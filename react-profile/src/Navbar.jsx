function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>My Profile Website</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;