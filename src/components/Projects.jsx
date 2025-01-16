// import React from "react";
// import { motion } from "framer-motion";
// import { assets } from "../assets/assets";

// // Reusable ServiceBlock Component
// const ServiceBlock = ({ image, items, reverse = false }) => (
//     <div
//         className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
//             } gap-10 items-center`}
//     >
//         <img
//             src={image}
//             className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow-lg"
//             alt="Service description"
//         />
//         <motion.ol
//             initial={{ opacity: 0, y: 100 }}
//             transition={{ duration: 1.5 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-base md:text-lg lg:text-xl p-6 w-full md:w-1/2 list-decimal leading-relaxed"
//         >
//             {items.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </motion.ol>
//     </div>
// );

// const Projects = () => {
//     const services = [
//         {
//             heading: "HVAC INSTALLATION & DUCTING SYSTEM",
//             image: assets.ourprojects,
//             items: [
//                 "G.I & Ducting Installation System",
//                 "Chilled Water Pumping System",
//                 "Package Units DX Units and Coil Units",
//                 "Installation",
//                 "Ventilation System",
//                 "Kitchen Hood Exhaust and Fresh Air System",
//                 "Reports",
//             ],
//         },
//         {
//             heading: "ELECTRICAL",
//             image: assets.electric,
//             items: [
//                 "POWER DISTRIBUTION SYSTEM",
//                 "LIGHTING CONTROL",
//                 "LOW CURRENT SYSTEM",
//                 "TELEPHONE & DATA SYSTEM",
//                 "HOME AUTOMATION",
//                 "CCTV",
//                 "FIRE DETECTION & ALARAMS",
//                 "AUDIO / VIDEO INTER COM SYSTEM"
//             ],
//             reverse: true,
//         },
//         {
//             heading: "FIRE FIGHTING & FIRE ALARM INSTALLATION SYSTEM",
//             image: assets.fire,
//             items: [
//                 "FIRE FIGTHING - SPRINKLER INSTALLATION & MODIFICATION SYSTEM",
//                 "FIRE ALARAM - INSTALLATION & MODIFICATION",
//                 "FACP PROGRAMMING, TESTING AND COMMISSIONING",
//                 "EMERGENCY / EXIT LIGHTNING SYSTEM",
//                 "FIRE SUPPRESSION SYSTEM",

//             ],
//         },
//         {
//             heading: "PLUMBING & PUBLIC HEALTH ENGINEERING",
//             image: assets.plumbing,
//             items: [
//                 "HOT AND COLD WATER SUPPLY SYSTEM",
//                 "WATER FILTRATION SYSTEM",
//                 "IRRIGATION SYSTEM",
//                 "SWIMMING POOL",
//                 "DRAINAGE",
//                 "SANITATION",
//                 "RAIN WATER",
//                 "SEWAGE TREATMENT"
//             ],
//             reverse: true,
//         },
//     ];

//     return (
//         <div className="container space-y-7 mx-auto py-10 px-4 md:px-10 lg:px-20 my-10 overflow-hidden">
//             <h1
//                 className="text-blue-900 text-3xl md:text-4xl lg:text-4xl text-center mb-8"
//                 id="projects"
//             >
//                 OUR SERVICES
//             </h1>
//             {services.map((service, index) => (
//                 <ServiceBlock
//                     heading={service.heading}
//                     key={index}
//                     image={service.image}
//                     items={service.items}
//                     reverse={service.reverse}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

// Reusable ServiceBlock Component
const ServiceBlock = ({ heading, image, items, reverse = false }) => (
    <div
        className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 items-center`}
    >
        <img
            src={image}
            className="w-full md:w-1/2 h-auto rounded-lg object-cover shadow-lg"
            alt="Service description"
        />
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-base md:text-lg lg:text-xl p-6 w-full md:w-1/2"
        >
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">{heading}</h2>
            <ol className="list-decimal leading-relaxed">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </motion.div>
    </div>
);

const Projects = () => {
    const services = [
        {
            heading: "HVAC INSTALLATION & DUCTING SYSTEM",
            image: assets.ourprojects,
            items: [
                "G.I & Ducting Installation System",
                "Chilled Water Pumping System",
                "Package Units DX Units and Coil Units",
                "Installation",
                "Ventilation System",
                "Kitchen Hood Exhaust and Fresh Air System",
                "Reports",
            ],
        },
        {
            heading: "ELECTRICAL",
            image: assets.electric,
            items: [
                "POWER DISTRIBUTION SYSTEM",
                "LIGHTING CONTROL",
                "LOW CURRENT SYSTEM",
                "TELEPHONE & DATA SYSTEM",
                "HOME AUTOMATION",
                "CCTV",
                "FIRE DETECTION & ALARAMS",
                "AUDIO / VIDEO INTER COM SYSTEM",
            ],
            reverse: true,
        },
        {
            heading: "FIRE FIGHTING & FIRE ALARM INSTALLATION SYSTEM",
            image: assets.fire,
            items: [
                "FIRE FIGTHING - SPRINKLER INSTALLATION & MODIFICATION SYSTEM",
                "FIRE ALARAM - INSTALLATION & MODIFICATION",
                "FACP PROGRAMMING, TESTING AND COMMISSIONING",
                "EMERGENCY / EXIT LIGHTNING SYSTEM",
                "FIRE SUPPRESSION SYSTEM",
            ],
        },
        {
            heading: "PLUMBING & PUBLIC HEALTH ENGINEERING",
            image: assets.plumbing,
            items: [
                "HOT AND COLD WATER SUPPLY SYSTEM",
                "WATER FILTRATION SYSTEM",
                "IRRIGATION SYSTEM",
                "SWIMMING POOL",
                "DRAINAGE",
                "SANITATION",
                "RAIN WATER",
                "SEWAGE TREATMENT",
            ],
            reverse: true,
        },
    ];

    return (
        <div className="container space-y-7 mx-auto py-10 px-4 md:px-10 lg:px-20 my-10 overflow-hidden">
            <h1
                className="text-blue-900 text-3xl md:text-4xl lg:text-4xl text-center mb-8"
                id="projects"
            >
                OUR SERVICES
            </h1>
            {services.map((service, index) => (
                <ServiceBlock
                    heading={service.heading}
                    key={index}
                    image={service.image}
                    items={service.items}
                    reverse={service.reverse}
                />
            ))}
        </div>
    );
};

export default Projects;
