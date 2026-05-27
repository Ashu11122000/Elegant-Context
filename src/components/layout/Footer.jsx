import { Link } from "react-router-dom";
import {
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
    <footer className="border-t border-amber-900/20 bg-stone-950 text-stone-300">
      <div className="app-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-[0.2em] text-amber-200">
              ELEGANT
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Discover premium fashion, timeless luxury,
              and curated collections crafted for modern style.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FiMail className="text-amber-200" />
                <span>support@elegantcontext.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-amber-200" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMapPin className="text-amber-200" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-amber-100">
              Shop
            </h4>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-300 hover:text-amber-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-amber-100">
              Support
            </h4>

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-300 hover:text-amber-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-amber-100">
              Account
            </h4>

            <ul className="space-y-3">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-300 hover:text-amber-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-amber-100">
                Follow Us
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="rounded-full border border-stone-700 p-3 transition-all duration-300 hover:border-amber-500 hover:text-amber-200"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-stone-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-stone-500 md:flex-row">
            <p>
              © 2026 Elegant Context. All rights reserved.
            </p>

            <p>
              Secure checkout • Premium quality • Easy returns
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;