import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const bannerSlides = [
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/04/19/98/19/360_F_419981971_jftDSPRJGskIgVirQqtKLItcFdEZ4Zve.jpg",
    alt: "Discover Women's Day Delights",
  },
  {
    id: 2,
    image:
      "https://cdn2.vectorstock.com/i/1000x1000/96/01/online-shopping-delivery-for-banner-poster-vector-33219601.jpg",
    alt: "Discover Women's Day Delights",
  },
];

const services = [
  {
    id: 1,
    title: "EXPRESS DELIVERY",
    subtext: "Next Day Delivery",
    bgColor: "#0F7DD8",
    icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=1920&q=75",
    link: "/b2b",
  },
  {
    id: 2,
    title: "INTERNATIONAL",
    subtext: "Worldwide Shipping",
    bgColor: "#2654A1",
    icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=1920&q=75",
    link: "/repairs",
  },
  {
    id: 3,
    title: "TRACK & TRACE",
    subtext: "Real-time Updates",
    bgColor: "#6769D0",
    icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/realestate_square_hotkey.webp?w=1920&q=75",
    link: "/real-estate",
  },
  {
    id: 4,
    title: "WAREHOUSING",
    subtext: "Secure Storage",
    bgColor: "#00ac7d",
    icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp?w=1920&q=75",
    link: "/doctors",
  },
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="mt-16 my-10">
      <div className="home_bannerbox mb-12 grid  md:grid-cols-2 grid-cols-1 gap-4 container mx-auto">
        {/* Banner Slider */}
        <div className="relative h-[150px] md:h-[250px] rounded-lg overflow-hidden">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? bannerSlides.length - 1 : prev - 1
                )
              }
              className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-gray-800" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
              }
              className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-gray-800" />
            </button>
          </div>

          {/* Pagination */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {bannerSlides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                }`}
                role="button"
                tabIndex={0}
              />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-4 rounded-lg overflow-hidden group h-[250px] md:h-full"
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="text-white font-medium text-[13px]">
                {service.title}
              </div>
              <div className="text-white/70">{service.subtext}</div>
              <div className="flex items-center mt-2">
                <span className="text-white text-sm">Explore</span>
              </div>
              <div className="absolute bottom-0 right-0 ">
                <img src={service.icon} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
