import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiPackage,
  FiTruck,
  FiXCircle,
  FiAward,
  FiShield,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";

function OrderHistory({
  orders = [],
  onViewOrder,
  className = "",
}) {
  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return {
          icon: FiCheckCircle,
          badge:
            "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
          label: "Successfully Delivered",
        };

      case "shipped":
        return {
          icon: FiTruck,
          badge:
            "bg-sky-500/10 border-sky-500/20 text-sky-400",
          label: "In Transit",
        };

      case "processing":
        return {
          icon: FiClock,
          badge:
            "bg-amber-500/10 border-amber-500/20 text-amber-400",
          label: "Preparing Shipment",
        };

      case "cancelled":
        return {
          icon: FiXCircle,
          badge:
            "bg-red-500/10 border-red-500/20 text-red-400",
          label: "Order Cancelled",
        };

      default:
        return {
          icon: FiPackage,
          badge:
            "bg-zinc-500/10 border-zinc-500/20 text-zinc-400",
          label: "Order Created",
        };
    }
  };

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
          -top-24
          -right-24
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
          border-b
          border-white/10
          px-7
          py-6
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
                Purchase Timeline
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
              Order History
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
              Monitor shipments, review purchases,
              track deliveries, and manage your
              premium shopping activity.
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
                Secure Tracking
              </p>

              <p className="text-xs text-zinc-500">
                Real-time order updates
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 p-6 lg:p-7">
                {orders.length > 0 ? (
          <div className="space-y-5">
            {orders.map((order) => {
              const {
                icon: StatusIcon,
                badge,
                label,
              } = getStatusConfig(order.status);

              return (
                <article
                  key={order.id}
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
                    hover:border-[#c6a769]/25
                    hover:bg-white/[0.05]
                  "
                >
                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-40
                      w-40
                      rounded-full
                      bg-[#c6a769]/5
                      blur-3xl
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        mb-5
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-3
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
                            tracking-[0.18em]
                            text-[#c6a769]
                          "
                        >
                          Premium Order
                        </span>
                      </div>

                      <div
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          ${badge}
                        `}
                      >
                        <StatusIcon size={14} />
                        {label}
                      </div>
                    </div>

                    <div
                      className="
                        grid
                        gap-5
                        sm:grid-cols-2
                        xl:grid-cols-4
                      "
                    >
                      <div
                        className="
                          rounded-2xl
                          border
                          border-white/5
                          bg-black/20
                          p-4
                        "
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                          Order Number
                        </p>

                        <h3 className="mt-3 text-lg font-bold text-white">
                          #{order.orderNumber}
                        </h3>
                      </div>

                      <div
                        className="
                          rounded-2xl
                          border
                          border-white/5
                          bg-black/20
                          p-4
                        "
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                          Purchase Date
                        </p>

                        <h3 className="mt-3 text-sm font-medium text-zinc-300">
                          {order.date}
                        </h3>
                      </div>

                      <div
                        className="
                          rounded-2xl
                          border
                          border-white/5
                          bg-black/20
                          p-4
                        "
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                          Current Status
                        </p>

                        <h3 className="mt-3 text-sm font-semibold text-white">
                          {order.status}
                        </h3>
                      </div>

                      <div
                        className="
                          rounded-2xl
                          border
                          border-[#c6a769]/10
                          bg-[#c6a769]/5
                          p-4
                        "
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                          Total Value
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-[#d9bf87]">
                          ₹{order.total}
                        </h3>
                      </div>
                    </div>

                                        <div
                      className="
                        mt-6
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-white/10
                        pt-5
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-emerald-500/10
                          "
                        >
                          <FiTrendingUp
                            size={18}
                            className="text-emerald-400"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white">
                            Order Activity Updated
                          </p>

                          <p className="text-xs text-zinc-500">
                            Latest tracking information available
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onViewOrder?.(order)
                        }
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-2xl
                          border
                          border-[#c6a769]/25
                          bg-[#c6a769]/10
                          px-6
                          py-3.5
                          text-sm
                          font-semibold
                          text-[#d9bf87]
                          transition-all
                          duration-300
                          hover:border-[#c6a769]/50
                          hover:bg-[#c6a769]/15
                        "
                      >
                        View Complete Details
                        <FiArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
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
              <FiPackage size={34} />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-white
              "
            >
              No Orders Found
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
              Once you place your first order,
              your complete purchase timeline,
              delivery progress, invoices, and
              order details will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

OrderHistory.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      orderNumber: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      total: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })
  ),
  onViewOrder: PropTypes.func,
  className: PropTypes.string,
};

OrderHistory.defaultProps = {
  orders: [],
  onViewOrder: () => {},
  className: "",
};

export default OrderHistory;