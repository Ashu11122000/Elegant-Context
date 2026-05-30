import { useNavigate } from "react-router-dom";
import {
  FiAward,
  FiCalendar,
  FiEdit2,
  FiMail,
  FiPhone,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import Layout from "../components/layout/Layout";

import AccountSidebar from "../components/accounts/AccountSidebar";
import ProfileCard from "../components/accounts/ProfileCard";

import useAuth from "../hooks/useAuth";

function ProfilePage() {
  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEditProfile = () => {
    console.log("Edit Profile");
  };

  const handleChangeAvatar = () => {
    console.log("Change Avatar");
  };

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
              -bottom-40
              -left-20
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
          <section
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
                -right-24
                -top-24
                h-72
                w-72
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
                  Premium Identity Center
                </span>
              </div>

              <h1
                className="
                  mt-6
                  text-4xl
                  font-bold
                  leading-tight
                  text-white
                  lg:text-6xl
                "
              >
                Profile &
                <span className="text-[#d9bf87]">
                  {" "}
                  Membership Hub
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
                Manage your identity, membership,
                rewards, preferences, and account
                security from one premium dashboard.
              </p>
            </div>
          </section>

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

              <section
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#6b4f2c]/35
                  bg-[linear-gradient(180deg,rgba(28,20,15,0.98)_0%,rgba(15,10,7,1)_100%)]
                  shadow-[0_35px_120px_rgba(0,0,0,0.65)]
                "
              >
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
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <FiUser
                      size={20}
                      className="text-[#c6a769]"
                    />

                    <div>
                      <h2
                        className="
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        Personal Information
                      </h2>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-zinc-400
                        "
                      >
                        Identity and account details
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="
                    grid
                    gap-5
                    p-7
                    md:grid-cols-2
                  "
                >
                  {[
                    {
                      label: "Full Name",
                      value:
                        user?.name ||
                        "Elegant Customer",
                      icon: FiUser,
                    },
                    {
                      label: "Email Address",
                      value:
                        user?.email ||
                        "member@elegant.com",
                      icon: FiMail,
                    },
                    {
                      label: "Phone Number",
                      value:
                        user?.phone ||
                        "+91 00000 00000",
                      icon: FiPhone,
                    },
                    {
                      label: "Member Since",
                      value:
                        user?.memberSince ||
                        "January 2026",
                      icon: FiCalendar,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="
                          rounded-[1.5rem]
                          border
                          border-white/10
                          bg-black/20
                          p-5
                        "
                      >
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#c6a769]/10
                            text-[#c6a769]
                          "
                        >
                          <Icon size={20} />
                        </div>

                        <p
                          className="
                            mt-4
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-zinc-500
                          "
                        >
                          {item.label}
                        </p>

                        <h3
                          className="
                            mt-2
                            break-words
                            text-lg
                            font-semibold
                            text-white
                          "
                        >
                          {item.value}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </section>

                            <section
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#6b4f2c]/35
                  bg-[linear-gradient(180deg,rgba(28,20,15,0.98)_0%,rgba(15,10,7,1)_100%)]
                  shadow-[0_35px_120px_rgba(0,0,0,0.65)]
                "
              >
                <div
                  className="
                    border-b
                    border-white/10
                    px-7
                    py-6
                  "
                >
                  <h2
                    className="
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    Membership Details
                  </h2>
                </div>

                <div className="p-7">
                  <div
                    className="
                      rounded-[2rem]
                      border
                      border-[#c6a769]/20
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
                        gap-5
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                      "
                    >
                      <div className="flex gap-4">
                        <div
                          className="
                            flex
                            h-16
                            w-16
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#c6a769]
                            text-[#120d09]
                          "
                        >
                          <FiAward size={28} />
                        </div>

                        <div>
                          <div
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-[#c6a769]/20
                              bg-[#c6a769]/10
                              px-3
                              py-1.5
                            "
                          >
                            <FiStar
                              size={11}
                              className="text-[#c6a769]"
                            />

                            <span
                              className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[#c6a769]
                              "
                            >
                              Elite Membership
                            </span>
                          </div>

                          <h3
                            className="
                              mt-3
                              text-2xl
                              font-bold
                              text-white
                            "
                          >
                            {user?.membership ||
                              "Gold Member"}
                          </h3>

                          <p
                            className="
                              mt-2
                              max-w-xl
                              text-sm
                              leading-relaxed
                              text-zinc-300
                            "
                          >
                            Access premium rewards,
                            priority support,
                            exclusive collections,
                            member-only events,
                            and luxury shopping perks.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <button
                          type="button"
                          onClick={
                            handleEditProfile
                          }
                          className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-[#c6a769]/30
                            bg-white/5
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-[#d9bf87]
                            transition-all
                            duration-300
                            hover:bg-white/10
                          "
                        >
                          <FiEdit2 size={16} />
                          Update Profile
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
                              Verified Account
                            </p>

                            <p className="text-xs text-zinc-500">
                              Premium member verification active
                            </p>
                          </div>
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-[#c6a769]/20
                            bg-[#c6a769]/10
                            px-5
                            py-4
                          "
                        >
                          <FiTrendingUp
                            size={18}
                            className="text-[#c6a769]"
                          />

                          <div>
                            <p className="text-sm font-semibold text-white">
                              Rewards Progress
                            </p>

                            <p className="text-xs text-zinc-500">
                              84% toward next tier
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProfilePage;