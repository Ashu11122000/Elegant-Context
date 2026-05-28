// src/components/common/Breadcrumb.jsx

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiHome,
} from "react-icons/fi";
import ROUTES from "../../config/routes";

function Breadcrumb({
  items = [],
  showHome = true,
  className = "",
}) {
  const breadcrumbItems = showHome
    ? [
        {
          label: "Home",
          path: ROUTES.HOME,
        },
        ...items,
      ]
    : items;

  if (!breadcrumbItems.length) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`relative w-full ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/40 bg-gradient-to-br from-[#fffdf9]/95 via-[#fffaf3]/90 to-[#f8f3ea]/95 shadow-[0_10px_40px_rgba(120,53,15,0.08)] backdrop-blur-2xl">
        {/* Luxury Glow Effects */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.10),transparent_32%)]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        <ol className="relative z-10 flex flex-wrap items-center gap-2 px-4 py-4 sm:px-5 lg:px-6">
          {breadcrumbItems.map((item, index) => {
            const isLast =
              index === breadcrumbItems.length - 1;

            const isHome =
              index === 0 && showHome;

            const content = isHome ? (
              <span className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-amber-200/40 bg-gradient-to-br from-amber-100 via-orange-50 to-stone-100 text-amber-900 shadow-[0_6px_18px_rgba(251,191,36,0.22)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_10px_28px_rgba(251,191,36,0.28)]">
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent opacity-70" />

                  <FiHome
                    size={16}
                    aria-hidden="true"
                    className="relative z-10"
                  />
                </span>

                <span className="relative">
                  <span className="bg-gradient-to-r from-stone-800 via-amber-900 to-stone-700 bg-clip-text text-transparent">
                    {item.label}
                  </span>
                </span>
              </span>
            ) : (
              <span className="relative">
                {item.label}
              </span>
            );

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {index > 0 && (
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200/70 bg-white/70 text-stone-400 shadow-sm backdrop-blur-md"
                    aria-hidden="true"
                  >
                    <FiChevronRight size={14} />
                  </span>
                )}

                {isLast || !item.path ? (
                  <span
                    aria-current="page"
                    className="group inline-flex items-center rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-50/80 to-orange-50/80 px-4 py-2 text-sm font-semibold tracking-[0.015em] text-amber-950 shadow-[0_4px_15px_rgba(251,191,36,0.10)] backdrop-blur-sm"
                  >
                    {content}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="group relative inline-flex items-center overflow-hidden rounded-full border border-transparent px-4 py-2 text-sm font-medium tracking-[0.015em] text-stone-600 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/60 hover:text-amber-950 hover:shadow-[0_8px_25px_rgba(120,53,15,0.12)]"
                  >
                    {/* Hover Glow */}
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/40 to-orange-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="relative z-10">
                      {content}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ),
  showHome: PropTypes.bool,
  className: PropTypes.string,
};

export default Breadcrumb;