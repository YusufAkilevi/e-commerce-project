import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-12 ">
          <span className="text-xl font-bold">Futuristic Shop</span>
        </div>
        <div className="mb-5">
          <p className="text-center mb-3">PAYMENT METHODS</p>
          <FontAwesomeIcon icon={faCcVisa} size="2x" className="ml-2" />
          <FontAwesomeIcon icon={faCcMastercard} size="2x" className="ml-2" />
          <FontAwesomeIcon icon={faCcPaypal} size="2x" className="ml-2" />
        </div>

        <div>
          <p>FOLLOW US</p>
          <a
            href="/"
            className="mr-4 hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="/"
            className="mr-4 hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="/"
            className="mr-4 hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/thefuturisticshop/"
            className="mr-4 hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="py-2">
        <div className="container mx-auto text-center text-sm">
          <p className="mb-3">
            &copy; {new Date().getFullYear()} Futuristic Shop. All Rights
            Reserved.
          </p>
          <p>ADDRESS: 123 Main St, City, Country | PHONE: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
