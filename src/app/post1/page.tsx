import React from 'react';
import Image from 'next/image';
import CommentSection from '../component/comments';

const ElectricVehiclesPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>June 15, 2023</span>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span>By Sarah Johnson</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Future of Electric Vehicles
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full mb-8">
        <Image
          src="/assets/e-cars.jpg"
          alt="Electric Vehicles"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          The automotive industry is witnessing a revolutionary transformation with electric vehicles (EVs) leading the charge towards a sustainable future. As we delve into the latest advancements in EV technology, it's clear that we're on the cusp of a new era in transportation.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Technological Breakthroughs
        </h2>
        <p className="text-gray-700 mb-6">
          Recent developments in battery technology have significantly improved the range and performance of electric vehicles. Solid-state batteries, currently in development, promise even greater energy density and faster charging times, potentially eliminating range anxiety altogether.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Infrastructure Development
        </h2>
        <p className="text-gray-700 mb-6">
          The global charging infrastructure is expanding rapidly, with new fast-charging stations being installed worldwide. Smart charging solutions and vehicle-to-grid technology are creating a more integrated and efficient energy ecosystem.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Environmental Impact
        </h2>
        <p className="text-gray-700 mb-6">
          As electricity grids become greener and manufacturing processes more sustainable, the environmental benefits of EVs continue to grow. Manufacturers are increasingly focusing on recyclable materials and circular economy principles in vehicle production.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Market Trends and Consumer Adoption
        </h2>
        <p className="text-gray-700 mb-6">
          With more affordable models entering the market and government incentives supporting adoption, electric vehicles are becoming increasingly accessible to mainstream consumers. Major automakers are committing to all-electric lineups within the next decade.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Looking Ahead
        </h2>
        <p className="text-gray-700 mb-12">
          The future of electric vehicles looks promising, with continuous innovations in technology, increasing consumer acceptance, and strong governmental support worldwide. As we move forward, EVs will play a crucial role in creating a more sustainable transportation ecosystem.
        </p>
      </div>

      {/* Share Section */}
      <div className="border-t border-b border-gray-200 py-6 my-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-[#32AA27] text-white rounded-full hover:bg-[#2a8820] transition-colors">
            Share on Twitter
          </button>
          <button className="px-6 py-2 bg-[#32AA27] text-white rounded-full hover:bg-[#2a8820] transition-colors">
            Share on LinkedIn
          </button>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-gray-50 rounded-xl p-6 mb-12">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
            <p className="text-gray-600">Automotive Technology Journalist</p>
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

export default ElectricVehiclesPost;
