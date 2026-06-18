import './TopBar.css';
import { topBarMarquee } from '../../data/mockData';

const TEXT_TEMPLATES = {
  1: <>Sản phẩm <strong>Chính hãng - Xuất VAT</strong> đầy đủ</>,
  4: <>Sản phẩm <strong>Chính hãng - Xuất VAT</strong> đầy đủ</>,
  2: <><strong>Giao nhanh - Miễn phí</strong> cho đơn 300k</>,
  5: <><strong>Giao nhanh - Miễn phí</strong> cho đơn 300k</>,
  3: <><strong>Thu cũ</strong> giá ngon - <strong>Lên đời</strong> tiết kiệm</>
};

const renderText = (item) => TEXT_TEMPLATES[item.id] || item.text;

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...topBarMarquee, ...topBarMarquee].map((item, index) => (
              <div key={index} className="marquee-item">
                {item.id === 1 || item.id === 4 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 10 2.267 3.927 1.065-2.156 2.399.155L11.964 8M5.035 8l-2.267 3.927 2.399-.156 1.065 2.155L8.499 10"></path></svg>
                ) : item.id === 2 || item.id === 5 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 17 16"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.833 11.333a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0ZM10.5 11.333a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0Z"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.833 11.333H2.5V8.667m-.667-5.334h7.334v8m-2.667 0h4m2.667 0H14.5v-4m0 0H9.167m5.333 0L12.5 4H9.167M2.5 6h2.667"></path></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.167 8V6a2 2 0 0 1 2-2h8.666m0 0-2-2m2 2-2 2M13.833 8v2a2 2 0 0 1-2 2H3.167m0 0 2 2m-2-2 2-2"></path></svg>
                )}
                <span className="marquee-text">{renderText(item)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="top-bar-buttons">

          <button className="top-bar-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25" class="size-4"><path stroke="white" stroke-linecap="round" stroke-width="1.5" d="M8.32 22.66h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.653 7.857c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878c0 2.203 1.87 3.989 4.18 3.989Z"></path><path fill="white" d="M8.9 12.916V9.66h7v2.816l-.987-1.222h-4.419V12l2.004 2.175-.128.183-3.47-1.441Z"></path><path fill="white" d="M8.9 18.778v-2.922l1.097 1.327h4.309V15.83l-1.95-2.236.135-.179 3.409 1.61v3.754h-7Z"></path></svg>
            <span className="btn-text">Cửa hàng gần bạn</span>
          </button>

          <button className="top-bar-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" class="size-4"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.833 2v2.667a.667.667 0 0 0 .667.666h2.667"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.167 8v4.667a1.187 1.187 0 0 1-2.067.933 1.1 1.1 0 0 0-1.733 0 1.1 1.1 0 0 1-1.734 0 1.1 1.1 0 0 0-1.733 0 1.187 1.187 0 0 1-2.067-.933V3.333A1.333 1.333 0 0 1 5.167 2h4.666l3.334 3.333v2.834"></path></svg>            <span className="btn-text">Tra cứu đơn hàng</span>
          </button>
          <button className="top-bar-btn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z"></path></svg>
            <span className="btn-text">1800 2097</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default TopBar;
