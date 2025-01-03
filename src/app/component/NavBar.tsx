'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Desktop & Laptop Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-extrabold hover:text-[#32AA27] transition-colors duration-500 ease-in-out">The Car Critique</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
  <div className="flex items-center border-b border-gray-300 focus-within:border-green-500 transition-colors duration-300 w-64">
    <input 
      type="text" 
      name="search" 
      placeholder="Search articles..." 
      className='w-full py-2 text-gray-700 placeholder-gray-500 outline-none'
    />
    <button 
      type="submit" 
      className='text-gray-500 hover:text-[#32AA27] transition-colors'
    >
      <IoSearchOutline className="text-2xl" />
    </button>
  </div>
  
  <ul className="flex items-center space-x-8">
    <Link href="/" className="hover:text-green-600 text-gray-600 font-bold border-b-2 border-transparent hover:border-green-600 cursor-pointer transition-colors duration-300 ease-in-out">
      Home
    </Link>
    <Link href="/about" className="hover:text-[#32AA27] text-gray-600 font-bold border-b-2 border-transparent hover:border-green-600 cursor-pointer transition-colors duration-300 ease-in-out">
      About
    </Link>
    <Link href="/contact" className="hover:text-[#32AA27] text-gray-600 font-bold border-b-2 border-transparent hover:border-green-600 cursor-pointer transition-colors duration-300 ease-in-out">
      Contact
    </Link>
  </ul>
  <Link href="/signUp">
  <button className="bg-white text-black border font-bold border-black px-4 py-2 rounded-md hover:text-white hover:border-white hover:bg-[#32AA27] transition-colors">
    Get Started
  </button>
  </Link>
</div>

 {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
      <div className="w-6 h-6 relative">
      <span className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
      <span className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out top-2.5 ${isOpen ? 'opacity-0' : ''}`} />
      <span className={`absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out top-5 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
      </div>
    </button>
    </div>
   </div>
</div>
{/* Mobile Menu */}
<div 
  className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
>
  <div className="px-2 pt-2 pb-3 space-y-3 bg-white">
    {/* Search Bar */}
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden mx-2">
      <input 
        type="text" 
        name="search" 
        placeholder="Search articles..." 
        className='w-full px-4 py-2 text-gray-700 placeholder-gray-500 outline-none'
      />
      <button 
        type="submit" 
        className='px-3 text-gray-500 hover:text-green-500 transition-colors'
      >
        <IoSearchOutline className="text-xl" />
      </button>
    </div>

    <Link href="/" className="block px-3 py-2 text-gray-600 font-bold hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
      Home
    </Link>
    <Link href="/about" className="block px-3 py-2 text-gray-600 font-bold hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
      About
    </Link>
    <Link href="/contact" className="block px-3 py-2 text-gray-600 font-bold hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
      Contact
    </Link>
    <Link href="/signUp" className="block px-3 py-2 text-gray-600 font-bold hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-300">
      Get Started
    </Link>
    
  </div>
</div>
    </nav>
  );
};

export default NavBar;