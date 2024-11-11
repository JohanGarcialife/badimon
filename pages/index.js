import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Menu from "@/components/Menu";
import Slider from "@/components/Slider";
import VideoBanner from "@/components/VideoBanner";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Menu />
      <HeroSection />
      <Slider />
      <VideoBanner />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
