import PropTypes from "prop-types";
import {
  FiAward,
  FiHeart,
  FiMapPin,
  FiPackage,
  FiTrendingUp,
  FiShield,
  FiStar,
} from "react-icons/fi";

function AccountStats({
  totalOrders = 0,
  wishlistCount = 0,
  savedAddresses = 0,
  loyaltyStatus = "Gold Member",
  className = "",
}) {
  const stats = [
    {
      id: "orders",
      title: "Total Orders",
      value: totalOrders,
      icon: FiPackage,
      accent:
        "from-[#c6a769]/20 via-[#c6a769]/10 to-transparent",
      iconBg:
        "bg-gradient-to-br from-[#c6a769] via-[#d9bf87] to-[#9d7440]",
      description:
        "Successfully completed premium purchases",
      insight: "+12% this quarter",
      badge: "Active",
    },
    {
      id: "wishlist",
      title: "Wishlist Items",
      value: wishlistCount,
      icon: FiHeart,
      accent:
        "from-[#8d5f39]/20 via-[#8d5f39]/10 to-transparent",
      iconBg:
        "bg-gradient-to-br from-[#8d5f39] to-[#6b472a]",
      description:
        "Luxury products saved for future purchases",
      insight: "Growing collection",
      badge: "Curated",
    },
    {
      id: "addresses",
      title: "Saved Addresses",
      value: savedAddresses,
      icon: FiMapPin,
      accent:
        "from-[#b89255]/20 via-[#b89255]/10 to-transparent",
      iconBg:
        "bg-gradient-to-br from-[#b89255] to-[#8f6d3c]",
      description:
        "Verified shipping and billing destinations",
      insight: "Fast checkout",
      badge: "Verified",
    },
    {
      id: "loyalty",
      title: "Loyalty Status",
      value: loyaltyStatus,
      icon: FiAward,
      accent:
        "from-[#d8b97a]/20 via-[#d8b97a]/10 to-transparent",
      iconBg:
        "bg-gradient-to-br from-[#d8b97a] to-[#b48d46]",
      description:
        "Exclusive membership benefits unlocked",
      insight: "Premium rewards active",
      badge: "Elite",
    },
  ];

  return (
    <section
      className={`
        relative
        ${className}
      `}
    >
      <div
        className="
          mb-6
          flex
          flex-col
          gap-4
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <span
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
              text-[11px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#c6a769]
            "
          >
            <FiStar size={12} />
            Account Analytics
          </span>

          <h2
            className="
              mt-4
              text-2xl
              font-bold
              text-white
            "
          >
            Membership Overview
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
            Monitor your account performance, rewards progress,
            purchases, and premium member activity.
          </p>
        </div>

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
            py-3
          "
        >
          <FiShield
            size={18}
            className="text-emerald-400"
          />

          <div>
            <p className="text-sm font-semibold text-white">
              Account Secure
            </p>

            <p className="text-xs text-zinc-500">
              Premium protection enabled
            </p>
          </div>
        </div>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
                {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#6b4f2c]/35
                bg-[linear-gradient(180deg,rgba(28,20,15,0.98)_0%,rgba(15,10,7,1)_100%)]
                p-6
                shadow-[0_25px_80px_rgba(0,0,0,0.5)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#c6a769]/40
                hover:shadow-[0_35px_100px_rgba(0,0,0,0.65)]
              "
            >
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${stat.accent}
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                `}
              />

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-28
                  w-28
                  rounded-full
                  bg-white/[0.03]
                  blur-2xl
                "
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div
                    className={`
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-[1.25rem]
                      text-white
                      shadow-[0_15px_35px_rgba(0,0,0,0.3)]
                      ${stat.iconBg}
                    `}
                  >
                    <Icon size={26} />
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#c6a769]/20
                      bg-[#c6a769]/10
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#c6a769]
                    "
                  >
                    {stat.badge}
                  </span>
                </div>

                <div className="mt-6">
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-zinc-500
                    "
                  >
                    {stat.title}
                  </p>

                  <div className="mt-3">
                    <h3
                      className="
                        break-words
                        text-3xl
                        font-bold
                        leading-none
                        text-white
                      "
                    >
                      {stat.value}
                    </h3>
                  </div>

                  <p
                    className="
                      mt-3
                      min-h-[42px]
                      text-sm
                      leading-relaxed
                      text-zinc-400
                    "
                  >
                    {stat.description}
                  </p>

                                    <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/5
                      bg-black/20
                      px-4
                      py-3
                    "
                  >
                    <div className="flex items-center gap-2">
                      <FiTrendingUp
                        size={14}
                        className="text-emerald-400"
                      />

                      <span
                        className="
                          text-xs
                          font-medium
                          text-zinc-300
                        "
                      >
                        {stat.insight}
                      </span>
                    </div>

                    <div
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-emerald-400
                      "
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

AccountStats.propTypes = {
  totalOrders: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  wishlistCount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  savedAddresses: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  loyaltyStatus: PropTypes.string,
  className: PropTypes.string,
};

AccountStats.defaultProps = {
  totalOrders: 0,
  wishlistCount: 0,
  savedAddresses: 0,
  loyaltyStatus: "Gold Member",
  className: "",
};

export default AccountStats;