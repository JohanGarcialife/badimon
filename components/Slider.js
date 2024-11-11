import React from "react";
import Image from "next/image";
import SliderSlick from "react-slick";

export default function Slider() {
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
    <div className="overflow-hidden my-20">
      <h2 className="text-primary text-5xl font-bold text-center mb-10">
        Real Estate Photography work
      </h2>
      <SliderSlick {...settings}>
        <div className="bg-[url('../public/images/DJI_0347.jpg')] w-96 h-48 bg-cover rounded-3xl mx-2" />
        <div className="bg-[url('../public/images/DJI_0351.jpg')] w-96 h-48 bg-cover rounded-3xl mx-2" />
        <div className="bg-[url('../public/images/DJI_0373.jpg')] w-96 h-48 bg-cover rounded-3xl mx-2" />
        <div className="bg-[url('../public/images/DSC_0022.jpg')] w-96 h-48 bg-cover rounded-3xl mx-2" />
        <div className="bg-[url('../public/images/DSC_0954.jpg')] w-96 h-48 bg-cover rounded-3xl mx-2" />
        <div className="bg-[url('../public/images/DSC_1002.jpg')] w-96 h-48 bg-cover rounded-3xl mx-2" />
      </SliderSlick>
    </div>
  );
}
