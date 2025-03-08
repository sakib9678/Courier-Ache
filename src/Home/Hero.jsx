import React from "react";
import hero from "../assets/images/hero-img.jpg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFF8F4] to-[#FFF] py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%]  bg-[#F65B00] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-8">
          <div className="w-[55%] z-10">
            <div className="inline-block bg-[#FFF0E6] rounded-full px-6 py-2 mb-6">
              <p className="text-[#F65B00] font-medium">
                Fast Delivery Service
              </p>
            </div>
            <h1 className="text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Quick & Reliable
              <span className="ml-3 text-[#F65B00]">Courier Services</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-[500px]">
              We deliver your packages safely and on-time to your destination.
              Track your shipment in real-time with our advanced tracking
              system.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#F65B00] text-white px-8 py-2 rounded-full font-medium hover:bg-[#E45400] transition-colors">
                Get Started
              </button>
              <button className="border-2 border-[#F65B00] text-[#F65B00] px-8 py-2 rounded-full font-medium hover:bg-[#FFF0E6] transition-colors flex items-center gap-2 ">
                <MdOutlineSlowMotionVideo size={28} />
                Watch video
              </button>
            </div>
          </div>
          <div className="w-[45%] relative">
            <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#F65B00] opacity-5 rounded-full -translate-y-1/4 translate-x-1/4"></div>
            <img
              src={hero}
              alt="Courier delivery service"
              className="relative z-10 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
