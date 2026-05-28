import { useEffect, useMemo, useState } from "react";

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import {
  FiArrowRight,
  FiAward,
  FiShield,
  FiUsers,
} from "react-icons/fi";

import SectionHeading from "../UI/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Sophia Anderson",
    role: "Fashion Enthusiast",
    review:
      "Elegant completely transformed my shopping experience. The premium quality, luxury styling, and seamless browsing experience feel genuinely world-class.",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Roberts",
    role: "Premium Member",
    review:
      "Everything feels thoughtfully curated—from collections to product presentation. This feels like a true luxury retail experience online.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Lifestyle Shopper",
    review:
      "Beautiful product presentation, premium aesthetics, and effortless navigation. Shopping here feels sophisticated and premium.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Turner",
    role: "Corporate Professional",
    review:
      "I appreciate premium craftsmanship and elegant design, and this storefront delivers exactly that. Clean, polished, and trustworthy.",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia Bennett",
    role: "Luxury Fashion Shopper",
    review:
      "The featured collections feel curated like a boutique luxury brand. I genuinely enjoy browsing here.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Walker",
    role: "Frequent Shopper",
    review:
      "Smooth shopping experience, premium product presentation, and intuitive navigation. It feels professionally crafted.",
    rating: 5,
  },
  {
    id: 7,
    name: "Charlotte Reed",
    role: "Style Consultant",
    review:
      "A refined digital shopping experience with premium aesthetics and elegant product storytelling.",
    rating: 5,
  },
  {
    id: 8,
    name: "Benjamin Scott",
    role: "Luxury Buyer",
    review:
      "One of the most polished fashion storefronts I’ve browsed. The premium look instantly builds trust.",
    rating: 5,
  },
  {
    id: 9,
    name: "Grace Mitchell",
    role: "Fashion Blogger",
    review:
      "Beautiful luxury styling and premium merchandising. The interface feels high-end and intentional.",
    rating: 5,
  },
  {
    id: 10,
    name: "Ethan Cooper",
    role: "Returning Customer",
    review:
      "The experience feels smooth, premium, and reliable. Product discovery is especially well designed.",
    rating: 5,
  },
  {
    id: 11,
    name: "Ava Richardson",
    role: "Modern Shopper",
    review:
      "A luxury storefront experience that feels curated, elegant, and visually impressive from start to finish.",
    rating: 5,
  },
  {
    id: 12,
    name: "William Harris",
    role: "Premium Fashion Buyer",
    review:
      "Trustworthy premium shopping experience with elegant layouts and strong luxury branding.",
    rating: 5,
  },
  {
    id: 13,
    name: "Mia Thompson",
    role: "Curated Style Shopper",
    review:
      "The premium fashion presentation and polished shopping flow make this experience memorable.",
    rating: 5,
  },
  {
    id: 14,
    name: "Lucas Morgan",
    role: "Luxury Lifestyle Shopper",
    review:
      "Elegant, modern, and premium. The whole experience feels like browsing a high-end fashion boutique.",
    rating: 5,
  },
  {
    id: 15,
    name: "Harper Collins",
    role: "Fashion Collector",
    review:
      "Exceptional visual presentation and premium luxury feel. This is how fashion e-commerce should look.",
    rating: 5,
  },
];

const trustHighlights = [
  {
    icon: FiUsers,
    title: "10K+ Happy Shoppers",
    description:
      "Trusted by fashion lovers who appreciate refined premium experiences.",
  },
  {
    icon: FiAward,
    title: "Luxury Experience",
    description:
      "Curated premium collections with elevated digital craftsmanship.",
  },
  {
    icon: FiShield,
    title: "Trusted Platform",
    description:
      "Elegant, secure, and confidence-driven luxury shopping experience.",
  },
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
    <section className="relative overflow-hidden bg-[#110e09] py-20 md:py-28">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_34%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-0 h-[260px] w-[260px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <SectionHeading
          badge="Testimonials"
          title="What Our Premium Customers Say"
          subtitle="Trusted by fashion enthusiasts who value refined luxury experiences, premium collections, elegant aesthetics, and sophisticated digital craftsmanship."
          align="center"
        />

        {/* TRUST HIGHLIGHTS */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {trustHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
              >
                {/* Glow */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/20" />

                <div className="relative z-10">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 shadow-inner">
                    <Icon
                      size={24}
                      className="text-amber-300"
                    />
                  </div>

                  <h3 className="text-lg font-bold tracking-wide text-[#f4e7d2]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-stone-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* TESTIMONIAL SLIDER */}
        <div className="relative mt-16 overflow-hidden">
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
                        className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#1a140d] via-[#24190e] to-[#2f210f] p-8 shadow-[0_22px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 hover:border-amber-400/20"
                      >
                        {/* Glow */}
                        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:bg-amber-400/20" />

                        <div className="relative z-10">
                          {/* Top */}
                          <div className="flex items-start justify-between gap-5">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 shadow-inner">
                              <FaQuoteLeft className="text-2xl text-amber-300" />
                            </div>

                            <div className="flex gap-1">
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
                          <p className="mt-7 text-[15px] leading-[1.9] text-stone-300">
                            &ldquo;
                            {
                              testimonial.review
                            }
                            &rdquo;
                          </p>

                          {/* Footer */}
                          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                            <div>
                              <h3 className="text-lg font-bold tracking-wide text-[#f4e7d2]">
                                {
                                  testimonial.name
                                }
                              </h3>

                              <p className="mt-1 text-sm text-stone-400">
                                {
                                  testimonial.role
                                }
                              </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-black/20 backdrop-blur-xl">
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

        {/* PAGINATION DOTS */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {groupedTestimonials.map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setCurrentPage(index)
                }
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-10 bg-gradient-to-r from-amber-400 to-yellow-500"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonials page ${
                  index + 1
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;