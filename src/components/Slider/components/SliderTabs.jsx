import { heroSlides } from '../../../data/mockData';

function SliderTabs({
  activeIndex,
  clickedIndex,
  isTabsHovered,
  setIsTabsHovered,
  canScrollLeft,
  canScrollRight,
  tabsWrapperRef,
  tabRefs,
  handlePrevTabs,
  handleNextTabs,
  handleTabDragStart,
  handleTabDragMove,
  handleTabDragEnd,
  handleTabMouseLeave,
  handleTabClick
}) {
  return (
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
  );
}

export default SliderTabs;
