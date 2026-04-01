#  DigiTools Platform

**DigiTools** is a modern, high-performance digital marketplace for premium creative tools. Built with a focus on speed, seamless user experience, and a professional aesthetic.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5551FF?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

---

## 📖 Project Overview
This platform allows users to browse a curated collection of digital products and manage their purchases through a dynamic shopping cart. It solves the common UI challenge of real-time data synchronization between different components (Navbar & Product Cards) using efficient state management.

### 🔗 [Live Demo Link Here] 
*(Replace this with your Netlify/Vercel link)*

---

## 🛠️ Tech Stack & Tools
* **Frontend Library:** React.js (Functional Components, Hooks)
* **Styling:** Tailwind CSS (Utility-first CSS)
* **UI Components:** DaisyUI (Responsive components)
* **Notifications:** React-Toastify (User feedback)
* **Data Handling:** Fetch API with local JSON models

---

## ✨ Professional Features

### 1. Advanced State Management (State Lifting)
Implemented "State Lifting" logic to ensure that adding a product in the `Card` component instantly updates the `Navbar` cart counter. This provides a fluid, single-page application (SPA) experience.

### 2. Intelligent Cart Validation
The system includes a check to prevent duplicate items from being added to the cart. If a user tries to add the same tool twice, the UI gracefully disables the button and provides visual feedback.

### 3. Fully Adaptive UI
Developed with a **Mobile-First** philosophy. The navigation switches to a hamburger menu on small screens, and the product grid adjusts from 1 to 3 columns based on the device width.

### 4. Dynamic Tab Navigation
Users can switch between "Products" and "Cart" views instantly using a custom-built tab system that updates the UI state without page reloads.

---

## 🚀 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Nishitasarker/Digitools-platform.git](https://github.com/Nishitasarker/Digitools-platform.git)