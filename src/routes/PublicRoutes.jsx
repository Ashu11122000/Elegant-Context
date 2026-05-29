import PropTypes from "prop-types";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import SearchResultsPage from "../pages/SearchResultsPage";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

import { useAuthContext } from "../context/AuthContext";

function PublicOnlyRoute({
  children,
}) {
  const { isAuthenticated } =
    useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

PublicOnlyRoute.propTypes = {
  children:
    PropTypes.node.isRequired,
};

function PublicRoutes() {
  return (
    <Routes>
      {/* Store Routes */}

      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/products"
        element={
          <Layout>
            <ProductsPage />
          </Layout>
        }
      />

      <Route
        path="/products/:slug"
        element={
          <Layout>
            <ProductDetailsPage />
          </Layout>
        }
      />

      <Route
        path="/search"
        element={
          <Layout>
            <SearchResultsPage />
          </Layout>
        }
      />

      {/* Authentication Routes */}

      <Route
        path="/login"
        element={
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        }
      />

      <Route
        path="/forgot-password"
        element={
          <PublicOnlyRoute>
            <ForgotPasswordPage />
          </PublicOnlyRoute>
        }
      />

      <Route
        path="/reset-password"
        element={
          <PublicOnlyRoute>
            <ResetPasswordPage />
          </PublicOnlyRoute>
        }
      />
    </Routes>
  );
}

export default PublicRoutes;