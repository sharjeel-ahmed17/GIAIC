
import Image from 'next/image';
import './CourseCard.css';

import { CardProps } from '@/interface/interface';
const Card: React.FC<CardProps>= ({ course }) =>{
  return (
    <div className="course-card">
      <Image width={200} height={200} src={course.image} alt={course.name} className="course-image" />
      <div className="course-info">
        <h3 className="course-name">{course.name}</h3>
        <p className="course-description">{course.description}</p>
        <button className="course-button">View Details</button>
      </div>
    </div>
  );
}

export default Card;



