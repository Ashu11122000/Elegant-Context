import PropTypes from "prop-types";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import SimilarProducts from "./SimilarProducts";

function ProductDetails({
  product,
  allProducts = [],
  onAddToCart,
  onWishlistToggle,
  onQuickView,
}) {
  if (!product) {
    return (
      <section
        aria-label="Product details unavailable"
        className="flex min-h-[500px] items-center justify-center rounded-2xl border border-[#edbf68]/10 bg-[#31230c] px-6 text-center"
      >
        <div>
          <h2 className="mb-3 text-2xl font-semibold text-[#f5e6c8]">
            Product Not Found
          </h2>
          <p className="text-[#d7c3a0]">
            The product you are looking for is unavailable or may have been removed.
          </p>
        </div>
      </section>
    );
  }

  const galleryImages =
    Array.isArray(product.images) && product.images.length
      ? product.images
      : product.image
        ? [product.image]
        : [];

  return (
    <section className="space-y-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <ProductGallery
          images={galleryImages}
          productName={product.name}
        />

        <ProductInfo
          product={product}
          onAddToCart={onAddToCart}
          onWishlistToggle={onWishlistToggle}
        />
      </div>

      <ProductTabs product={product} />

      <SimilarProducts
        products={allProducts}
        currentProductId={product.id}
        onWishlistToggle={onWishlistToggle}
        onQuickView={onQuickView}
      />
    </section>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })
  ),
  onAddToCart: PropTypes.func,
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductDetails;