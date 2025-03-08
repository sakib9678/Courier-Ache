import React from 'react'

const OtherSection2 = () => {
  return (
    <div className='mt-10'>
      <div className="p-8 flex flex-col justify-center items-center min-h-[300px] bg-gradient-to-br from-[#FFF8F4] to-[#FFF] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F65B00]/5 transform -skew-y-6"></div>
        <div className="relative z-10">
          <h2 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#1A1A1A] to-[#F65B00] bg-clip-text text-transparent mb-6'>
            Accelerate Your Business Growth with Courier Ache
          </h2>
          <p className='mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
            Courier Ache, we make your shipping experience easy, fast, and reliable
          </p>
          <button className='mt-8 px-8 py-3 font-semibold bg-gradient-to-r from-[#F65B00] to-[#ff8540] text-white rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#F65B00]/50'>
            Connect With Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default OtherSection2