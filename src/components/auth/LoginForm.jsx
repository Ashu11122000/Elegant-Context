import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from "react-icons/fi";

import { useAuthContext } from "../../context/AuthContext";

const REMEMBER_EMAIL_KEY = "elegant-remembered-email";

const INITIAL_FORM = {
  email: "",
  password: "",
  rememberMe: false,
};

function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const [formData, setFormData] = useState(INITIAL_FORM);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    try {
      const rememberedEmail = localStorage.getItem(REMEMBER_EMAIL_KEY);

      if (rememberedEmail) {
        setFormData((previous) => ({
          ...previous,
          email: rememberedEmail,
          rememberMe: true,
        }));
      }
    } catch (error) {
      console.error("Failed to load remembered email:", error);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    const email = formData.email.trim();

    const password = formData.password.trim();

    if (!email) {
      validationErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      if (formData.rememberMe) {
        localStorage.setItem(REMEMBER_EMAIL_KEY, formData.email.trim());
      } else {
        localStorage.removeItem(REMEMBER_EMAIL_KEY);
      }

      await login({
        email: formData.email.trim(),
        password: formData.password,
      });

      navigate("/");
    } catch (error) {
      setSubmitError(error?.message || "Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <form
    onSubmit={handleSubmit}
    noValidate
    className="space-y-7"
  >
    {submitError && (
      <div
        className="
          flex
          items-start
          gap-4
          rounded-[1.5rem]
          border
          border-red-500/20
          bg-red-500/10
          p-5
          backdrop-blur-xl
        "
      >
        <FiAlertCircle
          className="
            mt-0.5
            shrink-0
            text-red-400
          "
        />

        <div>
          <h4
            className="
              text-sm
              font-semibold
              text-red-200
            "
          >
            Authentication Failed
          </h4>

          <p
            className="
              mt-1
              text-sm
              text-red-300
            "
          >
            {submitError}
          </p>
        </div>
      </div>
    )}

    {/* Email Card */}

    <div
      className="
        rounded-[1.75rem]
        border
        border-[#322214]
        bg-[#18110b]
        p-5
      "
    >
      <label
        htmlFor="email"
        className="
          mb-3
          flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-[#f2e7d5]
        "
      >
        <FiMail className="text-[#d4af37]" />
        Email Address
      </label>

      <div className="relative">
        <FiMail
          className="
            pointer-events-none
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-[#b6925b]
          "
        />

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="
            w-full
            rounded-2xl
            border
            border-[#4a3520]
            bg-[#120d08]
            py-4
            pl-14
            pr-5
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-[#7d6b55]
            focus:border-[#d4af37]
            focus:ring-4
            focus:ring-[#d4af37]/10
          "
        />
      </div>

      {errors.email && (
        <p
          className="
            mt-3
            text-sm
            text-red-400
          "
        >
          {errors.email}
        </p>
      )}

      <p
        className="
          mt-3
          text-xs
          leading-6
          text-[#8f7b63]
        "
      >
        Use your registered account email
        to access your premium shopping
        experience.
      </p>
    </div>

        {/* Password Card */}

    <div
      className="
        rounded-[1.75rem]
        border
        border-[#322214]
        bg-[#18110b]
        p-5
      "
    >
      <label
        htmlFor="password"
        className="
          mb-3
          flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-[#f2e7d5]
        "
      >
        <FiLock className="text-[#d4af37]" />
        Password
      </label>

      <div className="relative">
        <FiLock
          className="
            pointer-events-none
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-[#b6925b]
          "
        />

        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="
            w-full
            rounded-2xl
            border
            border-[#4a3520]
            bg-[#120d08]
            py-4
            pl-14
            pr-14
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-[#7d6b55]
            focus:border-[#d4af37]
            focus:ring-4
            focus:ring-[#d4af37]/10
          "
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              (previous) => !previous
            )
          }
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-[#b6925b]
            transition-colors
            duration-300
            hover:text-[#d4af37]
          "
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
        >
          {showPassword ? (
            <FiEyeOff size={18} />
          ) : (
            <FiEye size={18} />
          )}
        </button>
      </div>

      {errors.password && (
        <p
          className="
            mt-3
            text-sm
            text-red-400
          "
        >
          {errors.password}
        </p>
      )}

      <p
        className="
          mt-3
          text-xs
          leading-6
          text-[#8f7b63]
        "
      >
        Your credentials are encrypted and
        securely protected during every
        session.
      </p>
    </div>

    {/* Remember Me + Forgot Password */}

    <div
      className="
        rounded-[1.75rem]
        border
        border-[#322214]
        bg-[#18110b]
        p-5
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <label
          htmlFor="rememberMe"
          className="
            flex
            cursor-pointer
            items-center
            gap-3
          "
        >
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="
              h-4
              w-4
              rounded
              border-[#4a3520]
              bg-[#120d08]
              text-[#d4af37]
              focus:ring-[#d4af37]
            "
          />

          <span
            className="
              text-sm
              text-[#c8b79d]
            "
          >
            Remember me on this device
          </span>
        </label>

        <Link
          to="/forgot-password"
          className="
            text-sm
            font-semibold
            text-[#d4af37]
            transition-colors
            duration-300
            hover:text-[#f1cd57]
          "
        >
          Forgot Password?
        </Link>
      </div>
    </div>

    {/* Security Trust Card */}

    <div
      className="
        rounded-[1.75rem]
        border
        border-[#322214]
        bg-gradient-to-br
        from-[#1b130c]
        to-[#120c07]
        p-5
      "
    >
      <div
        className="
          flex
          items-start
          gap-4
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-[#4a3520]
            bg-[#21160d]
          "
        >
          <FiShield
            className="
              text-lg
              text-[#d4af37]
            "
          />
        </div>

        <div>
          <h4
            className="
              font-semibold
              text-white
            "
          >
            Secure Member Authentication
          </h4>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-[#b7a48d]
            "
          >
            Your account benefits from
            encrypted authentication,
            secure session management,
            and protected checkout access.
          </p>
        </div>
      </div>
    </div>

    {/* Login Button */}

    <button
      type="submit"
      disabled={isSubmitting}
      className="
        group
        relative
        flex
        w-full
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-[1.35rem]
        border
        border-[#d4af37]
        bg-gradient-to-r
        from-[#c89b3c]
        via-[#d4af37]
        to-[#e3bf58]
        px-6
        py-4.5
        font-semibold
        text-[#140d08]
        shadow-[0_20px_60px_rgba(212,175,55,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_80px_rgba(212,175,55,0.35)]
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      <span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {isSubmitting ? (
        <>
          <span
            className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-[#140d08]
              border-t-transparent
            "
          />

          Signing In...
        </>
      ) : (
        <>
          Sign In

          <FiArrowRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </>
      )}
    </button>

    {/* Register Card */}

    <div
      className="
        rounded-[1.75rem]
        border
        border-[#322214]
        bg-[#18110b]
        p-6
        text-center
      "
    >
      <div
        className="
          mb-3
          flex
          items-center
          justify-center
          gap-2
        "
      >
        <FiCheckCircle
          className="
            text-[#d4af37]
          "
        />

        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#d4af37]
          "
        >
          New Member
        </span>
      </div>

      <p
        className="
          text-sm
          text-[#b7a48d]
        "
      >
        New to Elegant?
      </p>

      <Link
        to="/register"
        className="
          mt-3
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#d4af37]
          transition-all
          duration-300
          hover:gap-3
          hover:text-[#f1cd57]
        "
      >
        Create an Account
        <FiArrowRight />
      </Link>
    </div>
  </form>
);
}

export default LoginForm;
