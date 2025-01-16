import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Client = () => {
    return (
        <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20 my-10 overflow-hidden">

            <h1 className="text-blue-900 text-3xl md:text-4xl lg:text-[45px] text-center mb-8">
                OUR CLIENTS
            </h1>

            <div className="flex flex-col-reverse md:flex-row gap-10 items-center">

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-base md:text-lg lg:text-xl text-justify leading-relaxed w-full md:w-1/2"
                >
                    At Blue Earth MEP, we take pride in building strong, long-lasting relationships with our clients across various industries. Our commitment to excellence, innovation, and sustainability has earned us the trust of numerous organizations who rely on us for their mechanical, electrical, and plumbing needs. From small-scale projects to large, complex developments, we deliver customized solutions that meet the highest standards of quality and efficiency. Our clients' success is our success, and we are dedicated to supporting them every step of the way, ensuring their vision is brought to life with precision and expertise.
                </motion.p>
                <img
                    src={assets.client}
                    className="w-full md:w-1/2 rounded-lg object-cover shadow-lg"
                    alt="Our Clients"
                />
            </div>
        </div>
    );
};

export default Client;
