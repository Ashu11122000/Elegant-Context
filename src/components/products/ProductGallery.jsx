import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

function ProductGallery({ images = [], productName }) {
  const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!validImages.length) {
    return (
      <div className="flex min-h-[500px] items-center justify-center rounded-2xl border border-[#edbf68]/10 bg-[#31230c]">
        <p className="text-[#d7c3a0]">No product images available.</p>
      </div>
    );
  }

  const goToPrevious = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? validImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === validImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <section
      aria-label={`${productName} image gallery`}
      className="space-y-5"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#edbf68]/10 bg-[#31230c]">
        <img
          src={validImages[activeImageIndex]}
          alt={`${productName} ${activeImageIndex + 1}`}
          className="h-[500px] w-full object-cover md:h-[650px]"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {validImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#edbf68]/20 bg-[#271e07]/85 text-[#edbf68] backdrop-blur-sm transition hover:scale-105 hover:bg-[#edbf68] hover:text-[#1f1606]"
            >
              <FaChevronLeft size={14} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#edbf68]/20 bg-[#271e07]/85 text-[#edbf68] backdrop-blur-sm transition hover:scale-105 hover:bg-[#edbf68] hover:text-[#1f1606]"
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}

        <div className="absolute right-4 top-4">
          <button
            type="button"
            aria-label="Expand image"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#edbf68]/20 bg-[#271e07]/85 text-[#edbf68] backdrop-blur-sm transition hover:scale-105 hover:bg-[#edbf68] hover:text-[#1f1606]"
          >
            <FaExpand size={14} />
          </button>
        </div>
      </div>

      {validImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {validImages.map((image, index) => {
            const isActive = index === activeImageIndex;

            return (
              <button
                key={`${image}-${index + 1}`}
                type="button"
                onClick={() => handleThumbnailClick(index)}
                aria-label={`View product image ${index + 1}`}
                className={`overflow-hidden rounded-xl border transition ${
                  isActive
                    ? "border-[#edbf68] ring-2 ring-[#edbf68]/30"
                    : "border-[#edbf68]/10 hover:border-[#edbf68]/40"
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="h-24 w-full object-cover"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  productName: PropTypes.string.isRequired,
};

export default ProductGallery;