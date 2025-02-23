import Image from 'next/image';
import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
const Teamcards = ({ name, image, phoneNo, emailId, instagramId, linkedinId }) => {
    const emailIdfinal = `mailto:${emailId}`;

    return (
        <div className="relative w-[250px] h-[250px] rounded-[15px] flex justify-center items-center bg-blue-100 group">
          
            <div className="absolute w-[250px] h-[250px] transition-transform duration-[400] ease-in-out hover:translate-x-[-50px] hover:translate-y-[-50px] z-10 group-hover:-translate-x-12 group-hover:-translate-y-12">
                <Image
                    src={image}
                    alt={name}
                    className="w-[250px] h-[250px] object-cover rounded-[15px]"
                    width={250}
                    height={250}
                />
            </div>
            <div className="absolute w-[250px] h-[250px] flex justify-end p-5 z-5 group-hover:z-20 transition-opacity duration-[400]">
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

            {/* Name Title */}
            <div className="absolute w-[250px] h-[250px] flex items-end pb-2 pl-3 font-[Bebas_Neue] tracking-wide text-lg">
                <h1 className="text-black">{name}</h1>
            </div>
        </div>
    );
};

export default Teamcards;
