import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImages,
  FaSearchPlus,
} from "react-icons/fa";

function ProductGallery({
  images = [],
  productName,
}) {
  const validImages = Array.isArray(images)
    ? images.filter(Boolean)
    : [];

  const [
    activeImageIndex,
    setActiveImageIndex,
  ] = useState(0);

  if (!validImages.length) {
    return (
      <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_30%),linear-gradient(to_bottom,#1b1207,#120c05,#0c0703)] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative z-10 max-w-lg px-6 text-center">
          {/* Icon */}
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f0c372] via-[#ddab4e] to-[#c78628] text-4xl text-[#2f1903] shadow-[0_20px_50px_rgba(237,191,104,0.35)]">
            <span className="absolute inset-0 bg-white/10 opacity-40" />

            <span className="relative z-10">
              <FaImages />
            </span>
          </div>

          {/* Header */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#caa26a]">
              Luxury Gallery
            </p>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-[2.2rem] font-black tracking-tight text-[#fff1da]">
            No Visual Preview
          </h3>

          {/* Description */}
          <p className="mt-5 text-base leading-relaxed text-[#b59368]">
            Premium product imagery is currently
            unavailable for this luxury fashion
            item or curated collection.
          </p>

          {/* Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "Luxury Preview",
              "Premium Visuals",
              "Curated Gallery",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#f0c372]/10 bg-[#241507]/90 px-5 py-3"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const goToPrevious = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0
        ? validImages.length - 1
        : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === validImages.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const progressPercentage =
    ((activeImageIndex + 1) /
      validImages.length) *
    100;

  return (
    <section
      aria-label={`${productName} image gallery`}
      className="space-y-7"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#caa26a]">
              Product Visuals
            </p>
          </div>

          {/* Title */}
          <h2 className="mt-5 text-[2.4rem] font-black tracking-tight text-[#fff1da]">
            Immersive Luxury Gallery
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#b59368]">
            Explore premium craftsmanship,
            elevated textures, luxury details,
            and curated product imagery through
            immersive high-resolution previews.
          </p>
        </div>

        {/* Progress Card */}
        <div className="rounded-[1.8rem] border border-[#392712] bg-gradient-to-br from-[#241608]/95 to-[#1a1007]/95 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
            Gallery Progress
          </p>

          <h3 className="mt-3 text-[2rem] font-black tracking-tight text-[#fff0d7]">
            {activeImageIndex + 1}
            <span className="mx-2 text-[#b58a52]">
              /
            </span>
            {validImages.length}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-[#aa8961]">
            Curated premium visual previews
          </p>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[linear-gradient(to_bottom,#181106,#100a04)] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_35%)]" />

        <div className="group relative overflow-hidden">
          {/* Image */}
          <img
            src={validImages[activeImageIndex]}
            alt={`${productName} ${
              activeImageIndex + 1
            }`}
            className="h-[580px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[780px]"
            loading="eager"
          />

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

          {/* Shine */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <div className="absolute -left-24 top-0 h-full w-28 rotate-12 bg-white/10 blur-2xl" />
          </div>

          {/* Progress */}
          <div className="absolute left-7 right-7 top-7">
            <div className="overflow-hidden rounded-full border border-white/5 bg-black/30 p-[2px] backdrop-blur-xl">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#f0c372] via-[#ffe1a8] to-[#c78628] transition-all duration-500"
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Zoom Hint */}
          <div className="absolute right-7 top-20 rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
              <FaSearchPlus size={12} />

              Zoom View
            </div>
          </div>

          {/* Navigation */}
          {validImages.length > 1 && (
            <>
              {/* Left */}
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
                className="group/nav absolute left-7 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/45 text-[#f0c372] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f0c372]/30 hover:bg-[#2a190b]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover/nav:opacity-100" />

                <span className="relative z-10">
                  <FaChevronLeft size={16} />
                </span>
              </button>

              {/* Right */}
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
                className="group/nav absolute right-7 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/45 text-[#f0c372] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f0c372]/30 hover:bg-[#2a190b]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover/nav:opacity-100" />

                <span className="relative z-10">
                  <FaChevronRight size={16} />
                </span>
              </button>
            </>
          )}

          {/* Expand */}
          <button
            type="button"
            aria-label="Expand image"
            className="group/expand absolute bottom-7 right-7 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/45 text-[#f0c372] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f0c372]/30 hover:bg-[#2a190b]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover/expand:opacity-100" />

            <span className="relative z-10">
              <FaExpand size={16} />
            </span>
          </button>

          {/* Floating Tag */}
          <div className="absolute bottom-7 left-7 rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-xl">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
              Premium Visual Experience
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {validImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
          {validImages.map(
            (image, index) => {
              const isActive =
                index === activeImageIndex;

              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() =>
                    handleThumbnailClick(
                      index
                    )
                  }
                  aria-label={`View product image ${
                    index + 1
                  }`}
                  className={`group relative overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                    isActive
                      ? "border-[#f0c372] shadow-[0_14px_35px_rgba(237,191,104,0.25)] ring-2 ring-[#f0c372]/30"
                      : "border-[#392712] hover:-translate-y-1 hover:border-[#f0c372]/35"
                  }`}
                >
                  {/* Thumbnail */}
                  <img
                    src={image}
                    alt={`${productName} thumbnail ${
                      index + 1
                    }`}
                    className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      isActive
                        ? "bg-transparent"
                        : "bg-black/35 group-hover:bg-black/10"
                    }`}
                  />

                  {/* Shine */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -left-8 top-0 h-full w-16 rotate-12 bg-white/10 blur-2xl" />
                  </div>

                  {/* Index */}
                  <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-xl">
                    <span className="text-[10px] font-black text-[#f0c372]">
                      {index + 1}
                    </span>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[#f0c372]/15 bg-[#241507]/90 px-3 py-1.5">
                      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                        Active
                      </span>
                    </div>
                  )}
                </button>
              );
            }
          )}
        </div>
      )}
    </section>
  );
}

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string
  ),
  productName:
    PropTypes.string.isRequired,
};

export default ProductGallery;