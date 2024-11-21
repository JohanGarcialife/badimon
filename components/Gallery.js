import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0347.jpg?alt=media&token=42b872b2-49ff-4699-a80a-e6c1e9b8eaf7",
  "https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0351.jpg?alt=media&token=5ab0eb4b-6f44-4731-afa7-d68f4b7d3629",
  "https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0373.jpg?alt=media&token=d5dfb55e-5153-4561-b7d3-6231adb54404",
  "https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0567.jpg?alt=media&token=99f7df42-e97f-4909-a792-4e11d75d6fcd",
  "https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0575.jpg?alt=media&token=338cd6ce-4314-4b2f-82a2-f010485b2784",
];

export default function Gallery() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-7xl font-bold mb-4 text-primary">Our Portfolio</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-black">
          Browse through our collection of professionally captured properties
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="max-w-screen mx-auto"
      >
        <CarouselContent className="-ml-4">
          {images.map((index) => (
            <CarouselItem className="pl-4 basis-1/3" key={index}>
              <div className="p-1">
                <Image
                  src={index}
                  alt={`Property ${index}`}
                  unoptimized
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
