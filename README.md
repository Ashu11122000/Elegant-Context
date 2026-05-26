# Elegant Context

A modern fashion e-commerce frontend application built with React.js, JavaScript, Tailwind CSS, and Context API. This project demonstrates scalable frontend architecture, reusable component design, state management, and premium user interface development for modern web applications.

![Elegant Context Preview](./preview.png)

---

## Project Overview

Elegant Context is a premium fashion storefront frontend application focused on building a modern shopping experience with clean architecture and scalable React development practices.

The application currently includes a product showcase interface, centralized cart state management, reusable UI components, and responsive premium design implementation.

This project is designed to strengthen practical frontend engineering concepts ranging from core web fundamentals to advanced React state management.

---

## Features Implemented

### Shopping Functionality
- Product listing interface
- Dynamic shopping cart
- Add to cart functionality
- Real-time cart item count updates
- Shared application state using Context API
- Cross-component state synchronization

### User Interface
- Premium luxury-themed storefront design
- Responsive layout structure
- Clean reusable UI components
- Professional product display section
- Modern typography and visual hierarchy
- Scalable design system structure

### React Architecture
- Functional component architecture
- Context API state management
- Component-based application design
- Reusable UI composition
- Centralized data flow
- Modular scalable folder structure

---

## Tech Stack

### Core Web Technologies
**HTML5**
- Semantic HTML structure
- Accessibility-focused markup
- Forms and input elements
- Media elements
- Meta tags and SEO fundamentals
- Responsive layout structure

**CSS3**
- Flexbox
- CSS Grid
- Positioning
- Animations
- Transitions
- Media queries
- Custom properties (CSS variables)
- Responsive design principles
- Modern layout systems

---

### Programming Language
**JavaScript (ES6+)**
- Variables and scope
- Functions
- Arrow functions
- Template literals
- Destructuring
- Spread and rest operators
- Arrays and objects
- Array methods
  - map()
  - filter()
  - reduce()
  - find()
  - some()
  - every()
- Conditional rendering logic
- Event handling
- DOM interaction concepts
- Modules (import/export)
- Async JavaScript fundamentals
- Promises
- Error handling
- Optional chaining
- Nullish coalescing
- Object manipulation
- Functional programming concepts

---

### Frontend Framework
**React.js**
- Functional Components
- JSX
- Props
- State management
- Event handling
- Conditional rendering
- List rendering
- Component composition
- Reusable component architecture
- React Hooks
  - useState
  - useContext
  - useEffect
  - useReducer (expandable)
  - custom hooks (future scalable support)
- Context API
- Global state management
- Unidirectional data flow
- Performance optimization concepts
- Scalable React architecture

---

### UI Framework
**Tailwind CSS**
- Utility-first styling
- Responsive breakpoints
- Flex and Grid utilities
- Typography utilities
- Spacing system
- Color system
- Hover and focus states
- Transition utilities
- Layout utilities
- Component styling patterns
- Custom theme scalability

---

### Build Tools & Development Environment
**Vite**
- Fast development server
- Hot module replacement
- Optimized production builds
- Modern frontend tooling

---

### State Management
- React Context API
- Shared global cart state
- Provider architecture
- Centralized application state

---

### Version Control
- Git
- GitHub
- Repository management
- Branch workflow fundamentals

---

## Project Structure

```bash
Elegant-Context/
│
├── public/
│   ├── favicon.ico
│   ├── preview.png
│   ├── robots.txt
│   ├── manifest.json
│   └── placeholder-images/
│       ├── no-image.png
│       ├── user-avatar.png
│       └── product-placeholder.png
│
├── src/
│
│   ├── api/
│   │   ├── axiosClient.js
│   │   ├── productApi.js
│   │   ├── authApi.js
│   │   ├── orderApi.js
│   │   ├── paymentApi.js
│   │   ├── reviewApi.js
│   │   └── wishlistApi.js
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── hero-banner.jpg
│   │   │   ├── auth-banner.jpg
│   │   │   ├── cart-banner.jpg
│   │   │   ├── checkout-banner.jpg
│   │   │   ├── offer-banner.jpg
│   │   │   └── category-banners/
│   │   │       ├── electronics.jpg
│   │   │       ├── fashion.jpg
│   │   │       ├── grocery.jpg
│   │   │       ├── beauty.jpg
│   │   │       ├── books.jpg
│   │   │       ├── gaming.jpg
│   │   │       └── furniture.jpg
│   │   │
│   │   ├── icons/
│   │   │   ├── cart.svg
│   │   │   ├── heart.svg
│   │   │   ├── search.svg
│   │   │   ├── user.svg
│   │   │   ├── star.svg
│   │   │   ├── menu.svg
│   │   │   └── close.svg
│   │   │
│   │   └── fonts/
│   │       ├── Inter-Regular.ttf
│   │       └── PlayfairDisplay-Regular.ttf
│   │
│   ├── components/
│   │
│   │   ├── common/
│   │   │   ├── Loader.jsx
│   │   │   ├── Spinner.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── RatingStars.jsx
│   │   │   ├── PriceTag.jsx
│   │   │   ├── DiscountBadge.jsx
│   │   │   └── Breadcrumb.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── TopBanner.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Select.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Drawer.jsx
│   │   │   ├── Tooltip.jsx
│   │   │   ├── Toast.jsx
│   │   │   ├── Skeleton.jsx
│   │   │   └── Tabs.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── CategoryGrid.jsx
│   │   │   ├── TrendingProducts.jsx
│   │   │   ├── BestSellers.jsx
│   │   │   └── PromotionalBanner.jsx
│   │   │
│   │   ├── products/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── ProductGallery.jsx
│   │   │   ├── ProductInfo.jsx
│   │   │   ├── ProductTabs.jsx
│   │   │   ├── SimilarProducts.jsx
│   │   │   ├── ProductFilters.jsx
│   │   │   ├── CategorySidebar.jsx
│   │   │   ├── PriceFilter.jsx
│   │   │   ├── BrandFilter.jsx
│   │   │   ├── RatingFilter.jsx
│   │   │   ├── SortDropdown.jsx
│   │   │   └── SearchResults.jsx
│   │   │
│   │   ├── cart/
│   │   │   ├── Cart.jsx
│   │   │   ├── CartItem.jsx
│   │   │   ├── CartSummary.jsx
│   │   │   ├── CartDrawer.jsx
│   │   │   ├── QuantitySelector.jsx
│   │   │   └── CouponBox.jsx
│   │   │
│   │   ├── wishlist/
│   │   │   ├── WishlistButton.jsx
│   │   │   ├── WishlistItem.jsx
│   │   │   └── WishlistGrid.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── ForgotPasswordForm.jsx
│   │   │   ├── ResetPasswordForm.jsx
│   │   │   └── SocialLoginButtons.jsx
│   │   │
│   │   ├── checkout/
│   │   │   ├── CheckoutForm.jsx
│   │   │   ├── ShippingAddress.jsx
│   │   │   ├── PaymentMethod.jsx
│   │   │   ├── OrderSummary.jsx
│   │   │   └── PlaceOrderButton.jsx
│   │   │
│   │   ├── reviews/
│   │   │   ├── ReviewCard.jsx
│   │   │   ├── ReviewList.jsx
│   │   │   ├── ReviewForm.jsx
│   │   │   └── RatingBreakdown.jsx
│   │   │
│   │   └── admin/
│   │       ├── DashboardStats.jsx
│   │       ├── ProductManagement.jsx
│   │       ├── OrderManagement.jsx
│   │       ├── UserManagement.jsx
│   │       └── InventoryManagement.jsx
│   │
│   ├── config/
│   │   ├── constants.js
│   │   ├── routes.js
│   │   ├── env.js
│   │   └── theme.js
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── WishlistContext.jsx
│   │
│   ├── data/
│   │   ├── fashion.js
│   │   ├── electronics.js
│   │   ├── grocery.js
│   │   ├── beauty.js
│   │   ├── books.js
│   │   ├── gaming.js
│   │   ├── furniture.js
│   │   ├── babyProducts.js
│   │   ├── fitness.js
│   │   ├── officeProducts.js
│   │   ├── accessories.js
│   │   └── products.js
│   │
│   ├── features/
│   │   ├── cart/
│   │   │   ├── cartSlice.js
│   │   │   └── cartSelectors.js
│   │   │
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   └── authSelectors.js
│   │   │
│   │   ├── products/
│   │   │   ├── productSlice.js
│   │   │   └── productSelectors.js
│   │   │
│   │   ├── wishlist/
│   │   │   ├── wishlistSlice.js
│   │   │   └── wishlistSelectors.js
│   │   │
│   │   └── orders/
│   │       ├── orderSlice.js
│   │       └── orderSelectors.js
│   │
│   ├── hooks/
│   │   ├── useCart.js
│   │   ├── useAuth.js
│   │   ├── useWishlist.js
│   │   ├── useDebounce.js
│   │   ├── useLocalStorage.js
│   │   ├── useTheme.js
│   │   └── useFetch.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── ForgotPasswordPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── SearchPage.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── NotFound.jsx
│   │
│   ├── redux/
│   │   └── store.js
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── AdminRoute.jsx
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── cartService.js
│   │   ├── orderService.js
│   │   ├── paymentService.js
│   │   ├── productService.js
│   │   └── reviewService.js
│   │
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── currencyFormatter.js
│   │   ├── calculateDiscount.js
│   │   ├── generateSlug.js
│   │   ├── validation.js
│   │   └── storage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── jsconfig.json
├── README.md
└── LICENSE
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Ashu11122000/Elegant-Context.git
```

### Navigate to Project

```bash
cd Elegant-Context
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## Tailwind CSS Setup

This project uses **Tailwind CSS v3** for utility-first modern UI development and premium responsive styling.

### Step 1: Install Tailwind CSS and Required Dependencies

Install Tailwind CSS along with PostCSS and Autoprefixer:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

---

### Step 2: Initialize Tailwind Configuration

Generate the Tailwind CSS and PostCSS configuration files:

```bash
npx tailwindcss init -p
```

This command creates:

```bash
tailwind.config.js
postcss.config.js
```

---

### Step 3: Configure Tailwind CSS

Open the `tailwind.config.js` file and update it with the following configuration:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0f0a05",
          gold: "#d4a24c",
          cream: "#f8f1e7",
          brown: "#3b2414",
          charcoal: "#1f1f1f",
          platinum: "#e5e4e2",
        },
      },
      fontFamily: {
        elegant: ["Playfair Display", "serif"],
        modern: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 40px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        premium: "20px",
      },
    },
  },
  plugins: [],
};
```

---

### Step 4: Add Tailwind Directives to Global CSS

Open:

```bash
src/index.css
```

Replace existing styles with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Step 5: Verify React Entry File

Open:

```bash
src/main.jsx
```

Ensure the Tailwind CSS file is imported:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Step 6: Start Development Server

Run the application:

```bash
npm run dev
```

---

### Step 7: Verify Tailwind CSS Installation

Temporarily update `App.jsx` to test Tailwind:

```javascript
function App() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-gold flex items-center justify-center">
      <h1 className="text-5xl font-bold font-elegant">
        Tailwind CSS v3 Successfully Configured
      </h1>
    </div>
  );
}

export default App;
```

If the styled page renders successfully, Tailwind CSS setup is complete.

---

### Tailwind CSS Features Used in This Project

- Utility-first CSS architecture
- Responsive design breakpoints
- Flexbox utilities
- CSS Grid utilities
- Typography system
- Spacing scale utilities
- Color palette customization
- Custom theme extension
- Hover and focus state styling
- Transition and animation utilities
- Shadow and elevation utilities
- Layout composition utilities
- Mobile-first responsive design
- Reusable component styling patterns
- Performance-optimized CSS generation

---

## Current Progress

Completed:
- Premium storefront UI
- Product display implementation
- Context API integration
- Shopping cart state management
- Add to cart functionality
- Modular React architecture
- Tailwind-based styling system

Upcoming:
- Remove from cart
- Quantity increment/decrement
- Cart drawer/modal
- Product search
- Product filtering
- Category navigation
- Checkout page
- Order summary
- Local storage persistence
- Authentication integration
- API integration
- Backend connectivity

---

## Learning Outcomes

This project demonstrates practical frontend engineering experience in:

- Semantic web development
- Modern JavaScript application architecture
- React component engineering
- Context API state management
- Tailwind CSS design systems
- Scalable folder architecture
- E-commerce frontend workflows
- UI/UX implementation
- Component reusability
- Production-ready frontend structuring

---

## GitHub Repository

Repository:
https://github.com/Ashu11122000/Elegant-Context

---

## Author

Ashish Sharma

GitHub:
https://github.com/Ashu11122000

---

## License

This project is licensed under the MIT License.