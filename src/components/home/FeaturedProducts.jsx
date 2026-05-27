import PropTypes from "prop-types";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../common/SectionHeading";
import products from "../../data/products";

function FeaturedProducts({ limit = 8 }) {
    const featuredProducts = products
        .filter((product) => product.isFeatured)
        .slice(0, limit);

    if (!featuredProducts.length) {
        return null;
    }

    return (
        <section className="bg-[#271e07] py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Featured Collection"
                    subtitle="Discover our handpicked premium fashion essentials crafted for modern elegance."
                    align="center"
                />

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

FeaturedProducts.propTypes = {
    limit: PropTypes.number,
};

export default FeaturedProducts;