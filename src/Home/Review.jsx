import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const reviewSlides = [
  {
    title : "Fantastic service! My package arrived on time and in perfect condition.",
    name : "-John Doe",
  },
  {
    title : "I was very impressed with the service I received. My package was delivered on time and in perfect condition.",
    name : "-Jane Doe",
  },
  {
    title : "Great service! My package arrived on time and in perfect condition.",
    name : "-John Smith",
  },
]

const Review = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="container mx-auto py-10 sm:py-20 px-4 sm:px-0">
       <div className="relative h-[450px] sm:h-[400px] rounded-2xl overflow-hidden mt-5 sm:mt-10 w-full sm:w-[90%] md:w-[80%] mx-auto bg-gradient-to-br from-[#FFF8F4] to-white shadow-xl">
                {reviewSlides.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-700 ease-out transform ${
                      index === currentSlide 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="px-4 sm:px-8 py-8 sm:py-12">
                      <h3 className='text-center text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-[#1A1A1A] to-[#F65B00] bg-clip-text text-transparent'>
                        What Our Customers Say
                      </h3>
                      <div className="relative p-4 sm:p-8 rounded-xl bg-white shadow-lg mx-2 sm:mx-4 transform hover:scale-105 transition-all duration-300">
                        <FaQuoteLeft className="hidden sm:block absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 text-4xl text-[#F65B00]/20" />
                        <p className="text-base sm:text-xl text-gray-700 italic leading-relaxed">{item.title}</p>
                        <h4 className="font-bold mt-4 sm:mt-6 text-[#F65B00] text-base sm:text-lg">{item.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
      
                {/* Navigation Controls */}
                <div className="absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 flex justify-between -translate-y-1/2">
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? reviewSlides.length - 1 : prev - 1
                      )
                    }
                    className="p-2 sm:p-3 bg-white/90 rounded-full shadow-lg hover:bg-[#F65B00] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <FaChevronLeft className="text-sm sm:text-xl" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % reviewSlides.length)
                    }
                    className="p-2 sm:p-3 bg-white/90 rounded-full shadow-lg hover:bg-[#F65B00] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Next slide"
                  >
                    <FaChevronRight className="text-sm sm:text-xl" />
                  </button>
                </div>
      
                {/* Pagination */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
                  {reviewSlides.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 sm:h-2 rounded-full cursor-pointer transition-all duration-300 ${
                        index === currentSlide 
                          ? "w-6 sm:w-8 bg-[#F65B00]" 
                          : "w-1.5 sm:w-2 bg-gray-300 hover:bg-[#F65B00]/50"
                      }`}
                      role="button"
                      tabIndex={0}
                    />
                  ))}
                </div>
              </div>
    </div>
  )
}

export default Review