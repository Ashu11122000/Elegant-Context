import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Sophia Anderson",
    role: "Fashion Enthusiast",
    review:
      "Elegant completely transformed my shopping experience. The premium quality, luxury styling, and seamless interface feel truly world-class.",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Roberts",
    role: "Premium Member",
    review:
      "From curated collections to smooth browsing, everything feels thoughtfully designed. One of the most elegant fashion storefront experiences.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Lifestyle Shopper",
    review:
      "Beautiful design, premium product presentation, and effortless navigation. This feels like a luxury retail brand online.",
    rating: 5,
  },
];

function Testimonials() {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="bg-[#271e07] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Customers Say"
          subtitle="Trusted by fashion lovers who appreciate premium shopping experiences."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group rounded-3xl border border-[#edbf68]/20 bg-[#31230c] p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#edbf68]/40"
            >
              <div className="flex items-center justify-between">
                <FaQuoteLeft className="text-3xl text-[#edbf68]/70" />

                <div className="flex gap-1">
                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, index) => (
                    <FaStar
                      key={`${testimonial.id}-${index}`}
                      className="text-sm text-[#edbf68]"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#f5e6c8]">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="mt-8 border-t border-[#edbf68]/15 pt-6">
                <h3 className="text-lg font-semibold text-[#edbf68]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-[#d7c3a0]">
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