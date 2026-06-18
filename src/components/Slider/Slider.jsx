import { useState, useEffect, useRef, useCallback } from 'react';
import './Slider.css';
import { heroSlides, subBannersList } from '../../data/mockData';

function Slider() {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabsHovered, setIsTabsHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const autoPlayTimer = useRef(null);
  const tabsWrapperRef = useRef(null);
  const tabRefs = useRef([]);

  const changeSlide = useCallback((newIndex) => {
    if (newIndex === activeIndex) return;
    setActiveIndex(newIndex);
  }, [activeIndex]);

  const handleNextSlide = useCallback(() => {
    setClickedIndex((prev) => {
      const next = prev === heroSlides.length - 1 ? 0 : prev + 1;
      changeSlide(next);
      setClickedIndex(next);
      return next;
    });
  }, [changeSlide]);

  const handlePrevSlide = useCallback(() => {
    setClickedIndex((prev) => {
      const next = prev === 0 ? heroSlides.length - 1 : prev - 1;
      changeSlide(next);
      setClickedIndex(next);
      return next;
    });
  }, [changeSlide]);

  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);

  const handleDragStart = (e) => {
    if (e.type === 'mousedown' && e.button !== 0) return;
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    isDragging.current = true;
    hasDragged.current = false;
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      if (Math.abs(clientX - dragStartX.current) > 10) {
        hasDragged.current = true;
      }
    };

    const handleGlobalEnd = (e) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const clientX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
      const dragDistance = clientX - dragStartX.current;

      if (dragDistance < -50) {
        handleNextSlide();
      } else if (dragDistance > 50) {
        handlePrevSlide();
      }
    };

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalEnd);
    window.addEventListener('touchmove', handleGlobalMove);
    window.addEventListener('touchend', handleGlobalEnd);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalEnd);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalEnd);
    };
  }, [activeIndex, handleNextSlide, handlePrevSlide]);

  const handleLinkClick = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
    }
  };

  const tabDragStartX = useRef(0);
  const tabDragStartScrollLeft = useRef(0);
  const isTabDragging = useRef(false);
  const tabHasDragged = useRef(false);

  const handleTabDragStart = (e) => {
    if (e.type === 'mousedown' && e.button !== 0) return;
    isTabDragging.current = true;
    tabHasDragged.current = false;
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    tabDragStartX.current = clientX;
    if (tabsWrapperRef.current) {
      tabDragStartScrollLeft.current = tabsWrapperRef.current.scrollLeft;
    }
  };

  const handleTabDragMove = (e) => {
    if (!isTabDragging.current) return;
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - tabDragStartX.current;

    if (Math.abs(deltaX) > 10) {
      tabHasDragged.current = true;
    }

    if (!e.type.startsWith('touch') && tabsWrapperRef.current) {
      tabsWrapperRef.current.scrollLeft = tabDragStartScrollLeft.current - deltaX;
    }
  };

  const handleTabDragEnd = () => {
    isTabDragging.current = false;
  };

  const handleTabMouseLeave = () => {
    isTabDragging.current = false;
  };

  useEffect(() => {
    if (!isHovered) {
      autoPlayTimer.current = setInterval(() => {
        handleNextSlide();
      }, 4000);
    }
    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [clickedIndex, isHovered, handleNextSlide]);

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    const wrapper = tabsWrapperRef.current;
    if (activeTab && wrapper) {
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.clientWidth;
      const wrapperScrollLeft = wrapper.scrollLeft;
      const wrapperWidth = wrapper.clientWidth;

      if (tabLeft < wrapperScrollLeft) {
        wrapper.scrollTo({ left: tabLeft - 20, behavior: 'smooth' });
      } else if (tabLeft + tabWidth > wrapperScrollLeft + wrapperWidth) {
        wrapper.scrollTo({ left: tabLeft + tabWidth - wrapperWidth + 20, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  const updateScrollButtons = useCallback(() => {
    if (tabsWrapperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsWrapperRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  }, []);

  useEffect(() => {
    const wrapper = tabsWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener('scroll', updateScrollButtons);
      }
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const handlePrevTabs = (e) => {
    e.stopPropagation();
    if (tabsWrapperRef.current) {
      tabsWrapperRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const handleNextTabs = (e) => {
    e.stopPropagation();
    if (tabsWrapperRef.current) {
      tabsWrapperRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  const handleTabClick = (e, slideIndex) => {
    if (tabHasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setClickedIndex(slideIndex);
    changeSlide(slideIndex);
  };

  const handleMouseLeaveSlider = () => {
    setIsHovered(false);
  };

  return (
    <div className="slider-column-container">
      <div
        className="hero-slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeaveSlider}
      >
        <div
          className="slider-tabs-container"
          onMouseEnter={() => setIsTabsHovered(true)}
          onMouseLeave={() => setIsTabsHovered(false)}
        >
          {isTabsHovered && (
            <button
              className={`tab-scroll-btn tab-scroll-left${!canScrollLeft ? ' tab-scroll-disabled' : ''}`}
              onClick={handlePrevTabs}
              aria-label="Cuộn tab sang trái"
            >
              &lt;
            </button>
          )}

          <div
            className="slider-tabs-wrapper"
            ref={tabsWrapperRef}
            onMouseDown={handleTabDragStart}
            onMouseMove={handleTabDragMove}
            onMouseUp={handleTabDragEnd}
            onMouseLeave={handleTabMouseLeave}
            onTouchStart={handleTabDragStart}
            onTouchMove={handleTabDragMove}
            onTouchEnd={handleTabDragEnd}
            onDragStart={(e) => e.preventDefault()}
          >
            {heroSlides.map((slide, slideIndex) => {
              const isFolderActive = slideIndex === activeIndex;
              const isTitleRed = slideIndex === clickedIndex;

              return (
                <div
                  key={slide.id}
                  ref={(el) => (tabRefs.current[slideIndex] = el)}
                  className={`slider-tab-item ${isFolderActive ? 'active-folder' : ''}`}
                  onClick={(e) => handleTabClick(e, slideIndex)}
                >
                  <div className="tab-item-content">
                    <div className={`tab-title-text ${isTitleRed ? 'red-text' : ''}`}>
                      {slide.tabTitle}
                    </div>
                    <div className="tab-subtitle-text">
                      {slide.tabSubtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {isTabsHovered && (
            <button
              className={`tab-scroll-btn tab-scroll-right${!canScrollRight ? ' tab-scroll-disabled' : ''}`}
              onClick={handleNextTabs}
              aria-label="Cuộn tab sang phải"
            >
              &gt;
            </button>
          )}
        </div>

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
      </div>

      <SliderSubBanners />
    </div>
  );
}

function SliderSubBanners() {
  return (
    <div className="slider-sub-banners">
      {subBannersList.map((banner) => (
        <a key={banner.id} href={banner.link} className="sub-banner-item">
          <img src={banner.imageUrl} alt={banner.title} />
        </a>
      ))}
    </div>
  );
}

export default Slider;
