import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const WishlistContext = createContext(null);

WishlistContext.displayName = "WishlistContext";

const WISHLIST_STORAGE_KEY =
  "elegant-wishlist";

const WISHLIST_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  TOGGLE_ITEM: "TOGGLE_ITEM",
  CLEAR_WISHLIST: "CLEAR_WISHLIST",
};

function getStoredWishlist() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedWishlist =
      localStorage.getItem(
        WISHLIST_STORAGE_KEY
      );

    return storedWishlist
      ? JSON.parse(storedWishlist)
      : [];
  } catch (error) {
    console.error(
      "Failed to load wishlist from storage:",
      error
    );

    return [];
  }
}

function persistWishlist(items) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      WISHLIST_STORAGE_KEY,
      JSON.stringify(items)
    );
  } catch (error) {
    console.error(
      "Failed to persist wishlist:",
      error
    );
  }
}

function wishlistReducer(
  state,
  action
) {
  switch (action.type) {
    case WISHLIST_ACTIONS.ADD_ITEM: {
      const product = action.payload;

      const exists = state.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return state;
      }

      return [...state, product];
    }

    case WISHLIST_ACTIONS.REMOVE_ITEM:
      return state.filter(
        (item) =>
          item.id !== action.payload
      );

    case WISHLIST_ACTIONS.TOGGLE_ITEM: {
      const product = action.payload;

      const exists = state.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return state.filter(
          (item) =>
            item.id !== product.id
        );
      }

      return [...state, product];
    }

    case WISHLIST_ACTIONS.CLEAR_WISHLIST:
      return [];

    default:
      return state;
  }
}

function WishlistProvider({
  children,
}) {
  const [wishlistItems, dispatch] =
    useReducer(
      wishlistReducer,
      [],
      getStoredWishlist
    );

  useEffect(() => {
    persistWishlist(wishlistItems);
  }, [wishlistItems]);

  const addToWishlist = useCallback(
    (product) => {
      if (!product?.id) {
        return;
      }

      dispatch({
        type:
          WISHLIST_ACTIONS.ADD_ITEM,
        payload: product,
      });
    },
    []
  );

  const removeFromWishlist =
    useCallback((productId) => {
      dispatch({
        type:
          WISHLIST_ACTIONS.REMOVE_ITEM,
        payload: productId,
      });
    }, []);

  const toggleWishlist = useCallback(
    (product) => {
      if (!product?.id) {
        return;
      }

      dispatch({
        type:
          WISHLIST_ACTIONS.TOGGLE_ITEM,
        payload: product,
      });
    },
    []
  );

  const clearWishlist = useCallback(
    () => {
      dispatch({
        type:
          WISHLIST_ACTIONS.CLEAR_WISHLIST,
      });
    },
    []
  );

  const isInWishlist = useCallback(
    (productId) =>
      wishlistItems.some(
        (item) => item.id === productId
      ),
    [wishlistItems]
  );

  const wishlistCount = useMemo(
    () => wishlistItems.length,
    [wishlistItems]
  );

  const value = useMemo(
    () => ({
      wishlistItems,

      wishlistCount,

      addToWishlist,

      removeFromWishlist,

      toggleWishlist,

      clearWishlist,

      isInWishlist,
    }),
    [
      wishlistItems,
      wishlistCount,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      clearWishlist,
      isInWishlist,
    ]
  );

  return (
    <WishlistContext.Provider
      value={value}
    >
      {children}
    </WishlistContext.Provider>
  );
}

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useWishlistContext() {
  const context = useContext(
    WishlistContext
  );

  if (!context) {
    throw new Error(
      "useWishlistContext must be used within WishlistProvider"
    );
  }

  return context;
}

export {
  WishlistProvider,
  useWishlistContext,
};