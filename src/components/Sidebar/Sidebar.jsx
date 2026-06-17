import React, { useState } from 'react';
import './Sidebar.css';
import { sidebarCategories } from '../../data/mockData';

// Helper function to render icons for Sidebar categories
const renderSidebarIcon = (type) => {
  switch (type) {
    case 'phone':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      );
    case 'laptop':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="20" x2="22" y2="20"></line>
          <line x1="12" y1="20" x2="12" y2="17"></line>
        </svg>
      );
    case 'audio':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      );
    case 'watch':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7"></circle>
          <polyline points="12 9 12 12 13.5 13.5"></polyline>
          <path d="M16.51 7.16l1.79-1.79M7.49 7.16L5.7 5.37M7.49 16.84L5.7 18.63M16.51 16.84l1.79 1.79"></path>
        </svg>
      );
    case 'home':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      );
    case 'accessories':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
          <circle cx="6" cy="12" r="1"></circle>
          <circle cx="10" cy="12" r="1"></circle>
          <circle cx="14" cy="12" r="1"></circle>
          <circle cx="18" cy="12" r="1"></circle>
        </svg>
      );
    case 'pc':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="12" rx="2" ry="2"></rect>
          <line x1="12" y1="15" x2="12" y2="21"></line>
          <line x1="8" y1="21" x2="16" y2="21"></line>
        </svg>
      );
    case 'tv':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="13" rx="2"></rect>
          <line x1="12" y1="16" x2="12" y2="21"></line>
          <line x1="8" y1="21" x2="16" y2="21"></line>
        </svg>
      );
    case 'trade':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9"></polyline>
          <path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"></path>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>
      );
    case 'used':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </svg>
      );
    case 'promo':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="13.7" y1="8.3" x2="8.3" y2="13.7"></line>
          <circle cx="9.5" cy="9.5" r="1.5"></circle>
          <circle cx="14.5" cy="14.5" r="1.5"></circle>
        </svg>
      );
    case 'news':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <path d="M16 8h2M16 12h2M8 8h5v8H8z"></path>
        </svg>
      );
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      );
  }
};

function Sidebar({ onMenuHoverChange }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnterItem = (id) => {
    setHoveredCategory(id);
    if (onMenuHoverChange) {
      onMenuHoverChange(true);
    }
  };

  const handleMouseLeaveSidebar = () => {
    setHoveredCategory(null);
    if (onMenuHoverChange) {
      onMenuHoverChange(false);
    }
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
              {renderSidebarIcon(cat.iconType)}
              <span className="sidebar-cat-name">{cat.name}</span>
            </div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="sidebar-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m184 112 144 144-144 144"></path>
            </svg>
          </div>
        ))}
      </aside>

      {/* Mega Menu Display to the right of the Sidebar */}
      {hoveredCategory && (
        <div className="sidebar-mega-menu animate-fade-in">
          {sidebarCategories.map((cat) => {
            if (cat.id !== hoveredCategory) return null;
            return (
              <div key={cat.id} className="sidebar-mega-content">
                {cat.subGroups.map((group, groupIdx) => (
                  <div key={groupIdx} className="sidebar-mega-group">
                    <h5 className="sidebar-mega-title">{group.title}</h5>
                    <div className="sidebar-mega-items">
                      {group.items.map((item, itemIdx) => (
                        <a key={itemIdx} href="#" className="sidebar-mega-item">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
