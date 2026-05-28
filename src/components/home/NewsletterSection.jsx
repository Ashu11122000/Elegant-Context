import { useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGift,
  FiLock,
  FiMail,
  FiShield,
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
      title: "Exclusive Luxury Offers",
      description:
        "Access premium seasonal deals, exclusive member pricing, and curated promotions.",
    },
    {
      icon: FiStar,
      title: "Early Collection Access",
      description:
        "Be the first to explore new arrivals, luxury launches, and limited editions.",
    },
    {
      icon: FiLock,
      title: "Private Insider Updates",
      description:
        "Receive curated fashion inspiration, trend insights, and private premium releases.",
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
    <section className="relative overflow-hidden bg-[#110e09] py-20 md:py-28">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_34%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-0 h-[260px] w-[260px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#1b140c] via-[#261b0f] to-[#38260f] px-6 py-14 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:px-10 lg:px-16 lg:py-20">
          {/* Inner Glow */}
          <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute bottom-[-90px] left-[-90px] h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500">
                <FiMail
                  size={14}
                  className="text-[#23180a]"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
                Stay Connected
              </span>
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-8 max-w-4xl font-serif text-4xl font-black leading-tight tracking-tight text-[#f8f1e7] sm:text-5xl lg:text-6xl">
              Join Our Luxury Insider Newsletter
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.9] text-stone-300 sm:text-lg">
              Be the first to discover exclusive premium collections,
              luxury offers, curated fashion inspiration, and refined
              seasonal launches tailored for sophisticated modern shoppers.
            </p>

            {/* BENEFITS */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {subscriberBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
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

                      <h3 className="text-[15px] font-bold tracking-wide text-[#f4e7d2]">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-stone-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-14 max-w-4xl"
            >
              <div className="rounded-[32px] border border-white/10 bg-black/20 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* Input Wrapper */}
                  <div className="relative flex-1">
                    <div className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2">
                      <FiMail className="text-lg text-amber-300" />
                    </div>

                    <Input
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="Enter your premium email address"
                      className="h-14 rounded-2xl border border-white/10 bg-white/[0.05] pl-14 pr-5 text-sm text-[#f5ead9] placeholder:text-stone-500 focus:border-amber-400/30 focus:ring-amber-400/20"
                    />
                  </div>

                  {/* Button */}
                  <Button
                    type="submit"
                    className="group h-14 whitespace-nowrap rounded-2xl border border-amber-400/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-8 text-sm font-black uppercase tracking-[0.16em] text-[#23180a] shadow-[0_15px_40px_rgba(245,158,11,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(245,158,11,0.35)]"
                  >
                    <span className="flex items-center gap-3">
                      Subscribe Now

                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </form>

            {/* ERROR */}
            {error && (
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-300">
                <FiShield size={18} />
                {error}
              </div>
            )}

            {/* SUCCESS */}
            {isSubscribed && !error && (
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-300 shadow-lg">
                <FiCheckCircle size={18} />
                Thank you for subscribing to Elegant luxury updates.
              </div>
            )}

            {/* TRUST COPY */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 backdrop-blur-xl">
                <FiShield className="text-amber-300" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dcc39c]">
                  Secure & Private
                </span>
              </div>

              <p className="max-w-2xl text-xs leading-relaxed text-stone-500 sm:text-sm">
                We respect your privacy. No spam. Unsubscribe anytime.
                Receive only curated premium updates, exclusive luxury
                offers, and refined fashion inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;