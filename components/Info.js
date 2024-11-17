import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function Info() {
  return (
    <div className="md:p-12 p-6 space-y-20">
      <div className="md:flex md:space-y-0 space-y-10 flex-col items-center justify-center px-10">
        <div className="md:w-1/2 space-y-10">
          <p className="text-primary md:text-7xl text-4xl text-center font-bold">
            Professional Quality & Precision
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={"/images/DSC_0964.jpg"}
            width={1000}
            height={2000}
            alt="House"
            className="rounded-bl-full rounded-tr-full shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] "
          />
        </div>
      </div>
      <div className="relative">
        <div className="md:pl-10 md:space-y-20 space-y-10 z-10">
          <div className="flex items-center space-x-3 w-full">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              Experienced Team
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-end text-right">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              24H Turnaround
            </p>
          </div>
          <div className="flex items-center space-x-3 ">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              Drone Photography for Elevated Perspectives
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-end text-right">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              Enhanced Online Visibility
            </p>
          </div>

          <div className="flex items-center space-x-3 ">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              Virtual Tours Available
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-end text-right">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              Consistency Across Listings
            </p>
          </div>
          <div className="flex items-center space-x-3 ">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              Flexible Scheduling
            </p>
          </div>
          <div className="flex items-center space-x-3 justify-end text-right">
            <GoDotFill className="text-primary md:text-7xl text-4xl font-bold" />
            <p className="text-gray-400 md:text-7xl text-4xl  font-bold">
              High Return on Investment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
