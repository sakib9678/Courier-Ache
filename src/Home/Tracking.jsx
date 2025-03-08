import React from "react";

const Tracking = () => {
  return (
    <div className="flex justify-center items-center p-3">
      <div className="mt-[-70px]  z-40 flex flex-col sm:flex-row items-center  w-full sm:w-auto bg-[#F65B00] px-5 py-6 border border-gray-300 rounded-lg shadow-md">
        <div className="text-center text-white  sm:text-left">
          <p className="mt-2 text-lg font-semibold">
            Track your parcel to get real-time updates on your delivery
          </p>
        </div>
        <div className="mt-4 w-full sm:mt-0 sm:ml-5 flex flex-col sm:flex-row items-center relative ">
          <input
            type="search"
            name=""
            id=""
            placeholder="Enter Tracking ID"
            className="w-full  px-4 py-2 rounded-[20px] outline-none"
          />
          <button
            className="border-2 md:absolute top-[50%] translate-y-[-50%] right-1  bg-[#F65B00] hover:bg-[#F65B00] text-white w-[50%] sm:w-28 py-1  rounded-[20px]  sm:mt-0 mt-10"
            type="submit"
          >
            Track Parcel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
