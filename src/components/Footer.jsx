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
        <a href="https://www.instagram.com/fluxus_iit_indore" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="https://www.youtube.com/@fluxusiitindore" target="_blank" rel="noopener noreferrer">
          <FaYoutube style={iconStyle} />
        </a>
        {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={iconStyle} />
        </a> */}
        <a href="https://www.linkedin.com/company/fluxus---iit-indore/mycompany/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

// Styling for the components
const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  color: "#000000",
  // fontFamily: "Arial, sans-serif",
  fontSize: "22px",
  fontWeight: "bold",
  letterSpacing: "2px",
  backgroundColor: "#F5F0EA",
  borderTop: "2px dashed #c0a686",
  borderBottom: "2px dashed #c0a686",
};

const textContainer = {
  display: "flex",
  alignItems: "center",
};

const separatorStyle = {
  margin: "0 5px",
};

const socialIconsStyle = {
  display: "flex",
  gap: "12px",
};

const iconStyle = {
  fontSize: "22px",
  color: "#000000",
  cursor: "pointer",
};

export default Footer;