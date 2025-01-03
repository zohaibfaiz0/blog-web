'use client'
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <FaPhoneAlt />, 
      title: "Phone", 
      value: "+1 (123) 456-7890" 
    },
    { 
      icon: <FaEnvelope />, 
      title: "Email", 
      value: "contact@example.com" 
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: "Address", 
      value: "123 Main St, Anytown, USA" 
    }
  ];

  return (
    <div className="container mt-4 mx-auto py-16 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#32AA27]">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#32AA27]"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#32AA27]"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#32AA27]"
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-300 rounded h-40 focus:outline-none focus:ring-2 focus:ring-[#32AA27]"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-[#32AA27] text-white py-3 rounded hover:bg-[#4CBF50] transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#32AA27]">Contact Information</h2>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="text-[#32AA27] text-2xl">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-600">{info.title}</p>
                  <p className="font-semibold text-gray-800">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-[#32AA27]">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#32AA27] transition duration-300">
                  <FaInstagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#32AA27] transition duration-300">
                  <FaFacebook size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#32AA27] transition duration-300">
                  <FaGithub size={24} />
                </a>
 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#32AA27] transition duration-300">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;