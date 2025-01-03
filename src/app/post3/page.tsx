import React from 'react';
import Image from 'next/image';
import CommentSection from '../component/comments';

const SustainableTransportationPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>June 5, 2023</span>
          <span>•</span>
          <span>6 min read</span>
          <span>•</span>
          <span>By Emily Chen</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Next-Generation Technologies for Sustainable Transportation
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full mb-8">
        <Image
          src="/assets/etrain.jpg"
          alt="Sustainable Transportation Technologies"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <p className="text-base md:text-lg text-gray-700 mb-6">
          As the world grapples with climate change and environmental challenges, the transportation sector is undergoing a radical transformation. Innovative technologies are emerging that promise to revolutionize how we move, offering sustainable, efficient, and intelligent mobility solutions.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Electric and Hydrogen Mobility
        </h2>
        <p className="text-gray-700 mb-6">
          Beyond traditional electric vehicles, the future of sustainable transportation includes advanced hydrogen fuel cell technologies. These zero-emission vehicles offer longer ranges and faster refueling times compared to battery electric vehicles, presenting a promising alternative for long-distance and heavy-duty transportation.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Autonomous and Connected Vehicles
        </h2>
        <p className="text-gray-700 mb-6">
          Artificial Intelligence and machine learning are transforming transportation through autonomous vehicle technologies. These intelligent systems promise to:
        </p>
        <ul className="text-gray-700 mb-6 list-disc pl-6">
          <li>Reduce traffic congestion</li>
          <li>Minimize accident rates</li>
          <li>Optimize route efficiency</li>
          <li>Reduce carbon emissions</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Smart Public Transportation
        </h2>
        <p className="text-gray-700 mb-6">
          Urban mobility is being reimagined through integrated smart transportation systems. Key innovations include:
        </p>
        <ul className="text-gray-700 mb-6 list-disc pl-6">
          <li>AI-powered traffic management</li>
          <li>Mobility-as-a-Service (MaaS) platforms</li>
          <li>Electric and autonomous public transit</li>
          <li>Integrated multi-modal transportation networks</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Sustainable Infrastructure
        </h2>
        <p className="text-gray-700 mb-6">
          The development of sustainable transportation goes beyond vehicles. Critical infrastructure innovations include:
        </p>
        <ul className="text-gray-700 mb-6 list-disc pl-6">
          <li>Renewable energy charging stations</li>
          <li>Smart grid integration</li>
          <li>Recycled and eco-friendly road materials</li>
          <li>Urban design for pedestrian and cyclist mobility</li>
        </ul>

 <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Emerging Technologies
        </h2>
        <p className="text-gray-700 mb-6">
          Cutting-edge technologies on the horizon include:
        </p>
        <ul className="text-gray-700 mb-6 list-disc pl-6">
          <li>Hyperloop transportation systems</li>
          <li>Flying electric vehicles</li>
          <li>Quantum computing for transportation optimization</li>
          <li>Advanced battery and energy storage solutions</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          The Road Ahead
        </h2>
        <p className="text-gray-700 mb-12">
          The future of sustainable transportation is not just about technological innovation, but about creating holistic, integrated mobility ecosystems that prioritize environmental sustainability, efficiency, and human-centric design.
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
            <h3 className="font-semibold text-gray-800">Emily Chen</h3>
            <p className="text-gray-600">Sustainable Transportation Researcher</p>
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

export default SustainableTransportationPost;
