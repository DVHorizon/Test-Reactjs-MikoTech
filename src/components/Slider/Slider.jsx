import { useState, useEffect, useRef, useCallback } from 'react';
import './Slider.css';
import { heroSlides } from '../../data/mockData';
import SliderTabs from './components/SliderTabs';
import SliderBanner from './components/SliderBanner';
import SliderSubBanners from './components/SliderSubBanners';

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
        <SliderTabs
          activeIndex={activeIndex}
          clickedIndex={clickedIndex}
          isTabsHovered={isTabsHovered}
          setIsTabsHovered={setIsTabsHovered}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          tabsWrapperRef={tabsWrapperRef}
          tabRefs={tabRefs}
          handlePrevTabs={handlePrevTabs}
          handleNextTabs={handleNextTabs}
          handleTabDragStart={handleTabDragStart}
          handleTabDragMove={handleTabDragMove}
          handleTabDragEnd={handleTabDragEnd}
          handleTabMouseLeave={handleTabMouseLeave}
          handleTabClick={handleTabClick}
        />

        <SliderBanner
          activeIndex={activeIndex}
          handleDragStart={handleDragStart}
          handleLinkClick={handleLinkClick}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
        />
      </div>

      <SliderSubBanners />
    </div>
  );
}

export default Slider;
