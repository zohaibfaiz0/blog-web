import React from 'react';
import Image from 'next/image';
import CommentSection from '../component/comments';

const CarMaintenancePost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span>August 20, 2023</span>
<span>•</span>
<span>6 min read</span>
<span>•</span>
<span>By Ali Khan</span>

        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Car Maintenance and DIY Tips
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full mb-8">
        <Image
          src="/assets/carm.jpg"
          alt="Car Maintenance"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Regular car maintenance is essential for ensuring the longevity and performance of your vehicle. In this article, we will explore some practical DIY tips that can help you keep your car in top shape without breaking the bank.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Basic Maintenance Checks
        </h2>
        <p className="text-gray-700 mb-6">
          Performing regular checks on your car can prevent major issues down the line. Key areas to inspect include oil levels, tire pressure, and brake fluid. Make it a habit to check these components monthly.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Changing Your Oil
        </h2>
        <p className="text-gray-700 mb-6">
          Changing your oil is one of the most important maintenance tasks. Depending on your vehicle, you may need to change the oil every 3,000 to 7,500 miles. Always refer to your owners manual for specific recommendations.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Tire Maintenance
        </h2>
        <p className="text-gray-700 mb-6">
          Keeping your tires properly inflated and rotated can extend their lifespan and improve fuel efficiency. Check your tire pressure regularly and rotate your tires every 5,000 to 7,500 miles.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Battery Care
        </h2>
        <p className="text-gray-700 mb-6">
          A well-maintained battery is crucial for your cars performance. Clean any corrosion from the terminals and ensure that the battery is securely mounted. If your battery is more than three years old, consider having it tested.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          DIY Repairs
        </h2>
        <p className="text-gray-700 mb-12">
          Many minor repairs can be done at home with the right tools and knowledge. From replacing wiper blades to changing air filters, there are plenty of resources available online to guide you through the process.
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

export default CarMaintenancePost;
