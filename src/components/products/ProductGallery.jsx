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
      <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden rounded-[2.8rem] border border-[#322214] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        <div className="relative z-10 max-w-xl px-6 text-center">
          {/* Icon */}
          <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4cf87] via-[#dcaa4d] to-[#be7c1f] shadow-[0_25px_50px_rgba(237,191,104,0.32)]">
            <div className="absolute inset-[1px] rounded-[1.9rem] bg-[linear-gradient(to_bottom,#f4d28f,#d79735)] opacity-90" />

            <span className="relative z-10 text-4xl text-[#2d1702]">
              <FaImages />
            </span>
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

            <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#d1a866]">
              Product Gallery
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-[2.5rem] font-black leading-tight tracking-tight text-[#fff3df]">
            Visual Preview
            <span className="block text-[#c99741]">
              Unavailable
            </span>
          </h3>

          {/* Description */}
          <p className="mt-6 text-base leading-[1.9] text-[#b59368]">
            Product visuals are currently unavailable for this
            premium collection. Please check back later for
            immersive gallery previews and luxury imagery.
          </p>

          {/* Tags */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {[
              "Luxury Gallery",
              "Visual Preview",
              "Premium Display",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#f0c372]/10 bg-[#1d130a] px-5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
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
      className="space-y-8"
    >
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d2aa68]">
              Luxury Visual Experience
            </span>
          </div>

          <h2 className="mt-5 text-[2.2rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[2.7rem]">
            Premium Product Gallery
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-[1.9] text-[#b69469] sm:text-[15px]">
            Discover immersive high-resolution imagery,
            refined craftsmanship, premium textures, and
            elegant design details curated for luxury
            shopping experiences.
          </p>
        </div>

        {/* Right Card */}
        <div className="overflow-hidden rounded-[2rem] border border-[#342313] bg-[linear-gradient(to_bottom,#1b1209,#130b06)] p-5 shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8d6d43]">
            Gallery Status
          </p>

          <div className="mt-4 flex items-end gap-3">
            <h3 className="text-[2.5rem] font-black leading-none tracking-tight text-[#fff2dd]">
              {activeImageIndex + 1}
            </h3>

            <span className="mb-1 text-lg font-bold text-[#ae8147]">
              /
            </span>

            <span className="mb-1 text-lg font-bold text-[#c49a60]">
              {validImages.length}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-[#ad8b62]">
            Premium visual previews available
          </p>
        </div>
      </div>

      {/* ================= MAIN IMAGE ================= */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#322214] bg-[#0f0a06] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
        {/* Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.08),transparent_32%)]" />

        <div className="group relative overflow-hidden">
          {/* Image */}
          <img
            src={validImages[activeImageIndex]}
            alt={`${productName} ${
              activeImageIndex + 1
            }`}
            className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[650px] xl:h-[760px]"
            loading="eager"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <div className="absolute -left-24 top-0 h-full w-28 rotate-12 bg-white/10 blur-2xl" />
          </div>

          {/* Top Progress */}
          <div className="absolute left-5 right-5 top-5 sm:left-7 sm:right-7 sm:top-7">
            <div className="overflow-hidden rounded-full border border-white/5 bg-black/35 p-[2px] backdrop-blur-xl">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#f3cb83] via-[#ffe4b3] to-[#c8862b] transition-all duration-500"
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Zoom Badge */}
          <div className="absolute right-5 top-16 sm:right-7 sm:top-20">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-xl">
              <FaSearchPlus
                size={12}
                className="text-[#f0c372]"
              />

              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                Zoom View
              </span>
            </div>
          </div>

          {/* Bottom Left Badge */}
          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
            <div className="rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                Premium Display
              </span>
            </div>
          </div>

          {/* Expand Button */}
          <button
            type="button"
            aria-label="Expand image"
            className="group/expand absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/45 text-[#f0c372] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f0c372]/30 hover:bg-[#241608] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover/expand:opacity-100" />

            <span className="relative z-10">
              <FaExpand size={16} />
            </span>
          </button>

          {/* Navigation */}
          {validImages.length > 1 && (
            <>
              {/* Left */}
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous image"
                className="group/nav absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/45 text-[#f0c372] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f0c372]/30 hover:bg-[#241608] sm:left-7 sm:h-16 sm:w-16"
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
                className="group/nav absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/45 text-[#f0c372] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f0c372]/30 hover:bg-[#241608] sm:right-7 sm:h-16 sm:w-16"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover/nav:opacity-100" />

                <span className="relative z-10">
                  <FaChevronRight size={16} />
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ================= THUMBNAILS ================= */}
      {validImages.length > 1 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-5">
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
                  aria-label={`View image ${
                    index + 1
                  }`}
                  className={`group relative overflow-hidden rounded-[1.7rem] border transition-all duration-300 ${
                    isActive
                      ? "border-[#f0c372] shadow-[0_18px_35px_rgba(237,191,104,0.22)] ring-2 ring-[#f0c372]/25"
                      : "border-[#342313] hover:-translate-y-1 hover:border-[#f0c372]/30"
                  }`}
                >
                  {/* Thumbnail */}
                  <img
                    src={image}
                    alt={`${productName} thumbnail ${
                      index + 1
                    }`}
                    className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-36"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      isActive
                        ? "bg-transparent"
                        : "bg-black/40 group-hover:bg-black/10"
                    }`}
                  />

                  {/* Shine */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-full w-16 rotate-12 bg-white/10 blur-2xl" />
                  </div>

                  {/* Number */}
                  <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 backdrop-blur-xl">
                    <span className="text-[10px] font-black text-[#f0c372]">
                      {index + 1}
                    </span>
                  </div>

                  {/* Active Badge */}
                  {isActive && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[#f0c372]/15 bg-[#241507]/90 px-3 py-1.5">
                      <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
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

{/* ================= PREMIUM FEATURES ================= */}
<div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
  {[
    {
      title: "Genuine Leather",
      desc: "100% Premium Quality",
      icon: "✦",
    },
    {
      title: "Durable & Long Lasting",
      desc: "Built for Everyday Elegance",
      icon: "🛡",
    },
    {
      title: "Handcrafted Finish",
      desc: "Precision In Every Detail",
      icon: "⚒",
    },
    {
      title: "Timeless Design",
      desc: "Classic Style, Modern Appeal",
      icon: "◈",
    },
  ].map((feature) => (
    <div
      key={feature.title}
      className="
        group
        flex
        min-h-[180px]
        flex-col
        items-center
        justify-center
        rounded-[1.6rem]
        border
        border-[#322214]
        bg-[linear-gradient(to_bottom,#181008,#120b05)]
        px-5
        py-7
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#f0c372]/20
      "
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#f0c372]/15 bg-[#f0c372]/10 text-lg text-[#f0c372]">
        {feature.icon}
      </div>

      <h4 className="text-base font-bold leading-snug text-[#fff2dd] sm:text-lg">
        {feature.title}
      </h4>

      <p className="mt-2 max-w-[170px] text-xs leading-5 text-[#b69469] sm:text-sm">
        {feature.desc}
      </p>
    </div>
  ))}
</div>

{/* ================= ULTRA PREMIUM LUXURY BANNER ================= */}
<div className="relative mt-14 overflow-hidden rounded-[2.8rem] border border-[#3a2715] bg-[linear-gradient(180deg,#191006_0%,#120a05_55%,#0d0703_100%)] shadow-[0_35px_120px_rgba(0,0,0,0.65)]">

  {/* Ambient Glow */}
  <div className="absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#f0c372]/10 blur-[140px]" />

    <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,rgba(240,195,114,0.08),transparent_55%)]" />

    <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />
  </div>

  {/* Luxury Border Glow */}
  <div className="absolute inset-[1px] rounded-[2.7rem] border border-[#f0c372]/5" />

  <div className="relative z-10 px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-24">

    {/* Luxury Badge */}
    <div className="flex flex-col items-center">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.8rem] border border-[#f0c372]/20 bg-[linear-gradient(to_bottom,#2b1b0b,#181008)] shadow-[0_20px_40px_rgba(240,195,114,0.08)]">

        <div className="absolute inset-[1px] rounded-[1.7rem] bg-[linear-gradient(to_bottom,#3a250f,#1a1008)]" />

        <span className="relative z-10 text-4xl">
          👑
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#f0c372]/60" />

        <p className="text-[11px] font-black uppercase tracking-[0.55em] text-[#d9b26d]">
          Signature Collection
        </p>

        <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#f0c372]/60" />
      </div>
    </div>

    {/* Main Heading */}
    <div className="mx-auto mt-10 max-w-5xl text-center">
      <h3 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#fff5e7] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
        Elevate Every Look
      </h3>

      <h3 className="mt-2 bg-gradient-to-r from-[#fff5e7] via-[#f8dca2] to-[#d7a34d] bg-clip-text text-5xl font-black leading-[0.95] tracking-[-0.04em] text-transparent sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
        With Timeless Elegance
      </h3>

      <p className="mx-auto mt-10 max-w-3xl text-base leading-[2] text-[#b99a70] sm:text-lg">
        Crafted for individuals who appreciate exceptional
        quality, refined craftsmanship, and enduring style.
        Every detail reflects a commitment to luxury,
        sophistication, and everyday excellence.
      </p>
    </div>

    {/* Luxury Stats */}
    <div className="mx-auto mt-14 grid max-w-4xl grid-cols-3 gap-4 sm:gap-8">

      <div className="text-center">
        <h4 className="text-3xl font-black text-[#fff3df]">
          100%
        </h4>

        <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#c79a58]">
          Premium Quality
        </p>
      </div>

      <div className="text-center">
        <h4 className="text-3xl font-black text-[#fff3df]">
          Handcrafted
        </h4>

        <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#c79a58]">
          Precision Finish
        </p>
      </div>

      <div className="text-center">
        <h4 className="text-3xl font-black text-[#fff3df]">
          Luxury
        </h4>

        <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#c79a58]">
          Timeless Design
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-14 flex justify-center">

      <button
        type="button"
        className="
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-[#f0c372]/20
          bg-[linear-gradient(to_bottom,#3b2814,#221408)]
          px-12
          py-5
          shadow-[0_20px_50px_rgba(240,195,114,0.12)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#f0c372]/40
        "
      >
        {/* Metallic Shine */}
        <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="absolute -left-20 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl" />
        </span>

        <span className="relative z-10 flex items-center gap-4 text-sm font-black uppercase tracking-[0.35em] text-[#f0c372]">
          Explore Collection

          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </button>

    </div>
  </div>
</div>
{/* ================= WHY CHOOSE THIS PRODUCT ================= */}
<div className="mt-12 rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171008,#120b05)] p-6 sm:p-8 lg:p-10">
  {/* Header */}
  <div className="mb-8">
    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#c89d57]">
      Why Choose This Product
    </p>

    <h3 className="mt-3 text-2xl font-black text-[#fff3df] sm:text-3xl">
      Crafted For Luxury & Everyday Performance
    </h3>
  </div>

  {/* Features List */}
  <div className="grid gap-4">
    {[
      "Premium full-grain leather",
      "Rust-resistant buckle",
      "Perfect for formal & business wear",
      "Expert craftsmanship",
      "Comfortable all-day wear",
      "Luxury that lasts",
    ].map((item) => (
      <div
        key={item}
        className="
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-[#322214]
          bg-[#140d07]
          px-5
          py-4
        "
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f0c372]/20 bg-[#f0c372]/10 text-sm text-[#f0c372]">
          ✓
        </div>

        <span className="text-sm leading-relaxed text-[#e2d0b2] sm:text-base">
          {item}
        </span>
      </div>
    ))}
  </div>

  {/* Quality Card */}
  <div className="mt-8">
    <div className="rounded-[2rem] border border-[#f0c372]/15 bg-gradient-to-b from-[#1b1208] to-[#120b05] p-8 text-center">
      <div className="text-6xl text-[#f0c372]">
        🏆
      </div>

      <p className="mt-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#c89d57]">
        Quality
      </p>

      <h4 className="mt-3 text-4xl font-black text-[#fff3df]">
        Assured
      </h4>

      <div className="mt-4 flex justify-center gap-1 text-xl text-[#f0c372]">
        ★★★★★
      </div>

      <p className="mt-3 text-sm text-[#b69469]">
        Premium Certified
      </p>
    </div>
  </div>
</div>
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