import { useEffect, useMemo, useState } from "react";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import {
  FiArrowRight,
  FiAward,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

import SectionHeading from "../UI/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Sophia Anderson",
    role: "Fashion Enthusiast",
    review:
      "Elegant completely transformed my shopping experience. The refined presentation, modern styling, and seamless browsing flow feel truly world-class and thoughtfully curated.",
    rating: 5,
  },

  {
    id: 2,
    name: "Daniel Roberts",
    role: "Member Shopper",
    review:
      "Everything feels carefully curated, from the product collections to the overall interface design. It genuinely feels like browsing a luxury fashion boutique online.",
    rating: 5,
  },

  {
    id: 3,
    name: "Emily Carter",
    role: "Lifestyle Shopper",
    review:
      "Beautiful product presentation, elegant visuals, and effortless navigation make the entire shopping experience feel refined and sophisticated.",
    rating: 5,
  },

  {
    id: 4,
    name: "Michael Turner",
    role: "Corporate Professional",
    review:
      "I appreciate elegant craftsmanship and polished design, and this storefront delivers a clean, trustworthy, and elevated shopping experience.",
    rating: 5,
  },

  {
    id: 5,
    name: "Olivia Bennett",
    role: "Fashion Shopper",
    review:
      "The collections feel thoughtfully selected like a modern fashion boutique. Browsing through the products feels inspiring and premium.",
    rating: 5,
  },

  {
    id: 6,
    name: "James Walker",
    role: "Frequent Shopper",
    review:
      "Smooth shopping flow, polished product presentation, and intuitive navigation make the experience feel professionally crafted.",
    rating: 5,
  },

  {
    id: 7,
    name: "Charlotte Reed",
    role: "Style Consultant",
    review:
      "A refined digital shopping experience with elegant visuals, modern layouts, and beautifully presented fashion storytelling.",
    rating: 5,
  },

  {
    id: 8,
    name: "Benjamin Scott",
    role: "Luxury Buyer",
    review:
      "One of the most polished fashion storefronts I have explored. The elegant presentation instantly builds trust and confidence.",
    rating: 5,
  },

  {
    id: 9,
    name: "Grace Mitchell",
    role: "Fashion Blogger",
    review:
      "Beautiful styling, elevated aesthetics, and polished visual presentation make the overall experience feel intentional and premium.",
    rating: 5,
  },

  {
    id: 10,
    name: "Ethan Cooper",
    role: "Returning Customer",
    review:
      "The experience feels smooth, reliable, and modern. Product discovery and overall browsing feel especially well designed.",
    rating: 5,
  },

  {
    id: 11,
    name: "Ava Richardson",
    role: "Modern Shopper",
    review:
      "A visually impressive shopping experience that feels curated, elegant, refined, and thoughtfully designed from start to finish.",
    rating: 5,
  },

  {
    id: 12,
    name: "William Harris",
    role: "Fashion Buyer",
    review:
      "Trustworthy shopping experience with elegant layouts, refined collections, and strong modern fashion branding.",
    rating: 5,
  },

  {
    id: 13,
    name: "Mia Thompson",
    role: "Curated Style Shopper",
    review:
      "The polished shopping flow and elevated fashion presentation make the browsing experience memorable and enjoyable.",
    rating: 5,
  },

  {
    id: 14,
    name: "Lucas Morgan",
    role: "Lifestyle Shopper",
    review:
      "Elegant, modern, and visually refined. The whole experience feels like browsing a sophisticated high-end fashion boutique.",
    rating: 5,
  },

  {
    id: 15,
    name: "Harper Collins",
    role: "Fashion Collector",
    review:
      "Exceptional visual presentation, elegant product storytelling, and refined aesthetics make this experience stand out beautifully.",
    rating: 5,
  },
];

const trustHighlights = [
  {
    icon: FiUsers,
    title: "10K+ Happy Shoppers",
    description:
      "Trusted by fashion enthusiasts who appreciate elegant shopping experiences and refined modern collections.",
  },

  {
    icon: FiAward,
    title: "Curated Fashion Experience",
    description:
      "Thoughtfully selected collections crafted with elevated design aesthetics and refined presentation.",
  },

  {
    icon: FiShield,
    title: "Trusted Shopping Platform",
    description:
      "Secure, elegant, and confidence-driven shopping experience designed for modern lifestyles.",
  },
];

const additionalHighlights = [
  "Elegant Fashion Collections",
  "Trusted Shopping Experience",
  "Modern Luxury Styling",
  "Curated Customer Favorites",
];

const TESTIMONIALS_PER_PAGE = 3;

function Testimonials() {
  const [currentPage, setCurrentPage] =
    useState(0);

  const totalPages = Math.ceil(
    testimonials.length /
      TESTIMONIALS_PER_PAGE
  );

  const groupedTestimonials = useMemo(() => {
    const groups = [];

    for (
      let index = 0;
      index < testimonials.length;
      index += TESTIMONIALS_PER_PAGE
    ) {
      groups.push(
        testimonials.slice(
          index,
          index +
            TESTIMONIALS_PER_PAGE
        )
      );
    }

    return groups;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((previous) =>
        previous === totalPages - 1
          ? 0
          : previous + 1
      );
    }, 5000);

    return () =>
      clearInterval(interval);
  }, [totalPages]);

  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#090806] py-24 sm:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_34%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-0 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <SectionHeading
            badge="Customer Testimonials"
            title="What Our Customers Say About Their Shopping Experience"
            subtitle="Trusted by modern fashion enthusiasts who appreciate elegant design aesthetics, refined collections, seamless browsing experiences, and thoughtfully curated fashion presentation."
            align="center"
          />

          {/* Highlight Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {additionalHighlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-stone-300 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/25 hover:bg-white/[0.08]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Highlights */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-amber-400" />

            <p className="text-xs font-bold uppercase tracking-[0.30em] text-amber-300">
              Trusted Customer Experience
            </p>

            <div className="h-px w-14 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-7 text-center shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
                >
                  {/* Glow */}
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/20" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 shadow-inner">
                      <Icon
                        size={24}
                        className="text-amber-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold tracking-wide text-[#f4e7d2]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-[1.9] text-stone-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mt-20 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentPage * 100
              }%)`,
            }}
          >
            {groupedTestimonials.map(
              (
                testimonialGroup,
                groupIndex
              ) => (
                <div
                  key={groupIndex}
                  className="grid min-w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
                >
                  {testimonialGroup.map(
                    (testimonial) => (
                      <article
                        key={
                          testimonial.id
                        }
                        className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#19130c] via-[#24190e] to-[#30210f] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 hover:border-amber-400/20"
                      >
                        {/* Glow */}
                        <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:bg-amber-400/20" />

                        <div className="relative z-10">
                          {/* Top */}
                          <div className="flex items-start justify-between gap-5">
                            {/* Quote Icon */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 shadow-inner">
                              <FaQuoteLeft className="text-2xl text-amber-300" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-xl">
                              {Array.from({
                                length:
                                  testimonial.rating,
                              }).map(
                                (
                                  _,
                                  index
                                ) => (
                                  <FaStar
                                    key={`${testimonial.id}-${index}`}
                                    className="text-sm text-amber-300"
                                  />
                                )
                              )}
                            </div>
                          </div>

                          {/* Review */}
                          <p className="mt-8 text-[15px] leading-[2] text-stone-300">
                            &ldquo;
                            {
                              testimonial.review
                            }
                            &rdquo;
                          </p>

                          {/* Footer */}
                          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                            <div>
                              <h3 className="text-lg font-bold tracking-wide text-[#f4e7d2]">
                                {
                                  testimonial.name
                                }
                              </h3>

                              <p className="mt-2 text-sm text-stone-400">
                                {
                                  testimonial.role
                                }
                              </p>
                            </div>

                            {/* Arrow Button */}
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-black/20 backdrop-blur-xl transition-all duration-300 group-hover:bg-amber-400/10">
                              <FiArrowRight className="text-amber-300 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </article>
                    )
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {groupedTestimonials.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentPage(index)
                }
                className={`transition-all duration-300 ${
                  currentPage === index
                    ? "h-3 w-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-lg"
                    : "h-3 w-3 rounded-full bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonials page ${
                  index + 1
                }`}
              />
            )
          )}
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: FiTrendingUp,
              title: "Modern Fashion Experience",
              description:
                "Elegant shopping experiences designed with refined digital craftsmanship and modern aesthetics.",
            },

            {
              icon: FiCheckCircle,
              title: "Trusted Customer Satisfaction",
              description:
                "Thousands of shoppers trust our collections for quality, elegance, and reliable service.",
            },

            {
              icon: FiShield,
              title: "Secure Shopping Platform",
              description:
                "Safe browsing, protected checkout systems, and confidence-driven shopping experiences.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-2xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
                  <Icon
                    size={24}
                    className="text-[#23180a]"
                  />
                </div>

                <h4 className="mt-6 text-lg font-bold text-[#f4e7d2]">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-[1.9] text-stone-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;