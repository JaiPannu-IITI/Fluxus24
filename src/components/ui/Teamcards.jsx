import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import frame from "../../../public"
const Teamcards = ({ name, image, phoneNo, emailId, instagramId, linkedinId }) => {
    const emailIdfinal = `mailto:${emailId}`;

    return (
        <div className="relative w-[250px] h-[250px] rounded-[15px] flex justify-center items-center overflow-hidden">
            {/* Image Box */}
            {/* <div className="absolute w-[250px] h-[250px] transition-transform duration-400 ease-in-out hover:translate-x-[-50px] hover:translate-y-[-50px] z-10">
                <img
                    src={image}
                    alt={name}
                    className="w-[250px] h-[250px] object-cover rounded-[15px]"
                />
            </div> */}
            <img 
                src="/frame.jpg" 
                alt="Ice Frame"
                className="absolute w-[300px] h-[300px] object-cover z-10"
            />

            {/* Profile Image */}
            <div className="absolute w-[120px] h-[160px] rounded-[15px] overflow-hidden z-20">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-[15px] border-[3px] border-white"
                />
            </div>

            {/* Contact Icons */}
            <div className="absolute w-[250px] h-[250px] flex justify-end p-5 z-5">
                <ul className="list-none space-y-4">
                    <li>
                        <a href={phoneNo} target="_blank" rel="noopener noreferrer">
                            <FaPhone size={24} className="text-black mb-3 hover:text-red-500 transition-colors" />
                        </a>
                    </li>
                    <li>
                        <a href={emailIdfinal} target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={24} className="text-black mb-3 hover:text-red-500 transition-colors" />
                        </a>
                    </li>
                    <li>
                        <a href={instagramId} target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} className="text-black mb-3 hover:text-red-500 transition-colors" />
                        </a>
                    </li>
                    <li>
                        <a href={linkedinId} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} className="text-black mb-3 hover:text-red-500 transition-colors" />
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
