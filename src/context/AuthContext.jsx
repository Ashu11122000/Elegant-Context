import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext(null);

AuthContext.displayName = "AuthContext";

const AUTH_STORAGE_KEY = "elegant-auth-user";

export const AUTH_STATUS = {
  LOADING: "loading",
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
};

function getStoredUser() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedUser = localStorage.getItem(
      AUTH_STORAGE_KEY
    );

    return storedUser
      ? JSON.parse(storedUser)
      : null;
  } catch (error) {
    console.error(
      "Failed to read auth storage:",
      error
    );

    return null;
  }
}

function persistUser(user) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    if (user) {
      localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(
        AUTH_STORAGE_KEY
      );
    }
  } catch (error) {
    console.error(
      "Failed to persist auth user:",
      error
    );
  }
}

function createUser(data = {}) {
  return {
    id:
      data.id ||
      crypto.randomUUID?.() ||
      String(Date.now()),

    name: data.name || "Customer",

    email: data.email || "",

    role: data.role || "customer",

    avatar: data.avatar || "",

    createdAt:
      data.createdAt ||
      new Date().toISOString(),
  };
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [status, setStatus] = useState(
    AUTH_STATUS.LOADING
  );

  useEffect(() => {
    const storedUser = getStoredUser();

    if (storedUser) {
      setUser(storedUser);

      setStatus(
        AUTH_STATUS.AUTHENTICATED
      );
    } else {
      setStatus(
        AUTH_STATUS.UNAUTHENTICATED
      );
    }
  }, []);

  useEffect(() => {
    persistUser(user);
  }, [user]);

  const login = useCallback(
    async (credentials = {}) => {
      const {
        email = "",
        password = "",
      } = credentials;

      if (!email || !password) {
        throw new Error(
          "Email and password are required."
        );
      }

      /*
        Future API Call

        const response = await authService.login(credentials);

        const authenticatedUser =
          response.user;
      */

      const authenticatedUser =
        createUser({
          email,
          name:
            email.split("@")[0] ||
            "Customer",
        });

      setUser(authenticatedUser);

      setStatus(
        AUTH_STATUS.AUTHENTICATED
      );

      return authenticatedUser;
    },
    []
  );

  const register = useCallback(
    async (userData = {}) => {
      const {
        name = "",
        email = "",
        password = "",
      } = userData;

      if (!name || !email || !password) {
        throw new Error(
          "Name, email and password are required."
        );
      }

      /*
        Future API Call

        const response =
          await authService.register(
            userData
          );

        const newUser =
          response.user;
      */

      const newUser = createUser({
        name,
        email,
      });

      setUser(newUser);

      setStatus(
        AUTH_STATUS.AUTHENTICATED
      );

      return newUser;
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);

    setStatus(
      AUTH_STATUS.UNAUTHENTICATED
    );
  }, []);

  const updateUser = useCallback(
    (updates = {}) => {
      setUser((currentUser) => {
        if (!currentUser) {
          return null;
        }

        return {
          ...currentUser,
          ...updates,
        };
      });
    },
    []
  );

  const refreshUser = useCallback(
    async () => {
      /*
        Future API Call

        const freshUser =
          await authService.me();

        setUser(freshUser);
      */

      return user;
    },
    [user]
  );

  const loading =
    status === AUTH_STATUS.LOADING;

  const isAuthenticated =
    status ===
    AUTH_STATUS.AUTHENTICATED;

  const value = useMemo(
    () => ({
      user,

      status,

      loading,

      isAuthenticated,

      login,

      logout,

      register,

      updateUser,

      refreshUser,
    }),
    [
      user,
      status,
      loading,
      isAuthenticated,
      login,
      logout,
      register,
      updateUser,
      refreshUser,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAuthContext() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within AuthProvider"
    );
  }

  return context;
}

export {
  AuthProvider,
  useAuthContext,
};