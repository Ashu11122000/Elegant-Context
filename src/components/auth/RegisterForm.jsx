import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

import { useAuthContext } from "../../context/AuthContext";

const INITIAL_FORM = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm() {
  const navigate = useNavigate();

  const { register } = useAuthContext();

  const [formData, setFormData] = useState(INITIAL_FORM);

  const [errors, setErrors] = useState({});

  const [submitError, setSubmitError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
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

    const name = formData.name.trim();

    const email = formData.email.trim();

    const password = formData.password.trim();

    const confirmPassword = formData.confirmPassword.trim();

    if (!name) {
      validationErrors.name = "Full name is required.";
    } else if (name.length < 2) {
      validationErrors.name = "Please enter a valid name.";
    }

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

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
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

      await register({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      navigate("/");
    } catch (error) {
      setSubmitError(error?.message || "Unable to create your account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
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
              Registration Failed
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

      {/* Full Name Card */}

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
          htmlFor="name"
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
          <FiUser className="text-[#d4af37]" />
          Full Name
        </label>

        <div className="relative">
          <FiUser
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
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
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

        {errors.name && (
          <p className="mt-3 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

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
          <p className="mt-3 text-sm text-red-400">{errors.email}</p>
        )}

        <p
          className="
          mt-3
          text-xs
          leading-6
          text-[#8f7b63]
        "
        >
          Your email will be used for order updates, member benefits, and secure
          account access.
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
          Create Password
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
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a secure password"
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
            onClick={() => setShowPassword((previous) => !previous)}
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
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>

        {errors.password && (
          <p className="mt-3 text-sm text-red-400">{errors.password}</p>
        )}

        <p
          className="
          mt-3
          text-xs
          leading-6
          text-[#8f7b63]
        "
        >
          Use at least 6 characters with a combination of letters and numbers
          for stronger security.
        </p>
      </div>

      {/* Confirm Password Card */}

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
          htmlFor="confirmPassword"
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
          Confirm Password
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
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
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
            onClick={() => setShowConfirmPassword((previous) => !previous)}
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
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="mt-3 text-sm text-red-400">{errors.confirmPassword}</p>
        )}
      </div>

      {/* VIP Benefits Card */}

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
        <div className="flex gap-4">
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
              Member Benefits
            </h4>

            <ul
              className="
              mt-3
              space-y-2
              text-sm
              text-[#b7a48d]
            "
            >
              <li>• Faster checkout experience</li>
              <li>• Exclusive member offers</li>
              <li>• Order tracking & history</li>
              <li>• Premium shopping rewards</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Create Account Button */}

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
        py-[18px]
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
            Creating Account...
          </>
        ) : (
          <>
            Create Account
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

      {/* Sign In Card */}

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
            Existing Member
          </span>
        </div>

        <p className="text-sm text-[#b7a48d]">Already have an account?</p>

        <Link
          to="/login"
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
          Sign In
          <FiArrowRight />
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
