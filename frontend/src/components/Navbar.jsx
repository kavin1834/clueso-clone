function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">clueso</h2>

        <ul className="nav-links">
          <li>Product</li>
          <li>Use cases</li>
          <li>Pricing</li>
          <li>Login</li>
          <li>
            <button className="nav-btn">Get started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
