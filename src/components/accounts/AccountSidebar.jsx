import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  FiChevronRight,
  FiHome,
  FiLogOut,
  FiMapPin,
  FiPackage,
  FiUser,
  FiShield,
  FiAward,
  FiStar,
} from "react-icons/fi";

function AccountSidebar({
  user,
  onLogout,
  className = "",
}) {
  const navigationItems = [
    {
      id: "dashboard",
      label: "Account Overview",
      path: "/account",
      icon: FiHome,
      description: "Monitor account activity and membership insights",
    },
    {
      id: "profile",
      label: "Profile Settings",
      path: "/account/profile",
      icon: FiUser,
      description: "Manage personal information and preferences",
    },
    {
      id: "orders",
      label: "Order History",
      path: "/account/orders",
      icon: FiPackage,
      description: "Track shipments and review purchases",
    },
    {
      id: "addresses",
      label: "Saved Addresses",
      path: "/account/addresses",
      icon: FiMapPin,
      description: "Manage delivery and billing destinations",
    },
  ];

  const userInitial =
    user?.name?.charAt(0)?.toUpperCase() || "E";

  return (
    <aside
      className={`
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-[#6b4f2c]/40
        bg-[linear-gradient(180deg,rgba(28,20,15,0.98)_0%,rgba(14,10,7,1)_100%)]
        shadow-[0_35px_120px_rgba(0,0,0,0.65)]
        backdrop-blur-xl
        ${className}
      `}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#c6a769]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-28
            -left-24
            h-72
            w-72
            rounded-full
            bg-[#8a6334]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(198,167,105,0.08),transparent_40%)]
          "
        />
      </div>

      <div className="relative z-10">
        <div
          className="
            border-b
            border-white/10
            px-6
            py-7
          "
        >
          <div
            className="
              rounded-[1.75rem]
              border
              border-[#c6a769]/20
              bg-white/[0.03]
              p-5
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  relative
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-[1.5rem]
                  border
                  border-[#c6a769]/30
                  bg-gradient-to-br
                  from-[#e2ca94]
                  via-[#c6a769]
                  to-[#9d7440]
                  text-2xl
                  font-bold
                  text-[#120d09]
                  shadow-[0_15px_40px_rgba(198,167,105,0.35)]
                "
              >
                {userInitial}

                <div
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0f0f0f]
                    bg-emerald-500
                    text-white
                  "
                >
                  <FiShield size={12} />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div
                  className="
                    mb-2
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#c6a769]/20
                    bg-[#c6a769]/10
                    px-3
                    py-1
                  "
                >
                  <FiAward
                    size={12}
                    className="text-[#c6a769]"
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#c6a769]
                    "
                  >
                    Elite Member
                  </span>
                </div>

                <h3 className="truncate text-xl font-bold text-white">
                  {user?.name || "Luxury Customer"}
                </h3>

                <p className="mt-1 truncate text-sm text-zinc-400">
                  {user?.email || "member@elegant.com"}
                </p>
              </div>
            </div>

                        <div
              className="
                mt-5
                grid
                grid-cols-3
                gap-3
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-3
                  py-3
                  text-center
                "
              >
                <p className="text-lg font-bold text-white">
                  24
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  Orders
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-3
                  py-3
                  text-center
                "
              >
                <p className="text-lg font-bold text-white">
                  4.9
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  Rating
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-3
                  py-3
                  text-center
                "
              >
                <p className="text-lg font-bold text-white">
                  VIP
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  Status
                </p>
              </div>
            </div>

            <div
              className="
                mt-5
                rounded-2xl
                border
                border-[#c6a769]/20
                bg-gradient-to-r
                from-[#c6a769]/10
                via-[#c6a769]/5
                to-transparent
                p-4
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c6a769]">
                    Loyalty Rewards
                  </p>

                  <h4 className="mt-1 text-sm font-semibold text-white">
                    Gold Tier Benefits Active
                  </h4>
                </div>

                <FiStar
                  className="text-[#c6a769]"
                  size={20}
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">
                    Annual Progress
                  </span>

                  <span className="text-xs font-semibold text-[#c6a769]">
                    78%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="
                      h-full
                      w-[78%]
                      rounded-full
                      bg-gradient-to-r
                      from-[#c6a769]
                      to-[#e2ca94]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="p-5">
          <ul className="space-y-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/account"}
                    className={({ isActive }) =>
                      `
                        group
                        flex
                        items-center
                        gap-4
                        rounded-[1.5rem]
                        border
                        px-4
                        py-4
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? `
                              border-[#c6a769]/40
                              bg-gradient-to-r
                              from-[#c6a769]/15
                              via-[#c6a769]/5
                              to-transparent
                              shadow-[0_10px_30px_rgba(198,167,105,0.12)]
                            `
                            : `
                              border-transparent
                              hover:border-white/10
                              hover:bg-white/[0.04]
                            `
                        }
                      `
                    }
                  >
                                        {({ isActive }) => (
                      <>
                        <div
                          className={`
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            transition-all
                            ${
                              isActive
                                ? "bg-[#c6a769] text-[#120d09]"
                                : "bg-white/5 text-[#c6a769]"
                            }
                          `}
                        >
                          <Icon size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4
                            className={`
                              text-sm
                              font-semibold
                              ${
                                isActive
                                  ? "text-white"
                                  : "text-zinc-300"
                              }
                            `}
                          >
                            {item.label}
                          </h4>

                          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                            {item.description}
                          </p>
                        </div>

                        <FiChevronRight
                          className={`
                            transition-transform
                            duration-300
                            ${
                              isActive
                                ? "text-[#c6a769]"
                                : "text-zinc-600 group-hover:translate-x-1"
                            }
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div
            className="
              mt-6
              border-t
              border-white/10
              pt-6
            "
          >
            <button
              type="button"
              onClick={onLogout}
              className="
                group
                flex
                w-full
                items-center
                gap-4
                rounded-[1.5rem]
                border
                border-red-500/20
                bg-red-500/[0.04]
                px-4
                py-4
                text-left
                transition-all
                duration-300
                hover:border-red-500/40
                hover:bg-red-500/[0.08]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-500/10
                  text-red-400
                "
              >
                <FiLogOut size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">
                  Secure Logout
                </p>

                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  End your current session and protect account access
                </p>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}

AccountSidebar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AccountSidebar;