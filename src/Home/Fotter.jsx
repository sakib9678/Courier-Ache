import React from 'react';
import logo from "../assets/images/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Fotter = () => {
  return (
    <div className="bg-gray-400 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="mb-4" />
          <p className="text-center md:text-left">Hossainh market, Uttar Badda <br /> Dhaka-1209</p>
          <p className="text-center md:text-left">Email : info@courierache.com</p>
          <p className="text-center md:text-left">Hotline : 01234567890</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Quick Links</h1>
          <ul>
            <li className="mb-2"><a href="" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Services</h1>
          <ul>
            <li className="mb-2"><a href="" className="hover:underline">E-commerce</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Pick & Drop</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Packaging</a></li>
            <li className="mb-2"><a href="" className="hover:underline">Logistic</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-bold mb-4">Follow Us</p>
          <div className="flex space-x-4">
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
