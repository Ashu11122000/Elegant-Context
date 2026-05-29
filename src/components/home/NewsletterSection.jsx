import { useState } from "react";

import {
  FiArrowRight,
  FiCheckCircle,
  FiGift,
  FiLock,
  FiMail,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiZap,
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
      title: "Exclusive Fashion Offers",
      description:
        "Unlock seasonal collection offers, curated savings, and member-only fashion experiences designed for modern luxury lifestyles.",
    },

    {
      icon: FiStar,
      title: "Early Collection Access",
      description:
        "Get first access to newly launched collections, limited-edition arrivals, and trending fashion essentials before everyone else.",
    },

    {
      icon: FiLock,
      title: "Private Insider Updates",
      description:
        "Receive curated trend inspiration, exclusive fashion insights, and personalized style recommendations directly in your inbox.",
    },
  ];

  const additionalHighlights = [
    "Curated Fashion Inspiration",
    "Exclusive Seasonal Offers",
    "Modern Luxury Collections",
    "Trusted Shopping Experience",
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
    <section className="relative overflow-hidden bg-[#090806] py-24 sm:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_34%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Decorative Glow */}
      <div className="absolute left-[-120px] top-0 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-[#19130c] via-[#261b0f] to-[#39260f] px-6 py-16 shadow-[0_35px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:px-10 lg:px-16 lg:py-20">
          {/* Glow Effects */}
          <div className="absolute right-[-90px] top-[-90px] h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute bottom-[-100px] left-[-100px] h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* Top Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-6 py-3 shadow-lg backdrop-blur-2xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500">
                  <FiMail
                    size={15}
                    className="text-[#23180a]"
                  />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.30em] text-amber-200">
                  Stay Connected
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mt-10 text-center">
              <h2 className="mx-auto max-w-5xl font-serif text-4xl font-black leading-tight tracking-tight text-[#f8f1e7] sm:text-5xl lg:text-6xl">
                Join Our Fashion Insider Community
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-[2] text-stone-300 sm:text-lg">
                Stay updated with curated fashion inspiration, exclusive seasonal
                offers, modern collection launches, and refined style updates
                designed for sophisticated modern shoppers.
              </p>
            </div>

            {/* Feature Pills */}
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

            {/* Benefits Section */}
            <div className="mt-16">
              <div className="mb-8 flex items-center justify-center gap-3">
                <div className="h-px w-14 bg-gradient-to-r from-transparent to-amber-400" />

                <p className="text-xs font-bold uppercase tracking-[0.30em] text-amber-300">
                  Exclusive Subscriber Benefits
                </p>

                <div className="h-px w-14 bg-gradient-to-l from-transparent to-amber-400" />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {subscriberBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
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
                          {benefit.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-[1.9] text-stone-400">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="mt-16">
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-4xl"
              >
                <div className="overflow-hidden rounded-[36px] border border-white/10 bg-black/20 p-5 shadow-[0_22px_60px_rgba(0,0,0,0.30)] backdrop-blur-2xl">
                  <div className="flex flex-col gap-5 lg:flex-row">
                    {/* Input */}
                    <div className="relative flex-1">
                      <div className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2">
                        <FiMail className="text-xl text-amber-300" />
                      </div>

                      <Input
                        type="email"
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        placeholder="Enter your email address"
                        className="h-16 rounded-3xl border border-white/10 bg-white/[0.05] pl-14 pr-5 text-sm text-[#f5ead9] placeholder:text-stone-500 focus:border-amber-400/30 focus:ring-amber-400/20"
                      />
                    </div>

                    {/* Subscribe Button */}
                    <Button
                      type="submit"
                      className="group h-16 whitespace-nowrap rounded-3xl border border-amber-400/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-10 text-sm font-black uppercase tracking-[0.16em] text-[#23180a] shadow-[0_18px_45px_rgba(245,158,11,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(245,158,11,0.38)]"
                    >
                      <span className="flex items-center gap-3">
                        Subscribe Now

                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </div>
              </form>

              {/* Error Message */}
              {error && (
                <div className="mt-7 flex justify-center">
                  <div className="inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-6 py-3 text-sm font-medium text-red-300">
                    <FiShield size={18} />

                    {error}
                  </div>
                </div>
              )}

              {/* Success Message */}
              {isSubscribed && !error && (
                <div className="mt-7 flex justify-center">
                  <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-3 text-sm font-semibold text-green-300 shadow-lg">
                    <FiCheckCircle size={18} />

                    Thank you for subscribing to our exclusive fashion updates.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Trust Section */}
            <div className="mt-14 flex flex-col items-center justify-center gap-5 text-center lg:flex-row">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-6 py-3 backdrop-blur-2xl">
                <FiShield className="text-amber-300" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#dcc39c]">
                  Secure And Private
                </span>
              </div>

              {/* Divider */}
              <div className="hidden h-10 w-px bg-white/10 lg:block" />

              {/* Text */}
              <p className="max-w-3xl text-sm leading-[1.9] text-stone-400">
                Your privacy matters to us. No spam, no unnecessary emails, and complete
                control over your subscription preferences. Receive only curated
                fashion inspiration, seasonal collection updates, and exclusive offers.
              </p>
            </div>

            {/* Bottom Mini Stats */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: FiTrendingUp,
                  title: "Fashion Trends",
                  description:
                    "Stay updated with modern fashion inspiration and seasonal styles.",
                },

                {
                  icon: FiZap,
                  title: "Exclusive Offers",
                  description:
                    "Unlock member-only savings and curated seasonal promotions.",
                },

                {
                  icon: FiShield,
                  title: "Trusted Experience",
                  description:
                    "Safe subscription management with complete privacy protection.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500">
                      <Icon
                        size={22}
                        className="text-[#23180a]"
                      />
                    </div>

                    <h4 className="mt-5 text-lg font-bold text-[#f4e7d2]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-[1.8] text-stone-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;