import React from 'react'
import { 
  IoLogoTwitter, 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoLogoLinkedin 
} from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-[#32AA27] mb-4">
            The Car Critique
            </h2>
            <p className="text-white mb-4">
              Your ultimate destination for automotive insights, reviews, and expert analysis.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-[#32AA27] transition-colors">
                <IoLogoTwitter className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-[#32AA27] transition-colors">
                <IoLogoFacebook className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-[#32AA27] transition-colors">
                <IoLogoInstagram className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-[#32AA27] transition-colors">
                <IoLogoLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

         {/* Quick Links */}
<div className="col-span-1">
  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2">
    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
    <li><a href="#" className="text-white hover:text-gray-300">Reviews</a></li>
    <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
    <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
  </ul>
</div>

{/* Latest Posts */}
<div className="col-span-1">
  <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
  <ul className="space-y-2">
    <li><a href="#" className="text-white hover:text-gray-300">Future of Electric Vehicles</a></li>
    <li><a href="#" className="text-white hover:text-gray-300">Performance SUVs: A Comprehensive Guide</a></li>
    <li><a href="#" className="text-white hover:text-gray-300">Next-Generation Technologies for Sustainable Transportation</a></li>
  </ul>
</div>


          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white"><span className='text-[#32AA27]'>Email:</span> info@carblog.com</li>
              <li className="text-white"><span className='text-[#32AA27]'>Phone:</span> +1 (555) 123-4567</li>
              <li className="text-white"><span className='text-[#32AA27]'>Address:</span> 123 Car Street, Auto City</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white text-center">
          <p className="text-white">
            © 2024 The Car Critique. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer