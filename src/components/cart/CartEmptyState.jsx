import EmptyCart from "./EmptyCart";

function CartEmptyState() {
  return (
    <EmptyCart
      title="Your Luxury Shopping Journey Begins Here"
      description="Your cart is currently empty, but a world of premium craftsmanship, timeless elegance, and exclusive collections awaits. Explore our curated selection of luxury fashion and discover pieces designed to elevate your lifestyle."
      subtitle="Premium Quality • Exclusive Collections • Secure Shopping"
      highlightText="Discover Bestsellers"
      badge="Luxury Collection"
      features={[
        "Handpicked Premium Products",
        "Fast & Secure Delivery",
        "Exclusive Member Benefits",
        "Trusted Quality Assurance",
      ]}
    />
  );
}

export default CartEmptyState;