
const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-[60vh] bg-cover bg-center text-white text-center px-5 bg-[url('/images/home/lms.png')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Junior Front-End Web Develpor</h1>
        <p className="text-lg md:text-xl mb-6">Crafting Pixels into Experiences, One Line of Code at a Time.</p>
        <button className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300">Get Started</button>
      </div>
    </div>
  )
}

export default Hero;
