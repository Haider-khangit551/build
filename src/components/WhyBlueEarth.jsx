import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const WhyBlueEarth = () => {
    return (
        <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20 my-10 overflow-hidden">


            <h1 className="text-blue-900 text-2xl md:text-4xl lg:text-4xl text-center mb-8">
                WHY BLUE EARTH MEP
            </h1>



            <div className="flex flex-col md:flex-row gap-10 items-center">


                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-base md:text-lg lg:text-xl text-justify leading-relaxed w-full md:w-1/2"
                >
                    Blue Earth MEP stands out as a trusted choice due to their extensive expertise in providing comprehensive mechanical, electrical, and plumbing solutions across diverse industries. Their commitment to quality, precision, and sustainability ensures that every project is completed to the highest standards. With a strong focus on innovation and a proven track record of successfully delivering complex projects, Blue Earth MEP consistently meets and exceeds client expectations. Their attention to detail, timely execution, and ability to adapt to evolving project requirements make them an ideal partner for businesses looking for reliable and efficient MEP services.
                </motion.p>



                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    src={assets.blueearth}
                    className="w-full h-[400px] md:w-1/2 rounded-lg shadow-lg"
                    alt="Blue Earth MEP"
                />
            </div>
        </div>
    );
};

export default WhyBlueEarth;
