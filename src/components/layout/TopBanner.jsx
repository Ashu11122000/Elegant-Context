import {
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiGift,
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
    <div className="border-b border-amber-200 bg-amber-100">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium tracking-wide text-stone-800 sm:text-sm">
          {bannerItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center gap-2"
              >
                <Icon
                  size={15}
                  className="text-amber-900"
                />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopBanner;