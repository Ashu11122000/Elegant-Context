import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductDetails from "../components/products/ProductDetails";
import Breadcrumb from "../components/common/Breadcrumb";
import ErrorMessage from "../components/common/ErrorMessage";
import ROUTES from "../config/routes";

function ProductDetailsPage() {
  const { productSlug } = useParams();

  const product = products.find(
    (item) =>
      item.slug === productSlug ||
      String(item.id) === String(productSlug)
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
      <section className="min-h-screen bg-stone-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ErrorMessage
            title="Product Not Found"
            message="The product you are looking for may have been removed or is temporarily unavailable."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-stone-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb
          className="mb-10"
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