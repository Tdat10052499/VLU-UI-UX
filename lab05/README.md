<div align="center">
  <h1>🍱 Premium Japanese Food Delivery - UI Prototype</h1>
  <p><i>Trải nghiệm tinh hoa ẩm thực Nhật Bản thông qua giao diện tương lai</i></p>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

<br />

## 🔗 Liên kết Dự án (Project Links)
> **Lưu ý dành cho Giảng viên:** Vui lòng truy cập các đường dẫn bên dưới để xem thiết kế gốc và trải nghiệm thực tế.

- 🎨 **[Figma Design Prototype](#)** *(Nhập link Figma của bạn vào đây)*
- 🌍 **[Live Web Demo](#)** *(Nhập link Vercel/Netlify của bạn vào đây)*

---

## 📖 1. Tổng quan Dự án (Overview)
**Premium Japanese Food Delivery** là một nguyên mẫu ứng dụng (UI Prototype) cao cấp, được thiết kế chuyên biệt cho dịch vụ giao đồ ăn Nhật Bản. Dự án mô phỏng toàn bộ luồng trải nghiệm người dùng (User Flow) khép kín, được xây dựng hoàn toàn từ **Pure HTML/CSS/JS** mà không phụ thuộc vào framework. 

Hệ thống bao gồm **7 màn hình (Screens)** kết nối mượt mà:
1. `Splash Screen`: Màn hình khởi động, mang đậm âm hưởng thương hiệu.
2. `Sign In`: Trải nghiệm đăng nhập tối giản và tinh tế.
3. `Home Screen`: Trang chủ được cá nhân hóa với các món ăn *Popular Now*.
4. `Explore Screen`: Khu vực tìm kiếm và khám phá các chuyên mục đang nổi bật (Trending).
5. `Cart Screen`: Giỏ hàng với bảng tóm tắt chi phí và nút *Swipe-to-Checkout* độc đáo.
6. `Profile Screen`: Tóm tắt thông tin người dùng, điểm thưởng và thống kê cá nhân.
7. `Detail Screen`: Trang chi tiết món ăn tập trung vào thị giác (Visual-centric).

---

## 🎨 2. Triết lý Thiết kế (Design Philosophy)
Giao diện là sự giao thoa hoàn hảo giữa giá trị truyền thống và công nghệ tương lai, thể hiện qua 2 concept cốt lõi:

* 🌿 **Minimalist Japanese (Tối giản Nhật Bản):**
  * Tôn trọng khoảng trắng (Negative space).
  * Lược bỏ các chi tiết đồ họa thừa thãi, hướng sự tập trung hoàn toàn vào hình ảnh ẩm thực.
  * Typography gọn gàng, có điểm nhấn bằng tiếng Nhật (Kanji).
* 🌌 **Cinematic Deep Tech (Công nghệ Chiều sâu):**
  * **Color Palette:** Không gian màu nền tối thăm thẳm (`Midnight Purple: #0B0510`), điểm xuyết bởi sắc đỏ quyền lực (`Crimson: #D91636`) và điểm nhấn sang trọng (`Accent Gold: #D4AF37`).
  * **Material:** Ứng dụng triệt để hiệu ứng **Liquid Glassmorphism** (kính mờ kết hợp ánh sáng lỏng) với `backdrop-filter`, tạo chiều sâu và cảm giác cao cấp.

---

## 🧩 3. Hệ thống Component (Reusable Components)
Để đảm bảo tính nhất quán (Consistency) và khả năng mở rộng (Scalability), dự án được thiết kế xoay quanh một hệ thống UI Components tái sử dụng (ẩn tại `#style-guide`):

- **🔘 Buttons:** 
  - `Primary`: Nhấn mạnh bằng sắc Crimson với hiệu ứng Neon Glow (`box-shadow`).
  - `Ghost/Secondary`: Trong suốt, chỉ hiện viền sáng mờ, đổi style khi hover.
- **🍱 Bento Cards:** Cấu trúc thẻ trình bày món ăn lấy cảm hứng từ hộp bento Nhật Bản. Kết hợp lưới phi đối xứng và hiệu ứng ánh sáng gradient quét dọc bề mặt khi tương tác.
- **📱 Bottom Navigation Bar:** Thanh Dock nổi kiểu Glassmorphism, ghim sát đáy màn hình. Tích hợp hiệu ứng Micro-animation thay đổi trạng thái cực kỳ êm ái.
- **⌨️ Form Inputs:** Trường nhập liệu không viền, bo cong viên nang (Capsule), viền neon sẽ sáng nhẹ khi Focus.

---

## 🚀 4. Hướng dẫn Cài đặt & Chạy dự án (Getting Started)
Do dự án được tối ưu hóa 100% bằng Native Web Technologies, bạn không cần cài đặt node_modules hay chạy script build phức tạp:

1. Tải về hoặc giải nén thư mục `lab05`.
2. Mở file `index.html` trực tiếp bằng bất kỳ trình duyệt web hiện đại nào (Khuyên dùng **Google Chrome** hoặc **Safari** để có trải nghiệm hiệu ứng bóng kính `backdrop-filter` mượt mà nhất).
3. **Mẹo trải nghiệm:** Nhấn `F12` (Mở Developer Tools) và bật chế độ **Device Toolbar** để mô phỏng kích thước màn hình Mobile (ví dụ: iPhone 14 Pro).

---

## 📁 5. Cấu trúc Thư mục (Folder Structure)
```text
lab05/
│
├── index.html       # DOM Structure chứa toàn bộ 7 màn hình và Style Guide
├── style.css        # Hệ thống CSS Variables, Global Styling, Layout và Animation
├── script.js        # Flow Control: Điều hướng mượt mà (Fade) giữa các màn hình
└── README.md        # Tài liệu dự án (File hiện tại)
```

---

## 📸 6. Ảnh chụp Màn hình (Screenshots)
> *Placeholder: Hãy đặt file ảnh của bạn vào thư mục `/assets/` và chúng sẽ tự động hiển thị ở đây.*

| Home Screen | Detail Screen | Cart Screen |
| :---: | :---: | :---: |
| ![Home Screen](./assets/home.png) | ![Detail Screen](./assets/detail.png) | ![Cart Screen](./assets/cart.png) |

| Explore Screen | Profile Screen | Sign In |
| :---: | :---: | :---: |
| ![Explore Screen](./assets/explore.png) | ![Profile Screen](./assets/profile.png) | ![Sign In](./assets/signin.png) |

---
*Developed with ❤️ by **[Tên của Bạn]** - VLU UI/UX Design Course.*
