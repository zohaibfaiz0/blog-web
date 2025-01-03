import React from 'react';
import Image from 'next/image';
import CommentSection from '../component/comments';

const AutomotiveLifestylePost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>July 10, 2023</span>
          <span>•</span>
          <span>7 min read</span>
          <span>•</span>
          <span>By Alex Thompson</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Embracing the Automotive Lifestyle
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full mb-8">
        <Image
          src="/assets/auto.jpg"
          alt="Automotive Lifestyle"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          The automotive lifestyle is more than just owning a car; it's a passion that encompasses the thrill of driving, the joy of customization, and the camaraderie of fellow enthusiasts. In this article, we explore what it means to embrace this lifestyle and how it can enrich your life.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          The Thrill of Driving
        </h2>
        <p className="text-gray-700 mb-6">
          For many, driving is an exhilarating experience. Whether it's a scenic road trip or a spirited drive on winding roads, the connection between driver and machine is a core aspect of the automotive lifestyle. Finding the right routes and enjoying the journey is what makes driving special.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Customization and Personalization
        </h2>
        <p className="text-gray-700 mb-6">
          Customizing your vehicle allows you to express your personality and style. From performance upgrades to aesthetic modifications, the possibilities are endless. Engaging in DIY projects or collaborating with professionals can lead to a unique ride that reflects who you are.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Community and Events
        </h2>
        <p className="text-gray-700 mb-6">
          The automotive community is vibrant and welcoming. Car shows, meetups, and track days provide opportunities to connect with like-minded individuals. Sharing experiences, tips, and stories fosters a sense of belonging and camaraderie among enthusiasts.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          The Joy of Maintenance
        </h2>
        <p className="text-gray-700 mb-6">
          Maintaining your vehicle is an integral part of the automotive lifestyle. Understanding your car's mechanics and performing routine maintenance not only keeps your vehicle in top shape but also deepens your appreciation for it. Plus, there's a sense of satisfaction that comes from caring for your own ride.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Exploring the Open Road
        </h2>
        <p className="text-gray-700 mb-12">
          The open road beckons adventurers to explore new destinations. Whether it's a weekend getaway or a cross-country journey, the automotive lifestyle encourages exploration and discovery. Embrace the freedom that comes with driving and create unforgettable memories along the way.
        </p>
      </div>

      {/* Share Section */}
      <div className="border-t border-b border-gray-200 py-6 my-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-[#32AA27] text-white rounded-full hover:bg-[#2a8820] transition-colors">
            Share on Twitter
          </button>
          <button className="px-6 py-2 bg-[# 32AA27] text-white rounded-full hover:bg-[#2a8820] transition-colors">
            Share on LinkedIn
          </button>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-gray-50 rounded-xl p-6 mb-12">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Alex Thompson</h3>
            <p className="text-gray-600">Automotive Lifestyle Enthusiast</p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <CommentSection />
      </div>
    </article>
  );
};

export default AutomotiveLifestylePost;