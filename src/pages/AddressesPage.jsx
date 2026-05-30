import { useNavigate } from "react-router-dom";
import {
  FiAward,
  FiHome,
  FiMapPin,
  FiPlus,
  FiShield,
  FiStar,
} from "react-icons/fi";

import Layout from "../components/layout/Layout";

import AccountSidebar from "../components/accounts/AccountSidebar";
import AddressBook from "../components/accounts/AddressBook";

import useAuth from "../hooks/useAuth";

function AddressesPage() {
  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAuth();

  const addresses =
    user?.addresses || [];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAddAddress = () => {
    console.log("Add Address");
  };

  const handleEditAddress = (
    address
  ) => {
    console.log(
      "Edit Address:",
      address
    );
  };

  const handleDeleteAddress = (
    address
  ) => {
    console.log(
      "Delete Address:",
      address
    );
  };

  const defaultAddress =
    addresses.find(
      (address) =>
        address.isDefault
    );

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
            pointer-events-none
            overflow-hidden
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
                <FiAward
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
                  Premium Address Center
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
                Address &
                <span className="text-[#d9bf87]">
                  {" "}
                  Delivery Hub
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
                Manage all shipping, billing,
                gifting, and preferred delivery
                destinations from one secure
                premium dashboard.
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
                <div className="p-6 lg:p-7">
                  <div
                    className="
                      mb-6
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div>
                      <h2
                        className="
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        Address Analytics
                      </h2>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-zinc-400
                        "
                      >
                        Quick overview of your
                        delivery infrastructure.
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
                        px-4
                        py-3
                      "
                    >
                      <FiShield
                        size={18}
                        className="text-emerald-400"
                      />

                      <span className="text-sm text-white">
                        Secure Storage
                      </span>
                    </div>
                  </div>

                  <div
                    className="
                      grid
                      gap-5
                      lg:grid-cols-3
                    "
                  >
                    <div
                      className="
                        rounded-[1.75rem]
                        border
                        border-white/10
                        bg-black/20
                        p-6
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#c6a769]/10
                          text-[#c6a769]
                        "
                      >
                        <FiMapPin size={24} />
                      </div>

                      <p className="mt-5 text-sm text-zinc-500">
                        Saved Addresses
                      </p>

                      <h3 className="mt-2 text-4xl font-bold text-white">
                        {addresses.length}
                      </h3>

                      <p className="mt-2 text-xs text-zinc-500">
                        Active delivery destinations
                      </p>
                    </div>

                    <div
                      className="
                        rounded-[1.75rem]
                        border
                        border-white/10
                        bg-black/20
                        p-6
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-emerald-500/10
                          text-emerald-400
                        "
                      >
                        <FiHome size={24} />
                      </div>

                      <p className="mt-5 text-sm text-zinc-500">
                        Default Location
                      </p>

                      <h3
                        className="
                          mt-2
                          truncate
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        {defaultAddress?.label ||
                          "Not Set"}
                      </h3>

                      <p className="mt-2 text-xs text-zinc-500">
                        Primary checkout destination
                      </p>
                    </div>

                                        <div
                      className="
                        rounded-[1.75rem]
                        border
                        border-[#c6a769]/20
                        bg-gradient-to-br
                        from-[#c6a769]/10
                        via-[#c6a769]/5
                        to-transparent
                        p-6
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#c6a769]/10
                          text-[#c6a769]
                        "
                      >
                        <FiStar size={24} />
                      </div>

                      <h3
                        className="
                          mt-5
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        Add New Address
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-zinc-400
                        "
                      >
                        Save additional delivery
                        locations for faster
                        purchases and gifting.
                      </p>

                      <button
                        type="button"
                        onClick={
                          handleAddAddress
                        }
                        className="
                          mt-5
                          flex
                          w-full
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
                          px-5
                          py-4
                          font-semibold
                          text-[#120d09]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                        "
                      >
                        <FiPlus size={18} />
                        Add New Address
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <AddressBook
                addresses={addresses}
                onAddAddress={
                  handleAddAddress
                }
                onEditAddress={
                  handleEditAddress
                }
                onDeleteAddress={
                  handleDeleteAddress
                }
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default AddressesPage;