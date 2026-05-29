import { useMemo } from "react";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";

import Breadcrumb from "../components/common/Breadcrumb";
import WishlistGrid from "../components/wishlist/WishlistGrid";
import WishlistEmptyState from "../components/wishlist/WishlistEmptyState";

import { useWishlistContext } from "../context/WishlistContext";
import { useCartContext } from "../context/CartContext";

function WishlistPage() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlistContext();

  const { addToCart } = useCartContext();

  const stats = useMemo(() => {
    const totalItems = wishlistItems.length;

    const averageRating =
      totalItems > 0
        ? (
            wishlistItems.reduce(
              (acc, item) => acc + (item.rating || 0),
              0
            ) / totalItems
          ).toFixed(1)
        : "0.0";

    const totalValue = wishlistItems.reduce(
      (acc, item) => acc + item.price,
      0
    );

    return {
      totalItems,
      averageRating,
      totalValue,
    };
  }, [wishlistItems]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-[#0f0a05]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            {
              label: "Home",
              path: "/",
            },
            {
              label: "Wishlist",
            },
          ]}
        />

        {/* Hero */}
        <section
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#322214]
            bg-[linear-gradient(to_bottom,#171008,#120b05)]
            p-8
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            sm:p-10
            lg:p-12
          "
        >
          {/* Glow Effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#c08b2d]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#8a5c1d]/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-4">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#5a3d1f]
                  bg-[#1a120a]
                "
              >
                <FiHeart className="text-3xl text-[#d4a24c]" />
              </div>

              <div>
                <h1
                  className="
                    text-3xl
                    font-bold
                    text-[#f7e7ce]
                    sm:text-4xl
                  "
                >
                  My Wishlist
                </h1>

                <p className="mt-2 text-[#b89d74]">
                  Save your favorite luxury fashion pieces for later.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div
                className="
                  rounded-2xl
                  border
                  border-[#322214]
                  bg-[#1a120a]
                  p-5
                "
              >
                <div className="mb-3 flex items-center gap-2">
                  <FiHeart className="text-[#d4a24c]" />
                  <span className="text-sm text-[#b89d74]">
                    Saved Items
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#f7e7ce]">
                  {stats.totalItems}
                </h3>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-[#322214]
                  bg-[#1a120a]
                  p-5
                "
              >
                <div className="mb-3 flex items-center gap-2">
                  <FiStar className="text-[#d4a24c]" />
                  <span className="text-sm text-[#b89d74]">
                    Avg Rating
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#f7e7ce]">
                  {stats.averageRating}
                </h3>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-[#322214]
                  bg-[#1a120a]
                  p-5
                "
              >
                <div className="mb-3 flex items-center gap-2">
                  <FiShoppingBag className="text-[#d4a24c]" />
                  <span className="text-sm text-[#b89d74]">
                    Wishlist Value
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#f7e7ce]">
                  ${stats.totalValue.toFixed(2)}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="mt-10">
          {wishlistItems.length === 0 ? (
            <WishlistEmptyState />
          ) : (
            <WishlistGrid
              items={wishlistItems}
              onRemove={removeFromWishlist}
              onAddToCart={handleAddToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;