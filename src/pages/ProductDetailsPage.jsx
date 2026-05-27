import { useParams } from "react-router-dom";
import { FaGem, FaArrowLeft } from "react-icons/fa";
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
      item?.slug === slug || String(item?.id) === String(slug)
  );

  const handleAddToCart = (selectedProduct, quantity) => {
    console.log("Add to cart:", selectedProduct, quantity);
  };

  const handleWishlistToggle = (selectedProduct) => {
    console.log("Wishlist:", selectedProduct);
  };

  const handleQuickView = (selectedProduct) => {
    console.log("Quick view:", selectedProduct);
  };

  if (!product) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-[#090603] px-4 py-16 sm:px-6 lg:px-8">
        {/* Ambient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute top-40 right-0 h-[350px] w-[350px] rounded-full bg-yellow-400/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1308] via-[#120d06] to-[#090603] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
            <div className="px-8 py-14 lg:px-14">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-300/15 bg-amber-400/10 px-5 py-3 text-sm font-medium text-[#edbf68] backdrop-blur-xl">
                <FaArrowLeft />
                Return to Product Discovery
              </div>

              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-4xl text-[#1a1205] shadow-[0_20px_50px_rgba(237,191,104,0.3)]">
                <FaGem />
              </div>

              <div className="mt-8 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
                  Elegant Context
                </p>

                <h1 className="mt-6 text-5xl font-semibold text-[#f8e8c8]">
                  Product Not Found
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a88f68]">
                  The luxury product you are searching for may have been
                  removed, renamed, or is temporarily unavailable.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-amber-300/15 bg-amber-400/10 px-6 py-3 text-sm font-medium text-[#edbf68]">
                  <HiSparkles />
                  Curated luxury inventory updates in progress
                </div>
              </div>

              <div className="mt-10">
                <ErrorMessage
                  title="Unavailable Product"
                  message="Please return to the premium collection and continue exploring curated fashion discoveries."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090603] px-4 py-12 sm:px-6 lg:px-8">
      {/* Luxury Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute top-32 right-0 h-[420px] w-[420px] rounded-full bg-yellow-400/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
          <Breadcrumb
            items={[
              {
                label: "Products",
                path: ROUTES.PRODUCTS,
              },
              {
                label: product.name,
              },
            ]}
          />
        </div>

        {/* Product Details */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1308] via-[#120d06] to-[#090603] shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
          <ProductDetails
            product={product}
            allProducts={products}
            onAddToCart={handleAddToCart}
            onWishlistToggle={handleWishlistToggle}
            onQuickView={handleQuickView}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;