import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiStar,
  FiAward,
  FiShoppingBag,
  FiShield,
  FiTruck,
  FiBookmark,
} from "react-icons/fi";

function EmptyWishlist({
  title = "Your Luxury Wishlist Awaits",
  description = "Create your personal collection of premium fashion, luxury accessories, and timeless essentials. Save the pieces you love and return anytime to complete your perfect wardrobe.",
  buttonText = "Explore Collections",
  buttonLink = "/products",
  className = "",
}) {
  const benefits = [
    {
      icon: FiBookmark,
      title: "Save Favorites",
      description:
        "Keep track of products you love and revisit them anytime.",
    },
    {
      icon: FiAward,
      title: "Premium Selection",
      description:
        "Curated collections featuring luxury quality products.",
    },
    {
      icon: FiShoppingBag,
      title: "Smart Shopping",
      description:
        "Compare, save, and purchase when the time is right.",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Luxury Products",
    },
    {
      value: "50+",
      label: "Collections",
    },
    {
      value: "10K+",
      label: "Happy Customers",
    },
    {
      value: "4.9★",
      label: "Customer Rating",
    },
  ];

  return (
    <section
      className={`
        relative
        overflow-hidden
        rounded-[2.75rem]
        border
        border-[#322214]
        bg-[linear-gradient(180deg,#171008_0%,#120b05_55%,#0c0703_100%)]
        shadow-[0_40px_120px_rgba(0,0,0,0.55)]
        ${className}
      `}
    >
      {/* Ambient Luxury Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,120,0.08),transparent_45%)]" />
      </div>

      {/* Top Luxury Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      <div className="relative z-10 p-8 sm:p-10 lg:p-14 xl:p-16">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center">
            {/* Premium Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              <FiStar size={12} />
              Luxury Wishlist Experience
            </div>

            {/* Luxury Icon */}
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-3xl" />

              <div
                className="
                  relative
                  flex
                  h-32
                  w-32
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-amber-500/20
                  bg-[linear-gradient(to_bottom,#2b1d10,#171008)]
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                "
              >
                <FiHeart className="text-5xl text-amber-300" />
              </div>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-4xl
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
                xl:text-6xl
              "
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-3xl
                text-base
                leading-relaxed
                text-stone-400
                sm:text-lg
              "
            >
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to={buttonLink}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-amber-400
                  via-yellow-400
                  to-amber-500
                  px-8
                  py-4
                  font-bold
                  text-black
                  shadow-[0_15px_40px_rgba(245,158,11,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                {buttonText}

                <FiArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#322214]
                  bg-[#171008]
                  px-8
                  py-4
                  font-medium
                  text-stone-300
                  transition-all
                  duration-300
                  hover:border-amber-500/30
                  hover:text-amber-300
                "
              >
                Browse Best Sellers
              </Link>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-[1.75rem]
                  border
                  border-[#2d2014]
                  bg-[#171008]/80
                  p-6
                  text-center
                  backdrop-blur-xl
                "
              >
                <p className="text-3xl font-bold text-amber-300">
                  {item.value}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    rounded-[2rem]
                    border
                    border-[#2d2014]
                    bg-[#171008]/80
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-amber-500/20
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-amber-500/20
                      bg-amber-500/10
                    "
                  >
                    <Icon className="text-xl text-amber-300" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Premium Trust Section */}
          <div
            className="
              mt-12
              rounded-[2rem]
              border
              border-[#2d2014]
              bg-[#171008]/70
              p-6
              backdrop-blur-xl
            "
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <FiShield className="text-emerald-400" />

                <span className="text-sm text-stone-300">
                  Secure Shopping Experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiTruck className="text-sky-400" />

                <span className="text-sm text-stone-300">
                  Fast & Reliable Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiAward className="text-amber-300" />

                <span className="text-sm text-stone-300">
                  Curated Premium Products
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-10 text-center">
            <p className="text-sm text-stone-500">
              Start building your dream collection and never lose track of the products you love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

EmptyWishlist.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  className: PropTypes.string,
};

export default EmptyWishlist;