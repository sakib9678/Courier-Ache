import React from "react";
import commitment from "../assets/images/commitment.png";

const OurCommitment = () => {
  return (
    <div className="p-5 ">
      <div className="flex flex-col md:flex-row justify-between p-5 md:p-10 border-2 rounded-lg shadow-lg bg-white">
        <div className="w-full md:w-[40%] mb-5 md:mb-0">
          <img src={commitment} alt="Our Commitment" className="rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-[60%]  p-5 rounded-lg">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-black">Our Commitment</h2>
          <p className="mt-4 text-sm md:text-lg text-center md:text-left text-black">
            At Courier Ache, we are committed to providing exceptional service
            with every package we deliver. Our dedication to our customers
            drives everything we do, from ensuring fast and secure deliveries to
            offering personalized support. We believe in building long-term
            relationships based on trust, reliability, and efficiency.
          </p>
          <h3 className="mt-5 text-xl md:text-3xl font-bold text-center md:text-left text-black">What We Promise:</h3>
          <ul className="list-disc list-inside mt-4 text-sm md:text-lg text-black">
            <li>
              <span className="font-semibold text-black">Timely Deliveries:</span> We understand that time is
              precious, which is why we prioritize prompt and reliable delivery
              services. Whether you're sending a letter across town or a package
              across the country, we ensure it arrives on time, every time.
            </li>
            <li>
              <span className="font-semibold text-black">Secure Shipping:</span> We take the safety of your shipments
              seriously. With industry-leading tracking technology, you can
              monitor your package every step of the way, ensuring it arrives
              safely at its destination.
            </li>
            <li>
              <span className="font-semibold text-black">Customer Satisfaction:</span> Your experience matters to
              us. Our customer support team is always ready to assist with any
              questions or concerns, offering friendly and helpful solutions to
              ensure your satisfaction.
            </li>
            <li>
              <span className="font-semibold text-black">Eco-Friendly Practices:</span> We are committed to reducing
              our environmental impact. From optimizing delivery routes to using
              eco-friendly packaging materials, we work hard to contribute to a
              greener future.
            </li>
            <li>
              <span className="font-semibold text-black">Innovative Solutions:</span> In an ever-evolving world, we
              stay ahead of the curve by embracing new technologies to improve
              our services. Our commitment to innovation means better service,
              greater convenience, and an enhanced customer experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
