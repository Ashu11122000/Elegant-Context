import PropTypes from "prop-types";
import {
  FiEdit2,
  FiHome,
  FiMapPin,
  FiPlus,
  FiStar,
  FiTrash2,
  FiShield,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

function AddressBook({
  addresses = [],
  onAddAddress,
  onEditAddress,
  onDeleteAddress,
  className = "",
}) {
  return (
    <section
      className={`
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-[#6b4f2c]/35
        bg-[linear-gradient(180deg,rgba(28,20,15,0.98)_0%,rgba(15,10,7,1)_100%)]
        shadow-[0_35px_120px_rgba(0,0,0,0.65)]
        backdrop-blur-xl
        ${className}
      `}
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

      <div
        className="
          absolute
          -bottom-24
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
          relative
          z-10
          flex
          flex-col
          gap-5
          border-b
          border-white/10
          px-7
          py-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
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
              px-4
              py-2
            "
          >
            <FiAward
              size={13}
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
              Premium Address Vault
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
            Address Book
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
            Securely manage all shipping, billing,
            gifting, and delivery destinations for a
            faster luxury checkout experience.
          </p>
        </div>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
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
              className="text-emerald-400"
              size={18}
            />

            <div>
              <p className="text-sm font-semibold text-white">
                Verified Storage
              </p>

              <p className="text-xs text-zinc-500">
                Encrypted & secure
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onAddAddress}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-[#c6a769]/30
              bg-gradient-to-r
              from-[#c6a769]
              via-[#d9bf87]
              to-[#b89255]
              px-6
              py-3.5
              font-semibold
              text-[#120d09]
              shadow-[0_15px_35px_rgba(198,167,105,0.3)]
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

      <div className="relative z-10 p-7">
                {addresses.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-6
              xl:grid-cols-2
            "
          >
            {addresses.map((address) => (
              <article
                key={address.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#c6a769]/30
                  hover:bg-white/[0.05]
                "
              >
                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-36
                    w-36
                    rounded-full
                    bg-[#c6a769]/5
                    blur-3xl
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      flex-wrap
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div className="flex gap-4">
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-[#c6a769]/20
                          to-[#8f6d3c]/20
                          text-[#c6a769]
                        "
                      >
                        <FiHome size={24} />
                      </div>

                      <div>
                        <h3
                          className="
                            text-lg
                            font-bold
                            text-white
                          "
                        >
                          {address.label}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-zinc-500
                          "
                        >
                          {address.type || "Shipping Address"}
                        </p>
                      </div>
                    </div>

                    {address.isDefault && (
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
                          tracking-[0.18em]
                          text-[#c6a769]
                        "
                      >
                        <FiStar size={12} />
                        Default Address
                      </div>
                    )}
                  </div>

                  <div
                    className="
                      mt-6
                      rounded-2xl
                      border
                      border-white/5
                      bg-black/20
                      p-5
                    "
                  >
                    <div className="flex gap-3">
                      <FiMapPin
                        size={18}
                        className="
                          mt-1
                          shrink-0
                          text-[#c6a769]
                        "
                      />

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-white">
                          {address.fullName}
                        </p>

                        <p className="text-sm leading-7 text-zinc-400">
                          {address.addressLine1}
                        </p>

                        {address.addressLine2 && (
                          <p className="text-sm leading-7 text-zinc-400">
                            {address.addressLine2}
                          </p>
                        )}

                        <p className="text-sm leading-7 text-zinc-400">
                          {address.city}, {address.state}
                        </p>

                        <p className="text-sm leading-7 text-zinc-400">
                          {address.country} • {address.postalCode}
                        </p>

                        {address.phone && (
                          <div
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              bg-white/[0.04]
                              px-3
                              py-1.5
                            "
                          >
                            <FiCheckCircle
                              size={12}
                              className="text-emerald-400"
                            />

                            <span className="text-xs text-zinc-400">
                              {address.phone}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                                    <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-3
                      border-t
                      border-white/10
                      pt-5
                    "
                  >
                    <button
                      type="button"
                      onClick={() =>
                        onEditAddress(address)
                      }
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-2xl
                        border
                        border-[#c6a769]/20
                        bg-[#c6a769]/10
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-[#d9bf87]
                        transition-all
                        duration-300
                        hover:border-[#c6a769]/40
                      "
                    >
                      <FiEdit2 size={15} />
                      Edit Address
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onDeleteAddress(address)
                      }
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-2xl
                        border
                        border-red-500/20
                        bg-red-500/10
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-red-400
                        transition-all
                        duration-300
                        hover:border-red-500/40
                      "
                    >
                      <FiTrash2 size={15} />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              rounded-[2rem]
              border
              border-dashed
              border-white/10
              px-8
              py-20
              text-center
            "
          >
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-[1.75rem]
                bg-[#c6a769]/10
                text-[#c6a769]
              "
            >
              <FiMapPin size={34} />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-white
              "
            >
              No Addresses Added Yet
            </h3>

            <p
              className="
                mt-3
                max-w-lg
                text-sm
                leading-relaxed
                text-zinc-400
              "
            >
              Save your preferred delivery and billing
              destinations to enjoy faster checkout,
              seamless order processing, and a more
              personalized shopping experience.
            </p>

            <button
              type="button"
              onClick={onAddAddress}
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-[#c6a769]/30
                bg-[#c6a769]/10
                px-6
                py-3.5
                font-semibold
                text-[#d9bf87]
              "
            >
              <FiPlus size={16} />
              Add Your First Address
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

AddressBook.propTypes = {
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      label: PropTypes.string,
      type: PropTypes.string,
      fullName: PropTypes.string,
      addressLine1: PropTypes.string,
      addressLine2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      postalCode: PropTypes.string,
      phone: PropTypes.string,
      isDefault: PropTypes.bool,
    })
  ),
  onAddAddress: PropTypes.func,
  onEditAddress: PropTypes.func,
  onDeleteAddress: PropTypes.func,
  className: PropTypes.string,
};

AddressBook.defaultProps = {
  addresses: [],
  onAddAddress: () => {},
  onEditAddress: () => {},
  onDeleteAddress: () => {},
  className: "",
};

export default AddressBook;