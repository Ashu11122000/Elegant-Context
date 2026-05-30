import { useNavigate } from "react-router-dom";
import {
  FiAward,
  FiShield,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

import Layout from "../components/layout/Layout";

import AccountSidebar from "../components/accounts/AccountSidebar";
import ProfileCard from "../components/accounts/ProfileCard";
import AccountStats from "../components/accounts/AccountStats";

import useAuth from "../hooks/useAuth";
import useWishlist from "../hooks/useWishlist";

function AccountPage() {
  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAuth();

  const {
    wishlistCount,
  } = useWishlist();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEditProfile = () => {
    navigate("/account/profile");
  };

  const handleChangeAvatar = () => {
    navigate("/account/profile");
  };

  const totalOrders =
    user?.orders?.length || 0;

  const savedAddresses =
    user?.addresses?.length || 0;

  const loyaltyStatus =
    user?.membership || "Gold Member";

  return (
    <Layout>
      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#0d0906]
          px-4
          py-8
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            absolute
            inset-0
            overflow-hidden
            pointer-events-none
          "
        >
          <div
            className="
              absolute
              -top-40
              right-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#c6a769]/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              -left-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#8a6334]/10
              blur-3xl
            "
          />
        </div>

        <section
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-[#6b4f2c]/35
              bg-[linear-gradient(180deg,rgba(28,20,15,0.98)_0%,rgba(15,10,7,1)_100%)]
              p-8
              shadow-[0_40px_120px_rgba(0,0,0,0.65)]
              lg:p-10
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#c6a769]/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#c6a769]/20
                  bg-[#c6a769]/10
                  px-5
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
                    tracking-[0.28em]
                    text-[#c6a769]
                  "
                >
                  Premium Account Center
                </span>
              </div>

                            <h1
                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-bold
                  leading-tight
                  text-white
                  lg:text-6xl
                "
              >
                Welcome Back,
                <span className="text-[#d9bf87]">
                  {" "}
                  {user?.name || "Member"}
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-3xl
                  text-base
                  leading-8
                  text-zinc-400
                "
              >
                Access your premium account dashboard,
                manage personal information, monitor
                orders, track membership rewards, and
                enjoy an elevated luxury shopping
                experience.
              </p>

              <div
                className="
                  mt-8
                  grid
                  gap-4
                  sm:grid-cols-2
                  xl:grid-cols-4
                "
              >
                <div
                  className="
                    rounded-[1.75rem]
                    border
                    border-white/10
                    bg-black/20
                    p-5
                  "
                >
                  <FiAward
                    size={22}
                    className="text-[#c6a769]"
                  />

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {loyaltyStatus}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Membership Status
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.75rem]
                    border
                    border-white/10
                    bg-black/20
                    p-5
                  "
                >
                  <FiTrendingUp
                    size={22}
                    className="text-emerald-400"
                  />

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {totalOrders}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Completed Orders
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.75rem]
                    border
                    border-white/10
                    bg-black/20
                    p-5
                  "
                >
                  <FiStar
                    size={22}
                    className="text-amber-400"
                  />

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {wishlistCount || 0}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Wishlist Products
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.75rem]
                    border
                    border-white/10
                    bg-black/20
                    p-5
                  "
                >
                  <FiShield
                    size={22}
                    className="text-sky-400"
                  />

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Secure
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Protected Account
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8" />

                    <div
            className="
              grid
              gap-8
              xl:grid-cols-[340px_1fr]
            "
          >
            <AccountSidebar
              user={user}
              onLogout={handleLogout}
            />

            <div className="space-y-8">
              <ProfileCard
                user={{
                  ...user,
                  memberSince:
                    user?.memberSince ||
                    "January 2026",
                }}
                onEditProfile={
                  handleEditProfile
                }
                onChangeAvatar={
                  handleChangeAvatar
                }
              />

              <AccountStats
                totalOrders={totalOrders}
                wishlistCount={
                  wishlistCount || 0
                }
                savedAddresses={
                  savedAddresses
                }
                loyaltyStatus={
                  loyaltyStatus
                }
              />

              <div
                className="
                  rounded-[2rem]
                  border
                  border-[#c6a769]/15
                  bg-gradient-to-r
                  from-[#c6a769]/10
                  via-[#c6a769]/5
                  to-transparent
                  p-6
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-[#c6a769]
                      "
                    >
                      Exclusive Benefits
                    </p>

                    <h3
                      className="
                        mt-2
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      Premium Member Rewards Active
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-2xl
                        text-sm
                        leading-relaxed
                        text-zinc-400
                      "
                    >
                      Enjoy priority support,
                      exclusive collections,
                      premium shipping benefits,
                      early-access product launches,
                      and loyalty rewards.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#c6a769]/20
                      bg-[#c6a769]/10
                      px-5
                      py-4
                    "
                  >
                    <p className="text-xs text-zinc-400">
                      Reward Progress
                    </p>

                    <h4 className="mt-1 text-2xl font-bold text-[#d9bf87]">
                      82%
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default AccountPage;