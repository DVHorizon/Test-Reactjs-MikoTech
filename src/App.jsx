import { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  // Trạng thái làm tối màn hình (overlay) khi nhấn nút "Danh mục" trên Header
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="app-container">
      {/* 1. Thanh tiện ích trên cùng (Không bám dính, cuộn đi khi scroll) */}
      <TopBar />

      {/* 2. Thanh điều hướng Header chính (Bám dính ở mép trên màn hình) */}
      <Header
        showOverlay={showOverlay}
        onToggleOverlay={() => setShowOverlay(!showOverlay)}
      />

      {/* Lớp phủ mờ toàn trang khi bật overlay */}
      {showOverlay && (
        <div className="global-overlay" onClick={() => setShowOverlay(false)} />
      )}

      <main className="main-content">
        {/* Hàng chính chứa Sidebar, Slider và Widgets */}
        <div className="hero-row">
          {/* 1. Sidebar Danh mục trái (hiển thị tĩnh ở trang chủ, không làm tối màn hình) */}
          <Sidebar />

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
