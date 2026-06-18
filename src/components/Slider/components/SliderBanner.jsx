import { heroSlides } from '../../../data/mockData';

function SliderBanner({
  activeIndex,
  handleDragStart,
  handleLinkClick,
  handlePrevSlide,
  handleNextSlide
}) {
  return (
    <div
      className="slider-banner-wrapper"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onDragStart={(e) => e.preventDefault()}
    >
      <div
        className="slider-banner-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <a
            key={slide.id}
            href={slide.link}
            className="slider-banner-link"
            onClick={handleLinkClick}
            onDragStart={(e) => e.preventDefault()}
          >
            <img
              src={slide.imageUrl}
              alt={slide.tabTitle}
              className="slider-banner-img"
              draggable="false"
            />
          </a>
        ))}
      </div>

      <button
        className="banner-nav-btn nav-left"
        onClick={handlePrevSlide}
        aria-label="Slide trước"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="35" height="35">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        className="banner-nav-btn nav-right"
        onClick={handleNextSlide}
        aria-label="Slide tiếp theo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="35" height="35">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default SliderBanner;
