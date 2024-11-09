// import Image from 'next/image'
// import React from 'react'
// import './bio.css'
// const Bio = () => {
//   return (
//     <section className="hero-section">
//     <div className="hero-image">
//       <Image width={200} height={200} src="/images/home/web.jpg" alt="Hero Image" />
//     </div>
//     <div className="hero-content">
//       <h1>Welcome to Our Website</h1>
//       <p>
//         Discover amazing products and services tailored to your needs. We provide
//         high-quality solutions to enhance your experience.
//       </p>
//       <a href="#learn-more" className="hero-btn">
//         Learn More
//       </a>
//     </div>
//   </section>
  
//   )
// }

// export default Bio;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Bio = () => {
  return (
    <section className="flex w-4/5 bg-white shadow-lg rounded-lg mx-auto my-5 overflow-hidden flex-col md:flex-row">
      <HeroImage />
      <HeroContent />
    </section>
  );
};

const HeroImage = () => (
  <div className="flex-1">
    <Image 
      width={200} 
      height={200} 
      src="/images/home/web.jpg" 
      alt="Hero Image" 
      className="w-full h-full object-cover" 
    />
  </div>
);

const HeroContent = () => (
  <div className="flex-1 p-8 flex flex-col justify-center text-gray-800">
    <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
    <p className="text-lg mb-6 leading-relaxed">
      Discover amazing products and services tailored to your needs. We provide high-quality solutions to enhance your experience.
    </p>
    <Link href="#learn-more" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700">
      Learn More
    </Link>
  </div>
);

export default Bio;
