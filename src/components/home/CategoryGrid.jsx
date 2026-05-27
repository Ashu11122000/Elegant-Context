import { Link } from "react-router-dom";
import SectionHeading from "../UI/SectionHeading";
import { PRODUCT_CATEGORIES } from "../../data/products";

const categoryImages = {
  fashion:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",

  accessories:
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
};

const categoryDescriptions = {
  fashion: "Discover premium fashion essentials",
  accessories: "Explore stylish modern accessories",
};

function CategoryGrid() {
  return (
    <section className="bg-[#2d1f08] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Shop Categories"
          title="Explore Our Collections"
          subtitle="Browse premium categories curated for modern fashion lovers."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="group relative overflow-hidden rounded-2xl border border-[#edbf68]/20 bg-[#31230c] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#edbf68]/40"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={categoryImages[category]}
                  alt={category}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold capitalize text-[#edbf68]">
                    {category}
                  </h3>

                  <p className="mt-2 text-sm text-[#f5e6c8]">
                    {categoryDescriptions[category]}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;