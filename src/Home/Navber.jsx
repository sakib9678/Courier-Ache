import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     console.log("clicked outside");

  //     // setIsOpenMenu(false);
  //   }
  // };

  return (
    <section className="shadow-md">
      {/* <div className="bg-[#0e0e0e] md:block hidden py-2">
        <div className="container">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#fafafa] text-base py-[2px]">
                <FaRegClock />
              </span>
              <p className="text-sm text-[#fafafa]">
                Sat-Thu:9:00am-06-00pm/Closed on weekends
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#fafafa] text-base py-[2px]">
                <MdOutlineMarkEmailRead />
              </span>
              <a
                href="mailto:admin@ibrahimtechbd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#fafafa]"
              >
                admin@ibrahimtechbd.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#fafafa] text-base py-[2px]">
                <FiPhoneCall />
              </span>
              <a
                href="tel:+8801307-279400"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#fafafa]"
              >
                +8801307-279400
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <nav className="bg-white h-24">
        <div className="">
          <div>
            <div className="flex items-center justify-around py-2 md:py-6">
              <div>
                <img className="w-[150px]" src={logo} alt="" />
              </div>
              <div
                className={`  ${
                  isOpenMenu
                    ? "visible opacity-1 "
                    : "invisible md:visible opacity-[0] md:opacity-[1]"
                } md:static fixed top-0 right-0 bg-[#00000065] md:bg-transparent w-full md:w-auto h-screen md:h-auto z-50 duration-300`}
              >
                <div
                  ref={menuRef}
                  className={`main-nav-section md:static absolute top-0 ${
                    isOpenMenu ? "right-0 " : "right-[-150%]"
                  } bg-white duration-300 md:bg-transparent h-screen md:h-auto w-[300px] md:w-auto`}
                >
                  <div className="flex justify-between items-center md:hidden p-4 bg-white shadow-md">
                    <div className="">
                      <img className="w-[150px]" src={logo} alt="" />
                    </div>
                    <button
                      onClick={() => setIsOpenMenu(!isOpenMenu)}
                      className="text-2xl text-[#313131]"
                    >
                      <IoCloseCircleOutline />
                    </button>
                  </div>
                  <ul className=" flex md:flex-row flex-col  md:gap-6 items-start md:items-center p-4 md:p-0 ">
                    <li className="w-full border-b md:border-none py-3">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `text-[#313131] text-base font-medium hover:text-[#f76b1d] duration-300 py-2 md:w-auto w-full ${
                            isActive ? "text-[#f76b1d]" : "text-[#313131]"
                          }`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="w-full border-b md:border-none py-3">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          `text-[#313131]  text-base font-medium hover:text-[#f76b1d] duration-300 py-2 md:w-auto w-full ${
                            isActive ? "text-[#f76b1d]" : "text-[#313131]"
                          }`
                        }
                      > 
                      About
                      </NavLink>
                    </li>
                   
                    <li className="w-full border-b md:border-none py-3">
                      <NavLink
                        to="/services"
                        className={({ isActive }) =>
                          `text-[#313131] text-base font-medium hover:text-[#f76b1d] duration-300 py-2 md:w-auto w-full ${
                            isActive ? "text-[#f76b1d]" : "text-[#313131]"
                          }`
                        }
                      >
                        Services
                      </NavLink>
                    </li>

                    <li className="w-full border-b md:border-none py-3">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          `text-[#313131] text-base font-medium hover:text-[#f76b1d] duration-300 py-2 md:w-auto w-full ${
                            isActive ? "text-[#f76b1d]" : "text-[#313131]"
                          } `
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex  justify-between items-center gap-4 md:gap-6">
                <Link to="/login" className="text-[#313131] hover:text-[#f76b1d] duration-300 text-base font-medium"> 
                <span>Log In</span>
                </Link>
                <Link
                  to="/"
                  className="bg-[#F75A00] text-white text-base font-medium px-5 py-3 rounded-md hover:bg-[#313131] duration-300 flex items-center gap-2"
                >
                  <span>Sign Up</span>
                  
                </Link>
              </div>
              <button
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="text-2xl text-[#313131] md:hidden block"
              >
                <AiOutlineMenuFold />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navber;
