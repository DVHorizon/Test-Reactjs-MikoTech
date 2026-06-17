import { useState } from 'react';
import './App.css';

function App() {
  // Quản lý trạng thái hiển thị overlay toàn cục (khi hover danh mục hoặc mở modal)
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="app-container">
      {/* Lớp phủ mờ toàn trang khi cần thiết */}
      {showOverlay && <div className="global-overlay" onClick={() => setShowOverlay(false)} />}

      <header style={{ backgroundColor: 'var(--bg-header)', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h2>CellphoneS</h2>
      </header>

      <main className="main-content">
        <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <p>khởi tạo</p>
        </div>
      </main>
    </div>
  );
}

export default App;
