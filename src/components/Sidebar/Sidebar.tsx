import "./Sidebar.scss";

export interface SidebarProps {
  items: { label: string; id: string; icon?: string; tone?: string }[];
  activeItem: string;
  onItemClick: (id: string) => void;
}

function Sidebar({ items, activeItem, onItemClick }: SidebarProps) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav" aria-label="Sidebar Navigation">
        <ul className="sidebar-menu">
          {items.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${activeItem === item.id ? "active" : ""}`}
                onClick={() => onItemClick(item.id)}
                aria-current={activeItem === item.id ? "true" : undefined}
              >
                <span className="sidebar-link-text">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
