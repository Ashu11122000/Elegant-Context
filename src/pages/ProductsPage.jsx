import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import Breadcrumb from "../components/common/Breadcrumb";
import Sidebar from "../components/layout/Sidebar";
import SearchBar from "../components/layout/SearchBar";
import NoDataFound from "../components/common/NoDataFound";
import ROUTES from "../config/routes";

function ProductsPage() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (!query.trim()) {
      return;
    }

    navigate(`${ROUTES.SEARCH_RESULTS}?q=${query}`);
  };

  return (
    <section className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumb
          className="mb-8"
          items={[
            {
              label: "Products",
            },
          ]}
        />

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-amber-700">
              Premium Collection
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Discover Luxury Fashion
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
              Explore curated premium fashion pieces,
              elegant accessories, and timeless luxury essentials.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search luxury products..."
            />
          </div>
        </div>

        <ProductFilter products={products}>
          {({
            filteredProducts,
            resetFilters,
          }) => (
            <div className="flex gap-8">
              <Sidebar />

              <div className="min-w-0 flex-1">
                {filteredProducts.length > 0 ? (
                  <ProductGrid
                    products={filteredProducts}
                  />
                ) : (
                  <NoDataFound
                    title="No matching products"
                    message="Try adjusting filters or search criteria."
                    actionLabel="Reset Filters"
                    onAction={resetFilters}
                  />
                )}
              </div>
            </div>
          )}
        </ProductFilter>
      </div>
    </section>
  );
}

export default ProductsPage;