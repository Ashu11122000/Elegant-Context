import PropTypes from "prop-types";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../UI/SectionHeading";
import { TRENDING_PRODUCTS } from "../../data/products";

function TrendingProducts({ limit = 4 }) {
  const trendingProducts = TRENDING_PRODUCTS.slice(0, limit);

  if (!trendingProducts.length) {
    return null;
  }

  return (
    <section className="bg-[#271e07] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Trending Now"
          title="Most Loved Right Now"
          subtitle="Explore the products our customers are loving the most this season."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
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

TrendingProducts.propTypes = {
  limit: PropTypes.number,
};

export default TrendingProducts;