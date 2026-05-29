import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
  FiLock,
  FiShield,
} from "react-icons/fi";

function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [submitError, setSubmitError] = useState("");

  const [success, setSuccess] = useState(false);

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

    const password = formData.password.trim();

    const confirmPassword = formData.confirmPassword.trim();

    if (!password) {
      validationErrors.password = "New password is required.";
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

      /*
        Future Backend Integration

        const token =
          searchParams.get("token");

        await authService.resetPassword({
          token,
          password: formData.password,
        });
      */

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSuccess(true);
    } catch (error) {
      setSubmitError(error?.message || "Unable to reset password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="space-y-8 text-center">
        <div
          className="
          relative
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-[2rem]
          border
          border-green-500/20
          bg-gradient-to-br
          from-green-500/15
          to-green-500/5
          shadow-[0_20px_60px_rgba(34,197,94,0.15)]
        "
        >
          <FiCheckCircle
            className="
            text-[2.75rem]
            text-green-400
          "
          />
        </div>

        <div>
          <h3
            className="
            text-3xl
            font-bold
            text-white
          "
          >
            Password Updated
          </h3>

          <p
            className="
            mx-auto
            mt-4
            max-w-md
            leading-7
            text-[#b7a48d]
          "
          >
            Your password has been successfully updated. You can now securely
            access your account using your new credentials.
          </p>
        </div>

        <div
          className="
          rounded-[1.75rem]
          border
          border-[#322214]
          bg-[#18110b]
          p-6
        "
        >
          <div
            className="
            mb-4
            flex
            items-center
            justify-center
            gap-2
          "
          >
            <FiShield className="text-[#d4af37]" />

            <span
              className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#d4af37]
            "
            >
              Secure Account Recovery
            </span>
          </div>

          <p className="text-sm leading-6 text-[#b7a48d]">
            Your account security has been successfully restored.
          </p>
        </div>

        <Link
          to="/login"
          className="
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-[#d4af37]
          px-6
          py-3.5
          font-semibold
          text-[#d4af37]
          transition-all
          duration-300
          hover:bg-[#d4af37]
          hover:text-[#140d08]
        "
        >
          <FiArrowLeft />
          Go To Login
        </Link>
      </div>
    );
  }

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
            Password Reset Failed
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

    {/* New Password Card */}

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
        New Password
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
          placeholder="Create a new password"
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
          onClick={() => setShowPassword((prev) => !prev)}
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
        Choose a strong password to help protect your account and personal
        information.
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
          onClick={() => setShowConfirmPassword((prev) => !prev)}
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
        <p
          className="
          mt-3
          text-sm
          text-red-400
        "
        >
          {errors.confirmPassword}
        </p>
      )}
    </div>

    {/* Security Assurance Card */}

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
            Secure Password Protection
          </h4>

          <p
            className="
            mt-2
            text-sm
            leading-6
            text-[#b7a48d]
          "
          >
            Your credentials are encrypted and securely protected throughout the
            recovery process.
          </p>
        </div>
      </div>
    </div>

    {/* Reset Password Button */}

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
          Updating Password...
        </>
      ) : (
        <>Reset Password</>
      )}
    </button>

    {/* Back To Login Card */}

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
      <Link
        to="/login"
        className="
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
        <FiArrowLeft />
        Back to Login
      </Link>
    </div>
  </form>;
}

export default ResetPasswordForm;
