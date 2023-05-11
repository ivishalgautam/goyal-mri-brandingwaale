import React, { useState } from "react";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

let navList = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "tests",
    path: "/tests",
  },
  {
    name: "offers",
    path: "/offers",
  },
  {
    name: "packages",
    path: "/packages",
  },
  {
    name: "gallery",
    path: "/gallery",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
  {
    name: "contact us",
    path: "/contact-us",
  },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="bg-white relative">
      <div className="flex items-center justify-around h-[100px] px-8 md:px-0">
        <div className="w-[160px] h-[97px]">
          <img
            src="../../src/assets/logo-vertical.png"
            className="w-full h-full"
          />
        </div>
        <div className="relative hidden md:block w-[500px]">
          <input
            type="text"
            placeholder="search tests"
            className="px-4 py-2 rounded-md bg-gray-200 placeholder:text-black w-full ml-auto"
          />
          <span className="absolute right-0 top-0 h-full bg-primary w-10 rounded-md flex items-center justify-center text-white">
            <FaSearch size={20} />
          </span>
        </div>
        <button className="px-2 py-1 text-sm border border-primary bg-[#EEF4FF] rounded-md flex items-center justify-center gap-2 ml-auto md:m-0">
          Login/Signup{" "}
          <span className="p-[2px] w-6 h-6 bg-white rounded-md ">
            <FaUserAlt
              size={15}
              className="inline-block bg-white text-primary"
            />
          </span>
        </button>
        <button
          className="ml-4 inline-block md:hidden"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <GiHamburgerMenu size={30} className="z-10" />
        </button>
      </div>
      <nav className="h-[60px] bg-primary rounded-b-lg py-2 hidden md:flex items-center justify-center">
        <ul className="flex items-center justify-center mx-auto gap-2 text-white">
          {navList.map((link, key) => {
            return (
              <li key={key}>
                <Link to={link.path} className="capitalize text-sm">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={`mobileNav absolute ${
          mobileNav ? "top-0 left-0" : "-left-[650px]"
        } md:hidden bg-primary h-screen w-full transition-all z-10`}
      >
        <ul className="h-full flex items-center justify-center flex-col gap-4">
          <button
            onClick={() => setMobileNav(!mobileNav)}
            className="absolute top-8 right-8"
          >
            <GrClose size={30} />
          </button>

          {navList.map((item, key) => {
            return (
              <li
                key={key}
                className="text-white text-xl capitalize border-b w-full pb-4 text-center"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
