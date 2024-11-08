
import Image from 'next/image';
import './FeaturedCourses.css';
const courses = [
  {
    title: "Web Development Essentials",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    instructor: "John Doe",
    image: "https://via.placeholder.com/400x200", // Replace with course image
  },
  {
    title: "Introduction to Graphic Design",
    description: "Explore the principles of design and learn how to create stunning visuals.",
    instructor: "Jane Smith",
    image: "https://via.placeholder.com/400x200",
  },
  {
    title: "Digital Marketing 101",
    description: "Understand the fundamentals of digital marketing and grow your online presence.",
    instructor: "Mark Johnson",
    image: "https://via.placeholder.com/400x200",
  },
  // Add more courses as needed
];

const FeaturedCourses = () => {
  return (
    <div className="featured-courses-container">
    <h2>Our Services</h2>
    <div className="courses-grid">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <Image width={200} height={200} src={course.image} alt={course.title} className="course-image" />
          <div className="course-details">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className="instructor">Instructor: {course.instructor}</p>
            <button className="view-details-button">View Details</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default FeaturedCourses
