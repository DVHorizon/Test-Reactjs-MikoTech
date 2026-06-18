import './Widgets.css';
import { smemberMascotUrl, quickLinkSections, quickLinksBottomBannerUrl } from '../../data/mockData';

function QuickLinkIcon({ type }) {
  switch (type) {
    case "education":
      return (
        <svg className="quick-link-icon red-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
        </svg>
      );
    case "trade-in":
      return (
        <svg className="quick-link-icon red-icon rotate-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9"></polyline>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <polyline points="7 23 3 19 7 15"></polyline>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>
      );
    case "b2b":
      return (
        <svg className="quick-link-icon grey-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      );
    default:
      return null;
  }
}

function Widgets({ onOpenLogin }) {

  return (
    <div className="right-widgets-container">
      <div className="smember-card">
        <div className="smember-card-header">
          <div className="smember-avatar-circle">
            <img src={smemberMascotUrl} alt="Smember Mascot" className="smember-mascot-img" />
          </div>
          <h3 className="smember-title">Chào mừng bạn đến với CellphoneS</h3>
        </div>

        <p className="smember-subtitle">
          Nhập hội thành viên Smember để không bỏ lỡ các ưu đãi hấp dẫn.
        </p>

        <div className="smember-actions">
          <button className="smember-btn-link" onClick={onOpenLogin}>Đăng nhập</button>
          <span className="smember-actions-separator">hoặc</span>
          <button className="smember-btn-link" onClick={onOpenLogin}>Đăng ký</button>
        </div>

        <div className="smember-offer-bar" onClick={onOpenLogin}>
          <div className="smember-offer-left">
            <svg className="smember-gift-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" fill="none"><g clipPath="url(#smember-gift-clip)"><path fill="url(#smember-gift-grad)" d="M2 11.25h6.75V18h-3A3.75 3.75 0 0 1 2 14.25v-3Zm16.5-3a1.5 1.5 0 0 1-1.5 1.5h-6.75V6.718c-.252.02-.503.032-.75.032s-.498-.013-.75-.032V9.75H2a1.5 1.5 0 0 1-1.5-1.5 3 3 0 0 1 3-3h1.303a3.853 3.853 0 0 1-1.303-3 .75.75 0 0 1 1.5 0c0 1.966 1.778 2.647 3.13 2.88-.499-.884-.8-1.867-.88-2.88a2.25 2.25 0 1 1 4.5 0 6.999 6.999 0 0 1-.88 2.88C12.222 4.899 14 4.218 14 2.25a.75.75 0 1 1 1.5 0 3.853 3.853 0 0 1-1.303 3H15.5a3 3 0 0 1 3 3Zm-9.75-6c.09.797.346 1.567.75 2.26.404-.693.66-1.463.75-2.26a.75.75 0 1 0-1.5 0ZM10.25 18h3A3.75 3.75 0 0 0 17 14.25v-3h-6.75V18Z"></path></g><defs><linearGradient id="smember-gift-grad" x1="25.438" x2="21.125" y1="4.5" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#E45464"></stop><stop offset="1" stopColor="#D70018"></stop></linearGradient><clipPath id="smember-gift-clip"><path fill="#fff" d="M.5 0h18v18H.5z"></path></clipPath></defs></svg>
            <span className="smember-offer-text">Xem ưu đãi Smember</span>
          </div>
          <svg
            className="smember-arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>

      <div className="quick-links-card">
        <div className="quick-links-scrollbar-area">
          {quickLinkSections.map((section) => (
            <div key={section.id} className="quick-link-section">
              <div className="quick-link-section-header">
                {section.title}
              </div>
              <div className="quick-link-section-list">
                {section.items.map((item) => (
                  <a key={item.id} href="#" className="quick-link-item">
                    <div className="quick-link-item-left">
                      <QuickLinkIcon type={section.iconType} />
                      <span className="quick-link-item-text">
                        {item.textBefore}
                        <strong>{item.textBold}</strong>
                        {item.textAfter}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="quick-links-bottom-banner">
          <img
            src={quickLinksBottomBannerUrl}
            alt="Promotion Offer Banner"
            className="quick-links-banner-img"
          />
        </a>
      </div>
    </div>
  );
}

export default Widgets;
