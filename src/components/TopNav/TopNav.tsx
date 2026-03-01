import { Link, useLocation } from "react-router-dom";
import "./TopNav.scss";

function TopNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="top-nav" aria-label="Primary Navigation">
      <div className="top-nav-container">
        <ul className="top-nav-menu">
          <li>
            <Link
              to="/"
              className={`top-nav-link ${isActive("/") ? "active" : ""}`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Assistant
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`top-nav-link ${isActive("/settings") ? "active" : ""}`}
              aria-current={isActive("/settings") ? "page" : undefined}
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/components"
              className={`top-nav-link ${isActive("/components") ? "active" : ""}`}
              aria-current={isActive("/components") ? "page" : undefined}
            >
              UI Kit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;
