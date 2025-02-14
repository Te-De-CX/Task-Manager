import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition duration-300"
                >
                  Tasks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition duration-300"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition duration-300"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-300 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-slate-300">Email: support@gotasklist.com</li>
              <li className="text-slate-300">Phone: +1 (123) 456-7890</li>
              <li className="text-slate-300">
                Address: 123 Task Street, Productivity City
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-300 mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-300">
            &copy; {new Date().getFullYear()} GoTaskList. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;