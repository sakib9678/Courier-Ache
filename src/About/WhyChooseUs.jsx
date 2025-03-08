import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="p-5">
      <div className="p-10 border-2 rounded-md shadow-md ">
        <div className="">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <p className="mt-2">
          At Courier Ache, we stand out for our commitment to speed,
          reliability, and customer satisfaction. Here’s why you should choose
          us:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <span>Fast & Reliable Service:</span>We prioritize quick deliveries
            without compromising on reliability.
          </li>
          <li>
            <span>Real-Time Tracking:</span>Stay informed every step of the way
            with our advanced tracking system.
          </li>
          <li>
            <span>Affordable Rates:</span>We offer competitive pricing without
            hidden fees.
          </li>
          <li>
            <span>Customer-Focused: </span>Our friendly support team is always
            here to assist with any queries or concerns.
          </li>
          <li>
            <span>Eco-Conscious: </span>We care about the planet and use
            sustainable practices in our operations.
          </li>
        </ul>
        <p className="mt-2">
          Choose Courier Ache for hassle-free, efficient, and cost-effective
          delivery solutions!
        </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
