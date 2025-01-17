import React from 'react';
import NavBar from './NavBar';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
      <div
        className="h-full bg-gray-50 flex flex-col items-center w-full overflow-hidden"
        id="Header"
      >
        <NavBar />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-[90%] h-[400px] md:h-[px] lg:h-[400px] p-10 mx-auto mt-[80px] lg:mt-[150px]"
          style={{
            backgroundImage: "url('/4khero1.jpeg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-12 text-white">
            <h1 className="text-2xl sm:text-3xl text-blue-700 md:text-4xl lg:text-5xl font-bold leading-tight">
              YOUR TRUSTED MEP PARTNER.
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="border border-black bg-gray-200 text-black px-6 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
