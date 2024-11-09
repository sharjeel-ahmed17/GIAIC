

'use client';
import React, { useState } from 'react';
import Card from '@/components/courses/card/Card';

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CoursesData {
  [key: string]: Course[];
}

function Courses() {
  const coursesData: CoursesData = {
    'Web Development': [
      {
        id: 1,
        name: 'HTML for Beginners',
        description: 'Learn the basics of HTML and build your first webpage.',
        image: '/images/courses/html.jpg',
      },
      {
        id: 2,
        name: 'CSS Mastery',
        description: 'Master CSS to create visually stunning websites.',
        image: '/images/courses/css.jpg',
      },
    ],
    'Data Science': [
      {
        id: 1,
        name: 'Python for Data Science',
        description: 'Learn Python and apply it to data analysis tasks.',
        image: '/images/courses/python.png',
      },
      {
        id: 2,
        name: 'Machine Learning Basics',
        description: 'An introduction to machine learning concepts and algorithms.',
        image: '/images/courses/ml.png',
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<keyof CoursesData>('Web Development');

  const handleCategorySelect = (category: keyof CoursesData) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <button
            className="bg-blue-500 text-white py-2 px-4 mb-2 rounded transition hover:bg-blue-700"
            onClick={() => handleCategorySelect('Web Development')}
          >
            Web Development
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 mb-2 rounded transition hover:bg-blue-700"
            onClick={() => handleCategorySelect('Data Science')}
          >
            Data Science
          </button>
        </div>

        <div className="md:w-3/4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">{selectedCategory} Courses</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coursesData[selectedCategory].map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
