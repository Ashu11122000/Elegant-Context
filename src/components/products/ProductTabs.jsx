import { useState } from "react";
import PropTypes from "prop-types";

const TAB_KEYS = {
  DESCRIPTION: "description",
  DETAILS: "details",
  SHIPPING: "shipping",
  REVIEWS: "reviews",
};

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState(TAB_KEYS.DESCRIPTION);

  if (!product) return null;

  const {
    description,
    details = [],
    shippingInfo,
    reviews = [],
  } = product;

  const tabs = [
    {
      key: TAB_KEYS.DESCRIPTION,
      label: "Description",
    },
    {
      key: TAB_KEYS.DETAILS,
      label: "Details",
    },
    {
      key: TAB_KEYS.SHIPPING,
      label: "Shipping",
    },
    {
      key: TAB_KEYS.REVIEWS,
      label: `Reviews (${reviews.length})`,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case TAB_KEYS.DESCRIPTION:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#f5e6c8]">
              Product Description
            </h3>
            <p className="leading-relaxed text-[#d7c3a0]">
              {description || "No product description available."}
            </p>
          </div>
        );

      case TAB_KEYS.DETAILS:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#f5e6c8]">
              Product Details
            </h3>

            {details.length ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {details.map((detail, index) => (
                  <li
                    key={`${detail}-${index + 1}`}
                    className="rounded-xl border border-[#edbf68]/10 bg-[#2d1f08] px-5 py-4 text-[#d7c3a0]"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#d7c3a0]">
                No additional details available.
              </p>
            )}
          </div>
        );

      case TAB_KEYS.SHIPPING:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#f5e6c8]">
              Shipping Information
            </h3>
            <p className="leading-relaxed text-[#d7c3a0]">
              {shippingInfo ||
                "Standard delivery within 3–7 business days. Premium shipping options may be available at checkout."}
            </p>
          </div>
        );

      case TAB_KEYS.REVIEWS:
        return (
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#f5e6c8]">
              Customer Reviews
            </h3>

            {reviews.length ? (
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div
                    key={`${review.name}-${index + 1}`}
                    className="rounded-2xl border border-[#edbf68]/10 bg-[#2d1f08] p-5"
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <h4 className="font-semibold text-[#f5e6c8]">
                        {review.name}
                      </h4>

                      <span className="text-sm text-[#d7c3a0]">
                        {review.date}
                      </span>
                    </div>

                    <p className="mb-3 text-sm font-medium text-[#edbf68]">
                      Rating: {review.rating}/5
                    </p>

                    <p className="leading-relaxed text-[#d7c3a0]">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#d7c3a0]">
                No customer reviews yet.
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      aria-label="Product details tabs"
      className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-6 md:p-8"
    >
      <div className="mb-8 flex flex-wrap gap-3 border-b border-[#edbf68]/10 pb-5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-[#edbf68] text-[#1f1606]"
                  : "bg-[#2d1f08] text-[#d7c3a0] hover:bg-[#edbf68]/10 hover:text-[#edbf68]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>{renderContent()}</div>
    </section>
  );
}

ProductTabs.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    shippingInfo: PropTypes.string,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ProductTabs;