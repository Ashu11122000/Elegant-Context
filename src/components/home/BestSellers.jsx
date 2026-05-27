import PropTypes from "prop-types";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../UI/SectionHeading";
import PRODUCTS from "../../data/products";

function BestSellers({ limit = 4 }) {
  const bestSellingProducts = [...PRODUCTS]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, limit);

  if (!bestSellingProducts.length) {
    return null;
  }

  return (
    <section className="bg-[#2d1f08] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Best Sellers"
          title="Customer Favorites"
          subtitle="Shop our most purchased premium fashion pieces loved by shoppers worldwide."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

BestSellers.propTypes = {
  limit: PropTypes.number,
};

export default BestSellers;