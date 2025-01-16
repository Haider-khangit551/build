import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is MEP?", answer: "MEP stands for Mechanical, Electrical, and Plumbing." },
    { question: "What is MEP Contracting?", answer: "MEP contracting involves the planning, installation, and maintenance of mechanical, electrical, and plumbing systems in buildings." },
    { question: "What are MEP projects?", answer: "MEP projects include construction and engineering tasks focused on mechanical, electrical, and plumbing systems." },
    { question: "What is an MEP technician?", answer: "An MEP technician specializes in installing, maintaining, and repairing mechanical, electrical, and plumbing systems." },
    { question: "What is MEP certification?", answer: "MEP certification validates expertise in mechanical, electrical, and plumbing disciplines." },
    { question: "What is included in MEP services?", answer: "MEP services include HVAC, electrical wiring, plumbing, fire safety systems, and more." },
    { question: "Why do you need to hire MEP contractors?", answer: "MEP contractors ensure the efficient and safe installation of mechanical, electrical, and plumbing systems." },
    { question: "How many types of MEPs are there?", answer: "There are three main types of MEP: mechanical, electrical, and plumbing." },
    { question: "Is HVAC an MEP?", answer: "Yes, HVAC is a part of the mechanical systems in MEP." },
    { question: "What is an MEP system?", answer: "An MEP system encompasses all mechanical, electrical, and plumbing components in a building." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container overflow-x-hidden p-3 mx-auto md:p-20 mt-[-80px] font-sans">
      <motion.h2
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-2xl text-center mb-4">Frequently Asked Questions About MEP Contracting</motion.h2>
      <div className="bg-white shadow-md rounded-md divide-y divide-gray-200">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          const contentRef = useRef(null);

          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="" key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
              >
                <span className="text-lg">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${isActive ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </button>
              <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  height: isActive
                    ? `${contentRef.current?.scrollHeight}px`
                    : "0",
                }}
              >
                <div className="px-4 py-2 bg-gray-50 text-gray-600">{faq.answer}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
