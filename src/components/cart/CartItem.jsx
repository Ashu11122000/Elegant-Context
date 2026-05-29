import PropTypes from "prop-types";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShield,
  FiTruck,
  FiAward,
} from "react-icons/fi";

function CartItem({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  const {
    id,
    name,
    image,
    category,
    price,
    quantity,
  } = item;

  const itemSubtotal =
    Number(price) * quantity;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[2.5rem]
        border
        border-[#2f2115]
        bg-[linear-gradient(180deg,#171008_0%,#120b05_100%)]
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        transition-all
        duration-500
        hover:border-amber-500/20
      "
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 p-6 lg:p-8">
        {/* TOP SECTION */}
        <div className="grid gap-6 xl:grid-cols-[260px_220px_260px]">
          {/* IMAGE */}
          <div className="mx-auto xl:mx-0">
            <div className="overflow-hidden rounded-[2rem] border border-[#3a2818] bg-[#171008] p-3">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute left-4 top-4">
                  <span
                    className="
                      rounded-full
                      border
                      border-amber-500/20
                      bg-amber-500/10
                      px-4
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-amber-300
                    "
                  >
                    Premium
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* QUANTITY */}
          <div
            className="
              rounded-[2rem]
              border
              border-[#322214]
              bg-[#171008]/70
              p-5
            "
          >
            <p
              className="
                mb-5
                text-center
                text-xs
                uppercase
                tracking-[0.25em]
                text-stone-500
              "
            >
              Quantity
            </p>

            <div
              className="
                flex
                items-center
                rounded-[1.5rem]
                border
                border-[#322214]
                bg-[#120b05]
                p-2
              "
            >
              <button
                type="button"
                onClick={() => onDecrement(id)}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  text-stone-300
                  transition
                  hover:bg-[#24180d]
                "
              >
                <FiMinus />
              </button>

              <span
                className="
                  flex-1
                  text-center
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => onIncrement(id)}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  text-stone-300
                  transition
                  hover:bg-[#24180d]
                "
              >
                <FiPlus />
              </button>
            </div>

            <button
              type="button"
              onClick={() => onRemove(id)}
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-red-500/10
                py-3
                text-red-300
                transition
                hover:bg-red-500/15
              "
            >
              <FiTrash2 />
              Remove
            </button>
          </div>

                    {/* ITEM TOTAL */}
          <div
            className="
              rounded-[2rem]
              border
              border-[#322214]
              bg-[#171008]/70
              p-6
              text-center
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-stone-500
              "
            >
              Item Total
            </p>

            <h3
              className="
                mt-5
                text-5xl
                font-bold
                text-amber-300
              "
            >
              ₹{itemSubtotal.toLocaleString("en-IN")}
            </h3>

            <div className="mt-6 border-t border-[#2a1c10] pt-5">
              <p className="text-sm text-stone-500">
                {quantity} × ₹
                {Number(price).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="mt-8 space-y-6">
          {/* PRODUCT INFO */}
          <div
            className="
              rounded-[2rem]
              border
              border-[#322214]
              bg-[#171008]/70
              p-6
            "
          >
            {category && (
              <div className="mb-4">
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-amber-500/20
                    bg-amber-500/10
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-amber-300
                  "
                >
                  {category}
                </span>
              </div>
            )}

            <h3
              className="
                text-2xl
                font-bold
                leading-tight
                text-white
                lg:text-3xl
              "
            >
              {name}
            </h3>

            <p className="mt-3 text-sm text-stone-500">
              Premium Fashion Collection
            </p>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              rounded-[2rem]
              border
              border-[#322214]
              bg-[#171008]/70
              p-6
            "
          >
            <h4
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-stone-500
              "
            >
              Description
            </h4>

            <p
              className="
                max-w-5xl
                text-sm
                leading-8
                text-stone-400
              "
            >
              Crafted with exceptional attention to detail,
              delivering timeless style, premium quality,
              and luxury comfort for everyday elegance.
              Designed for customers who appreciate refined
              craftsmanship, superior materials, and a
              sophisticated lifestyle experience.
            </p>
          </div>

                    {/* BENEFITS */}
          <div
            className="
              rounded-[2rem]
              border
              border-[#322214]
              bg-[#171008]/70
              p-6
            "
          >
            <h4
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-stone-500
              "
            >
              Premium Benefits
            </h4>

            <div className="flex flex-wrap gap-3">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-500/15
                  bg-emerald-500/10
                  px-4
                  py-2
                  text-sm
                  text-emerald-300
                "
              >
                <FiShield />
                Secure Purchase
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-sky-500/15
                  bg-sky-500/10
                  px-4
                  py-2
                  text-sm
                  text-sky-300
                "
              >
                <FiTruck />
                Fast Delivery
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-purple-500/15
                  bg-purple-500/10
                  px-4
                  py-2
                  text-sm
                  text-purple-300
                "
              >
                <FiAward />
                Quality Assured
              </div>
            </div>
          </div>

          {/* PRICE PANEL */}
          <div
            className="
              rounded-[2rem]
              border
              border-[#322214]
              bg-[#171008]/70
              p-6
            "
          >
            <h4
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-stone-500
              "
            >
              Pricing Details
            </h4>

            <div className="flex flex-wrap items-center gap-4">
              <span
                className="
                  text-4xl
                  font-bold
                  text-amber-300
                "
              >
                ₹{Number(price).toLocaleString("en-IN")}
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-[#3b2818]
                  bg-[#1b1209]
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-stone-400
                "
              >
                Price Per Item
              </span>
            </div>

            <p className="mt-3 text-sm text-stone-500">
              Inclusive of all taxes and applicable charges.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Bottom Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;