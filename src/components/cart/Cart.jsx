import PropTypes from "prop-types";

function Cart({
  children,
  className = "",
}) {
  return (
    <section
      className={`
        relative
        overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-[linear-gradient(180deg,rgba(24,24,24,0.96)_0%,rgba(15,15,15,0.98)_100%)]
        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        backdrop-blur-xl
        p-5
        sm:p-6
        lg:p-8
        xl:p-10
        space-y-8
        ${className}
      `}
    >
      {/* Premium Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      {/* Premium Top Border Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="space-y-8">
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