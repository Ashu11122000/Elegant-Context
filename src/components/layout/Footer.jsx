import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
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
      {/* Premium Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Ambient Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Top Glow Border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </div>

      <div className="app-container relative py-16 lg:py-20">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div className="relative">
            {/* Luxury Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                Premium Luxury Brand
              </span>
            </div>

            {/* Logo */}
            <h3 className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-3xl font-black tracking-[0.25em] text-transparent">
              ELEGANT
            </h3>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-400">
              Discover timeless luxury fashion crafted with
              elegance, sophistication, and modern aesthetics.
              Experience premium quality collections designed for
              refined lifestyles.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                  <FiMail size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    Email Support
                  </p>

                  <p className="mt-1 text-sm font-medium text-stone-200">
                    support@elegantcontext.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                  <FiPhone size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    Customer Care
                  </p>

                  <p className="mt-1 text-sm font-medium text-stone-200">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                  <FiMapPin size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    Headquarters
                  </p>

                  <p className="mt-1 text-sm font-medium text-stone-200">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

              <h4 className="text-lg font-bold tracking-wide text-amber-100">
                Shop
              </h4>
            </div>

            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 text-sm font-medium text-stone-400 transition-all duration-300 hover:border-amber-500/10 hover:bg-white/[0.03] hover:text-amber-100"
                  >
                    <span>{link.label}</span>

                    <FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

              <h4 className="text-lg font-bold tracking-wide text-amber-100">
                Support
              </h4>
            </div>

            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 text-sm font-medium text-stone-400 transition-all duration-300 hover:border-amber-500/10 hover:bg-white/[0.03] hover:text-amber-100"
                  >
                    <span>{link.label}</span>

                    <FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account + Social */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

              <h4 className="text-lg font-bold tracking-wide text-amber-100">
                Account
              </h4>
            </div>

            <ul className="space-y-4">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 text-sm font-medium text-stone-400 transition-all duration-300 hover:border-amber-500/10 hover:bg-white/[0.03] hover:text-amber-100"
                  >
                    <span>{link.label}</span>

                    <FiArrowUpRight className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Section */}
            <div className="mt-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">
                Follow Us
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-stone-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/20 hover:bg-amber-500/10 hover:text-[#2B1D0E] hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-yellow-200/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <Icon
                        size={18}
                        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter Card */}
              <div className="relative mt-8 overflow-hidden rounded-3xl border border-amber-500/10 bg-gradient-to-br from-amber-400/15 via-yellow-500/10 to-transparent p-5 backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_45%)]" />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-200/70">
                    Members Club
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-amber-50">
                    Exclusive Luxury Drops
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-stone-300">
                    Get early access to premium collections,
                    limited editions, and curated fashion trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-16 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
            <p className="text-sm text-stone-500">
              © 2026 Elegant Context. All rights reserved.
            </p>

            {/* Trust Badges */}
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;