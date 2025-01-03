import React from 'react';
import { FaCar, FaUsers, FaClipboardList, FaTools, FaNewspaper } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className='container mt-4 mx-auto px-4 py-8 space-y-6 md:space-y-12 bg-gray-50'>
      <h2 className='text-2xl md:text-4xl font-bold text-[#32AA27] text-center mb-6 md:mb-12'>About Us</h2>
      
      <div className='bg-white p-6 rounded-lg shadow-md mb-6 md:mb-8'>
        <h3 className='text-xl md:text-3xl font-semibold text-black mb-3 md:mb-4'>Introduction</h3>
        <p className='text-sm md:text-xl text-gray-800 leading-relaxed'>
          Welcome to <span className='font-bold'>The Car Critique!</span> We're excited to have you join our community.
          <span className='font-bold'>The Car Critique!</span> is your go-to destination for everything automotive.
          Whether you're an enthusiast or just curious, we're here to fuel your passion for cars with engaging,
          informative content.
        </p>
      </div>
      
      <div className='bg-white p-6 rounded-lg shadow-md mb-6 md:mb-8'>
        <h3 className='text-xl md:text-3xl font-semibold text-black mb-3 md:mb-4'>Who We Are</h3>
        <p className='text-sm md:text-xl text-gray-800 leading-relaxed'>
          We are a team of car lovers who share an unshakeable bond with all things on four wheels.
          From the latest high-performance machines to timeless classics, we live and breathe the automotive world,
          constantly staying on top of trends and innovations.
        </p>
      </div>
      
      <div className='bg-white p-6 rounded-lg shadow-md mb-6 md:mb-8'>
        <h3 className='text-xl md:text-3xl font-semibold text-black mb-3 md:mb-4'>Our Mission</h3>
        <p className='text-sm md:text-xl text-gray-800 leading-relaxed'>
          At <span className='font-bold'>The Car Critique</span>, our mission is simple: to bring you insightful, engaging, and up-to-date content 
          about the automotive industry. Whether you're a die-hard gearhead, a first-time buyer, or simply 
          interested in the latest models, we've got something for you.
        </p>
      </div>
      
      <div className='bg-white p-6 rounded-lg shadow-md mb-6 md:mb-8'>
        <h3 className='text-xl md:text-3xl font-semibold text-black mb-3 md:mb-4'>What We Offer</h3>
        <ul className='space-y-3 md:space-y-4'>
          <li className='flex items-center text-gray-800 leading-relaxed'>
            <FaClipboardList className='text-[#32AA27] mr-2' />
            <span className='text-sm md:text-xl'>
              <span className='font-bold'>Car Reviews:</span> In-depth and honest reviews of the latest cars, from luxury to budget-friendly options.
            </span>
          </li>
          <li className='flex items-center text-gray-800 leading-relaxed'>
            <FaTools className='text-[#32AA27] mr-2' />
            <span className='text-sm md:text-xl'>
              <span className='font-bold'>Maintenance Tips:</span> Practical, easy-to-follow advice to keep your vehicle running like new.
            </span>
          </li>
          <li className='flex items-center text-gray-800 leading-relaxed'>
            <FaNewspaper className='text-[#32AA27] mr-2' />
            <span className='text-sm md:text-xl'>
              <span className='font-bold'>Industry News :</span> Stay ahead of the curve with the latest trends, updates, and breakthroughs in the automotive world.
            </span>
          </li>
          <li className='flex items-center text-gray-800 leading-relaxed'>
            <FaUsers className='text-[#32AA27] mr-2' />
            <span className='text-sm md:text-xl'>
              <span className='font-bold'>Buying Guides:</span> Expert tips to help you make well-informed decisions on your next vehicle purchase.
            </span>
          </li>
        </ul>
      </div>
      
      <div className='bg-white p-6 rounded-lg shadow-md mb-6 md:mb-8'>
        <h3 className='text-xl md:text-3xl font-semibold text-black mb-3 md:mb-4'>Our Journey</h3>
        <p className='text-sm md:text-xl text-gray-800 leading-relaxed'>
          Founded in 2020, <span className='font-bold'>The Car Critique</span> started as a small passion project, and over time, 
          it has grown into a trusted resource for automotive enthusiasts worldwide.
        </p>
      </div>
      
      <div className='bg-white p-6 rounded-lg shadow-md mb-6 md:mb-8'>
        <h3 className='text-xl md:text-3xl font-semibold text-black mb-3 md:mb-4'>Join Our Community</h3>
        <p className='text-sm md:text-xl text-gray-800 leading-relaxed'>
          We believe the best part of car culture is the community. Join us by following our blog, 
          engaging with us on social media, and sharing your experiences and opinions.
        </p>
      </div>
      
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-xl md:text-3xl font-semibold text-black mb-3 md:mb-4'>Contact Us</h3>
        <p className='text-sm md:text-xl text-gray-800 leading-relaxed'>
          Have a question, suggestion, or just want to say hi? We'd love to hear from you! 
          Drop us a line at <span className='font-bold'>contact@example.com</span>, and we'll get back to you as soon as we can.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;