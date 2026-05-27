import { FaQuoteLeft, FaStar } from "react-icons/fa";
import {
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
      "Trusted by premium fashion lovers worldwide.",
  },
  {
    icon: FiAward,
    title: "Luxury Experience",
    description:
      "Curated premium collections and elevated shopping.",
  },
  {
    icon: FiShield,
    title: "Trusted Platform",
    description:
      "Secure, elegant, and confidence-driven shopping.",
  },
];

function Testimonials() {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="bg-[#271e07] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          badge="Testimonials"
          title="What Our Premium Customers Say"
          subtitle="Trusted by fashion lovers who appreciate refined luxury shopping experiences, premium collections, and elegant digital craftsmanship."
          align="center"
        />

        {/* Trust highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {trustHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-amber-900/20 bg-white/5 p-5 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10">
                  <Icon
                    size={20}
                    className="text-amber-300"
                  />
                </div>

                <h3 className="text-sm font-semibold text-amber-100">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-stone-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group rounded-3xl border border-amber-300/15 bg-[#31230c] p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/35"
            >
              <div className="flex items-center justify-between">
                <FaQuoteLeft className="text-3xl text-amber-300/70" />

                <div className="flex gap-1">
                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, index) => (
                    <FaStar
                      key={`${testimonial.id}-${index}`}
                      className="text-sm text-amber-300"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-stone-300">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="mt-8 border-t border-amber-900/20 pt-6">
                <h3 className="text-lg font-semibold text-amber-100">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-stone-400">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;