import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Change navbar color when scrolled
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <>
      <div
        className={`w-full fixed transition-all z-10 ${scrolling ? 'bg-gray-200' : 'bg-gray-100'}`}
      >
        <div className="bg-[#273272] text-white hidden md:block">
          <ul className="flex md:tracking-normal tracking-tighter gap-2 p-1 md:ml-20">
            <p>+91 8182836440</p>
            <p>+91 9756388101</p>
            <p>blueearthmep@gmail.com</p>
          </ul>
        </div>
        <div className="h-20 py-4 px-6 md:px-10 lg:px-32 flex items-center justify-between">

          <div className='flex items-center md:gap-12'>


            <img
              src={assets.blueearth}
              className="h-20 ml-[-12px] md:w-24 md:h-20 mt-3 "
              alt=""
            />

            <p className='md:ml-[-50px] text-xl text-[#1D4ED8] font-bold md:text-xl'>BLUE EARTH MEP</p>
          </div>


          <ul className="text-lg gap-10 hidden md:flex">
            <a href="#Header" className="cursor-pointer hover:text-gray-600">
              Home
            </a>
            <a href="#about" className="cursor-pointer hover:text-gray-600">
              About
            </a>
            <a href="#contact" className="cursor-pointer hover:text-gray-600">
              Contact
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-600">
              Services
            </a>
          </ul>
          <button className="hidden md:block bg-blue-700 px-2 py-2 rounded-md text-white">
            <a href="#contact">Contact Us</a>

          </button>
          <img
            src={assets.menu}
            onClick={() => setShowMenu(true)}
            className="md:hidden w-7 text-black cursor-pointer"
            alt=""
          />
        </div>
        <div
          className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'
            }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-6"
              alt=""
            />
          </div>

          <ul className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium">
            <a
              onClick={() => setShowMenu(false)}
              href="#header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Home
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#about"
              className="px-4 py-2 rounded-full inline-block"
            >
              About
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#contact"
              className="px-4 py-2 rounded-full inline-block"
            >
              Contact
            </a>
            <a
              onClick={() => setShowMenu(false)}
              href="#projects"
              className="px-4 py-2 rounded-full inline-block"
            >
              Services
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
