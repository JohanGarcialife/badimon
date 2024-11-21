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
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-muted-foreground">
                Professional real estate photography services delivering
                stunning visuals that sell.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Badimon Group</li>
                <li>Delray Beach | Florida |</li>
                <li>info@badimongroup.com</li>
                <li>(866)868-1990</li>
              </ul>
              <div className="bg-white rounded-lg py-3 px-6 mt-3">
                <Image
                  src={"/images/accepted-here-crypto.png"}
                  width={300}
                  height={300}
                  alt="Crypto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center  space-x-4">
                <FaFacebookSquare className="cursor-pointer text-white text-lg" />
                <FaSquareInstagram className="cursor-pointer text-white text-lg" />
                <FaYoutube className="cursor-pointer text-white text-lg" />
                <FaTwitterSquare className="cursor-pointer text-white text-lg" />
                <FaSpotify className="cursor-pointer text-white text-lg" />
                <FaPinterest className="cursor-pointer text-white text-lg" />
                <FaYelp className="cursor-pointer text-white text-lg" />
              </div>
            </div>
            <div>
              <Image
                src={"/images/Colorlogo-nobackground.png"}
                width={500}
                height={500}
                alt="Logo"
              />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Real Estate Photography. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
