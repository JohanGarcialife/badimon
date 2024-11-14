import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import VideoBanner from "@/components/VideoBanner";
import Info from "@/components/Info";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Menu />
      <HeroSection />
      <Reviews />
      <Info />
      <Gallery />
      <VideoBanner />
      <Booking />
      <Footer />
    </div>
  );
}
