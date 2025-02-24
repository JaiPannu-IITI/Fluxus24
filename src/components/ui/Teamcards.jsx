import Image from 'next/image';
import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'], // Specify the required subsets
  weight: ['400', '700'], // Specify required font weights
  display: 'swap', // Use 'swap' for better font rendering
});
const Teamcards = ({ name, image, phoneNo, emailId, instagramId, linkedinId , designation}) => {
    const emailIdfinal = `mailto:${emailId}`;

    return (
        <div className="flex flex-col">
        <div className="relative w-[200px] h-[200px] rounded-[15px] flex justify-center items-center bg-blue-100 group">
          
            <div className="absolute w-[200px] h-[200px] transition-transform duration-[400] ease-in-out hover:translate-x-[-50px] z-10 group-hover:-translate-x-12 ">
                <Image
                    src={image}
                    alt={name}
                    className="w-[200px] h-[200px] object-cover rounded-[15px]"
                    width={200}
                    height={200}
                />
            </div>
            <div className="absolute w-[200px] h-[200px] flex justify-end p-5 z-5 group-hover:z-20 transition-opacity duration-[400]">
                <ul className="list-none space-y-4">
                    <li className='cursor-pointer'>
                        <a href={`https://wa.me/91${phoneNo}`} className='cursor-pointer' target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={24} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                        </a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href={emailIdfinal} target="_blank" className='cursor-pointer' rel="noopener noreferrer">
                            <FaEnvelope size={24} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                        </a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href={instagramId} target="_blank" className='cursor-pointer' rel="noopener noreferrer">
                            <FaInstagram size={24} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                        </a>
                    </li>
                    <li className='cursor-pointer'>
                        <a href={linkedinId} target="_blank" className='cursor-pointer' rel="noopener noreferrer">
                            <FaLinkedin size={24} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                        </a>
                    </li>
                </ul>
            </div>

           
        </div>
         {/* Name Title */}
         <span className="w-[200px] mt-[20px]">
         <h1 className={`text-white ${pixelifySans.className} text-lg text-center`}>{name}</h1>
         </span>
         <span className="w-[200px]">
         <h1 className={`text-white ${pixelifySans.className} text-xl text-center`}>{designation}</h1>
         </span>
     </div>
    );
};

export default Teamcards;
