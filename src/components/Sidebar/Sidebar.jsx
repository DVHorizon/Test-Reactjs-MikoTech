import { useState } from 'react';
import './Sidebar.css';
import { sidebarCategories, categoryIcons, brandLogos } from '../../data/mockData';

function Sidebar() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnterItem = (id) => {
    setHoveredCategory(id);
  };

  const handleMouseLeaveSidebar = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="sidebar-container" onMouseLeave={handleMouseLeaveSidebar}>
      <aside className="sidebar-menu">
        {sidebarCategories.map((cat) => (
          <div
            key={cat.id}
            className={`sidebar-menu-item ${hoveredCategory === cat.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnterItem(cat.id)}
          >
            <div className="sidebar-cat-info">
              <img src={categoryIcons[cat.iconType]} alt={cat.name} className="sidebar-cat-icon-img" />
              <span className="sidebar-cat-name">{cat.name}</span>
            </div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="sidebar-arrow" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m184 112 144 144-144 144"></path>
            </svg>
          </div>
        ))}
      </aside>

      {hoveredCategory && (
        <div className="sidebar-mega-menu animate-fade-in">
          {sidebarCategories.map((cat) => {
            if (cat.id !== hoveredCategory) return null;
            return (
              <div key={cat.id} className="sidebar-mega-content">
                {cat.subGroups.map((group, groupIdx) => {
                  return (
                    <div key={groupIdx} className="sidebar-mega-group">
                      <h5 className="sidebar-mega-title">{group.title}</h5>
                      <div className="sidebar-mega-brand-grid">
                        {group.items.map((item, itemIdx) => {
                          const logoUrl = brandLogos[item.toLowerCase()];
                          const shouldSpan2 = item.includes('Xem thêm') || item.length > 11;
                          return (
                            <a
                              key={itemIdx}
                              href="#"
                              className={`sidebar-brand-logo-box ${shouldSpan2 ? 'span-2' : ''}`}
                            >
                              {logoUrl ? (
                                <img src={logoUrl} alt={item} className="brand-logo-img" />
                              ) : (
                                <span className="brand-logo-text">{item}</span>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
