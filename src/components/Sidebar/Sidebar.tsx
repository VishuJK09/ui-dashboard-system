import "./Sidebar.scss";

export interface SidebarProps {
  items: { label: string; id: string }[];
  activeItem: string;
  onItemClick: (id: string) => void;
}

function Sidebar({ items, activeItem, onItemClick }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Components</h2>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {items.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${activeItem === item.id ? "active" : ""}`}
                onClick={() => onItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
