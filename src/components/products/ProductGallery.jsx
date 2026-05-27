import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImages,
  FaSearchPlus,
} from "react-icons/fa";

function ProductGallery({ images = [], productName }) {
  const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!validImages.length) {
    return (
      <section className="flex min-h-[650px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1d1408] via-[#161005] to-[#100a04] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
        <div className="max-w-md text-center px-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-3xl text-[#1a1205] shadow-lg">
            <FaImages />
          </div>

          <h3 className="text-2xl font-semibold text-[#f8e8c8]">
            No Visual Preview
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[#d7c3a0]">
            Product imagery is currently unavailable for this premium item.
          </p>
        </div>
      </section>
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

  const progressPercentage =
    ((activeImageIndex + 1) / validImages.length) * 100;

  return (
    <section
      aria-label={`${productName} image gallery`}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8f7855]">
            Product Visuals
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[#f8e8c8]">
            Immersive Product Gallery
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
            Explore premium craftsmanship through high-resolution curated
            visuals.
          </p>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
            Gallery Progress
          </p>

          <p className="mt-2 text-lg font-semibold text-[#f8e8c8]">
            {activeImageIndex + 1} / {validImages.length}
          </p>
        </div>
      </div>

      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1d1408] via-[#161005] to-[#100a04] shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
        <div className="relative group">
          <img
            src={validImages[activeImageIndex]}
            alt={`${productName} ${activeImageIndex + 1}`}
            className="h-[550px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[760px]"
            loading="eager"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Progress */}
          <div className="absolute left-6 right-6 top-6">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10 backdrop-blur-xl">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#edbf68] to-[#d79b35] transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Zoom Hint */}
          <div className="absolute right-6 top-16 rounded-full border border-white/10 bg-[#271e07]/85 px-4 py-2 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#f5e6c8]">
              <FaSearchPlus size={12} />
              Zoom View
            </div>
          </div>

          {/* Navigation */}
          {validImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
                className="absolute left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#271e07]/85 text-[#edbf68] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#edbf68] hover:text-[#1f1606]"
              >
                <FaChevronLeft size={16} />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
                className="absolute right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#271e07]/85 text-[#edbf68] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#edbf68] hover:text-[#1f1606]"
              >
                <FaChevronRight size={16} />
              </button>
            </>
          )}

          {/* Expand */}
          <button
            type="button"
            aria-label="Expand image"
            className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#271e07]/85 text-[#edbf68] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#edbf68] hover:text-[#1f1606]"
          >
            <FaExpand size={16} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      {validImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
          {validImages.map((image, index) => {
            const isActive = index === activeImageIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => handleThumbnailClick(index)}
                aria-label={`View product image ${index + 1}`}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-[#edbf68] ring-2 ring-[#edbf68]/30 shadow-[0_10px_30px_rgba(237,191,104,0.2)]"
                    : "border-white/8 hover:border-[#edbf68]/40"
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div
                  className={`absolute inset-0 ${
                    isActive
                      ? "bg-transparent"
                      : "bg-black/25 group-hover:bg-black/10"
                  } transition-all duration-300`}
                />

                <div className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                  {index + 1}
                </div>
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