


import Image from 'next/image';

const courses = [
  {
    title: "Web Development Essentials",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    instructor: "John Doe",
    image: "/images/home/web.jpg", // Replace with course image
  },
  {
    title: "Introduction to Graphic Design",
    description: "Explore the principles of design and learn how to create stunning visuals.",
    instructor: "Jane Smith",
    image: "/images/home/graphic.jpg",
  },
  {
    title: "Digital Marketing 101",
    description: "Understand the fundamentals of digital marketing and grow your online presence.",
    instructor: "Mark Johnson",
    image: "/images/home/digital_marketing.jpg",
  },
  // Add more courses as needed
];

const FeaturedCourses = () => {
  return (
    <div className="px-4 py-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-1"
            key={index}
          >
            <Image
              width={200}
              height={200}
              src={course.image}
              alt={course.title}
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{course.description}</p>
              <p className="text-gray-500 italic text-sm">Instructor: {course.instructor}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded transition duration-300 hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
