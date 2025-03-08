import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewSlides = [
  {
    id: 1,
    title: "Fantastic service! My package arrived on time and in perfect condition.",
    name: "-John Doe",
  },
  {
    id: 2,
    title: "I was very impressed with the service I received. My package was delivered on time and in perfect condition.",
    name: "-Jane Doe",
  },
  {
    id: 3,
    title: "Great service! My package arrived on time and in perfect condition.",
    name: "-John Smith",
  },
  {
    id: 4,
    title: "Amazing delivery service! Highly recommended for all shipping needs.",
    name: "-Sarah Johnson",
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        className={`h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-[#F65B00]/50`}
      ></div>
    ),
  };

  return (
    <div className="mx-auto py-10 sm:py-20 px-4 sm:px-0">
      <div className="container mx-auto">
        <h3 className="text-center text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-[#1A1A1A] to-[#F65B00] bg-clip-text text-transparent">
          What Our Customers Say
        </h3>
        
        <Slider {...settings} className="review-slider">
          {reviewSlides.map((item) => (
            <div key={item.id} className="px-2 sm:px-4 py-5">
              <div className="relative p-4 sm:p-8 rounded-xl bg-white shadow-lg transform   transition-all duration-300 h-full">
                <FaQuoteLeft className="hidden sm:block absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 text-4xl text-[#F65B00]/20" />
                <p className="text-base sm:text-xl text-gray-700 italic leading-relaxed min-h-[80px]">
                  {item.title}
                </p>
                <h4 className="font-bold mt-4 sm:mt-6 text-[#F65B00] text-base sm:text-lg">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;