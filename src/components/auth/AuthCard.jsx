import PropTypes from "prop-types";
import { FiShield, FiCheckCircle } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";

function AuthCard({
  title,
  subtitle,
  children,
  footer,
  className = "",
}) {
  return (
    <div className="relative mx-auto w-full max-w-lg px-4 sm:px-0">
      {/* Luxury Background Glow */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent blur-3xl" />

      <div
        className={`
          relative
          overflow-hidden
          rounded-[2.5rem]
          border
          border-[#3f2b17]
          bg-[linear-gradient(180deg,#1b130b_0%,#120c07_45%,#0f0a06_100%)]
          shadow-[0_40px_120px_rgba(0,0,0,0.55)]
          backdrop-blur-2xl
          ${className}
        `}
      >
        {/* Top Luxury Accent */}
        <div className="h-[5px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        {/* Decorative Corner Glow */}
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#d4af37]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-[#d4af37]/5 blur-3xl" />

        {/* Inner Border */}
        <div className="absolute inset-[1px] rounded-[2.45rem] border border-white/[0.03]" />

        <div className="relative p-7 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="mb-10 text-center">
            {/* Brand Icon */}
            <div
              className="
                relative
                mx-auto
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-[1.75rem]
                border
                border-[#5b4328]
                bg-gradient-to-br
                from-[#2e1f11]
                via-[#24180d]
                to-[#171009]
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
              "
            >
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/[0.04] to-transparent" />

              <FaCrown className="relative text-[2rem] text-[#d4af37]" />
            </div>

            {/* Premium Badge */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#4a3520]
                bg-[#22170d]/90
                px-5
                py-2
                backdrop-blur-md
              "
            >
              <FiShield className="text-[#d4af37]" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#d4af37]
                "
              >
                Secure Luxury Access
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-3xl
                font-bold
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  leading-7
                  text-[#b7a48d]
                  sm:text-base
                "
              >
                {subtitle}
              </p>
            )}

            {/* Trust Indicators */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#312113]
                  bg-[#1c130c]
                  px-3.5
                  py-2
                "
              >
                <FiCheckCircle className="text-xs text-[#d4af37]" />

                <span className="text-xs text-[#b7a48d]">
                  Encrypted Security
                </span>
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#312113]
                  bg-[#1c130c]
                  px-3.5
                  py-2
                "
              >
                <FiCheckCircle className="text-xs text-[#d4af37]" />

                <span className="text-xs text-[#b7a48d]">
                  VIP Member Access
                </span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div
            className="
              rounded-[1.75rem]
              border
              border-[#2d2013]
              bg-[rgba(255,255,255,0.015)]
              p-5
              sm:p-6
            "
          >
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div
              className="
                mt-8
                border-t
                border-[#322214]
                pt-7
              "
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

AuthCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default AuthCard;