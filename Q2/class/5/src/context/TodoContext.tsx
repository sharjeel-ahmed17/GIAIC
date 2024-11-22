
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Todo, TodoContextType, FilterOptions, SortOptions, PriorityFilterOptions } from '../types/TodoTypes';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterOptions>('all');
  const [sortBy, setSortBy] = useState<SortOptions>('default');
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilterOptions>('all');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      priority: 'medium',
      dueDate: null,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodoPriority = (id: number, priority: 'low' | 'medium' | 'high') => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  const setTodoDueDate = (id: number, dueDate: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, dueDate } : todo
    ));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateTodoPriority,
        setTodoDueDate,
        setFilter,
        setSortBy,
        setPriorityFilter,
        filter,
        sortBy,
        priorityFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
