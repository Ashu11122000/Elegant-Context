import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiShoppingBag,
  FiShield,
  FiTruck,
  FiAward,
  FiStar,
} from "react-icons/fi";

function EmptyCart({
  title = "Your Cart Is Empty",
  description = "Looks like you haven't added any premium pieces to your cart yet. Explore our luxury collections and discover exceptional products crafted for elegance, quality, and timeless style.",
  buttonText = "Explore Collections",
  buttonLink = "/products",
}) {
  const benefits = [
    {
      icon: FiShield,
      title: "Secure Shopping",
      description:
        "Protected payments with advanced encryption and trusted checkout.",
    },
    {
      icon: FiTruck,
      title: "Priority Delivery",
      description:
        "Fast and reliable shipping with real-time order tracking.",
    },
    {
      icon: FiAward,
      title: "Premium Quality",
      description:
        "Curated luxury products selected for exceptional craftsmanship.",
    },
  ];

  const stats = [
    {
      label: "Premium Products",
      value: "500+",
    },
    {
      label: "Happy Customers",
      value: "10K+",
    },
    {
      label: "Collections",
      value: "50+",
    },
    {
      label: "Quality Rating",
      value: "4.9★",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[3rem]
        border
        border-white/[0.08]
        bg-[linear-gradient(180deg,#181008_0%,#120b05_55%,#0d0905_100%)]
        shadow-[0_40px_120px_rgba(0,0,0,0.55)]
      "
    >
      {/* Luxury Ambient Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-[350px] w-[350px] rounded-full bg-amber-500/10 blur-[140px]" />

        <div className="absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,120,0.08),transparent_40%)]" />
      </div>

      {/* Inner Border */}
      <div className="absolute inset-[1px] rounded-[2.95rem] border border-white/[0.04]" />

      <div className="relative z-10 p-8 sm:p-10 lg:p-14 xl:p-16">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center">
            {/* Premium Icon */}
            <div className="relative mb-10">
              <div className="absolute inset-0 rounded-[2rem] bg-amber-500/20 blur-3xl" />

              <div
                className="
                  relative
                  flex
                  h-32
                  w-32
                  items-center
                  justify-center
                  rounded-[2rem]
                  border
                  border-amber-500/20
                  bg-gradient-to-br
                  from-[#2a1c10]
                  to-[#171008]
                "
              >
                <FiShoppingBag className="text-6xl text-amber-300" />
              </div>
            </div>

            {/* Premium Badge */}
            <div className="mb-7 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                Luxury Shopping Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-400 sm:text-lg">
              {description}
            </p>

            {/* CTA Area */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                to={buttonLink}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-[1.8rem]
                  bg-gradient-to-r
                  from-amber-400
                  via-yellow-400
                  to-amber-500
                  px-9
                  py-5
                  font-bold
                  text-black
                  shadow-[0_20px_50px_rgba(245,158,11,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_30px_70px_rgba(245,158,11,0.45)]
                "
              >
                <span
                  className="
                    absolute
                    inset-y-0
                    left-[-120%]
                    w-1/2
                    skew-x-12
                    bg-white/30
                    transition-all
                    duration-1000
                    group-hover:left-[140%]
                  "
                />

                <span className="relative z-10">
                  {buttonText}
                </span>

                <FiArrowRight
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </Link>

              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-[1.8rem]
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  px-9
                  py-5
                  font-medium
                  text-stone-300
                  transition-all
                  duration-300
                  hover:border-amber-500/20
                  hover:bg-white/[0.05]
                  hover:text-amber-300
                "
              >
                Browse Best Sellers
              </Link>
            </div>
          </div>

                    {/* Premium Statistics */}
          <div className="mt-16">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-white">
                Why Customers Choose Us
              </h3>

              <p className="mt-2 text-sm text-stone-400">
                Trusted by thousands of shoppers seeking premium quality and exceptional service.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/[0.08]
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]
                    p-6
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-amber-500/20
                  "
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.08),transparent_50%)]" />

                  <div className="relative">
                    <p className="text-4xl font-black text-amber-300">
                      {item.value}
                    </p>

                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-stone-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Benefits */}
          <div className="mt-14">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-white">
                Premium Shopping Benefits
              </h3>

              <p className="mt-2 text-sm text-stone-400">
                Every order comes with trusted service, premium support, and exceptional quality.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-white/[0.08]
                      bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]
                      p-7
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-amber-500/20
                    "
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_50%)]" />

                    <div className="relative">
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-[1.4rem]
                          border
                          border-amber-500/20
                          bg-amber-500/10
                        "
                      >
                        <Icon className="text-2xl text-amber-300" />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-white">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-stone-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Luxury Notice Banner */}
          <div className="mt-14">
            <div
              className="
                overflow-hidden
                rounded-[2.5rem]
                border
                border-amber-500/15
                bg-gradient-to-br
                from-amber-500/10
                to-transparent
                p-7
              "
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-[1.4rem]
                    border
                    border-amber-500/20
                    bg-amber-500/10
                  "
                >
                  <FiStar className="text-2xl text-amber-300" />
                </div>

                <div className="min-w-0">
                  <div className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                      Curated Collection
                    </span>
                  </div>

                  <h4 className="mt-3 text-xl font-bold text-white">
                    Discover Exceptional Products
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-stone-400">
                    Explore premium fashion, luxury accessories,
                    exclusive collections, and timeless essentials
                    carefully selected to elevate your lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

EmptyCart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default EmptyCart;