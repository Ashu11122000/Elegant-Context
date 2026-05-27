import PropTypes from "prop-types";
import Button from "../common/Button";

function CategorySidebar({
  categories = [],
  selectedCategory = "all",
  onCategoryChange,
  onResetFilters,
}) {
  return (
    <aside
      aria-label="Category filters"
      className="space-y-8 rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-6"
    >
      <div>
        <h3 className="mb-5 text-xl font-semibold text-[#f5e6c8]">
          Categories
        </h3>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => onCategoryChange("all")}
            className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              selectedCategory === "all"
                ? "bg-[#edbf68] text-[#1f1606]"
                : "bg-[#2d1f08] text-[#d7c3a0] hover:bg-[#edbf68]/10 hover:text-[#edbf68]"
            }`}
          >
            All Products
          </button>

          {categories.map((category) => {
            const normalizedCategory = category.toLowerCase();
            const isActive = selectedCategory === normalizedCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(normalizedCategory)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium capitalize transition ${
                  isActive
                    ? "bg-[#edbf68] text-[#1f1606]"
                    : "bg-[#2d1f08] text-[#d7c3a0] hover:bg-[#edbf68]/10 hover:text-[#edbf68]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <Button
        onClick={onResetFilters}
        className="w-full"
      >
        Reset Filters
      </Button>
    </aside>
  );
}

CategorySidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};

export default CategorySidebar;