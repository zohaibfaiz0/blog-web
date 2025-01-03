import React from 'react';
import Image from 'next/image';
import CommentSection from '../component/comments';

const LuxuryShowdownPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>June 29, 2023</span>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span>By Emily Carter</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Luxury Showdown: Tesla Model S vs. BMW i7
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full mb-8">
        <Image
          src="/assets/i7.jpg"
          alt="Tesla Model S vs BMW i7"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          The Tesla Model S and BMW i7 are two of the most luxurious electric vehicles on the market today. Each offers a unique blend of performance, technology, and comfort, making them top contenders in the luxury EV segment. In this article, we will compare these two remarkable vehicles across several key aspects.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Pricing and Variants
        </h2>
        <p className="text-gray-700 mb-6">
          The Tesla Model S starts at a competitive price for a luxury EV, with various configurations available, including the high-performance Plaid variant. In contrast, the BMW i7 is positioned as a premium luxury vehicle with a higher starting MSRP, offering various trims that focus on comfort and advanced technology.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Performance
        </h2>
        <p className="text-gray-700 mb-6">
          The Tesla Model S is known for its impressive acceleration, with the Plaid variant achieving 0-60 mph in as little as 2.1 seconds and a top speed of 168 mph. It features all-wheel drive with dual motors for enhanced performance. The BMW i7, while not as quick, still offers a respectable 0-60 mph time of approximately 4.5 seconds and a top speed limited to around 149 mph, focusing more on a smooth and comfortable ride.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Interior and Comfort
        </h2>
        <p className="text-gray-700 mb-6">
          Inside, the Tesla Model S boasts a minimalist design with a large touchscreen interface that controls most of the vehicles functions. The spacious cabin is designed for comfort, but some may find the lack of traditional controls a drawback. The BMW i7, on the other hand, offers a more traditional luxury experience with high-quality materials, advanced ambient lighting, and a focus on passenger comfort, making it an excellent choice for those who prioritize a plush interior.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Technology and Features
        </h2>
        <p className="text-gray-700 mb-6">
          Teslas Autopilot and Full Self-Driving capabilities are among the most advanced driver-assistance systems available, providing a glimpse into the future of autonomous driving. The BMW i7 also features cutting-edge technology, including a sophisticated infotainment system and various driver-assistance features, but it leans more towards a traditional luxury vehicle experience.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Charging and Range
        </h2>
        <p className="text-gray-700 mb-12">
          The Tesla Model S benefits from an extensive Supercharger network, allowing for convenient long-distance travel. It offers an impressive range, making it suitable for road trips. The BMW i7, while having a respectable range, may not have the same level of charging infrastructure as Tesla, but it supports fast charging options that can replenish the battery quickly. Both vehicles are designed to minimize range anxiety, but the Teslas network gives it an edge for frequent long-distance drivers.
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Conclusion
        </h2>
        <p className="text-gray-700 mb-6">
          Ultimately, the choice between the Tesla Model S and BMW i7 comes down to personal preference. If you prioritize performance and cutting-edge technology, the Model S may be the better option. However, if you value traditional luxury, comfort, and a more refined interior, the BMW i7 could be the ideal choice. Both vehicles represent the future of electric luxury, each with its unique strengths and appeal.
        </p>
      </div>

      {/* Comment Section */}
      <CommentSection />
    </article>
  );
};

export default LuxuryShowdownPost;
