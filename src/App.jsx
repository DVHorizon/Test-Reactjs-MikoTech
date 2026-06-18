import { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Slider from './components/Slider/Slider';
import Widgets from './components/Widgets/Widgets';
import { bottomWideBannerData } from './data/mockData';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="app-container">
      <div className="sticky-header-group">
        <TopBar />

        <Header
          showOverlay={showOverlay}
          onToggleOverlay={() => setShowOverlay(!showOverlay)}
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
        />
      </div>

      {showOverlay && (
        <div className="global-overlay" onClick={() => setShowOverlay(false)} />
      )}

      <main className="main-content">
        <div className="hero-row">
          <Sidebar />

          <Slider />

          <Widgets onOpenLogin={() => setShowLoginModal(true)} />
        </div>

        <div className="bottom-banner">
          <a href={bottomWideBannerData.link} className="bottom-banner-link">
            <img
              src={bottomWideBannerData.imageUrl}
              alt="Special Bottom Promotion Banner"
              className="bottom-banner-img"
            />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
