import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import ProductDetails from "../components/products/ProductDetails";
import Button from "../components/common/Button";

function ProductDetailsPage() {
  const { productSlug } = useParams();

  const product = products.find(
    (item) =>
      item.slug === productSlug || String(item.id) === String(productSlug)
  );

  const handleAddToCart = (selectedProduct, quantity) => {
    console.log("Add to cart:", selectedProduct, quantity);
  };

  const handleWishlistToggle = (selectedProduct) => {
    console.log("Wishlist toggle:", selectedProduct);
  };

  const handleQuickView = (selectedProduct) => {
    console.log("Quick view:", selectedProduct);
  };

  if (!product) {
    return (
      <section className="min-h-screen bg-[#271e07] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#d7c3a0]">
            Product Unavailable
          </p>

          <h1 className="mb-5 text-4xl font-bold text-[#f5e6c8]">
            Product Not Found
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#d7c3a0]">
            The product you are looking for may have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <Link to="/products">
            <Button>
              Back to Products
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#271e07] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            to="/"
            className="text-[#d7c3a0] transition hover:text-[#edbf68]"
          >
            Home
          </Link>

          <span className="text-[#d7c3a0]">/</span>

          <Link
            to="/products"
            className="text-[#d7c3a0] transition hover:text-[#edbf68]"
          >
            Products
          </Link>

          <span className="text-[#d7c3a0]">/</span>

          <span className="text-[#f5e6c8]">
            {product.name}
          </span>
        </nav>

        <ProductDetails
          product={product}
          allProducts={products}
          onAddToCart={handleAddToCart}
          onWishlistToggle={handleWishlistToggle}
          onQuickView={handleQuickView}
        />
      </div>
    </section>
  );
}

export default ProductDetailsPage;