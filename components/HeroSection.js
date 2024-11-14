import React from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className=" px-12 py-24  bg-[url('../public/hero-bg.svg')] bg-cover  ">
      <div className="py-12 flex items-center justify-between">
        <div className="w-1/2 flex flex-col items-center space-y-10">
          <p className="text-lg text-center text-white font-bold">
            GET 400% MORE LEADS with Real Estate Photography!
          </p>
          <p className="text-7xl text-center text-white font-bold">
            #1 Real Estate Photography in South Florida
          </p>
          <p className=" text-center text-white font-bold">
            SERVING ALL South Florida
          </p>
          <div className="shadow-[0_0px_3px_3px_rgba(0,0,0,0.1)] px-5 py-3 bg-green-500 rounded-full cursor-pointer hover:text-xl flex items-center space-x-2 ">
            <p className="text-white font-bold text-lg">Prices</p>
            <FaAngleDown className="text-white text-lg" />
          </div>
        </div>
        <div className="w-1/2 items-center justify-center space-y-10">
          <Image
            src={"/images/DJI_0373.jpg"}
            width={1000}
            height={2000}
            alt="Landscape"
            className="rounded-tl-full rounded-br-full"
          />
        </div>
      </div>
    </div>
  );
}
