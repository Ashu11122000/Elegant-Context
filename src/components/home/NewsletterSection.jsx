import { useState } from "react";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-[#2d1f08] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#edbf68]/20 bg-[#31230c] px-6 py-14 shadow-2xl sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#edbf68]/30 bg-[#edbf68]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#edbf68]">
              Stay Connected
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#edbf68] sm:text-4xl lg:text-5xl">
              Subscribe to Our Luxury Newsletter
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#f5e6c8] sm:text-lg">
              Be the first to discover exclusive collections, premium offers,
              seasonal launches, and curated fashion inspiration.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-full border border-[#edbf68]/20 bg-[#2d1f08] px-6 py-4 text-[#f5e6c8] outline-none transition-all duration-300 placeholder:text-[#d7c3a0] focus:border-[#edbf68]"
              />

              <button
                type="submit"
                className="rounded-full bg-[#edbf68] px-8 py-4 font-semibold text-[#1f1606] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>

            {isSubscribed && (
              <p className="mt-6 text-sm font-medium text-green-400 sm:text-base">
                Thank you for subscribing to Elegant updates.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;