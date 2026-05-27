import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Product listing */}
        <Route path="products" element={<ProductsPage />} />

        {/* Product details */}
        <Route path="products/:slug" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;