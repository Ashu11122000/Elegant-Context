import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

import products from "../data/products";

import ProductSearch from "../components/products/ProductSearch";
import SearchResults from "../components/products/SearchResults";
import FilterPanel from "../components/products/FilterPanel";
import SortDropdown from "../components/products/SortDropdown";
import Breadcrumb from "../components/common/Breadcrumb";

import useSearch from "../hooks/useSearch";

import filterProducts from "../utils/filterProducts";
import sortProducts from "../utils/sortProducts";

function SearchResultsPage() {
  const {
    query,
    setQuery,
    results: searchResults,
    clearSearch,
  } = useSearch(products);

  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("featured");

  const filteredProducts = useMemo(() => {
    return filterProducts(searchResults, filters);
  }, [searchResults, filters]);

  const finalProducts = useMemo(() => {
    return sortProducts(
      filteredProducts,
      sortOption
    );
  }, [
    filteredProducts,
    sortOption,
  ]);

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <div className="min-h-screen bg-[#0f0a05]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            {
              label: "Home",
              path: "/",
            },
            {
              label: "Search",
            },
          ]}
        />

        {/* Page Header */}
        <section
          className="
            relative
            mb-8
            overflow-hidden
            rounded-[2rem]
            border
            border-[#322214]
            bg-[linear-gradient(to_bottom,#171008,#120b05)]
            p-8
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          "
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#c08b2d]/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#4a3118]
                  bg-[#1a120a]
                "
              >
                <FiSearch className="text-2xl text-[#d4a24c]" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-[#f7e7ce]">
                  Search Products
                </h1>

                <p className="mt-2 text-[#b89d74]">
                  Discover luxury fashion,
                  premium collections and
                  trending styles.
                </p>
              </div>
            </div>

            <ProductSearch
              value={query}
              onSearch={handleSearch}
            />
          </div>
        </section>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Filters */}
          <aside>
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
            />
          </aside>

          {/* Results */}
          <section>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-[#322214] bg-[#171008] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#f7e7ce]">
                  Results
                </h2>

                <p className="text-sm text-[#b89d74]">
                  {finalProducts.length} product
                  {finalProducts.length !== 1
                    ? "s"
                    : ""}{" "}
                  found
                </p>
              </div>

              <SortDropdown
                value={sortOption}
                onChange={setSortOption}
              />
            </div>

            <SearchResults
              query={query}
              results={finalProducts}
              onClearSearch={clearSearch}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsPage;