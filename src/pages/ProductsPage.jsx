import products from "../data/products";
import ProductFilter from "../components/products/ProductFilter";

function ProductsPage() {
  return (
    <section className="min-h-screen bg-[#f8f6f2]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ProductFilter products={products} />
      </div>
    </section>
  );
}

export default ProductsPage;