import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategoryGrid from "../components/home/CategoryGrid";
import TrendingProducts from "../components/home/TrendingProducts";
import BestSellers from "../components/home/BestSellers";
import PromotionalBanner from "../components/home/PromotionalBanner";
import Testimonials from "../components/home/Testimonials";
import NewsletterSection from "../components/home/NewsletterSection";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#f7ead8]">
      {/* ULTRA PREMIUM GLOBAL BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* TOP GOLD GLOW */}
        <div className="absolute left-[-180px] top-[-120px] h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-3xl" />

        {/* RIGHT GLOW */}
        <div className="absolute right-[-180px] top-[280px] h-[620px] w-[620px] rounded-full bg-yellow-400/5 blur-3xl" />

        {/* CENTER SOFT GLOW */}
        <div className="absolute left-1/2 top-[40%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-3xl" />

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-[-180px] left-[20%] h-[650px] w-[650px] rounded-full bg-amber-400/5 blur-3xl" />

        {/* LUXURY GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* PREMIUM RADIAL OVERLAY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(237,191,104,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_28%),radial-gradient(circle_at_center,rgba(255,191,0,0.03),transparent_30%)]" />

        {/* DARK VIGNETTE */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent_20%,transparent_80%,rgba(0,0,0,0.35))]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative">
          <HeroSection />
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[42px] border border-[#d6b36a]/10 bg-gradient-to-br from-[#1a1208]/95 via-[#120d06]/95 to-[#090603]/95 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
              {/* INNER GLOW */}
              <div className="absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-amber-400/10 blur-3xl" />

              <div className="absolute bottom-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />

              {/* TOP BORDER */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              <FeaturedProducts />
            </div>
          </div>
        </section>

        {/* CATEGORY GRID */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[42px] border border-[#d6b36a]/10 bg-gradient-to-br from-[#181109]/95 via-[#100b06]/95 to-[#070503]/95 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
              {/* GLOW */}
              <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-3xl" />

              <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-3xl" />

              {/* TOP LINE */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              <CategoryGrid />
            </div>
          </div>
        </section>

        {/* TRENDING PRODUCTS */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[42px] border border-[#d6b36a]/10 bg-gradient-to-br from-[#1a1208]/95 via-[#120d06]/95 to-[#090603]/95 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
              {/* DECOR */}
              <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-3xl" />

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              <TrendingProducts />
            </div>
          </div>
        </section>

        {/* BEST SELLERS */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[42px] border border-[#d6b36a]/10 bg-gradient-to-br from-[#181109]/95 via-[#110b06]/95 to-[#070503]/95 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
              {/* DECOR */}
              <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-3xl" />

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              <BestSellers />
            </div>
          </div>
        </section>

        {/* PROMOTIONAL BANNER */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[48px] border border-[#d6b36a]/12 bg-gradient-to-br from-[#2b1b0b] via-[#1a1208] to-[#100a05] shadow-[0_45px_140px_rgba(0,0,0,0.72)] backdrop-blur-3xl">
              {/* LARGE GLOW */}
              <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-3xl" />

              <div className="absolute bottom-[-180px] left-[-180px] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

              {/* GOLD TOP LINE */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

              <PromotionalBanner />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[42px] border border-[#d6b36a]/10 bg-gradient-to-br from-[#181109]/95 via-[#110b06]/95 to-[#070503]/95 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-3xl">
              {/* GLOW */}
              <div className="absolute right-[-120px] bottom-[-120px] h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-3xl" />

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              <Testimonials />
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="relative pb-24 pt-10 sm:pb-32 sm:pt-14">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[48px] border border-[#d6b36a]/12 bg-gradient-to-br from-[#241708] via-[#140d06] to-[#090603] shadow-[0_45px_140px_rgba(0,0,0,0.75)] backdrop-blur-3xl">
              {/* GLOWS */}
              <div className="absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />

              <div className="absolute bottom-[-160px] right-[-160px] h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-3xl" />

              {/* PREMIUM OVERLAY */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,191,0,0.06),transparent_35%)]" />

              {/* GOLD LINE */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

              <NewsletterSection />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;