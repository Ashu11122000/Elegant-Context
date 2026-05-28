import PropTypes from "prop-types";
import {
  FiArrowUpRight,
  FiChevronRight,
  FiGrid,
  FiShield,
  FiStar,
  FiTag,
  FiTrendingUp,
} from "react-icons/fi";

const sidebarCategories = [
  {
    name: "Men",
    count: 48,
    icon: FiGrid,
    description: "Modern luxury essentials",
  },
  {
    name: "Women",
    count: 72,
    icon: FiStar,
    description: "Elegant premium fashion",
  },
  {
    name: "Accessories",
    count: 36,
    icon: FiTag,
    description: "Refined statement pieces",
  },
  {
    name: "Luxury Collection",
    count: 18,
    icon: FiTrendingUp,
    description: "Exclusive designer picks",
  },
];

function Sidebar({
  selectedCategory = "",
  onCategorySelect,
}) {
  return (
    <aside className="hidden w-[320px] shrink-0 xl:block">
      <div className="sticky top-28 overflow-hidden rounded-[32px] border border-amber-500/10 bg-gradient-to-b from-stone-950 via-[#15110c] to-stone-950 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        {/* Premium Background */}
        <div className="absolute inset-0">
          {/* Ambient Glow */}
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-500/10 blur-3xl" />

          {/* Grid Texture */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />

          {/* Top Border Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        </div>

        {/* Header */}
        <div className="relative border-b border-white/5 px-7 py-7">
          {/* Premium Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200">
              Curated Collections
            </span>
          </div>

          <h2 className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-2xl font-black tracking-wide text-transparent">
            Shop Categories
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            Explore premium fashion collections crafted with
            luxury, sophistication, and timeless aesthetics.
          </p>
        </div>

        {/* Navigation */}
        <nav className="relative p-5">
          <ul className="space-y-3">
            {sidebarCategories.map((category) => {
              const Icon = category.icon;

              const isActive =
                selectedCategory === category.name;

              return (
                <li key={category.name}>
                  <button
                    type="button"
                    onClick={() =>
                      onCategorySelect?.(category.name)
                    }
                    className={`group relative w-full overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-amber-400/20 bg-gradient-to-r from-amber-400/20 to-yellow-500/10 shadow-[0_10px_30px_rgba(251,191,36,0.12)]"
                        : "border-white/5 bg-white/[0.03] hover:-translate-y-0.5 hover:border-amber-500/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-200/0 to-yellow-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-amber-300/10 group-hover:via-amber-200/5 group-hover:to-yellow-200/10" />

                    {/* Active Glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_70%)]" />
                    )}

                    <div className="relative z-10 flex items-center justify-between">
                      {/* Left Content */}
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isActive
                              ? "border-amber-300/30 bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20"
                              : "border-white/5 bg-stone-900/80 text-amber-200 group-hover:border-amber-500/20 group-hover:bg-amber-500/10 group-hover:text-[#2B1D0E]"
                          }`}
                        >
                          <Icon
                            size={22}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        {/* Text */}
                        <div>
                          <p
                            className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                              isActive
                                ? "text-amber-100"
                                : "text-stone-200 group-hover:text-amber-100"
                            }`}
                          >
                            {category.name}
                          </p>

                          <p
                            className={`mt-1 text-xs transition-colors duration-300 ${
                              isActive
                                ? "text-amber-200/70"
                                : "text-stone-500 group-hover:text-stone-400"
                            }`}
                          >
                            {category.description}
                          </p>

                          <div className="mt-3 inline-flex items-center rounded-full border border-white/5 bg-black/20 px-3 py-1 text-[11px] font-medium text-stone-400">
                            {category.count} premium items
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                          isActive
                            ? "bg-amber-300/20 text-amber-100"
                            : "bg-white/[0.03] text-stone-500 group-hover:bg-amber-500/10 group-hover:text-amber-100"
                        }`}
                      >
                        <FiChevronRight
                          size={18}
                          className={`transition-transform duration-300 ${
                            isActive
                              ? "translate-x-1"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Bottom Shine */}
                    <div
                      className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 ${
                        isActive
                          ? "w-4/5"
                          : "w-0 group-hover:w-2/3"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Premium Card */}
        <div className="relative border-t border-white/5 p-6">
          <div className="relative overflow-hidden rounded-[28px] border border-amber-500/10 bg-gradient-to-br from-amber-400/15 via-yellow-500/10 to-transparent p-6 backdrop-blur-xl">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.20),transparent_45%)]" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                <FiShield size={24} />
              </div>

              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                Premium Access
              </p>

              <h3 className="mt-2 text-xl font-bold text-amber-50">
                Members Exclusive
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-stone-300">
                Unlock luxury collections, early-access
                launches, seasonal offers, and curated
                premium fashion experiences.
              </p>

              <button
                type="button"
                className="group mt-5 inline-flex items-center gap-2 rounded-2xl border border-amber-300/20 bg-gradient-to-r from-amber-300 to-yellow-500 px-5 py-3 text-sm font-bold text-[#2B1D0E] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(251,191,36,0.35)]"
              >
                Explore Premium

                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  selectedCategory: PropTypes.string,
  onCategorySelect: PropTypes.func,
};

export default Sidebar;