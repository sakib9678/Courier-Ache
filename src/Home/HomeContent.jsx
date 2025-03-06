import React, { useState } from "react";
import hero from "../assets/images/hero.jpg";
import delivery_boy from "../assets/images/delivery_boy.png";

const HomeContent = () => {
  return (
    <div className="p-10 mx-auto">
      <div className=" flex flex-row-reverse justify-around gap-4  ">
        <div className="w-[50%]">
          <img src={hero} alt="" />
        </div>
        <div className="w-[50%]">
          <p className="text-[#F65B00] text-2xl">Best In Town</p>
          <p className="text-6xl font-bold mt-5 leading-tight">
            Everything At
            <span className="text-[#F65B00] ml-4 ">Your Doorstep</span>
          </p>
          <p className=" mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            facilis ratione aperiam delectus autem culpa eveniet dolorum
            repellat? Temporibus unde nesciunt vel rem repellat dolor ea est
            nobis accusamus consequuntur?
          </p>
          <button className="bg-[#F65B00] text-white px-4 py-2 mt-5 rounded-md">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative mt-10 p-4">
        <div className="p-4 h-80 w-60 bg-[#F6DA72] text-[#343747] rounded-3xl absolute -top-6 left-16">
          <p className="text-2xl font-semibold">
            Your Trusted Delivery Partner
          </p>

          <p className="text-2xl font-semibold">Since</p>
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold">
              <p>2</p>
              <p>0</p>
              <p>2</p>
              <p>5</p>
            </div>
            <img src={delivery_boy} alt="" className="h-56" />
          </div>
        </div>
        <div className=" p-5 flex bg-[#38373C] w-full h-60 rounded-3xl">
          <div className="w-[30%]"></div>
          <div className="w-[60%]">
            <div className="text-white">
              <button>Send</button>
              <button className="ml-5">Receive</button>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col">
                <p className="text-white">Courier Type</p>
                <select className="h-10 bg-gray-100 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Local</option>
                  <option value="">International</option>
                </select>
              </div>

              <div className="flex flex-col">
                <p className="text-white">Location</p>
                <select className="h-10 bg-gray-100 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Dhaka</option>
                  <option value="">Chittagong</option>
                  <option value="">Sylhet</option>
                  
                  
                </select>
              </div>

              <div className="flex flex-col">
                <p className="text-white">date </p>
                <input className="h-10 bg-gray-100 border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="date" name="" id="" />
                
              </div>

             
              
            </div>
            <button className="mt-10 h-10 w-24 rounded-md text-white bg-[#F65B00]">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
