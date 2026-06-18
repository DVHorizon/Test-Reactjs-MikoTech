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
        items: ["iPhone", "Samsung", "OPPO", "Xiaomi", "TECNO", "HONOR", "nubia", "SONY", "NOKIA", "NOTHING", "Masstel", "realme", "itel", "HUAWEI", "MEIZU", "Infinix"]
      },
      {
        title: "Thương Hiệu Tablet",
        items: ["iPad", "Samsung", "Xiaomi", "HUAWEI", "Lenovo", "TECLAST", "nubia", "HONOR", "OPPO", "Máy đọc sách", "Kindle", "BOOX", "Xem thêm tất cả Tablet"]
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
    tabTitle: "MỪNG KHAI TRƯƠNG",
    tabSubtitle: "Ưu đãi cực khủng",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/KTBD-Home-6.png",
    link: "#"
  },
  {
    id: 2,
    tabTitle: "GALAXY S26 ULTRA",
    tabSubtitle: "Siêu Phẩm AI Galaxy",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/Home_s26_0626_2.png",
    link: "#"
  },
  {
    id: 3,
    tabTitle: "IPHONE 17 PRO MAX",
    tabSubtitle: "Nâng cấp êm. Thêm khác biệt",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/690x300_iPhone17ProMax_0626.png",
    link: "#"
  },
  {
    id: 4,
    tabTitle: "OPPO FIND X9 ULTRA | X9S",
    tabSubtitle: "Mở bán tặng quà 12 triệu",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/Oppofin%20x9%20ultra_oppen-home.png",
    link: "#"
  },
  {
    id: 5,
    tabTitle: "XIAOMI 17T | 17T PRO",
    tabSubtitle: "Bậc thầy Telephoto - Mua ngay",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/Home_17t_0626_1.png",
    link: "#"
  },
  {
    id: 6,
    tabTitle: "HONOR 600 5G",
    tabSubtitle: "Biểu tượng nhiếp ảnh AI",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/home_Honor600_opensale.jpg",
    link: "#"
  },
  {
    id: 7,
    tabTitle: "KHUYẾN MÃI WORLD CUP",
    tabSubtitle: "Ưu đãi đến 50%",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/Home_WC-1.png",
    link: "#"
  },
  {
    id: 8,
    tabTitle: "TAI NGHE CHỤP TAI MARSHALL",
    tabSubtitle: "Mở bán giá hấp dẫn",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/tai-nghe-chup-tai-marshall-milton-anc-home.jpg",
    link: "#"
  },
  {
    id: 9,
    tabTitle: "ACER NITRO PROPANEL",
    tabSubtitle: "Giá siêu rẻ",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1036:450/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/sdbgvd.png",
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
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:50/plain/https://media-asset.cellphones.com.vn/dashboard-v1/mbannnmacpro.png",
    link: "#"
  },
  {
    id: 2,
    title: "Galaxy A57 | A37 5G",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:50/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/a3757-0626.png",
    link: "#"
  },
  {
    id: 3,
    title: "Laptop",
    imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:50/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/Artboard5.png",
    link: "#"
  }
];

// 8. Banner lớn dưới cùng (Bottom Wide Banner)
export const bottomWideBannerData = {
  imageUrl: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/Special-banner-1-Sau-13.gif",
  link: "#"
};

// 9. Icon các danh mục Sidebar từ CDN CellphoneS
export const categoryIcons = {
  "phone": "https://dashboard.cellphones.com.vn/storage/icon-homepage-mobile.svg",
  "laptop": "https://dashboard.cellphones.com.vn/storage/icon-homepage-laptop.svg",
  "audio": "https://dashboard.cellphones.com.vn/storage/icon-homepage-audio-2.svg",
  "watch": "https://dashboard.cellphones.com.vn/storage/icon-homepage-watch.svg",
  "home": "https://dashboard.cellphones.com.vn/storage/icon-homepage-home-appliances.svg",
  "accessories": "https://dashboard.cellphones.com.vn/storage/icon-homepage-accessories.svg",
  "pc": "https://dashboard.cellphones.com.vn/storage/icon-homepage-pc.svg",
  "tv": "https://dashboard.cellphones.com.vn/storage/icon-homepage-tv.svg",
  "trade": "https://dashboard.cellphones.com.vn/storage/icon-homepage-trade-in.svg",
  "used": "https://dashboard.cellphones.com.vn/storage/icon-homepage-used-goods.svg",
  "promo": "https://dashboard.cellphones.com.vn/storage/icon-homepage-promotions.svg",
  "news": "https://dashboard.cellphones.com.vn/storage/icon-homepage-tech-news.svg"
};

// 10. Logo thương hiệu chính thức từ CDN CellphoneS (dùng chữ thường làm key để tìm kiếm không phân biệt hoa thường)
export const brandLogos = {
  "iphone": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/iPhone-240x50.png",
  "ipad": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/iPad-240x50.png",
  "samsung": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Samsung-240x50.png",
  "samsung galaxy tab": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Samsung-240x50.png",
  "xiaomi": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/XIAOMI-new-240x50.png",
  "xiaomi pad": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/XIAOMI-new-240x50.png",
  "oppo": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Oppo-240x50.png",
  "vivo": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Vivo-240x50.png",
  "realme": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Realme-240x50.png",
  "nokia": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Nokia-240x50.png",
  "huawei": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/HUAWEI-240x50.png",
  "huawei matepad": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/HUAWEI-240x50.png",
  "lenovo": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/lenovo-240x50.png",
  "lenovo tab": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/lenovo-240x50.png",
  "tecno": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/TECNO-240x50.png",
  "honor": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Honor-240x50.png",
  "nubia": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Nubia-240x50.png",
  "sony": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/SONY-240x50.png",
  "nothing": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Nothing-240x50.png",
  "masstel": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Mastel-240x50.png",
  "itel": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Itel-240x50.png",
  "meizu": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/MEIZU-240x50.png",
  "infinix": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Infinix-240x50.png",
  "teclast": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Teclast-240x50.png",
  "boox": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/boox-240x50.png",
  "macbook": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Macbook-240x50.png",
  "asus": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/ASUS-240x50.png",
  "msi": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/MSI-240x50.png",
  "acer": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/acer-240x50.png",
  "dell": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/Dell-240x50.png",
  "hp": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/HP-240x50.png",
  "gigabyte": "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:100/plain/https://cellphones.com.vn/media/wysiwyg/Web/Brand/gigabyte-240x50.png"
};

// 11. Linh vật chibi Smember từ CellphoneS
export const smemberMascotUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:50/plain/https://cellphones.com.vn/media/wysiwyg/ant-smile.png";

// 12. Dữ liệu các nhóm ưu đãi trong widget thứ hai (Quick-links)
export const quickLinkSections = [
  {
    id: "edu",
    title: "Ưu đãi cho giáo dục",
    iconType: "education",
    items: [
      { id: "edu1", textBefore: "Đăng ký ", textBold: "nhận ưu đãi", textAfter: "" },
      { id: "edu2", textBefore: "Deal hot ", textBold: "học sinh sinh viên", textAfter: "" },
      { id: "edu3", textBefore: "Laptop ", textBold: "ưu đãi khủng", textAfter: "" }
    ]
  },
  {
    id: "trade",
    title: "Thu cũ lên đời giá hời",
    iconType: "trade-in",
    items: [
      { id: "trade1", textBefore: "iPhone trợ giá ", textBold: "đến 3 triệu", textAfter: "" },
      { id: "trade2", textBefore: "Samsung trợ giá ", textBold: "đến 4 triệu", textAfter: "" }
    ]
  },
  {
    id: "b2b-sec",
    title: "Khách hàng doanh nghiệp (B2B)",
    iconType: "b2b",
    items: [
      { id: "b2b1", textBefore: "Đăng ký ", textBold: "S-Business", textAfter: "" },
      { id: "b2b2", textBefore: "Chính sách ", textBold: "ưu đãi", textAfter: "" }
    ]
  }
];

// 13. URL ảnh, logo và chibi của Header
export const headerLogoUrl = "https://cdn2.cellphones.com.vn/x/media/wysiwyg/Web/Logo/Logo_CPS.png";
export const headerSearchBannerUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:595:100/q:100/plain/https://media-asset.cellphones.com.vn/dashboard-v1/manage-banner/b2s-search.png";
export const smemberChibiModalUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png";

// 14. URL banner đáy của thẻ Quick-links (Widget)
export const quickLinksBottomBannerUrl = "https://cdn2.cellphones.com.vn/x/media/wysiwyg/Web/landing-page/hang-moi-ve/promotion_banner04.png";

