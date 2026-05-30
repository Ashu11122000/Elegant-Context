import PropTypes from "prop-types";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "../components/layout/Layout";

import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";

import AccountPage from "../pages/AccountPage";
import ProfilePage from "../pages/ProfilePage";
import OrdersPage from "../pages/OrdersPage";
import AddressesPage from "../pages/AddressesPage";

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

      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/account/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/account/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/account/addresses"
        element={
          <ProtectedRoute>
            <AddressesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default PrivateRoutes;