import Image from 'next/image';
import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
    subsets: ['latin'], // Specify the required subsets
    weight: ['400', '700'], // Specify required font weights
    display: 'swap', // Use 'swap' for better font rendering
});
const Teamcards = ({ name, image, phoneNo, emailId, instagramId, linkedinId, designation }) => {
    const emailIdfinal = `mailto:${emailId}`;

    return (
        <div className='flex flex-col w-[230px]'>
            <div className="flex flex-col pl-[15px] pt-8 rounded-md h-[310px] w-[230px] z-20" style={{ backgroundImage: "url('/images/frame4.png')", backgroundColor: "black", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="relative w-[200px] h-[200px] rounded-[15px] flex justify-center items-center bg-blue-100 group">

                    <div className="absolute w-[200px] h-[200px] z-10">
                        <Image
                            src={image}
                            alt={name}
                            className="w-[200px] h-[200px] object-cover rounded-[3px] pt"
                            width={200}
                            height={200}
                        />
                    </div>


                </div>
                {/* Name Title */}
                <span className="w-[200px] mt-[15px]">
                    <h1 className={`text-white ${pixelifySans.className} text-lg text-center`}>{name}</h1>
                </span>
                <span className="w-[200px]">
                    <h1 className={`text-white ${pixelifySans.className} text-md text-center`}>{designation}</h1>
                </span>
            </div>

            <div className="flex flex-row bg-[#e3e4e7] h-[36px] pt-[0.65rem] px-6 rounded-md relative bottom-2 z-10 justify-center gap-5">
                <a href={`https://wa.me/91${phoneNo}`} className='cursor-pointer' target="_blank" rel="noopener noreferrer">
                    <span>
                        <FaWhatsapp size={20} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                    </span>
                </a>
                <a href={emailIdfinal} target="_blank" className='cursor-pointer' rel="noopener noreferrer">
                    <span>
                        <FaEnvelope size={20} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                    </span>
                </a>
                <a href={instagramId} target="_blank" className='cursor-pointer' rel="noopener noreferrer">
                    <span>
                        <FaInstagram size={20} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                    </span>
                </a>
                <a href={linkedinId} target="_blank" className='cursor-pointer' rel="noopener noreferrer">
                    <span>
                        <FaLinkedin size={20} className="text-black mb-3 hover:text-blue-800 transition-colors" />
                    </span>
                </a>

            </div>
        </div>
    );
};

export default Teamcards;
