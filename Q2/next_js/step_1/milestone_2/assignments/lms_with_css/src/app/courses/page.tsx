'use client'
import React, { useState } from 'react';
// import CourseCard from './CourseCard';
import Card from '@/components/courses/card/Card';
import './CoursesPage.css';

function Courses() {
  // Sample course data
  const coursesData = {
    'Web Development': [
      {
        id: 1,
        name: 'HTML for Beginners',
        description: 'Learn the basics of HTML and build your first webpage.',
        image: 'https://via.placeholder.com/300x180?text=HTML'
      },
      {
        id: 2,
        name: 'CSS Mastery',
        description: 'Master CSS to create visually stunning websites.',
        image: 'https://via.placeholder.com/300x180?text=CSS'
      }
    ],
    'Data Science': [
      {
        id: 1,
        name: 'Python for Data Science',
        description: 'Learn Python and apply it to data analysis tasks.',
        image: 'https://via.placeholder.com/300x180?text=Python'
      },
      {
        id: 2,
        name: 'Machine Learning Basics',
        description: 'An introduction to machine learning concepts and algorithms.',
        image: 'https://via.placeholder.com/300x180?text=ML'
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('Web Development');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="courses-page">
      <div className="sidebar">
        <h3 className="sidebar-title">Categories</h3>
        <button className="category-button" onClick={() => handleCategorySelect('Web Development')}>Web Development </button> 
        <button className="category-button" onClick={() => handleCategorySelect('Data Science')}>Data Science</button>
      </div>
      
      <div className="content">
        <h2>{selectedCategory} Courses</h2>
        <div className="course-cards-container">
          {coursesData[selectedCategory].map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;

