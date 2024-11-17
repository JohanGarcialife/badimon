import React, { useState } from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import useWindowSize from "../hooks/useWindowSize";

export default function Menu() {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  return (
    <>
      {width > 1024 ? (
        <div className="absolute px-12 py-5 z-50 w-full">
          <div className="flex items-center justify-between max-w-screen">
            <div>
              <Image
                src={"/images/Colorlogo-nobackground.png"}
                width={300}
                height={300}
                alt="Logo"
              />
            </div>
            <div className="flex space-x-5 items-center  px-5">
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                Home
              </p>
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                About Us
              </p>
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                Services
              </p>
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                Locations
              </p>
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                Clients
              </p>
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                Portfolio
              </p>
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                Research
              </p>
              <p className="text-white font-bold cursor-pointer hover:opacity-50">
                Contact Us
              </p>
              <div className="border-l-2 border-white px-5">
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-white" />
                  <p className="text-white font-bold cursor-pointer hover:opacity-50">
                    866-868-1990
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute px-12 py-5 z-50 w-full">
          <div className="flex items-center justify-end max-w-screen">
            <HiMenu
              onClick={() => setShow(true)}
              className="text-right text-4xl text-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
