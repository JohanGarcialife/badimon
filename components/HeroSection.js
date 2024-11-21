import React from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div
      className="  min-h-screen
      bg-[url('../public/hero-bg.svg')] bg-cover  "
    >
      <section className="pt-40 pb-12 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              GET 400% MORE LEADS with Real Estate Photography!
            </h1>
            <p className="text-xl mb-6">
              #1 Real Estate Photography in South Florida
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-green-500 text-white text-2xl"
            >
              Prices
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0347.jpg?alt=media&token=42b872b2-49ff-4699-a80a-e6c1e9b8eaf7"
              alt="Real estate photography showcase"
              unoptimized
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
