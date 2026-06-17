// Dữ liệu mô phỏng tĩnh phục vụ cho giao diện CellphoneS clone

// 1. Dải chữ chạy ngang trên TopBar (Marquee Items)
export const topBarMarquee = [
  { id: 1, text: "Sản phẩm Chính hãng - Xuất VAT đầy đủ" },
  { id: 2, text: "Giao nhanh - Miễn phí cho đơn 300k" },
  { id: 3, text: "Thu cũ giá ngon - Lên đời tiết kiệm" },
  { id: 4, text: "Sản phẩm Chính hãng - Xuất VAT đầy đủ" },
  { id: 5, text: "Giao nhanh - Miễn phí cho đơn 300k" }
];

// 2. Danh sách các Tỉnh/Thành phố cho Modal Chọn Địa Điểm
export const provincesList = [
  "Hồ Chí Minh",
  "Hà Nội",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cao Bằng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Tĩnh",
  "Hải Dương",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái"
];

// 3. Danh sách sản phẩm hot gợi ý trong Search Dropdown (2 cột)
export const searchTrendingItems = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-1.png"
  },
  {
    id: 3,
    name: "MacBook Air M3 13 inch",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook-air-m3-13-inch.png"
  },
  {
    id: 4,
    name: "iPad Air 6 M2 11 inch",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-air-6-11-inch_1.png"
  },
  {
    id: 5,
    name: "Tai nghe Bluetooth AirPods 3",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-3-select.png"
  },
  {
    id: 6,
    name: "Loa Bluetooth Sony SRS-XE200",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/l/o/loa-sony-srs-xe200_1.png"
  },
  {
    id: 7,
    name: "Robot hút bụi Xiaomi Vacuum E10",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/o/robot-hut-bui-xiaomi-vacuum-e10_1.png"
  },
  {
    id: 8,
    name: "Apple Watch Series 9 41mm GPS",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:50:50/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-watch-s9-41mm_1.png"
  }
];

// 4. Danh sách các Danh mục sản phẩm (Sidebar Trái) & Mega Menu tương ứng
export const sidebarCategories = [
  {
    id: "phone-tablet",
    name: "Điện thoại, Tablet",
    iconType: "phone",
    subGroups: [
      {
        title: "Thương Hiệu Điện Thoại",
        items: ["iPhone", "Samsung", "Xiaomi", "OPPO", "vivo", "realme", "Nokia"]
      },
      {
        title: "Thương Hiệu Tablet",
        items: ["iPad", "Samsung Galaxy Tab", "Xiaomi Pad", "Lenovo Tab", "Huawei MatePad"]
      },
      {
        title: "Mức Giá Điện Thoại",
        items: ["Dưới 2 triệu", "Từ 2 - 4 triệu", "Từ 4 - 7 triệu", "Từ 7 - 13 triệu", "Trên 13 triệu"]
      }
    ]
  },
  {
    id: "laptop",
    name: "Laptop",
    iconType: "laptop",
    subGroups: [
      {
        title: "Thương Hiệu Laptop",
        items: ["MacBook", "ASUS", "MSI", "Lenovo", "Acer", "Dell", "HP", "Gigabyte"]
      },
      {
        title: "Phân Loại Nhu Cầu",
        items: ["Văn phòng", "Gaming", "Sinh viên", "Đồ họa kỹ thuật", "Mỏng nhẹ cao cấp"]
      },
      {
        title: "Dòng Vi Xử Lý",
        items: ["Intel Core i3", "Intel Core i5", "Intel Core i7", "AMD Ryzen 5", "AMD Ryzen 7", "Apple M-Series"]
      }
    ]
  },
  {
    id: "audio",
    name: "Âm thanh, Mic thu âm",
    iconType: "audio",
    subGroups: [
      {
        title: "Tai Nghe",
        items: ["Tai nghe Bluetooth", "Tai nghe Chụp tai (Over-ear)", "Tai nghe Gaming", "Tai nghe Có dây"]
      },
      {
        title: "Loa",
        items: ["Loa Bluetooth", "Loa Soundbar", "Loa Karaoke", "Loa Vi tính"]
      },
      {
        title: "Microphone",
        items: ["Mic thu âm", "Mic livestream", "Mic không dây", "Thiết bị podcast"]
      }
    ]
  },
  {
    id: "watch-camera",
    name: "Đồng hồ, Camera",
    iconType: "watch",
    subGroups: [
      {
        title: "Đồng Hồ Thông Minh",
        items: ["Apple Watch", "Samsung Galaxy Watch", "Garmin", "Xiaomi Band", "Huawei Watch", "Amazfit"]
      },
      {
        title: "Camera An Ninh",
        items: ["Camera Ezviz", "Camera Imou", "Camera TP-Link Xiaomi", "Camera ngoài trời"]
      },
      {
        title: "Máy Ảnh & Phụ Kiện",
        items: ["Instax", "Gimbal chống rung", "Thẻ nhớ máy ảnh", "Chân đế Tripod"]
      }
    ]
  },
  {
    id: "home-beauty",
    name: "Đồ gia dụng, Làm đẹp",
    iconType: "home",
    subGroups: [
      {
        title: "Gia Dụng Thông Minh",
        items: ["Nồi chiên không dầu", "Máy hút bụi", "Robot hút bụi", "Máy lọc không khí", "Quạt điện"]
      },
      {
        title: "Chăm Sóc Cá Nhân",
        items: ["Máy sấy tóc", "Máy cạo râu", "Bàn chải điện", "Máy rửa mặt", "Máy tăm nước"]
      },
      {
        title: "Thiết Bị Nhà Bếp",
        items: ["Lò vi sóng", "Ấm siêu tốc", "Máy xay sinh tố", "Bếp từ đơn", "Nồi cơm điện"]
      }
    ]
  },
  {
    id: "accessories",
    name: "Phụ kiện",
    iconType: "accessories",
    subGroups: [
      {
        title: "Phụ Kiện Di Động",
        items: ["Sạc dự phòng", "Cáp sạc, Củ sạc", "Ốp lưng, Bao da", "Kính cường lực"]
      },
      {
        title: "Phụ Kiện Máy Tính",
        items: ["Chuột không dây", "Bàn phím cơ", "Hub chuyển đổi", "Ổ cứng di động"]
      },
      {
        title: "Phụ Kiện Apple",
        items: ["Bao da iPad", "Ốp lưng iPhone", "Cáp sạc USB-C", "Airtag và phụ kiện"]
      }
    ]
  },
  {
    id: "pc-screen",
    name: "PC, Màn hình, Máy in",
    iconType: "pc",
    subGroups: [
      {
        title: "Màn Hình Máy Tính",
        items: ["Màn hình ASUS", "Màn hình Dell", "Màn hình Samsung", "Màn hình LG", "Màn hình Gaming 144Hz"]
      },
      {
        title: "PC & Linh Kiện",
        items: ["PC ráp sẵn CPS", "Card đồ họa (VGA)", "Mainboard", "CPU Intel/AMD", "RAM máy tính", "Nguồn PSU"]
      },
      {
        title: "Máy In & Thiết Bị VP",
        items: ["Máy in Canon", "Máy in HP", "Mực in chính hãng", "Giấy in văn phòng"]
      }
    ]
  },
  {
    id: "tv-appliance",
    name: "Tivi, Điện máy",
    iconType: "tv",
    subGroups: [
      {
        title: "Tivi Chính Hãng",
        items: ["Smart Tivi Samsung", "Smart Tivi Sony", "Smart Tivi LG", "Tivi Xiaomi", "Khung treo Tivi"]
      },
      {
        title: "Điện Lạnh",
        items: ["Máy lạnh điều hòa", "Tủ lạnh thông minh", "Máy giặt cửa trước", "Máy nước nóng"]
      }
    ]
  },
  {
    id: "trade-in",
    name: "Thu cũ đổi mới",
    iconType: "trade",
    subGroups: [
      {
        title: "Chương Trình Trợ Giá",
        items: ["Thu cũ iPhone lên đời", "Thu cũ Samsung lên đời", "Thu cũ Laptop lên đời", "Bảng giá thu cũ"]
      }
    ]
  },
  {
    id: "used-goods",
    name: "Hàng cũ",
    iconType: "used",
    subGroups: [
      {
        title: "Hàng Cũ Giá Rẻ",
        items: ["iPhone Cũ đẹp", "iPad Cũ", "Laptop Cũ", "Samsung Cũ", "Phụ kiện Cũ", "Loa, tai nghe Cũ"]
      }
    ]
  },
  {
    id: "promotions",
    name: "Khuyến mãi",
    iconType: "promo",
    subGroups: [
      {
        title: "Khuyến Mãi Hot",
        items: ["Deal hot cuối tuần", "Khuyến mãi Smember", "Ưu đãi thanh toán", "Mã giảm giá voucher"]
      }
    ]
  },
  {
    id: "tech-news",
    name: "Tin công nghệ",
    iconType: "news",
    subGroups: [
      {
        title: "Chuyên Mục Tin Tức",
        items: ["Đánh giá sản phẩm", "Thủ thuật công nghệ", "Tin tức mới nhất", "Tư vấn chọn mua"]
      }
    ]
  }
];

// 5. Dữ liệu Slide Banner chính (Hero Slider)
export const heroSlides = [
  {
    id: 1,
    tabTitle: "XIAOMI 17T | 17T PRO",
    tabSubtitle: "Nhận quà khủng",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/b2s-tv-to-loa-hay-slider.jpg",
    link: "#"
  },
  {
    id: 2,
    tabTitle: "HONOR 200 5G",
    tabSubtitle: "Biểu tượng nhiếp ảnh AI",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/honor-200-slider-banner-02.png",
    link: "#"
  },
  {
    id: 3,
    tabTitle: "KHUYẾN MÃI WORLD CUP",
    tabSubtitle: "Ưu đãi đến 50%",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/tv-lg-uu-dai-worldcup.png",
    link: "#"
  },
  {
    id: 4,
    tabTitle: "TAI NGHE CHỤP TAI",
    tabSubtitle: "Mở bán giá sốc",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/tai-nghe-chup-tai-mo-ban.png",
    link: "#"
  }
];

// 6. Thông tin khuyến mãi phụ dưới slider (Promotion Strip)
export const sliderPromoStrip = [
  { id: 1, label: "Miễn Phí Giao Hàng", subLabel: "Tại HCM & HN" },
  { id: 2, label: "Giao Vận Lắp 24h", subLabel: "Cho đơn hàng tivi, máy lạnh" },
  { id: 3, label: "Thử hàng đến 15 ngày", subLabel: "Tại cửa hàng gần nhất" }
];

// 7. 3 Banner phụ bên dưới (Sub Banners Row)
export const subBannersList = [
  {
    id: 1,
    title: "MacBook Pro",
    desc: "Nay với M5, M5 Pro và M5 Max.",
    btnText: "Mua ngay",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:175/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/macbook-pro-m3-uu-dai-sub-banner.png",
    link: "#"
  },
  {
    id: 2,
    title: "Galaxy A57 | A37 5G",
    desc: "S-Student & S-Teacher Giảm thêm đến 500k",
    btnText: "Đăng ký nhận thông tin",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:175/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/sub-banner-galaxy-a35.png",
    link: "#"
  },
  {
    id: 3,
    title: "LAPTOP",
    desc: "Giảm thêm đến 1 Triệu",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:175/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/laptop-bh-2-nam-sub-banner.png",
    link: "#"
  }
];

// 8. Banner lớn dưới cùng (Bottom Wide Banner)
export const bottomWideBannerData = {
  imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:115/q:90/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/b2s-banner-chay-ngang-deal-khung.gif",
  link: "#"
};
