<div align="center">
  <h1>Premium Japanese Food Delivery - UI Prototype</h1>
  <p><i>Experience the essence of Japanese cuisine through a futuristic interface</i></p>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

<br />

## Project Links
> **Note for Instructors:** Please visit the links below to view the actual design and experience the live prototype.

- **[Live Web Demo](https://lab05-gamma.vercel.app)**

---

## 1. Project Overview
**Premium Japanese Food Delivery** is a high-end UI Prototype specifically designed for a Japanese food delivery service. The project simulates a complete and seamless User Flow, built entirely from **Pure HTML/CSS/JS** without relying on heavy frameworks.

The system consists of **7 interconnected screens**:
1. `Splash Screen`: The launch screen, heavily infused with brand identity.
2. `Sign In`: A minimalist and refined login experience.
3. `Home Screen`: A personalized dashboard featuring *Popular Now* items.
4. `Explore Screen`: A search and discovery area highlighting Trending Categories.
5. `Cart Screen`: A cart summary featuring a unique *Swipe-to-Checkout* button.
6. `Profile Screen`: User information summary, reward points, and personal statistics.
7. `Detail Screen`: A visual-centric food detail page.

---

## 2. Design Philosophy
The interface is a perfect intersection of traditional values and futuristic technology, expressed through 2 core concepts:

* **Minimalist Japanese:**
  * Respect for negative space.
  * Elimination of redundant graphic details, focusing entirely on culinary imagery.
  * Clean typography, accented with Japanese characters (Kanji).
* **Cinematic Deep Tech:**
  * **Color Palette:** A profound dark background (`Midnight Purple: #0B0510`), accented by an authoritative red (`Crimson: #D91636`) and luxurious highlights (`Accent Gold: #D4AF37`).
  * **Material:** Extensive use of **Liquid Glassmorphism** (frosted glass combined with liquid lighting) via `backdrop-filter`, creating depth and a premium feel.

---

## 3. Reusable Components
To ensure Consistency and Scalability, the project is designed around a system of reusable UI Components (hidden at `#style-guide`):

- **Buttons:** 
  - `Primary`: Emphasized with a Crimson hue and a Neon Glow effect (`box-shadow`).
  - `Ghost/Secondary`: Transparent with a subtle luminous border, changing style on hover.
- **Bento Cards:** Food presentation cards inspired by Japanese bento boxes. Features an asymmetrical grid and a vertical gradient lighting effect upon interaction.
- **Bottom Navigation Bar:** A floating, glassmorphism-style dock pinned to the bottom. Integrates extremely smooth micro-animations for state changes.
- **Form Inputs:** Borderless, capsule-shaped input fields with a neon border that lightly glows on Focus.

---

## 4. Getting Started
Since the project is 100% optimized using Native Web Technologies, there is no need to install `node_modules` or run complex build scripts:

1. Download or extract the `lab05` directory.
2. Open the `index.html` file directly using any modern web browser (**Google Chrome** or **Safari** is recommended for the smoothest `backdrop-filter` glass effect).
3. **Pro Tip:** Press `F12` (Open Developer Tools) and toggle the **Device Toolbar** to simulate a Mobile screen size (e.g., iPhone 14 Pro).

---

## 5. Folder Structure
```text
lab05/
│
├── index.html       # DOM Structure containing all 7 screens and the Style Guide
├── style.css        # CSS Variables, Global Styling, Layout, and Animations
├── script.js        # Flow Control: Smooth navigation (Fade) between screens
└── README.md        # Project Documentation (This file)
```

---

## 6. Screenshots
> *Placeholder: Place your image files in the `/assets/` folder and they will automatically display here.*

| Home Screen | Detail Screen | Cart Screen |
| :---: | :---: | :---: |
| ![Home Screen](./assets/home.png) | ![Detail Screen](./assets/detail.png) | ![Cart Screen](./assets/cart.png) |

| Explore Screen | Profile Screen | Sign In |
| :---: | :---: | :---: |
| ![Explore Screen](./assets/explore.png) | ![Profile Screen](./assets/profile.png) | ![Sign In](./assets/signin.png) |

---
*Developed with ❤️ by **Hồ Du Tuấn Đạt** - VLU UI/UX Design Course.*
