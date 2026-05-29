import PropTypes from "prop-types";
import { useState } from "react";
import {
  FiCheckCircle,
  FiGift,
  FiTag,
  FiX,
  FiAward,
  FiStar,
  FiZap,
} from "react-icons/fi";

const COUPONS = {
  WELCOME10: {
    code: "WELCOME10",
    discount: 10,
  },
  LUXURY15: {
    code: "LUXURY15",
    discount: 15,
  },
  ELEGANT20: {
    code: "ELEGANT20",
    discount: 20,
  },
};

function CouponBox({ onApplyCoupon, appliedCoupon = null }) {
  const [couponCode, setCouponCode] = useState("");
  const [error, setError] = useState("");

  const handleApplyCoupon = () => {
    const normalizedCode = couponCode.trim().toUpperCase();

    if (!normalizedCode) {
      setError("Please enter a coupon code.");
      return;
    }

    const coupon = COUPONS[normalizedCode];

    if (!coupon) {
      setError("Invalid coupon code. Please try again.");
      return;
    }

    setError("");
    onApplyCoupon(coupon);
    setCouponCode("");
  };

  const handleRemoveCoupon = () => {
    onApplyCoupon(null);
    setError("");
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[2.5rem]
        border
        border-white/[0.08]
        bg-[linear-gradient(180deg,#181008_0%,#120b05_55%,#0d0905_100%)]
        shadow-[0_35px_100px_rgba(0,0,0,0.5)]
      "
    >
      {/* Ambient Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <div className="absolute inset-[1px] rounded-[2.45rem] border border-white/[0.04]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/[0.08] p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] border border-amber-500/20 bg-gradient-to-br from-amber-500/15 to-orange-500/10">
              <FiGift className="text-2xl text-amber-300" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                  VIP Rewards Club
                </span>
              </div>

              <h3 className="mt-4 break-words text-2xl font-black leading-tight text-white lg:text-3xl">
                Rewards & Coupons
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-400">
                Unlock exclusive member savings, premium rewards, and luxury
                offers.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-7">
          {appliedCoupon ? (
            <div className="overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/12 to-emerald-500/5 p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15">
                    <FiCheckCircle className="text-2xl text-emerald-400" />
                  </div>

                  <div>
                    <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      Coupon Activated
                    </div>

                    <h4 className="mt-3 text-xl font-bold text-emerald-300">
                      {appliedCoupon.code}
                    </h4>

                    <p className="mt-2 text-sm text-emerald-200/80">
                      Save {appliedCoupon.discount}% on your order.
                    </p>
                  </div>
                </div>{" "}
                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-red-500/20
                    bg-red-500/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-red-300
                    transition-all
                    duration-300
                    hover:border-red-500/40
                    hover:bg-red-500/15
                  "
                >
                  <FiX size={14} />
                  Remove Coupon
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Coupon Input */}
              <div
                className="
                  rounded-[2rem]
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  p-5
                "
              >
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <FiTag className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-stone-500" />

                    <input
                      type="text"
                      value={couponCode}
                      onChange={(event) => {
                        setCouponCode(event.target.value);
                        setError("");
                      }}
                      placeholder="Enter VIP coupon code"
                      className="
                        h-16
                        w-full
                        rounded-[1.4rem]
                        border
                        border-white/[0.08]
                        bg-[#120b05]
                        pl-14
                        pr-4
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-stone-500
                        focus:border-amber-500/40
                        focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]
                      "
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="
                      inline-flex
                      h-16
                      w-full
                      items-center
                      justify-center
                      rounded-[1.4rem]
                      bg-gradient-to-r
                      from-amber-400
                      via-yellow-400
                      to-amber-500
                      px-6
                      font-bold
                      text-black
                      shadow-[0_15px_40px_rgba(245,158,11,0.3)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_25px_60px_rgba(245,158,11,0.4)]
                    "
                  >
                    Apply VIP Coupon
                  </button>
                </div>

                {error && (
                  <div className="mt-4 rounded-[1.2rem] border border-red-500/20 bg-red-500/10 px-4 py-4 text-sm text-red-300">
                    {error}
                  </div>
                )}
              </div>

              {/* Stats - Fixed Overflow Issue */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="min-w-0 overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-5 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                      <FiAward className="text-amber-300" />
                    </div>
                  </div>

                  <p className="mt-5 text-4xl font-black text-white">3</p>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                    Active Offers
                  </p>
                </div>

                <div className="min-w-0 overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-5 text-center">
                  <div className="flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                      <FiStar className="text-yellow-300" />
                    </div>
                  </div>

                  <p className="mt-5 text-4xl font-black text-white">20%</p>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                    Max Savings
                  </p>
                </div>
              </div>

              {/* VIP Banner */}
              <div className="mt-4 rounded-[1.8rem] border border-orange-500/20 bg-orange-500/5 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                    <FiZap className="text-orange-300" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-white">VIP Rewards Club</h4>

                    <p className="mt-1 text-sm text-stone-400">
                      Unlock premium discounts, exclusive offers, and
                      member-only rewards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Available VIP Offers */}
              <div className="mt-8">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-stone-300">
                      Exclusive VIP Offers
                    </h4>

                    <p className="mt-1 text-sm text-stone-500">
                      Premium savings curated for members
                    </p>
                  </div>

                  <div className="inline-flex items-center self-start rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5">
                    <span className="text-xs font-semibold text-amber-300">
                      Limited Time
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {Object.values(COUPONS).map((coupon) => (
                    <div
                      key={coupon.code}
                      className="
                        group
                        overflow-hidden
                        rounded-[1.8rem]
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        p-5
                        transition-all
                        duration-300
                        hover:border-amber-500/20
                        hover:bg-white/[0.05]
                      "
                    >
                      <div className="flex flex-col gap-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex min-w-0 items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                              <FiGift className="text-xl text-amber-300" />
                            </div>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h5 className="font-bold text-amber-300">
                                  {coupon.code}
                                </h5>

                                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                                  VIP
                                </span>
                              </div>

                              <p className="mt-2 text-sm leading-6 text-stone-400">
                                Premium member offer with instant checkout
                                savings.
                              </p>
                            </div>
                          </div>

                          <div className="shrink-0 text-right">
                            <p className="text-3xl font-black text-white">
                              {coupon.discount}%
                            </p>

                            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                              OFF
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-4 sm:flex-row sm:items-center sm:justify-between">
                          <span className="text-xs text-stone-500">
                            Instant savings • Member exclusive
                          </span>

                          <button
                            type="button"
                            onClick={() => {
                              setCouponCode(coupon.code);
                              setError("");
                            }}
                            className="
                              inline-flex
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-amber-500/20
                              bg-amber-500/10
                              px-4
                              py-2
                              text-xs
                              font-semibold
                              text-amber-300
                              transition-all
                              duration-300
                              hover:border-amber-500/40
                              hover:bg-amber-500/15
                            "
                          >
                            Use Code
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

CouponBox.propTypes = {
  onApplyCoupon: PropTypes.func.isRequired,
  appliedCoupon: PropTypes.shape({
    code: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
  }),
};

export default CouponBox;
