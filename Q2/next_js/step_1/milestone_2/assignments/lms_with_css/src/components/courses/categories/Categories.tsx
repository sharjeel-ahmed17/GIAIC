import React from 'react';
import './CourseSidebar.css';
import { CategorySelectionProps } from '@/interface/interface';

function Categories : React.FC<CategorySelectionProps>({ categories , onSelectCategory }) {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => onSelectCategory(category)} className="category-button">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
