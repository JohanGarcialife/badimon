import React from "react";
import Image from "next/image";
import SliderSlick from "react-slick";

export default function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="p-12 space-y-12">
      <div className="flex justify-center">
        <div className="flex justify-center items-centerbg-white shadow-[0_0px_10px_10px_rgba(0,0,0,0.1)] rounded-xl  py-5 px-10 w-fit">
          <h2 className="text-primary text-5xl font-bold text-center ">
            Real Estate Photography work
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-75"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0347.jpg?alt=media&token=42b872b2-49ff-4699-a80a-e6c1e9b8eaf7"
              alt="Imagen"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0575.jpg?alt=media&token=338cd6ce-4314-4b2f-82a2-f010485b2784"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0373.jpg?alt=media&token=d5dfb55e-5153-4561-b7d3-6231adb54404"
              alt=""
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDSC_0016.jpg?alt=media&token=d5705dee-5253-4275-af79-5fd6df649839"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDSC_0022.jpg?alt=media&token=45946e52-56f6-4457-adcc-ea511b74752a"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDSC_0651.jpg?alt=media&token=0af1c462-ac8b-425b-91ac-a4e97527e3ad"
              alt=""
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0567.jpg?alt=media&token=99f7df42-e97f-4909-a792-4e11d75d6fcd"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0351.jpg?alt=media&token=5ab0eb4b-6f44-4731-afa7-d68f4b7d3629"
              alt=""
            />
          </div>

          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDJI_0856-2.jpg?alt=media&token=f094a7f8-a313-4f8a-a23b-20d5113eda34"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDSC_0964.jpg?alt=media&token=bd9d8d14-b7ce-493b-8967-3f7c3c937448"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDSC_0775.jpg?alt=media&token=6544242d-15a5-4025-8b0b-802a4fa33643"
              alt=""
            />
          </div>

          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/creative-feel-agency.appspot.com/o/Badimon%2FDSC_0954.jpg?alt=media&token=1a80282a-02d6-424d-b113-bd8206732136"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
