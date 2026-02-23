import { Link, useLocation } from "react-router-dom";
import "./TopNav.scss";

function TopNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        <Link to="/" className="top-nav-logo">
          Dashboard
        </Link>
        <ul className="top-nav-menu">
          <li>
            <Link
              to="/"
              className={`top-nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/components"
              className={`top-nav-link ${isActive("/components") ? "active" : ""}`}
            >
              Components
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;
