"use client"

import { BorderBottom, BorderTop } from "@mui/icons-material";
import React from "react";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={textContainer}>
        <span>{"© FLUXUS'25, IIT Indore"}</span>
        <span style={separatorStyle}>{"•"}</span>
      </div>
      <div className="flex gap-[12px]">
        {/* <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={iconStyle} />
        </a> */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={iconStyle} />
        </a>
        {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={iconStyle} />
        </a> */}
        <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

const iconStyle = {
  fontSize: "22px",
  color: "#000000",
  cursor: "pointer",
};

export default Footer;
