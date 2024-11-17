import React from "react";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitterSquare,
  FaSpotify,
  FaPinterest,
  FaYelp,
  FaPhone,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdMail, MdPlace } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-[url('../public/footer-bg.svg')] bg-cover py-10 flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 p-12 w-full ">
        <div className="w-full bg-white shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] p-5 rounded-lg text-center">
          <p className="text-primary font-bold text-xl mb-5">Contact Us</p>
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <FaPhone className="text-black" />
              <p className="text-black font-bold">(866)868-1990</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MdMail className="text-black" />

              <p className="text-black font-bold">info@badimongroup.com</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MdPlace className="text-black" />
              <p className="text-black font-bold">Delray Beach | Florida |</p>
            </div>
            <div className="flex items-center justify-center mt-3">
              <Image
                src={"/images/accepted-here-crypto.png"}
                width={300}
                height={300}
                alt="Crypto"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] p-5 rounded-lg space-y-5 text-center">
          <p className="text-primary font-bold text-xl mb-5">Follow Us</p>

          <div className="flex items-center justify-center space-x-3">
            <FaFacebookSquare className="cursor-pointer text-secondary text-lg" />
            <FaSquareInstagram className="cursor-pointer text-secondary text-lg" />
            <FaYoutube className="cursor-pointer text-secondary text-lg" />
            <FaTwitterSquare className="cursor-pointer text-secondary text-lg" />
            <FaSpotify className="cursor-pointer text-secondary text-lg" />
            <FaPinterest className="cursor-pointer text-secondary text-lg" />
            <FaYelp className="cursor-pointer text-secondary text-lg" />
          </div>
          <div className="grid grid-cols-2 gap-2 md:flex md:items-center md:justify-center space-x-1">
            <div className="flex items-center justify-center md:border-r border-secondary px-1 text-xs cursor-pointer">
              <p className=" text-primary font-bold">Marketing</p>
            </div>
            <div className="flex items-center justify-center md:border-r border-secondary px-1 text-xs cursor-pointer">
              <p className=" text-primary font-bold">Social Media Management</p>
            </div>
            <div className="flex items-center justify-center md:border-r border-secondary px-1 text-xs cursor-pointer">
              <p className=" text-primary font-bold">Real Estate Photography</p>
            </div>
            <div className="flex items-center justify-center md:border-r border-secondary px-1 text-xs cursor-pointer">
              <p className=" text-primary font-bold">Web Design</p>
            </div>
            <div className="flex items-center justify-center md:border-r border-secondary px-1 text-xs cursor-pointer">
              <p className=" text-primary font-bold">PPC</p>
            </div>
            <div className="flex items-center justify-center md:border-r border-secondary px-1 text-xs cursor-pointer">
              <p className=" text-primary font-bold">Ads</p>
            </div>
            <div className="flex items-center justify-center md:border-r border-secondary px-1 text-xs cursor-pointer">
              <p className=" text-primary font-bold">SEO</p>
            </div>
            <div className="px-1 text-xs cursor-pointer ">
              <p className=" text-primary font-bold">Graphic Design</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] flex justify-center items-center p-5 rounded-lg text-center">
          <Image
            src={"/images/Colorlogo-nobackground.png"}
            width={500}
            height={500}
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-12">
        <p className="text-white font-bold text-xs ">
          Dev by Creative Feel Dev
        </p>
        <p className="text-white font-bold text-xs">
          Copyright © The Badimon Group Corp. All rights reserved
        </p>
      </div>
    </div>
  );
}
