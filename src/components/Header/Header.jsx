import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { provincesList, searchTrendingItems } from '../../data/mockData';

function Header({ onMenuHoverChange }) {
  const [selectedProvince, setSelectedProvince] = useState('Hồ Chí Minh');
  const [showProvinceModal, setShowProvinceModal] = useState(false);
  const [provinceSearch, setProvinceSearch] = useState('');

  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const searchRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sắp xếp danh sách tỉnh thành: Hồ Chí Minh và Hà Nội lên đầu, còn lại theo thứ tự alphabet Tiếng Việt
  const sortedProvinces = [...provincesList].sort((a, b) => {
    if (a === 'Hồ Chí Minh') return -1;
    if (b === 'Hồ Chí Minh') return 1;
    if (a === 'Hà Nội') return -1;
    if (b === 'Hà Nội') return 1;
    return a.localeCompare(b, 'vi');
  });

  // Lọc danh sách tỉnh thành theo ô tìm kiếm trong modal
  const filteredProvinces = sortedProvinces.filter(province =>
    province.toLowerCase().includes(provinceSearch.toLowerCase())
  );

  // Lọc sản phẩm tìm kiếm theo ô search chính
  const filteredTrendingItems = searchTrendingItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="header-main">
        <div className="header-content">
          {/* 1. Logo CellphoneS */}
          <a href="#" className="header-logo">
            <img
              src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Web/Logo/Logo_CPS.png"
              alt="CellphoneS Logo"
              className="logo-img"
            />
          </a>

          {/* 2. Nút Danh mục */}
          <button className="header-btn btn-category">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.7041 4H10.7041V10H4.7041V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.7041 4H20.7041V10H14.7041V4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.7041 14H10.7041V20H4.7041V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.7041 17C14.7041 17.7956 15.0202 18.5587 15.5828 19.1213C16.1454 19.6839 16.9085 20 17.7041 20C18.4998 20 19.2628 19.6839 19.8254 19.1213C20.388 18.5587 20.7041 17.7956 20.7041 17C20.7041 16.2044 20.388 15.4413 19.8254 14.8787C19.2628 14.3161 18.4998 14 17.7041 14C16.9085 14 16.1454 14.3161 15.5828 14.8787C15.0202 15.4413 14.7041 16.2044 14.7041 17Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span className="btn-text">Danh mục</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184 144 144 144-144"></path></svg>
          </button>

          {/* 3. Nút Chọn Tỉnh/Thành phố */}
          <button
            className="header-btn btn-location"
            onClick={() => setShowProvinceModal(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 9.528a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.85 18.033a1.666 1.666 0 0 1-2.027-.255l-3.537-3.536a6.667 6.667 0 1 1 11.34-5.462M17.5 12.861h-2.083a1.25 1.25 0 0 0 0 2.5h.833a1.25 1.25 0 0 1 0 2.5h-2.083M15.833 17.861v.834m0-6.667v.833"></path></svg>
            <div className="location-info">
              <span className="location-value">
                {selectedProvince}
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184 144 144 144-144"></path></svg>
              </span>
            </div>
          </button>

          {/* 4. Thanh tìm kiếm */}
          <div className="header-search-container" ref={searchRef}>
            <div className="search-box">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-pure-black" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29 448 448"></path></svg>              <input
                type="text"
                placeholder="Bạn muốn mua gì hôm nay?"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchDropdown(true)}
              />
            </div>

            {/* Dropdown kết quả tìm kiếm */}
            {showSearchDropdown && (
              <div className="search-dropdown animate-fade-in">
                <div className="dropdown-arrow-up"></div>
                <div className="search-dropdown-banner">
                  <img
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:595:100/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/b2s-search.png"
                    alt="Search Banner"
                  />
                </div>
                <div className="search-dropdown-body">
                  <h4 className="dropdown-title">🔥 Xu hướng tìm kiếm</h4>
                  <div className="trending-grid">
                    {filteredTrendingItems.length > 0 ? (
                      filteredTrendingItems.map(item => (
                        <div key={item.id} className="trending-item">
                          <img src={item.image} alt={item.name} className="trending-img" />
                          <span className="trending-name">{item.name}</span>
                        </div>
                      ))
                    ) : (
                      <div className="no-result">Không tìm thấy kết quả phù hợp</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Nút Giỏ hàng */}
          <button className="header-btn btn-cart" onClick={() => setShowCartModal(true)}>
            <div className="cart-icon-wrapper">
              <span className="btn-text">Giỏ hàng</span>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="400" cy="416" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"></path></svg>
            </div>
          </button>

          {/* 6. Nút Đăng nhập */}
          <button className="header-btn btn-login" onClick={() => setShowLoginModal(true)}>
            <span className="btn-text">Đăng nhập</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="size-6" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
          </button>
        </div>
      </header >

      {/* Modal chọn Tỉnh/Thành phố */}
      {
        showProvinceModal && (
          <div className="modal-overlay" onClick={() => setShowProvinceModal(false)}>
            <div className="province-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-search-box">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-pure-grey" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                  <input
                    type="text"
                    placeholder="Nhập tên tỉnh thành"
                    className="modal-search-input"
                    value={provinceSearch}
                    onChange={(e) => setProvinceSearch(e.target.value)}
                  />
                </div>
                <button className="modal-close-btn" onClick={() => setShowProvinceModal(false)}>
                  Đóng <span className="close-x">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="modal-guideline">Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và tồn kho</p>
                <div className="provinces-grid">
                  {filteredProvinces.map((province, index) => (
                    <div
                      key={index}
                      className={`province-item ${selectedProvince === province ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedProvince(province);
                        setShowProvinceModal(false);
                      }}
                    >
                      <span className="province-name">{province}</span>
                      {selectedProvince === province && (
                        <span className="active-tick">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="#d70018" />
                            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Modal Đăng nhập (Smember) */}
      {
        showLoginModal && (
          <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
            <div className="auth-modal animate-modal-enter" onClick={(e) => e.stopPropagation()}>
              <button className="auth-modal-close" onClick={() => setShowLoginModal(false)}>×</button>
              <h2 className="auth-modal-title">Smember</h2>
              <div className="auth-modal-body">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                  alt="Smember Chibi"
                  className="auth-modal-chibi"
                />
                <p className="auth-modal-text">
                  Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.
                </p>
                <div className="auth-modal-actions">
                  <button className="auth-modal-btn btn-signup-modal">Đăng ký</button>
                  <button className="auth-modal-btn btn-login-modal">Đăng nhập</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Modal Giỏ hàng */}
      {
        showCartModal && (
          <div className="modal-overlay" onClick={() => setShowCartModal(false)}>
            <div className="auth-modal animate-modal-enter" onClick={(e) => e.stopPropagation()}>
              <button className="auth-modal-close" onClick={() => setShowCartModal(false)}>×</button>
              <h2 className="auth-modal-title">Giỏ hàng</h2>
              <div className="auth-modal-body">
                <img
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                  alt="Cart Chibi"
                  className="auth-modal-chibi"
                />
                <p className="auth-modal-text">
                  Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm để tiến hành mua sắm.
                </p>
                <div className="auth-modal-actions">
                  <button className="auth-modal-btn btn-login-modal" style={{ width: '100%' }} onClick={() => setShowCartModal(false)}>
                    Tiếp tục mua sắm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Header;
