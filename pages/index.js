"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import Info from "@/components/Info";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Component() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Menu />
      {/* Hero Section */}
      <HeroSection />

      {/* Gallery Section */}
      <Gallery />
      {/* Reviews Section */}
      <Reviews />
      {/* Features Section */}
      <Info />

      {/* Booking Section */}
      <Booking />

      {/* Footer */}
      <Footer />
    </div>
  );
}
