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
    <main className="min-h-screen bg-[#271e07]">
      <HeroSection />

      <FeaturedProducts />

      <CategoryGrid />

      <TrendingProducts />

      <BestSellers />

      <PromotionalBanner />

      <Testimonials />

      <NewsletterSection />
    </main>
  );
}

export default Home;