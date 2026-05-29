import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const CartContext = createContext(null);

CartContext.displayName = "CartContext";

const CART_STORAGE_KEY = "elegant-cart";

export const CART_CONFIG = {
  FREE_SHIPPING_THRESHOLD: 5000,
  STANDARD_SHIPPING: 199,
  TAX_RATE: 0.18,
};

const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

function getStoredCart() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = localStorage.getItem(
      CART_STORAGE_KEY
    );

    return storedCart
      ? JSON.parse(storedCart)
      : [];
  } catch (error) {
    console.error(
      "Failed to load cart from storage:",
      error
    );

    return [];
  }
}

function persistCart(cartItems) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  } catch (error) {
    console.error(
      "Failed to persist cart:",
      error
    );
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product, quantity } =
        action.payload;

      const existingItem = state.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...state,
        {
          ...product,
          quantity,
        },
      ];
    }

    case CART_ACTIONS.REMOVE_ITEM:
      return state.filter(
        (item) =>
          item.id !== action.payload
      );

    case CART_ACTIONS.UPDATE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.productId
          ? {
              ...item,
              quantity:
                action.payload.quantity,
            }
          : item
      );

    case CART_ACTIONS.INCREMENT_QUANTITY:
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    case CART_ACTIONS.DECREMENT_QUANTITY:
      return state
        .map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        );

    case CART_ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [cartItems, dispatch] =
    useReducer(
      cartReducer,
      [],
      getStoredCart
    );

  useEffect(() => {
    persistCart(cartItems);
  }, [cartItems]);

  const addToCart = useCallback(
    (product, quantity = 1) => {
      if (!product?.id) {
        return;
      }

      dispatch({
        type: CART_ACTIONS.ADD_ITEM,
        payload: {
          product,
          quantity:
            quantity > 0
              ? quantity
              : 1,
        },
      });
    },
    []
  );

  const removeFromCart = useCallback(
    (productId) => {
      dispatch({
        type: CART_ACTIONS.REMOVE_ITEM,
        payload: productId,
      });
    },
    []
  );

  const updateQuantity = useCallback(
    (productId, quantity) => {
      if (quantity < 1) {
        return;
      }

      dispatch({
        type: CART_ACTIONS.UPDATE_QUANTITY,
        payload: {
          productId,
          quantity,
        },
      });
    },
    []
  );

  const incrementQuantity = useCallback(
    (productId) => {
      dispatch({
        type:
          CART_ACTIONS.INCREMENT_QUANTITY,
        payload: productId,
      });
    },
    []
  );

  const decrementQuantity = useCallback(
    (productId) => {
      dispatch({
        type:
          CART_ACTIONS.DECREMENT_QUANTITY,
        payload: productId,
      });
    },
    []
  );

  const clearCart = useCallback(() => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });
  }, []);

  const isInCart = useCallback(
    (productId) =>
      cartItems.some(
        (item) => item.id === productId
      ),
    [cartItems]
  );

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + item.quantity,
        0
      ),
    [cartItems]
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          Number(item.price || 0) *
            item.quantity,
        0
      ),
    [cartItems]
  );

  const shipping = useMemo(() => {
    if (subtotal <= 0) {
      return 0;
    }

    return subtotal >=
      CART_CONFIG.FREE_SHIPPING_THRESHOLD
      ? 0
      : CART_CONFIG.STANDARD_SHIPPING;
  }, [subtotal]);

  const tax = useMemo(
    () =>
      Number(
        (
          subtotal *
          CART_CONFIG.TAX_RATE
        ).toFixed(2)
      ),
    [subtotal]
  );

  const total = useMemo(
    () =>
      Number(
        (
          subtotal +
          shipping +
          tax
        ).toFixed(2)
      ),
    [subtotal, shipping, tax]
  );

  const value = useMemo(
    () => ({
      cartItems,

      cartCount,

      subtotal,

      shipping,

      tax,

      total,

      addToCart,

      removeFromCart,

      updateQuantity,

      incrementQuantity,

      decrementQuantity,

      clearCart,

      isInCart,
    }),
    [
      cartItems,
      cartCount,
      subtotal,
      shipping,
      tax,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      isInCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useCartContext() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext must be used within CartProvider"
    );
  }

  return context;
}

export {
  CartProvider,
  useCartContext,
};