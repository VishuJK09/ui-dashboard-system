import { Link, useLocation } from "react-router-dom";
import "./SecondaryNav.scss";

export interface SecondaryNavProps {
  items: { label: string; path: string }[];
}

function SecondaryNav({ items }: SecondaryNavProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="secondary-nav" aria-label="Secondary Navigation">
      <ul className="secondary-nav-menu">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`secondary-nav-link ${isActive(item.path) ? "active" : ""}`}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SecondaryNav;
