import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const isActive = (path) =>
    location.pathname === path ? "nav-active" : "";

  return (
    <nav className="nav">

      {/* LEFT */}
      <div className="nav-left">
        <Link to="/" className="logo">DEVEX</Link>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/services" className={isActive("/services")}>Services</Link>
        <Link to="/about" className={isActive("/about")}>About</Link>
        <Link to="/contact" className={isActive("/contact")}>Contact</Link>
      </div>

      {/* RIGHT */}
      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
        >
          {dark ? "Switch to Light" : "Switch to Dark"}
        </button>

        <Link to="/login" className="btn-nav">
          Login
        </Link>

      </div>

    </nav>
  );
}