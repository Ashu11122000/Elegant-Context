import { useNavigate } from "react-router-dom";
import {
  FaGem,
  FaShoppingBag,
  FaArrowRight,
  FaShieldAlt,
  FaStar,
  FaCrown,
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
      `${ROUTES.SEARCH_RESULTS}?q=${encodeURIComponent(
        trimmedQuery
      )}`
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070503] text-[#f5e7c5]">
      {/* Luxury Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-yellow-300/5 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-3xl" />

        {/* Premium Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          className="mb-6"
          items={[
            {
              label: "Products",
            },
          ]}
        />

        {/* ================= HERO ================= */}
        <section className="relative mb-12 overflow-hidden rounded-[2rem] border border-[#d6b36a]/15 bg-gradient-to-br from-[#1d1409] via-[#120d06] to-[#090603] shadow-[0_35px_120px_rgba(0,0,0,0.75)]">
          {/* Premium Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,191,104,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />

          <div className="relative grid gap-10 px-7 py-8 sm:px-10 sm:py-10 lg:grid-cols-2 lg:px-14 lg:py-14">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-[#edbf68]/20 bg-[#edbf68]/10 px-5 py-2.5 backdrop-blur-xl">
                <HiSparkles className="text-[#d6b36a]" />

                <span className="text-sm font-semibold tracking-wide text-[#d8bb82]">
                  Curated Luxury Fashion Collection
                </span>
              </div>

              {/* Label */}
              <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#8d7551]">
                Elegant Context
              </p>

              {/* Heading */}
              <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight text-[#f6e7c6] sm:text-6xl">
                Discover Elevated

                <span className="mt-2 block bg-gradient-to-r from-[#edbf68] via-[#f6d28b] to-[#fff1d0] bg-clip-text text-transparent">
                  Luxury Fashion
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#b79d73]">
                Explore refined essentials, timeless
                statement pieces, handcrafted accessories,
                and premium curated collections designed
                for modern luxury lifestyles.
              </p>

              {/* Premium Features */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#d6b36a]/10 bg-[#d6b36a]/5 px-4 py-2 backdrop-blur-xl">
                  <FaShieldAlt className="text-[#d6b36a]" />

                  <span className="text-sm font-medium text-[#cfb27a]">
                    Verified Quality
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#d6b36a]/10 bg-[#d6b36a]/5 px-4 py-2 backdrop-blur-xl">
                  <FaStar className="text-[#d6b36a]" />

                  <span className="text-sm font-medium text-[#cfb27a]">
                    Curated Collections
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#d6b36a]/10 bg-[#d6b36a]/5 px-4 py-2 backdrop-blur-xl">
                  <FaCrown className="text-[#d6b36a]" />

                  <span className="text-sm font-medium text-[#cfb27a]">
                    Luxury Experience
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {/* Products */}
                <div className="group rounded-3xl border border-[#d6b36a]/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition-all duration-300 hover:border-[#d6b36a]/30 hover:bg-white/[0.06]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b36a]/15 bg-[#edbf68]/10 text-2xl text-[#d6b36a] shadow-inner">
                    <FaShoppingBag />
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8e7651]">
                    Products
                  </p>

                  <p className="mt-3 text-4xl font-black tracking-tight text-[#f6e7c6]">
                    {products.length}
                  </p>

                  <p className="mt-2 text-sm text-[#a78d66]">
                    Handpicked premium fashion items.
                  </p>
                </div>

                {/* Quality */}
                <div className="group rounded-3xl border border-[#d6b36a]/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition-all duration-300 hover:border-[#d6b36a]/30 hover:bg-white/[0.06]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b36a]/15 bg-[#edbf68]/10 text-2xl text-[#d6b36a] shadow-inner">
                    <FaGem />
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8e7651]">
                    Luxury Grade
                  </p>

                  <p className="mt-3 text-3xl font-black tracking-tight text-[#f6e7c6]">
                    Premium
                  </p>

                  <p className="mt-2 text-sm text-[#a78d66]">
                    Crafted for elegance & exclusivity.
                  </p>
                </div>
              </div>
            </div>

                        {/* Right Search Panel */}
            <div className="flex items-center">
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#d6b36a]/15 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                {/* Glow */}
                <div className="absolute -top-20 right-0 h-52 w-52 rounded-full bg-amber-400/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#8f7752]">
                      Premium Discovery
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight text-[#f7e8c8]">
                      Search Luxury Products
                    </h2>

                    <p className="mt-4 text-[16px] leading-8 text-[#b59a71]">
                      Discover curated luxury essentials,
                      timeless accessories, statement fashion
                      pieces, and refined collections instantly.
                    </p>
                  </div>

                  {/* Search */}
                  <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#0e0904]/70 p-4 shadow-inner">
                    <SearchBar
                      onSearch={handleSearch}
                      placeholder="Search luxury fashion, bags, accessories..."
                    />
                  </div>

                  {/* Recommendation Box */}
                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#d6b36a]/15 bg-gradient-to-r from-[#2b1d0d] to-[#1b1309] px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                    <div>
                      <p className="text-sm font-semibold tracking-wide text-[#d6b36a]">
                        AI-powered premium recommendations
                      </p>

                      <p className="mt-1 text-xs text-[#9e845d]">
                        Personalized luxury discovery
                        experience
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d6b36a]/15 bg-[#edbf68]/10 text-[#d6b36a]">
                      <FaArrowRight />
                    </div>
                  </div>

                  {/* Mini Info */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#d6b36a]/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8d7551]">
                        Fast Delivery
                      </p>

                      <p className="mt-2 text-sm text-[#cfb27a]">
                        Premium shipping experience
                        worldwide.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#d6b36a]/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8d7551]">
                        Trusted Quality
                      </p>

                      <p className="mt-2 text-sm text-[#cfb27a]">
                        Carefully verified premium
                        craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS SECTION ================= */}
        <div className="rounded-[2rem] border border-[#d6b36a]/10 bg-[#0d0905]/60 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
          <ProductFilter products={products}>
            {({
              filteredProducts,
              resetFilters,
            }) =>
              filteredProducts.length > 0 ? (
                <ProductGrid
                  products={filteredProducts}
                />
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

              </div>
    </section>
  );
}

export default ProductsPage;