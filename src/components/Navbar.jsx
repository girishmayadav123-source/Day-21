import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/support", label: "Support Request" },
  { to: "/portal", label: "Client Portal" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <NavLink
        className="brand"
        to="/"
        aria-label="SmartLogixSure AMC Home"
      >
        <span className="brand-mark">S</span>

        <span className="brand-text">
          <strong>SmartLogixSure</strong>
          <small>AMC SUPPORT</small>
        </span>
      </NavLink>

      <nav className="nav-links">
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to}>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-phone">
        <span>24/7 Assistance</span>
        <strong>1800 123 4567</strong>
      </div>
    </header>
  );
}

export default Navbar;