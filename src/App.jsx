import { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  // Quản lý trạng thái hiển thị overlay toàn cục (khi hover danh mục hoặc mở modal)
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="app-container">
      {/* Khối Header & TopBar gộp chung thành 1 khối sticky */}
      <header className="site-header">
        {/* 1. Thanh tiện ích trên cùng */}
        <TopBar />

        {/* 2. Thanh điều hướng Header chính */}
        <Header onMenuHoverChange={setShowOverlay} />
      </header>

      {/* Lớp phủ mờ toàn trang khi cần thiết */}
      {showOverlay && <div className="global-overlay" onClick={() => setShowOverlay(false)} />}

      <main className="main-content">
        {/* Hàng chính chứa Sidebar, Slider và Widgets */}
        <div className="hero-row">
          {/* 1. Sidebar Danh mục trái */}
          <Sidebar onMenuHoverChange={setShowOverlay} />

          {/* 2. Slider giữa (Placeholder) */}
          <div style={{ height: '380px', backgroundColor: '#ffffff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc', color: '#666', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            Component Slider đang được xây dựng...
          </div>

          {/* 3. Widgets phải (Placeholder) */}
          <div style={{ height: '380px', backgroundColor: '#ffffff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc', color: '#666', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            Component Widgets đang được xây dựng...
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
