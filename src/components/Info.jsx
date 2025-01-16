

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Info = () => {
  const credentials = [
    {
      value: 3,
      suffix: "+ Years",
      description: "of Industry Experience",
      icon: "/image/handShake.png",
    },
    {
      value: 6,
      suffix: "+",
      description: "Ongoing Projects",
      icon: "/image/ongoing.png",
    },
    {
      value: 15,
      suffix: "+",
      description: "Experts Professionals",
      icon: "/image/expert.png",
    },
    {
      value: 10,
      suffix: "+",
      description: "Supporting Vendors",
      icon: "/image/fam.png",
    },
  ];

  return (
    <div
      className="text-center bg-gray-50 py-10 px-4 md:px-10 lg:px-20"
      id="about"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl  text-blue-900 mb-8">
        Our Credentials: Excellence, Experience, and Reliability
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {credentials.map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto py-10 px-4 md:px-16 lg:px-20 mt-10 text-justify"
      >
        <h1 className="text-4xl lg:text-6xl mb-5 text-center">---xx---</h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          We pride ourselves on delivering unmatched expertise, unwavering
          excellence, and steadfast reliability in every project we undertake.
          Our commitment to excellence ensures that every detail is executed to
          perfection, maintaining the highest standards of quality and safety.
          Above all, our reliability is the cornerstone of our success—clients
          trust us to deliver projects on time, within budget, and with consistent
          communication every step of the way.
        </p>
      </motion.div>
    </div>
  );
};

const Card = ({ value, suffix, description, icon, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    initial: {
      y: index % 2 === 0 ? "-10vh" : "10vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: inView ? 1 : 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow"
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={variants}
    >
      <img
        src={icon}
        alt={description}
        className="mx-auto mb-4 h-16 w-16 object-contain"
      />
      <h3 className="text-lg md:text-xl font-semibold text-blue-700">
        {inView ? (
          <CountUp start={0} end={value} duration={2.5} />
        ) : (
          "0"
        )}{" "}
        {suffix}
      </h3>
      <p className="text-gray-600 mt-2 text-sm md:text-base">{description}</p>
    </motion.div>
  );
};

export default Info;

