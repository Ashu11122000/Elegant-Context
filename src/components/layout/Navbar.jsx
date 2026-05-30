import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  FiCompass,
  FiHome,
  FiPackage,
} from "react-icons/fi";

import ROUTES from "../../config/routes";

const navLinks = [
  {
    path: ROUTES.HOME,
    label: "Home",
    icon: FiHome,
  },
  {
    path: ROUTES.PRODUCTS,
    label: "Products",
    icon: FiPackage,
  },
];

function Navbar({ className }) {
  return (
    <nav
      className={`
        hidden
        items-center
        gap-4
        lg:flex
        ${className || ""}
      `}
      aria-label="Primary Navigation"
    >
      {/* Premium Explore Capsule */}
      <div
        className="
          group
          relative
          hidden
          overflow-hidden
          rounded-full
          border
          border-amber-400/10
          bg-gradient-to-br
          from-[#1b140c]
          via-[#120d07]
          to-[#0a0806]
          px-4
          py-2
          shadow-[0_12px_40px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:border-amber-400/25
          hover:shadow-[0_12px_45px_rgba(251,191,36,0.15)]
          2xl:flex
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_40%)]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-amber-300/60
            to-transparent
          "
        />

        <div className="relative flex items-center gap-3">
          <div
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-amber-300
              via-yellow-400
              to-amber-500
              text-[#2B1D0E]
              shadow-[0_8px_20px_rgba(251,191,36,0.35)]
            "
          >
            <FiCompass size={15} />

            <div
              className="
                absolute
                inset-[3px]
                rounded-full
                border
                border-white/20
              "
            />
          </div>

          <div>
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-stone-500
              "
            >
              Explore
            </p>

            <p
              className="
                bg-gradient-to-r
                from-[#f8e7be]
                via-[#f6d58d]
                to-[#c89b3c]
                bg-clip-text
                text-sm
                font-bold
                text-transparent
              "
            >
              Luxury
            </p>
          </div>
        </div>
      </div>

      {/* Premium Icon Navigation */}
      <div
        className="
          relative
          flex
          items-center
          gap-3
          rounded-[32px]
          border
          border-white/[0.05]
          bg-white/[0.02]
          p-2
          shadow-[0_15px_50px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-[32px]
            bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_55%)]
          "
        />

                {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              title={link.label}
              className={({ isActive }) =>
                `
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? `
                        border-amber-400/20
                        bg-gradient-to-br
                        from-amber-500/20
                        via-amber-400/10
                        to-yellow-400/10
                        shadow-[0_10px_30px_rgba(251,191,36,0.18)]
                      `
                      : `
                        border-white/5
                        bg-[#090806]
                        hover:border-white/10
                        hover:bg-white/[0.03]
                      `
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_45%)]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-[62px]
                      w-[62px]
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className={`
                        relative
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? `
                              border-amber-300/30
                              bg-gradient-to-br
                              from-amber-300
                              via-yellow-400
                              to-amber-500
                              text-[#2B1D0E]
                              shadow-[0_10px_25px_rgba(251,191,36,0.30)]
                            `
                            : `
                              border-white/5
                              bg-[#16120d]
                              text-[#d6b36a]
                              group-hover:border-amber-400/20
                              group-hover:bg-[#1d160f]
                            `
                        }
                      `}
                    >
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-2xl
                          bg-gradient-to-br
                          from-white/10
                          to-transparent
                        "
                      />

                      <Icon
                        size={20}
                        className="relative z-10"
                      />
                    </div>
                  </div>
                </>
              )}
            </NavLink>
          );
        })}

                {/* Floating Labels */}
        <div
          className="
            absolute
            -bottom-9
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-4
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#7b6a48]
            xl:flex
          "
        >
          <span>Home</span>

          <div
            className="
              h-1
              w-1
              rounded-full
              bg-[#7b6a48]
            "
          />

          <span>Products</span>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: "",
};

export default Navbar;