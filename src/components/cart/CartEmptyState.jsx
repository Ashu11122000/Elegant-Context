import EmptyCart from "./EmptyCart";

function CartEmptyState() {
  return (
    <EmptyCart
      title="Curated Luxury Awaits Your Discovery"
      description="Your shopping cart is ready to be filled with exceptional products chosen for their craftsmanship, quality, and timeless appeal. Explore our carefully curated collections and discover premium essentials designed to elevate your everyday lifestyle with elegance and confidence."
      subtitle="Premium Quality • Exclusive Selections • Secure Checkout • Fast Delivery"
      highlightText="Explore Premium Collections"
      badge="Luxury Shopping Experience"
      features={[
        "Carefully Curated Premium Products",
        "Trusted Quality & Authenticity Guarantee",
        "Fast, Safe & Reliable Delivery",
        "Exclusive Offers & Member Privileges",
        "Secure Payments & Protected Checkout",
        "Dedicated Customer Support",
      ]}
    />
  );
}

export default CartEmptyState;