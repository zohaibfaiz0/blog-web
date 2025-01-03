'use client'
import React from 'react'
import Image from 'next/image'

// Testimonial data
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Davidson",
    role: "Automotive Journalist",
    quote: "The detailed reviews and expert insights have helped me truly understand the performance and features of every car. This blog is an essential resource for any car enthusiast!",
    image: "/assets/carn2.jpg" 
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Car Blogger",
    quote: "With its thorough analysis and unbiased reviews, this blog has become my go-to guide for everything automotive. It covers everything from design to performance with incredible depth!",
    image: "/assets/carn.jpg" 
  }
];

const TestimonialHero = () => {
  // State to manage current testimonial
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  // Function to cycle through testimonials automatically
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % testimonials.length
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentTest = testimonials[currentTestimonial];

  return (
    <div className="relative w-full min-h-[400px] bg-white flex items-center justify-center py-16">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
    {/* Testimonial Text Section */}
    <div className="relative z-10 space-y-6">
      <div className="relative">
        <h1 className="text-4xl font-bold text-gray-800">
          Latest Car Testimonials
        </h1>
       
      </div>
      
          <p className="text-xl md:text-2xl text-gray-800 font-medium italic relative z-20 pl-8">
           " {currentTest.quote} "
          </p>
          
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {currentTest.name}
              </h3>
              <p className="text-gray-600">
                {currentTest.role}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-emerald-600 w-6' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Image Section */}
        <div className="hidden md:block relative">
          <div className="relative w-full h-[400px]">
            <Image 
              src={currentTest.image} 
              alt={`${currentTest.name}'s car`}
              fill
              className="rounded-xl shadow-lg object-cover transition-all duration-500 ease-in-out"
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialHero;