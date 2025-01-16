// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//     return (
//         <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-[#273272] overflow-hidden' id='footer'>
//             <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
//                 <div className='w-full md:w-1/3 mb-8 md:mb-0'>
//                     <img src={assets.blueearth} className='size-24 ml-[-10px]' alt="logo" />
//                     <p className='text-gray-300 mt-4  text-[17px] text-justify leading-relaxed'>Building quality, safety, and reliability into every project. Your trusted partner for residential and commercial construction. Committed to excellence, integrity, and delivering exceptional results with every step of the process.</p>
//                 </div>
//                 <div className='w-full md:w-1/5 mb-8 md:mb-0'>
//                     <h3 className='text-white text-lg font-bold mb-4'>Links</h3>
//                     <ul className='flex flex-col gap-2'>
//                         <a href="#Header" className='text-gray-300 text-[17px]'>Home</a>
//                         <a href="#about" className='text-gray-300 text-[17px]'>About US</a>
//                         <a href="#contact" className='text-gray-300 text-[17px]'>Contact Us</a>
//                         <a href="#projects" className='text-gray-300 text-[17px]'>Project</a>
//                     </ul>
//                 </div>
//                 <div className='w-full md:w-1/5 mb-8 md:mb-0'>
//                     <h3 className='text-lg font-bold text-white mb-4'>Address</h3>
//                     <ul className=''>
//                         <li className='text-gray-300 text-[17px]'>blueearthmep@gmail.com</li>
//                         <li className='text-gray-300 text-[17px]'>+91 8182836440</li>
//                         <li className='text-gray-300 text-[17px]'>+91 9756388101</li>
//                         <li><img src="" alt="" /></li>
//                     </ul>
//                     <div className='flex mt-3 gap-2'>
//                         <a href=""><img src={assets.instaIcon} className='size-5 md:size-6' alt="" /></a>
//                         <a href=""><img src={assets.facebookIcon} className='size-5 md:size-6' alt="" /></a>
//                         <a href=""><img src={assets.twitterIcon} className='size-5 md:size-6' alt="" /></a>
//                         <a href=""><img src={assets.linkdinIcon} className='size-5 md:size-6' alt="" /></a>
//                     </div>
//                 </div>
//             </div>
//             <div className='border-t border-gray-500 py-4 mt-10 text-center text-white'>
//                 Copyright 2025 © BLUE EARTH. All Right Reserved.
//             </div>
//         </div>
//     )
// }

// export default Footer


import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className="pt-10 px-4 md:px-10 lg:px-20 w-full bg-[#273272] overflow-hidden" id="footer">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">


                <div className="w-full md:w-1/3">
                    <div className='flex justify-start items-center '>

                        <img src={assets.blueearth} className="h-20 w-auto" alt="logo" />
                        <h1 className=' text-2xl text-white mb-3'>BLUE EARTH MEP</h1>
                    </div>
                    <p className="text-center md:mt-[-10px] text-gray-300 mt-4 text-sm md:text-[17px] leading-relaxed">
                        Building quality, safety, and reliability into every project. Your trusted partner for residential and commercial construction. Committed to excellence, integrity, and delivering exceptional results with every step of the process.
                    </p>
                </div>

                <div className="w-full md:w-1/5">
                    <h3 className="text-white text-lg font-bold mb-4">Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="#Header" className="text-gray-300 text-sm md:text-[17px] hover:text-white transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-gray-300 text-sm md:text-[17px] hover:text-white transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-300 text-sm md:text-[17px] hover:text-white transition">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-300 text-sm md:text-[17px] hover:text-white transition">
                                Project
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5">
                    <h3 className="text-lg font-bold text-white mb-4">Address</h3>
                    <ul className="space-y-4">
                        <li className="text-gray-300 text-sm md:text-[17px] flex items-center gap-4"><img src={assets.email} alt="" className='size-4' />blueearthmep@gmail.com</li>
                        <li className="text-gray-300 text-sm md:text-[17px] flex items-center gap-3"><img src={assets.phone} alt="" className='size-4' />+91 8182836440</li>
                        <li className="text-gray-300 text-sm md:text-[17px] flex items-center gap-4"><img src={assets.phone} alt="" className='size-4' />+91 9756388101</li>
                        <li className="text-gray-300 text-sm md:text-[17px] flex items-center gap-4"><img src={assets.location} className='size-5' alt="" />2048, Sahukara Line Paar Puranpur, Pilibhit-262122</li>
                    </ul>
                    <div className="flex mt-4 gap-3">
                        <a href="https://www.instagram.com/blueearthmep?utm_source=qr&igsh=dDF1NTQ3MWNlaDVr" target='_blank'>
                            <img src={assets.instaIcon} className="h-6 w-6 md:h-8 md:w-8" alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src={assets.facebookIcon} className="h-6 w-6 md:h-8 md:w-8" alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={assets.twitterIcon} className="h-6 w-6 md:h-8 md:w-8" alt="Twitter" />
                        </a>
                        <a href="#">
                            <img src={assets.linkdinIcon} className="h-6 w-6 md:h-8 md:w-8" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500 py-4 mt-10 text-center text-sm md:text-base text-gray-300">
                Copyright 2025 © BLUE EARTH. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
