import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

import ROUTES from "../../config/routes";

const shopLinks = [
  {
    label: "New Arrivals",
    path: ROUTES.PRODUCTS,
  },
  {
    label: "Best Sellers",
    path: ROUTES.PRODUCTS,
  },
  {
    label: "Luxury Collection",
    path: ROUTES.PRODUCTS,
  },
  {
    label: "Accessories",
    path: ROUTES.PRODUCTS,
  },
];

const supportLinks = [
  {
    label: "Contact Us",
    path: ROUTES.CONTACT,
  },
  {
    label: "FAQs",
    path: ROUTES.FAQ,
  },
  {
    label: "Shipping & Returns",
    path: ROUTES.TERMS,
  },
  {
    label: "Privacy Policy",
    path: ROUTES.PRIVACY,
  },
];

const accountLinks = [
  {
    label: "My Account",
    path: ROUTES.LOGIN,
  },
  {
    label: "Wishlist",
    path: ROUTES.WISHLIST,
  },
  {
    label: "Cart",
    path: ROUTES.CART,
  },
  {
    label: "Orders",
    path: ROUTES.ORDERS,
  },
];

const trustPoints = [
  "Premium Quality Materials",
  "Luxury Packaging",
  "Secure Payments",
  "Fast Worldwide Shipping",
  "Easy Returns",
  "24/7 Customer Support",
];

const luxuryBenefits = [
  "Free Shipping",
  "Secure Checkout",
  "Premium Quality",
  "Easy Returns",
  "24/7 Support",
  "Luxury Packaging",
];

const popularCategories = [
  "Leather Belts",
  "Wallets",
  "Premium Bags",
  "Accessories",
  "Formal Collection",
  "Gift Collection",
];

const paymentMethods = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "UPI",
];

const socialLinks = [
  {
    icon: FiInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FiFacebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FiTwitter,
    href: "#",
    label: "Twitter",
  },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-500/10 bg-gradient-to-b from-stone-950 via-[#120f0a] to-black text-stone-300">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </div>

      <div className="app-container relative py-16 lg:py-20">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                Premium Luxury Brand
              </span>
            </div>

            <h3 className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-3xl font-black tracking-[0.25em] text-transparent">
              ELEGANT
            </h3>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-400">
              Discover timeless luxury fashion crafted with
              elegance, sophistication, and modern aesthetics.
              Experience premium quality collections designed for
              refined lifestyles.
            </p>

            <p className="mt-5 max-w-md text-sm italic text-amber-300/80">
              &ldquo;Luxury is found in the details.&rdquo;
            </p>

            {/* Stats */}
            <div className="mt-8 grid max-w-md grid-cols-3 gap-5">
              <div>
                <h4 className="text-3xl font-black text-amber-100">
                  10K+
                </h4>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-500">
                  Customers
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-amber-100">
                  500+
                </h4>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-500">
                  Products
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-amber-100">
                  4.9★
                </h4>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-500">
                  Rating
                </p>
              </div>
            </div>

 {/* Contact Cards */}
<div className="mt-8 space-y-5">
  {/* Email */}
  <div className="group flex w-full items-center gap-5 rounded-[1.8rem] border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05] hover:shadow-[0_15px_40px_rgba(251,191,36,0.08)]">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
      <FiMail size={20} />
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-500">
        Email Support
      </p>

      <p className="mt-2 break-all text-base font-semibold text-stone-100">
        support@elegantcontext.com
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="group flex w-full items-center gap-5 rounded-[1.8rem] border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05] hover:shadow-[0_15px_40px_rgba(251,191,36,0.08)]">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
      <FiPhone size={20} />
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-stone-500">
        Customer Care
      </p>

      <p className="mt-2 text-base font-semibold text-stone-100">
        +91 98765 43210
      </p>
    </div>
  </div>
</div>
</div>

          {/* Shop Links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

              <h4 className="text-lg font-bold text-amber-100">
                Shop
              </h4>
            </div>

            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center justify-between rounded-2xl px-3 py-3 text-sm text-stone-400 transition-all duration-300 hover:bg-white/[0.03] hover:text-amber-100"
                  >
                    <span>{link.label}</span>

                    <FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

                    {/* Support Links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

              <h4 className="text-lg font-bold text-amber-100">
                Support
              </h4>
            </div>

            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center justify-between rounded-2xl px-3 py-3 text-sm text-stone-400 transition-all duration-300 hover:bg-white/[0.03] hover:text-amber-100"
                  >
                    <span>{link.label}</span>

                    <FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

              <h4 className="text-lg font-bold text-amber-100">
                Why Choose Us
              </h4>
            </div>

            <div className="space-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]"
                >
                  <span className="mt-0.5 text-amber-300">
                    ✓
                  </span>

                  <span className="text-sm leading-relaxed text-stone-400">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Account */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

              <h4 className="text-lg font-bold text-amber-100">
                Account
              </h4>
            </div>

            <ul className="space-y-4">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center justify-between rounded-2xl px-3 py-3 text-sm text-stone-400 transition-all duration-300 hover:bg-white/[0.03] hover:text-amber-100"
                  >
                    <span>{link.label}</span>

                    <FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Follow Us */}
            <div className="mt-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">
                Follow Us
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-stone-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-amber-500/10 hover:text-[#2B1D0E]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-yellow-200/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <Icon
                        size={18}
                        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

                {/* ================= FULL WIDTH MEMBERS CLUB ================= */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-amber-500/10 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_40%)]" />

            <div className="relative z-10 px-8 py-10 lg:px-14 lg:py-12">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-amber-200">
                  Members Club
                </p>

                <h3 className="mt-4 text-3xl font-black text-amber-50 sm:text-4xl">
                  Exclusive Luxury Drops
                </h3>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
                  Unlock priority access to limited collections,
                  exclusive member benefits, luxury releases,
                  and curated premium fashion experiences.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Early Access",
                    "Limited Editions",
                    "VIP Discounts",
                    "Private Collections",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/5 bg-white/[0.04] px-5 py-4 text-sm font-medium text-amber-100 backdrop-blur-xl"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-500/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-500/20"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LUXURY BENEFITS STRIP ================= */}
        <div className="mt-12">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {luxuryBenefits.map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5 text-center backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]"
              >
                <div className="mb-3 text-lg text-amber-300">
                  ✦
                </div>

                <span className="text-sm font-medium text-stone-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= POPULAR CATEGORIES ================= */}
        <div className="mt-16 border-t border-white/5 pt-10">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Popular Categories
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {popularCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-amber-500/10 bg-white/[0.03] px-5 py-3 text-xs font-medium text-stone-300 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-500/10 hover:text-amber-100"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* ================= ACCEPTED PAYMENTS ================= */}
        <div className="mt-12 text-center">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Accepted Payments
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="rounded-xl border border-white/5 bg-white/[0.03] px-5 py-3 text-sm font-medium text-stone-300 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-500/10 hover:text-amber-100"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="relative mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <p className="text-center text-sm text-stone-500 lg:text-left">
              © 2026 Elegant Context. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
                Secure Checkout
              </div>

              <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-200">
                Premium Quality
              </div>

              <div className="rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-300">
                Easy Returns
              </div>

              <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300">
                Worldwide Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;