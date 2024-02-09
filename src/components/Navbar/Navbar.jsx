import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <div className="navbar-logo"></div>
        <div className="navbar-logo-heading">मुद्राMitra</div>
      </div>
      <div className="navbar-links">
        <ul>
          <li>Home</li>
          <li>Modules</li>
          <li>Investment-Calculator</li>
          <li>Guidance</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
