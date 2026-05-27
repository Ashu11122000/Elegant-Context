// src/components/common/Breadcrumb.jsx

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiChevronRight, FiHome } from "react-icons/fi";
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
      className={`w-full ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2 rounded-2xl border border-stone-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md md:px-5">
        {breadcrumbItems.map((item, index) => {
          const isLast =
            index === breadcrumbItems.length - 1;

          const content =
            index === 0 && showHome ? (
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 via-orange-50 to-stone-100 text-amber-800 shadow-sm ring-1 ring-amber-200/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                  <FiHome
                    size={15}
                    aria-hidden="true"
                  />
                </span>
                <span>{item.label}</span>
              </span>
            ) : (
              item.label
            );

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-stone-400 shadow-sm"
                  aria-hidden="true"
                >
                  <FiChevronRight size={14} />
                </span>
              )}

              {isLast || !item.path ? (
                <span
                  aria-current="page"
                  className="group inline-flex items-center text-sm font-semibold tracking-wide text-amber-900"
                >
                  {content}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="group inline-flex items-center text-sm font-medium tracking-wide text-stone-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-amber-900"
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
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