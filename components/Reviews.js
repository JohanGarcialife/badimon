import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <div className="relative px-12 py-12">
      <div className=" flex items-center justify-center space-x-60 ">
        <div className="shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] w-fit bg-white p-10 flex-col items-center justify-center rounded-xl space-y-5">
          <div className="flex items-center justify-center text-center space-x-5">
            <h2 className="font-bold text-yellow-400 text-3xl">4.9</h2>
            <div className="flex items-center space-x-2">
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
            </div>
            <Image
              src={"/google.png"}
              width={50}
              height={50}
              alt="Google"
              //   className="rounded-tl-full rounded-br-full"
            />
          </div>
          <p className="font-bold text-gray-400 text-3xl">
            Calificado por:{" "}
            <span className="font-bold text-primary text-3xl">62 personas</span>
          </p>
        </div>
        <div className="shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] w-fit bg-white p-10 flex-col items-center justify-center rounded-xl space-y-5">
          <div className="flex items-center justify-center text-center space-x-5">
            <h2 className="font-bold text-yellow-400 text-3xl">4.9</h2>
            <div className="flex items-center space-x-2">
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
              <FaStar className="font-bold text-yellow-400 text-3xl" />
            </div>
            <Image
              src={"/google.png"}
              width={50}
              height={50}
              alt="Google"
              //   className="rounded-tl-full rounded-br-full"
            />
          </div>
          <p className="font-bold text-gray-400 text-3xl">
            Calificado por:{" "}
            <span className="font-bold text-primary text-3xl">62 personas</span>
          </p>
        </div>
      </div>
    </div>
  );
}
