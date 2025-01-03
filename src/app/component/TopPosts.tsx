import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPostsData = [
  {
    id: 1,
    title: "Car Maintenance and DIY Tips",
    desc: "Keep your ride running smoothly with these essential car maintenance and DIY tips for longevity and performance!",
    author: "Ali Khan",
    image: "/assets/carm.jpg",
    readTime: "6 min read",
    date: "August 20, 2023",
    page: "/post4"
  },
  {
    id: 2,
    title: "Automotive Lifestyle",
    desc: "Celebrating the passion for cars through road trips, car shows, and a vibrant automotive culture.",
    author: "By Alex Thompson",
    image: "/assets/auto.jpg",
    readTime: "7 min read",
    date: "July 10, 2023",
    page: "/post5"
  },
  {
    id: 3,
    title: "Luxury Showdown: Tesla Model S vs. BMW i7",
    desc: "A clash of luxury titans: Tesla Model S and BMW i7, redefining elegance and performance.",
    author: " Emily Carter",
    image: "/assets/i7.jpg",
    readTime: "5 min read",
    date: "June 29, 2023",
    page: "/post6"
  }
];

interface BlogPost {
  id: number;
  title: string;
  desc: string;
  author: string;
  image: string;
  readTime: string;
  date: string;
  page: string;
}

const BlogPostCard: React.FC<BlogPost> = ({
  title,
  desc,
  author,
  image,
  readTime,
  date,
  page
}) => {
  return (
    <Link href={page} className="block">
      <div className='bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full'>
        <div className='relative h-56 w-full'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        <div className='p-5'>
          <div className='flex justify-between items-center mb-3'>
            <span className='text-sm text-gray-500'>{readTime}</span>
            <span className='text-sm text-gray-500'>{date}</span>
          </div>
          <h2 className='text-xl font-bold text-gray-800 mb-2 hover:text-[#32AA27] transition-colors'>
            {title}
          </h2>
          <p className='text-gray-600 line-clamp-3 mb-4'>
            {desc}
          </p>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-gray-600'>By {author}</span>
            <span className='px-4 py-2 bg-[#32AA27] text-white rounded-full hover:bg-[#2a8820] transition-colors'>
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Hero2: React.FC = () => {
  return (
    <section className='w-full bg-gray-50 py-16'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Top Car Posts
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#32AA27] rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
          "Discover the latest in automotive excellence with our top car picks for performance, luxury, and innovation!"          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPostsData.map((post) => (
            <BlogPostCard
              key={post.id}
              {...post}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;