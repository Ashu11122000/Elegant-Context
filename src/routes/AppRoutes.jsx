import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<ProductsPage />}
          />

          <Route
            path="/products/:productSlug"
            element={<ProductDetailsPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;