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

function CouponBox({
  onApplyCoupon,
  appliedCoupon = null,
}) {
  const [couponCode, setCouponCode] = useState("");
  const [error, setError] = useState("");

  const handleApplyCoupon = () => {
    const normalizedCode = couponCode
      .trim()
      .toUpperCase();

    if (!normalizedCode) {
      setError("Please enter a coupon code.");
      return;
    }

    const coupon = COUPONS[normalizedCode];

    if (!coupon) {
      setError(
        "Invalid coupon code. Please try again."
      );
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
    <div className="relative overflow-hidden rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171008,#120b05)] shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
      {/* Ambient Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-[#2a1c10] p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
              <FiGift className="text-xl text-amber-300" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                VIP Rewards & Coupons
              </h3>

              <p className="text-sm text-stone-400">
                Unlock exclusive member savings and luxury rewards.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Applied Coupon */}
          {appliedCoupon ? (
            <div className="rounded-[1.75rem] border border-emerald-500/20 bg-emerald-500/10 p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 text-xl text-emerald-400" />

                  <div>
                    <h4 className="font-semibold text-emerald-300">
                      Coupon Successfully Applied
                    </h4>

                    <p className="mt-1 text-sm text-emerald-200/80">
                      {appliedCoupon.code}
                    </p>

                    <p className="mt-2 text-lg font-bold text-emerald-300">
                      Save {appliedCoupon.discount}% on your order
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRemoveCoupon}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/15"
                >
                  <FiX size={14} />
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Coupon Input */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <FiTag className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" />

                  <input
                    type="text"
                    value={couponCode}
                    onChange={(event) => {
                      setCouponCode(event.target.value);
                      setError("");
                    }}
                    placeholder="Enter VIP coupon code"
                    className="h-14 w-full rounded-2xl border border-[#322214] bg-[#120b05] pl-12 pr-4 text-white outline-none transition-all duration-300 placeholder:text-stone-500 focus:border-amber-500/40 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 font-bold text-black shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  Apply Coupon
                </button>
              </div>

              {error && (
                <div className="mt-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Rewards Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[#322214] bg-[#171008] p-4 text-center">
                  <FiAward className="mx-auto text-amber-300" />

                  <p className="mt-2 text-lg font-bold text-white">
                    3
                  </p>

                  <p className="text-xs text-stone-500">
                    Active Offers
                  </p>
                </div>

                <div className="rounded-2xl border border-[#322214] bg-[#171008] p-4 text-center">
                  <FiStar className="mx-auto text-yellow-300" />

                  <p className="mt-2 text-lg font-bold text-white">
                    20%
                  </p>

                  <p className="text-xs text-stone-500">
                    Max Savings
                  </p>
                </div>

                <div className="rounded-2xl border border-[#322214] bg-[#171008] p-4 text-center">
                  <FiZap className="mx-auto text-orange-300" />

                  <p className="mt-2 text-lg font-bold text-white">
                    VIP
                  </p>

                  <p className="text-xs text-stone-500">
                    Rewards
                  </p>
                </div>
              </div>

              {/* Available Coupons */}
              <div className="mt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
                    Exclusive Offers
                  </h4>

                  <span className="text-xs text-amber-300">
                    Limited Time
                  </span>
                </div>

                <div className="space-y-3">
                  {Object.values(COUPONS).map(
                    (coupon) => (
                      <div
                        key={coupon.code}
                        className="group rounded-2xl border border-[#322214] bg-[#171008] p-4 transition-all duration-300 hover:border-amber-500/20"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h5 className="font-semibold text-amber-300">
                              {coupon.code}
                            </h5>

                            <p className="mt-1 text-xs text-stone-500">
                              Premium Member Offer
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-xl font-bold text-white">
                              {coupon.discount}%
                            </p>

                            <p className="text-xs text-stone-500">
                              OFF
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
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