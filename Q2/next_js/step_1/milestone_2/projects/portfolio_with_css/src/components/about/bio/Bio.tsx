import Image from 'next/image'
import React from 'react'
import './bio.css'
const Bio = () => {
  return (
    <section className="hero-section">
    <div className="hero-image">
      <Image width={200} height={200} src="/images/home/web.jpg" alt="Hero Image" />
    </div>
    <div className="hero-content">
      <h1>Welcome to Our Website</h1>
      <p>
        Discover amazing products and services tailored to your needs. We provide
        high-quality solutions to enhance your experience.
      </p>
      <a href="#learn-more" className="hero-btn">
        Learn More
      </a>
    </div>
  </section>
  
  )
}

export default Bio;
