import { useParams } from "react-router-dom";
import {
  FaGem,
  FaArrowLeft,
  FaShieldAlt,
  FaStar,
  FaCrown,
  FaCheckCircle,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

import products from "../data/products";
import ProductDetails from "../components/products/ProductDetails";
import Breadcrumb from "../components/common/Breadcrumb";
import ErrorMessage from "../components/common/ErrorMessage";
import ROUTES from "../config/routes";

function ProductDetailsPage() {
  const { slug } = useParams();

  const product = products.find(
    (item) =>
      item?.slug === slug ||
      String(item?.id) === String(slug)
  );

  const handleAddToCart = (
    selectedProduct,
    quantity
  ) => {
    console.log(
      "Add to cart:",
      selectedProduct,
      quantity
    );
  };

  const handleWishlistToggle = (
    selectedProduct
  ) => {
    console.log(
      "Wishlist:",
      selectedProduct
    );
  };

  const handleQuickView = (
    selectedProduct
  ) => {
    console.log(
      "Quick view:",
      selectedProduct
    );
  };

  if (!product) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-[#070503] px-4 py-16 text-[#f7e7c6] sm:px-6 lg:px-8">
        {/* Ambient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />

          <div className="absolute top-40 right-0 h-[350px] w-[350px] rounded-full bg-yellow-400/5 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-500/5 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#edbf68]/5 blur-[220px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d6b36a]/15 bg-gradient-to-br from-[#1d1409] via-[#120d06] to-[#090603] shadow-[0_35px_120px_rgba(0,0,0,0.75)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,191,104,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_30%)]" />

            <div className="relative px-8 py-14 lg:px-14">
              {/* Return Badge */}
              <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#d6b36a]/15 bg-[#edbf68]/10 px-5 py-3 backdrop-blur-xl">
                <FaArrowLeft className="text-[#d6b36a]" />

                <span className="text-sm font-semibold tracking-wide text-[#d7bb84]">
                  Return to Product Discovery
                </span>
              </div>

              {/* Icon */}
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] border border-[#d6b36a]/20 bg-gradient-to-br from-[#f0c879] to-[#c88c29] text-5xl text-[#1a1205] shadow-[0_25px_60px_rgba(237,191,104,0.35)]">
                <FaGem />
              </div>

              {/* Content */}
              <div className="mt-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#8d7551]">
                  Luxury Collection
                </p>

                <h1 className="mt-6 text-5xl font-black tracking-tight text-[#f7e8c7] sm:text-6xl">
                  Product Not Found
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-[#b59a71]">
                  The luxury product you are
                  searching for may have been
                  removed, renamed, or is
                  temporarily unavailable in our
                  curated premium collection.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d6b36a]/15 bg-[#edbf68]/10 px-6 py-3 backdrop-blur-xl">
                  <HiSparkles className="text-[#d6b36a]" />

                  <span className="text-sm font-semibold tracking-wide text-[#d6b36a]">
                    Curated luxury inventory
                    updates in progress
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-[#d6b36a]/10 bg-[#d6b36a]/5 px-4 py-2">
                    <FaShieldAlt className="text-[#d6b36a]" />

                    <span className="text-sm font-medium text-[#cfb27a]">
                      Verified Collections
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#d6b36a]/10 bg-[#d6b36a]/5 px-4 py-2">
                    <FaStar className="text-[#d6b36a]" />

                    <span className="text-sm font-medium text-[#cfb27a]">
                      Premium Experience
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#d6b36a]/10 bg-[#d6b36a]/5 px-4 py-2">
                    <FaCrown className="text-[#d6b36a]" />

                    <span className="text-sm font-medium text-[#cfb27a]">
                      Luxury Discovery
                    </span>
                  </div>
                </div>
              </div>

              {/* Error Card */}
              <div className="mt-12 rounded-[2rem] border border-[#d6b36a]/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <ErrorMessage
                  title="Unavailable Product"
                  message="Please return to the premium collection and continue exploring curated luxury fashion discoveries."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#120d07]/80 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edbf68]/10 text-[#d6b36a]">
                      <FaCheckCircle />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#d6b36a]">
                      Updated Inventory
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#a98f68]">
                      Fresh luxury arrivals
                      added regularly.
                    </p>
                  </div>

                                    <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#120d07]/80 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edbf68]/10 text-[#d6b36a]">
                      <FaGem />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#d6b36a]">
                      Premium Quality
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#a98f68]">
                      Carefully curated fashion craftsmanship.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#d6b36a]/10 bg-[#120d07]/80 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edbf68]/10 text-[#d6b36a]">
                      <HiSparkles />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#d6b36a]">
                      Luxury Experience
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#a98f68]">
                      Designed for elevated shopping journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070503] px-4 py-6 text-[#f7e8c8] sm:px-6 lg:px-8">
      {/* Luxury Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute top-32 right-0 h-[420px] w-[420px] rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-3xl" />

        {/* Center Luxury Glow */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#edbf68]/5 blur-[220px]" />

        {/* Premium Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-[1700px]">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              {
                label: "Products",
                path: ROUTES.PRODUCTS,
              },
              {
                label:
                  product.title ||
                  product.name ||
                  "Product",
              },
            ]}
          />
        </div>

        {/* Luxury Hero Banner */}
        <div className="mb-8 overflow-hidden rounded-[2.2rem] border border-[#d6b36a]/10 bg-gradient-to-r from-[#1b1208]/95 via-[#120c07]/95 to-[#1b1208]/95 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div className="relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
            {/* Decorative Glow */}
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#edbf68]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#9d8254]">
                  Luxury Product Experience
                </p>

                <h1 className="mt-4 text-4xl font-black tracking-tight text-[#f7e8c7] lg:text-5xl">
                  {product.title ||
                    product.name}
                </h1>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-[#b79d73] sm:text-base">
                  Discover refined craftsmanship,
                  premium materials, exceptional
                  detailing, and timeless design
                  curated for luxury lifestyles
                  and elevated personal style.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-[#d6b36a]/15 bg-[#edbf68]/10 px-5 py-3 backdrop-blur-xl">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6b36a]">
                    Verified Luxury
                  </span>
                </div>

                <div className="rounded-full border border-emerald-500/15 bg-emerald-500/10 px-5 py-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                    Authentic Product
                  </span>
                </div>

                <div className="rounded-full border border-[#d6b36a]/15 bg-[#1d140b] px-5 py-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f0c372]">
                    Curated Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-[1.8rem] border border-[#d6b36a]/10 bg-[#120d07]/85 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edbf68]/10 text-[#d6b36a]">
                <FaGem />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8d7551]">
                  Quality
                </p>

                <p className="text-xl font-black text-[#f7e8c7]">
                  Premium
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[#d6b36a]/10 bg-[#120d07]/85 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edbf68]/10 text-[#d6b36a]">
                <FaCheckCircle />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8d7551]">
                  Verified
                </p>

                <p className="text-xl font-black text-[#f7e8c7]">
                  100%
                </p>
              </div>
            </div>
          </div>

                    <div className="rounded-[1.8rem] border border-[#d6b36a]/10 bg-[#120d07]/85 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edbf68]/10 text-[#d6b36a]">
                <FaStar />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8d7551]">
                  Rating
                </p>

                <p className="text-xl font-black text-[#f7e8c7]">
                  4.9★
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[#d6b36a]/10 bg-[#120d07]/85 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edbf68]/10 text-[#d6b36a]">
                <FaCrown />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8d7551]">
                  Collection
                </p>

                <p className="text-xl font-black text-[#f7e8c7]">
                  Luxury
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Content */}
        <div className="relative">
          <ProductDetails
            product={product}
            allProducts={products}
            onAddToCart={handleAddToCart}
            onWishlistToggle={
              handleWishlistToggle
            }
            onQuickView={handleQuickView}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;