import PropTypes from "prop-types";
import SectionHeading from "../UI/SectionHeading";
import ProductGrid from "./ProductGrid";

function SimilarProducts({
  products = [],
  currentProductId,
  title = "You May Also Like",
  subtitle = "Curated luxury recommendations based on your selection.",
  limit = 4,
  onWishlistToggle,
  onQuickView,
}) {
  const filteredProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, limit);

  if (!filteredProducts.length) {
    return null;
  }

  return (
    <section aria-label="Similar products" className="space-y-10">
      <SectionHeading
        title={title}
        subtitle={subtitle}
        centered={false}
      />

      <ProductGrid
        products={filteredProducts}
        showWishlist
        showQuickView
        onWishlistToggle={onWishlistToggle}
        onQuickView={onQuickView}
      />
    </section>
  );
}

SimilarProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
  currentProductId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  limit: PropTypes.number,
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default SimilarProducts;