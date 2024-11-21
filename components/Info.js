import Image from "next/image";
import React from "react";
import {
  Camera,
  MousePointerClick,
  Users,
  Clock,
  Navigation,
  Contact,
  HandCoins,
  BookMarked,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Info() {
  return (
    <div className="md:p-12 p-6 space-y-20">
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold text-center mb-12 text-primary">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Experienced Team",
                description:
                  "Our photographers have years of experience in real estate photography.",
              },
              {
                icon: Clock,
                title: "24H Turnaround",
                description: "Get your photos within 24 hours of the shoot.",
              },
              {
                icon: Camera,
                title: "Drone Photography for Elevated Perspectives",
                description:
                  "We use top-of-the-line cameras and lenses for crisp, clear images.",
              },
              {
                icon: MousePointerClick,
                title: "Enhanced Online Visibility",
                description:
                  "Our photographers know how to showcase your property's best features.",
              },
              {
                icon: Navigation,
                title: "Virtual Tours Available",
                description: "Not happy? We'll reshoot for free.",
              },
              {
                icon: Contact,
                title: "Consistency Across Listings",
                description: "Book your photoshoot online in minutes.",
              },
              {
                icon: BookMarked,
                title: "Flexible Scheduling",
                description: "Book your photoshoot online in minutes.",
              },
              {
                icon: HandCoins,
                title: "High Return on Investment",
                description: "Book your photoshoot online in minutes.",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  {/* <p className="text-gray-600">{feature.description}</p> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold text-center mb-16 text-primary">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Book Your Session",
                description: "Choose your preferred date and time",
              },
              {
                step: "2",
                title: "Photo Shoot",
                description: "We capture your property's best features",
              },
              {
                step: "3",
                title: "Receive Photos",
                description: "Get your professionally edited images",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-black/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
