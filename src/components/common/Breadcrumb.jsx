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
      <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
        {breadcrumbItems.map((item, index) => {
          const isLast =
            index === breadcrumbItems.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <FiChevronRight
                  size={16}
                  className="text-stone-400"
                  aria-hidden="true"
                />
              )}

              {isLast || !item.path ? (
                <span
                  aria-current="page"
                  className="font-medium text-amber-900"
                >
                  {index === 0 && showHome ? (
                    <span className="flex items-center gap-1">
                      <FiHome
                        size={15}
                        aria-hidden="true"
                      />
                      {item.label}
                    </span>
                  ) : (
                    item.label
                  )}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="transition-colors duration-300 hover:text-amber-900"
                >
                  {index === 0 && showHome ? (
                    <span className="flex items-center gap-1">
                      <FiHome
                        size={15}
                        aria-hidden="true"
                      />
                      {item.label}
                    </span>
                  ) : (
                    item.label
                  )}
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