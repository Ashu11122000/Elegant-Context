import { useNavigate } from "react-router-dom";
import {
  FaGem,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import products from "../data/products";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import Breadcrumb from "../components/common/Breadcrumb";
import SearchBar from "../components/layout/SearchBar";
import NoDataFound from "../components/common/NoDataFound";
import ROUTES from "../config/routes";

function ProductsPage() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    navigate(
      `${ROUTES.SEARCH_RESULTS}?q=${encodeURIComponent(trimmedQuery)}`
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090603]">
      {/* Luxury Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-yellow-300/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          className="mb-8"
          items={[
            {
              label: "Products",
            },
          ]}
        />

        {/* Ultra Premium Hero */}
        <section className="mb-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1207] via-[#120d06] to-[#090603] shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
          <div className="grid gap-10 px-8 py-10 lg:grid-cols-2 lg:px-12 lg:py-14">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-amber-300/15 bg-amber-400/10 px-5 py-2 text-sm font-medium text-[#edbf68] backdrop-blur-xl">
                <HiSparkles />
                Curated Luxury Fashion Collection
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
                Elegant Context
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-[#f8e8c8] sm:text-6xl">
                Discover Premium
                <span className="block bg-gradient-to-r from-[#edbf68] to-[#f8e8c8] bg-clip-text text-transparent">
                  Luxury Fashion
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a88f68]">
                Explore elevated essentials, timeless luxury pieces,
                statement accessories, and curated premium collections
                tailored for refined modern lifestyles.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <div className="rounded-2xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-xl">
                  <div className="text-2xl text-[#edbf68]">
                    <FaShoppingBag />
                  </div>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                    Products
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-[#f8e8c8]">
                    {products.length}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-xl">
                  <div className="text-2xl text-[#edbf68]">
                    <FaGem />
                  </div>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                    Luxury Grade
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-[#f8e8c8]">
                    Premium
                  </p>
                </div>
              </div>
            </div>

            {/* Right Search Panel */}
            <div className="flex items-center">
              <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="mb-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8f7855]">
                    Premium Discovery
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold text-[#f8e8c8]">
                    Search Luxury Products
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-[#a88f68]">
                    Find curated premium products, statement essentials,
                    and timeless fashion collections instantly.
                  </p>
                </div>

                <SearchBar
                  onSearch={handleSearch}
                  placeholder="Search luxury fashion, bags, accessories..."
                />

                <div className="mt-6 flex items-center justify-between rounded-2xl border border-amber-300/10 bg-amber-400/5 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#edbf68]">
                      AI-powered premium recommendations
                    </p>
                  </div>

                  <FaArrowRight className="text-[#edbf68]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Filter + Grid */}
        <ProductFilter products={products}>
          {({
            filteredProducts,
            resetFilters,
          }) =>
            filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <NoDataFound
                title="No Matching Luxury Products"
                message="We couldn't find products matching your current filters. Refine your search criteria or reset your premium discovery filters."
                actionLabel="Reset Filters"
                onAction={resetFilters}
              />
            )
          }
        </ProductFilter>
      </div>
    </section>
  );
}

export default ProductsPage;