import React from 'react';
import logo from "../assets/images/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Fotter = () => {
  return (
    <div className="bg-[#FFF6F1] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="mb-4 w-32 sm:w-44" />
          <p>Hossainh market, Uttar Badda <br /> Dhaka-1209</p>
          <p>Email : info@courierache.com</p>
          <p>Hotline : 01234567890</p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-4">Quick Links</h1>
          <ul>
            <li className="mb-2"><a href="" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-4">Services</h1>
          <ul>
            <li className="mb-2"><a href="" className="hover:underline">E-commerce</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Pick & Drop</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Packaging</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Logistic</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl font-bold mb-4">Follow Us</p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="" className="text-2xl hover:text-gray-400"><FaFacebook /></a>
            <a href="" className="text-2xl hover:text-gray-400"><FaTwitter /></a>
            <a href="" className="text-2xl hover:text-gray-400"><FaLinkedin /></a>
            <a href="" className="text-2xl hover:text-gray-400"><GrInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fotter;
