import PropTypes from "prop-types";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "../components/layout/Layout";

import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";

import { useAuthContext } from "../context/AuthContext";

function ProtectedRoute({
  children,
}) {
  const {
    isAuthenticated,
    loading,
  } = useAuthContext();

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}

ProtectedRoute.propTypes = {
  children:
    PropTypes.node.isRequired,
};

function PrivateRoutes() {
  return (
    <Routes>
      {/* Cart */}

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Layout>
              <CartPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Wishlist */}

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <Layout>
              <WishlistPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Future Account Routes */}

      {/*
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Layout>
              <AccountPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Layout>
              <ProfilePage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Layout>
              <OrdersPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/addresses"
        element={
          <ProtectedRoute>
            <Layout>
              <AddressesPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Layout>
              <CheckoutPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      */}

      {/* Fallback Route */}

      <Route
        path="*"
        element={null}
      />
    </Routes>
  );
}

export default PrivateRoutes;