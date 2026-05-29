import { Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";
import SearchResultsPage from "../pages/SearchResultsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Homepage */}
        <Route index element={<Home />} />

        {/* Product Catalog */}
        <Route
          path="products"
          element={<ProductsPage />}
        />

        {/* Product Details */}
        <Route
          path="products/:slug"
          element={<ProductDetailsPage />}
        />

        {/* Search */}
        <Route
          path="search"
          element={<SearchResultsPage />}
        />

        {/* Wishlist */}
        <Route
          path="wishlist"
          element={<WishlistPage />}
        />

        {/* Shopping Cart */}
        <Route
          path="cart"
          element={<CartPage />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;