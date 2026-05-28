import {
  FiGift,
  FiRefreshCw,
  FiShield,
  FiTruck,
} from "react-icons/fi";

function TopBanner() {
  const bannerItems = [
    {
      icon: FiTruck,
      text: "Free shipping on orders above ₹1999",
    },
    {
      icon: FiRefreshCw,
      text: "Easy 7-day returns",
    },
    {
      icon: FiShield,
      text: "100% secure checkout",
    },
    {
      icon: FiGift,
      text: "Exclusive luxury fashion offers",
    },
  ];

  return (
    <div className="relative overflow-hidden border-b border-amber-500/20 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300">
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12),transparent,rgba(255,255,255,0.12))]" />

      {/* Luxury Glow */}
      <div className="absolute left-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

      <div className="absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-amber-100/30 blur-3xl" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 py-3 lg:gap-x-8">
          {bannerItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="group flex items-center gap-3 rounded-full border border-black/5 bg-white/20 px-4 py-2 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/30 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
              >
                {/* Icon Container */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#3B2A18] to-[#2B1D0E] text-amber-200 shadow-md transition-all duration-300 group-hover:scale-105">
                  <Icon size={15} />
                </div>

                {/* Text */}
                <span className="text-xs font-semibold tracking-[0.06em] text-[#2B1D0E] sm:text-sm">
                  {item.text}
                </span>

                {/* Separator */}
                {index !== bannerItems.length - 1 && (
                  <div className="hidden h-5 w-px bg-black/10 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Shine */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2B1D0E]/20 to-transparent" />
    </div>
  );
}

export default TopBanner;