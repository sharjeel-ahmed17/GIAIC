
import './CourseCard.css';

function Card({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.name} className="course-image" />
      <div className="course-info">
        <h3 className="course-name">{course.name}</h3>
        <p className="course-description">{course.description}</p>
        <button className="course-button">View Details</button>
      </div>
    </div>
  );
}

export default Card;



