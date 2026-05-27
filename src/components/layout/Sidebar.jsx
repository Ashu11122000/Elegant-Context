import PropTypes from "prop-types";
import {
  FiChevronRight,
  FiGrid,
  FiStar,
  FiTag,
  FiTrendingUp,
} from "react-icons/fi";

const sidebarCategories = [
  {
    name: "Men",
    count: 48,
    icon: FiGrid,
  },
  {
    name: "Women",
    count: 72,
    icon: FiStar,
  },
  {
    name: "Accessories",
    count: 36,
    icon: FiTag,
  },
  {
    name: "Luxury Collection",
    count: 18,
    icon: FiTrendingUp,
  },
];

function Sidebar({
  selectedCategory = "",
  onCategorySelect,
}) {
  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="sticky top-24 overflow-hidden rounded-2xl border border-amber-200 bg-stone-900 shadow-lg">
        <div className="border-b border-amber-800 px-6 py-5">
          <h2 className="text-xl font-semibold tracking-wide text-amber-200">
            Shop Categories
          </h2>

          <p className="mt-2 text-sm text-stone-300">
            Discover curated premium fashion collections.
          </p>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
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
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-amber-100 text-stone-900"
                        : "text-stone-200 hover:bg-stone-800 hover:text-amber-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />

                      <div>
                        <p className="font-medium">
                          {category.name}
                        </p>

                        <p
                          className={`text-xs ${
                            isActive
                              ? "text-stone-600"
                              : "text-stone-400"
                          }`}
                        >
                          {category.count} items
                        </p>
                      </div>
                    </div>

                    <FiChevronRight size={18} />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-stone-800 bg-stone-950 px-6 py-5">
          <div className="rounded-xl border border-amber-700 bg-amber-900/20 p-4">
            <p className="text-sm font-medium text-amber-200">
              Premium Members Offer
            </p>

            <p className="mt-2 text-xs leading-relaxed text-stone-300">
              Unlock exclusive luxury collections and seasonal offers.
            </p>
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