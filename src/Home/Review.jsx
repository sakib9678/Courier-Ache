import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    <div className="container mx-auto">
       <div className="relative h-[300px] rounded-lg overflow-hidden mt-10 w-[80%] mx-auto bg-[#FEF7F1] shadow-lg">
        
                {reviewSlides.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out transform ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <h3 className='text-center text-4xl font-bold  mb-4'>What Our Customers Say</h3>
                   <div className="p-6 shadow-md rounded-md bg-white/80 py-16 text-center mt-5 mx-4">
                <p className="text-lg italic text-gray-700">{item.title}</p>
                <h4 className="font-bold mt-2 text-gray-900">{item.name}</h4>
            </div>
                  </div>
                ))}
      
                {/* Navigation Controls */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? reviewSlides.length - 1 : prev - 1
                      )
                    }
                    className="p-2 bg-white/80 rounded-full shadow-md hover:bg-[#F65B00] transition-colors duration-300"
                    aria-label="Previous slide"
                  >
                    <FaChevronLeft className="text-gray-800" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % reviewSlides.length)
                    }
                    className="p-2 bg-white/80 rounded-full shadow-md hover:bg-[#F65B00] transition-colors duration-300"
                    aria-label="Next slide"
                  >
                    <FaChevronRight className="text-gray-800 " />
                  </button>
                </div>
      
                {/* Pagination */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {reviewSlides.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                        index === currentSlide ? "bg-[#F35C02] transform scale-125" : "bg-gray-300"
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