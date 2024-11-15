import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function Info() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="w-1/2 space-y-10">
        <p className="text-primary text-4xl text-center font-bold">
          Professional Quality & Precision
        </p>
        <div className="pl-10 space-y-2">
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">
              Experienced Team
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">24H Turnaround</p>
          </div>
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">
              Enhanced Online Visibility
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">
              Drone Photography for Elevated Perspectives
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">
              Virtual Tours Available
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">
              Consistency Across Listings
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">
              Flexible Scheduling
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <GoDotFill className="text-primary text-3xl font-bold" />
            <p className="text-gray-400 text-3xl  font-bold">
              High Return on Investment
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src={"/images/DSC_0964.jpg"}
          width={1000}
          height={2000}
          alt="House"
          className="rounded-bl-full rounded-tr-full shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] "
        />
      </div>
    </div>
  );
}
