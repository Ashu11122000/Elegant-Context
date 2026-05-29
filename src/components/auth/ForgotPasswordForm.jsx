import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCheckCircle,
  FiMail,
  FiSend,
  FiShield,
  FiLock,
} from "react-icons/fi";

function ForgotPasswordForm() {
  const [email, setEmail] =
    useState("");

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const validateEmail = () => {
    const trimmedEmail =
      email.trim();

    if (!trimmedEmail) {
      return "Email address is required.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        trimmedEmail
      )
    ) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setError("");

    const validationError =
      validateEmail();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsSubmitting(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setSuccess(true);
    } catch (submitError) {
      setError(
        submitError?.message ||
          "Unable to process your request."
      );
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
            Reset Link Sent
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
            If an account exists for
            <span className="mx-1 font-medium text-[#d4af37]">
              {email}
            </span>
            We&apos;ve sent secure password recovery instructions.
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
              Secure Recovery Process
            </span>
          </div>

          <p className="text-sm leading-6 text-[#b7a48d]">
            For your protection, we only
            send reset instructions to
            verified accounts.
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
          Back to Login
        </Link>
      </div>
    );
  }

    return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-7"
    >
      {error && (
        <div
          className="
            flex
            items-start
            gap-3
            rounded-[1.5rem]
            border
            border-red-500/20
            bg-red-500/10
            px-5
            py-4
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
            <p
              className="
                text-sm
                font-medium
                text-red-200
              "
            >
              Verification Failed
            </p>

            <p
              className="
                mt-1
                text-sm
                text-red-300/90
              "
            >
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Email Input Card */}
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
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(
                event.target.value
              );

              if (error) {
                setError("");
              }
            }}
            placeholder="Enter your registered email"
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

        <p
          className="
            mt-3
            text-xs
            leading-6
            text-[#8f7b63]
          "
        >
          Enter the email associated with
          your account to receive a secure
          password recovery link.
        </p>
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
            <FiLock
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
              Protected Account Recovery
            </h4>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#b7a48d]
              "
            >
              Password reset requests are
              encrypted and processed
              securely to protect your
              account and personal data.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
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
          shadow-[0_20px_50px_rgba(212,175,55,0.25)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_25px_70px_rgba(212,175,55,0.35)]
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

            Sending Secure Link...
          </>
        ) : (
          <>
            Send Reset Link

            <FiSend
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </>
        )}
      </button>

      {/* Bottom Login Card */}
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
        <p
          className="
            text-sm
            text-[#b7a48d]
          "
        >
          Remember your password?
        </p>

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
          <FiArrowLeft />
          Back to Login
        </Link>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;