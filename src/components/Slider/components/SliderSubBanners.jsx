import { subBannersList } from '../../../data/mockData';

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

export default SliderSubBanners;
