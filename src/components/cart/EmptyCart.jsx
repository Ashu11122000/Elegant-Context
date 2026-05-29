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
      description: "Protected payments & trusted checkout",
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping service",
    },
    {
      icon: FiAward,
      title: "Premium Quality",
      description: "Curated luxury products and brands",
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
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[#3a2816] bg-[linear-gradient(to_bottom,#171008,#120b05,#0d0703)] shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
      {/* Ambient Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,120,0.08),transparent_40%)]" />
      </div>

      <div className="relative z-10 p-8 sm:p-10 lg:p-14">
        <div className="mx-auto max-w-5xl">
          {/* Top Hero */}
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-amber-500/20 bg-gradient-to-br from-[#2a1c10] to-[#171008]">
                <FiShoppingBag className="text-5xl text-amber-400" />
              </div>
            </div>

            {/* Badge */}
            <span className="mb-6 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              Luxury Shopping Experience
            </span>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-400">
              {description}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to={buttonLink}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-8 py-4 font-bold text-black shadow-[0_15px_40px_rgba(245,158,11,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                {buttonText}

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-2xl border border-[#322214] bg-[#171008] px-8 py-4 font-medium text-stone-300 transition-all duration-300 hover:border-amber-500/30 hover:text-amber-300"
              >
                Browse Best Sellers
              </Link>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-[#2d2014] bg-[#171008]/80 p-5 text-center backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-amber-300">
                  {item.value}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[1.75rem] border border-[#2d2014] bg-[#171008]/80 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
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

          {/* Premium Notice */}
          <div className="mt-12 rounded-[2rem] border border-amber-500/15 bg-amber-500/5 p-6">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                <FiStar className="text-xl text-amber-300" />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Curated Luxury Collections
                </h4>

                <p className="mt-1 text-sm text-stone-400">
                  Explore premium fashion, exclusive accessories, and timeless pieces carefully selected for discerning shoppers.
                </p>
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