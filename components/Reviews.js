import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="bg-[url('../public/hero-bg.svg')] bg-cover ">
      <section className="py-24 ">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold text-center mb-12">
            Client Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "K. Potter",
                role: "Real Estate Agent",
                content:
                  "Excellent attention to detail! Alexandre did exactly as we had requested for our real estate photos, and surprised us with creative shots of his own. We will definitely work with him again.",
              },
              {
                name: "Mitsy Salomon",
                role: "Property Developer",
                content:
                  "I’m a real estate agent and it’s important to have professional photos/videos. I am so thankful to Alex for these pics. Alex truly captured the essence of this condo unit. Just beautiful! Consider me a repeat satisfied customer.",
              },
              {
                name: "Vanessa Torres",
                role: "Interior Designer",
                content:
                  "It was a pleasure working with Badimon group! Alexandre was very professional, arrived early (on a Sunday!), gave us great tips for staging our vacation rental and the photos and drone video footage came out incredible! The Vacation Creation is a repeat customer for sure!",
              },
            ].map((review, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{review.content}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
