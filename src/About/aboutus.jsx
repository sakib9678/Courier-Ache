import React from "react";
import who from "../assets/images/who.jpg";

const AboutUs = () => {
  return (
    <div>
      <section class="bg-[url('https://thumbs.dreamstime.com/b/portrait-delivery-man-pointing-to-space-shipping-box-logistics-mockup-banner-african-courier-smile-advertising-354890923.jpg')] bg-cover h-64">
        <div class="flex justify-center items-center h-full text-white text-3xl font-bold">
          <p>About Us</p>
        </div>
      </section>
      <div className="p-5">
        <div className="flex justify-between p-10 border-2 rounded-md shadow-md">
          <div className="w-[60%]  p-5 ">
            <h2 className="text-3xl font-semibold mb-5">Who We Are?</h2>
            <p className="">
              At Courier Ache, we are dedicated to providing fast, reliable, and
              secure delivery solutions for businesses and individuals alike. We
              understand that timely deliveries are crucial, and that’s why we
              prioritize efficiency, safety, and customer satisfaction in every
              delivery we make.
            </p>
            <p className="mt-2">
              Our company was founded with the vision of revolutionizing the
              courier industry. With a focus on technology-driven solutions, we
              offer innovative services that cater to a wide range of delivery
              needs. Whether it's a local package or an international shipment,
              Courier Ache ensures your goods reach their destination swiftly
              and securely.
            </p>
          </div>
          <div className="w-[40%]">
            <img src={who} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
