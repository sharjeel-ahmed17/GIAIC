'use client';
import React from 'react';
import TodoProvider from '@/context/TodoContext';
import TodoInput from '@/components/TodoInput';
import Filters from '@/components/FIlters';
import TodoList from '@/components/TodoList';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo List</h1>
        <TodoInput />
        <Filters />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
