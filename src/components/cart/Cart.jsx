import PropTypes from "prop-types";

function Cart({
  children,
  className = "",
}) {
  return (
    <section
      className={`
        relative
        isolate
        overflow-hidden
        rounded-[2.5rem]

        border border-white/[0.08]
        bg-[linear-gradient(180deg,rgba(24,24,24,0.97)_0%,rgba(14,14,14,0.99)_100%)]

        shadow-[0_35px_120px_rgba(0,0,0,0.55)]

        backdrop-blur-2xl

        p-6
        sm:p-8
        lg:p-10
        xl:p-12

        ${className}
      `}
    >
      {/* Luxury Outer Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-amber-500/8 blur-[140px]" />

        <div className="absolute bottom-[-120px] left-[-120px] h-[380px] w-[380px] rounded-full bg-orange-500/8 blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      {/* Premium Inner Ring */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[2.45rem]
          border
          border-white/[0.05]
        "
      />

      {/* Glass Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_28%)]
        "
      />

      {/* Top Luxury Accent */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-amber-400/70
          to-transparent
        "
      />

      {/* Secondary Accent Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[2px]
          w-40
          -translate-x-1/2
          bg-amber-400/50
          blur-md
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1700px]
        "
      >
        <div
          className="
            space-y-10
            lg:space-y-12
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}

Cart.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Cart;