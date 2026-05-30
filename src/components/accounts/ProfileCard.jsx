import PropTypes from "prop-types";
import {
  FiAward,
  FiCamera,
  FiEdit2,
  FiMail,
  FiUser,
  FiShield,
  FiStar,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";

function ProfileCard({
  user,
  onEditProfile,
  onChangeAvatar,
  className = "",
}) {
  const initials =
    user?.name
      ?.split(" ")
      ?.map((word) => word.charAt(0))
      ?.join("")
      ?.slice(0, 2)
      ?.toUpperCase() || "EC";

  return (
    <section
      className={`
        relative
        overflow-hidden
        rounded-[2.25rem]
        border
        border-[#6b4f2c]/40
        bg-[linear-gradient(180deg,rgba(28,20,15,0.98)_0%,rgba(15,10,7,1)_100%)]
        shadow-[0_40px_120px_rgba(0,0,0,0.65)]
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
            h-80
            w-80
            rounded-full
            bg-[#c6a769]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -left-24
            h-80
            w-80
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
            px-7
            py-6
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#c6a769]/20
              bg-[#c6a769]/10
              px-4
              py-2
            "
          >
            <FiStar
              size={12}
              className="text-[#c6a769]"
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#c6a769]
              "
            >
              Premium Member Profile
            </span>
          </div>

          <h2
            className="
              mt-4
              text-2xl
              font-bold
              text-white
            "
          >
            Account Identity Center
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-relaxed
              text-zinc-400
            "
          >
            Manage your profile, membership status,
            rewards access, and account personalization
            from one premium dashboard.
          </p>
        </div>

        <div
          className="
            flex
            flex-col
            gap-8
            p-7
            xl:flex-row
            xl:items-center
            xl:justify-between
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-6
              lg:flex-row
            "
          >
            <div className="relative shrink-0">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="
                    h-32
                    w-32
                    rounded-[2rem]
                    border
                    border-[#c6a769]/30
                    object-cover
                    shadow-[0_20px_50px_rgba(198,167,105,0.25)]
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                    rounded-[2rem]
                    border
                    border-[#c6a769]/30
                    bg-gradient-to-br
                    from-[#e2ca94]
                    via-[#c6a769]
                    to-[#9d7440]
                    text-4xl
                    font-bold
                    text-[#120d09]
                    shadow-[0_20px_50px_rgba(198,167,105,0.3)]
                  "
                >
                  {initials}
                </div>
              )}

              <div
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#0f0f0f]
                  bg-emerald-500
                  text-white
                "
              >
                <FiCheckCircle size={14} />
              </div>

              <button
                type="button"
                onClick={onChangeAvatar}
                className="
                  absolute
                  -bottom-2
                  -right-2
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#c6a769]/30
                  bg-[#1c1410]
                  text-[#c6a769]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-[#c6a769]
                "
              >
                <FiCamera size={16} />
              </button>
            </div>

                        <div className="text-center lg:text-left">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#c6a769]/20
                  bg-[#c6a769]/10
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#c6a769]
                "
              >
                <FiAward size={12} />
                Gold Elite Member
              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  text-white
                  lg:text-4xl
                "
              >
                {user?.name || "Elegant Customer"}
              </h2>

              <div
                className="
                  mt-5
                  space-y-3
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    lg:justify-start
                  "
                >
                  <FiMail
                    size={16}
                    className="text-[#c6a769]"
                  />

                  <span className="text-sm text-zinc-300">
                    {user?.email || "member@elegant.com"}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    lg:justify-start
                  "
                >
                  <FiUser
                    size={16}
                    className="text-[#c6a769]"
                  />

                  <span className="text-sm text-zinc-300">
                    Member Since{" "}
                    {user?.memberSince || "2026"}
                  </span>
                </div>
              </div>

              <div
                className="
                  mt-6
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
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p className="text-lg font-bold text-white">
                    VIP
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                    Tier
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p className="text-lg font-bold text-white">
                    98%
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                    Trust
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p className="text-lg font-bold text-white">
                    24/7
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>

                    <div
            className="
              flex
              flex-col
              gap-4
              xl:min-w-[320px]
            "
          >
            <div
              className="
                rounded-[1.75rem]
                border
                border-[#c6a769]/20
                bg-gradient-to-r
                from-[#c6a769]/10
                via-[#c6a769]/5
                to-transparent
                p-5
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c6a769]">
                    Membership Progress
                  </p>

                  <h3 className="mt-2 text-sm font-semibold text-white">
                    Elite Rewards Program
                  </h3>
                </div>

                <FiTrendingUp
                  size={20}
                  className="text-[#c6a769]"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">
                    Annual Activity
                  </span>

                  <span className="text-xs font-semibold text-[#c6a769]">
                    82%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="
                      h-full
                      w-[82%]
                      rounded-full
                      bg-gradient-to-r
                      from-[#c6a769]
                      to-[#e2ca94]
                    "
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onEditProfile}
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-[#c6a769]/30
                bg-gradient-to-r
                from-[#c6a769]
                via-[#d9bf87]
                to-[#b89255]
                px-6
                py-4
                font-semibold
                text-[#120d09]
                shadow-[0_15px_35px_rgba(198,167,105,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FiEdit2 size={16} />
              Edit Profile Settings
            </button>

            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-emerald-500/20
                bg-emerald-500/5
                px-5
                py-4
              "
            >
              <FiShield
                size={18}
                className="text-emerald-400"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  Verified Premium Account
                </p>

                <p className="text-xs text-zinc-500">
                  Identity and membership successfully verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    memberSince: PropTypes.string,
  }),
  onEditProfile: PropTypes.func,
  onChangeAvatar: PropTypes.func,
  className: PropTypes.string,
};

ProfileCard.defaultProps = {
  user: {},
  onEditProfile: () => {},
  onChangeAvatar: () => {},
  className: "",
};

export default ProfileCard;