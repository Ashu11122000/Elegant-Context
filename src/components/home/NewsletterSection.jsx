import { useState } from "react";
import {
  FiCheckCircle,
  FiGift,
  FiLock,
  FiMail,
  FiStar,
} from "react-icons/fi";
import Input from "../UI/Input";
import Button from "../UI/Button";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] =
    useState(false);
  const [error, setError] = useState("");

  const subscriberBenefits = [
    {
      icon: FiGift,
      title: "Exclusive Offers",
      description:
        "Get premium seasonal deals and luxury-only promotions.",
    },
    {
      icon: FiStar,
      title: "Early Access",
      description:
        "Be first to discover new premium launches and collections.",
    },
    {
      icon: FiLock,
      title: "Private Updates",
      description:
        "Receive curated insider fashion inspiration and private releases.",
    },
  ];

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      value
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError(
        "Please enter your email address."
      );
      setIsSubscribed(false);
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError(
        "Please enter a valid email address."
      );
      setIsSubscribed(false);
      return;
    }

    setError("");
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-[#2d1f08] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-300/20 bg-[#31230c] px-6 py-14 shadow-2xl sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <FiMail size={14} />
              Stay Connected
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-amber-100 sm:text-4xl lg:text-5xl">
              Join Our Luxury Insider Newsletter
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-stone-300 sm:text-lg">
              Be the first to discover exclusive luxury collections,
              premium offers, curated style inspiration, and seasonal
              launches crafted for sophisticated shoppers.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {subscriberBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-amber-900/20 bg-white/5 p-5"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10 mx-auto">
                      <Icon
                        size={20}
                        className="text-amber-300"
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-amber-100">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-stone-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-12 flex max-w-3xl flex-col gap-4 sm:flex-row"
            >
              <Input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="Enter your email address"
                className="flex-1"
              />

              <Button
                type="submit"
                className="whitespace-nowrap px-8"
              >
                Subscribe Now
              </Button>
            </form>

            {/* Error */}
            {error && (
              <p className="mt-5 text-sm font-medium text-red-400">
                {error}
              </p>
            )}

            {/* Success */}
            {isSubscribed && !error && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm font-medium text-green-300">
                <FiCheckCircle size={18} />
                Thank you for subscribing to Elegant luxury updates.
              </div>
            )}

            {/* Trust copy */}
            <p className="mt-8 text-xs leading-relaxed text-stone-500 sm:text-sm">
              We respect your privacy. No spam. Unsubscribe anytime.
              Receive only curated premium updates and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;