import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPostsData = [
  {
    id: 1,
    title: "Future of Electric Vehicles",
    desc: "Exploring the latest advancements in electric vehicle technology and their impact on the automotive industry.",
    author: "Sarah Johnson",
    image: "/assets/e-cars.jpg",
    readTime: "5 min read",
    date: "June 15, 2023",
    page: "/post1"
  },
  {
    id: 2,
    title: "Performance SUVs: A Comprehensive Guide",
    desc: "Diving deep into the world of high-performance SUVs that blend luxury, speed, and practicality.",
    author: "Mike Rodriguez",
    image: "/assets/uvs.jpg",
    readTime: "7 min read",
    date: "June 10, 2023",
    page: "/post2         "
  },
  {
    id: 3,
    title: "Next-Generation Technologies for Sustainable Transportation",
    desc: "An in-depth look at innovative green technologies revolutionizing the automotive landscape.",
    author: "Emily Chen",
    image: "/assets/etrain.jpg",
    readTime: "6 min read",
    date: "June 5, 2023",
    page: "/post3"
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
              Latest Car Blog Posts
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#32AA27] rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
            Discover insightful articles about automotive trends, technology, and industry innovations.
          </p>
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