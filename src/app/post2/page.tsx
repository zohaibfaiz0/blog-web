import React from 'react';
import Image from 'next/image';
import CommentSection from '../component/comments';

const PerformanceSUVsPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>June 10, 2023</span>
          <span>•</span>
          <span>7 min read</span>
          <span>•</span>
          <span>By Mike Rodriguez</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Performance SUVs: A Comprehensive Guide
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full mb-8">
        <Image
          src="/assets/uvs.jpg"
          alt="Performance SUVs"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Performance SUVs have revolutionized the automotive landscape, offering a perfect blend of luxury, practicality, and exhilarating driving dynamics. This comprehensive guide explores the world of high-performance SUVs that challenge traditional notions of speed and utility.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          The Evolution of Performance SUVs
        </h2>
        <p className="text-gray-700 mb-6">
          Once considered an oxymoron, performance SUVs have emerged as a dominant segment in the automotive market. Brands like Porsche, BMW, and Mercedes-AMG have pioneered this category, proving that utility vehicles can deliver sports car-like performance.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Top Performance SUV Segments
        </h2>
        <ul className="text-gray-700 mb-6 list-disc pl-6">
          <li>Luxury Performance SUVs</li>
          <li>Super SUVs</li>
          <li>Electric Performance SUVs</li>
          <li>Compact Performance Crossovers</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Engineering Marvel: Powertrain Technologies
        </h2>
        <p className="text-gray-700 mb-6">
          Modern performance SUVs employ cutting-edge technologies to deliver exceptional performance:
        </p>
        <ul className="text-gray-700 mb-6 list-disc pl-6">
          <li>Advanced Turbocharging</li>
          <li>Hybrid Powertrain Systems</li>
          <li>Adaptive Suspension Technologies</li>
          <li>Sophisticated All-Wheel Drive Systems</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Top 5 Performance SUVs in 2023
        </h2>
        <ol className="text-gray-700 mb-6 list-decimal pl-6">
          <li>Porsche Cayenne Turbo GT</li>
          <li>BMW X5 M Competition</li>
          <li>Lamborghini Urus</li>
          <li>Mercedes-AMG GLE 63 S</li>
          <li>Audi RS Q8</li>
        </ol>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Future of Performance SUVs
        </h2>
        <p className="text-gray-700 mb-12">
          The future of performance SUVs lies in electrification and advanced driver assistance technologies. Manufacturers are investing heavily in electric and hybrid powertrains that deliver both performance and sustainability.
        </p>
      </div>

      {/* Share Section */}
      <div className="border-t border-b border-gray-200 py-6 my-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
        <div className="flex flex-col sm:flex-row gap-4">
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
            <h3 className="font-semibold text-gray-800">Mike Rodriguez</h3>
            <p className="text-gray-600">Automotive Performance Specialist</p>
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

export default PerformanceSUVsPost;