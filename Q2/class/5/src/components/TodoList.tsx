import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from '@/components/TodoItem';

const TodoList: React.FC = () => {
  const context = useContext(TodoContext);

  if (!context) return null;

  const { todos, filter, sortBy, priorityFilter } = context;

  // Apply filtering and sorting
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  }).filter(todo => {
    if (priorityFilter === 'all') return true;
    return todo.priority === priorityFilter;
  });

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
