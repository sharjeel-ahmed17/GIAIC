import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Filters: React.FC = () => {
  const context = useContext(TodoContext);

  if (!context) return null;

  const { filter, setFilter, sortBy, setSortBy, priorityFilter, setPriorityFilter } = context;

  return (
    <div className="flex justify-between mb-4 space-x-2">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as any)}
        className="p-2 border rounded flex-grow"
      >
        <option value="all">All Todos</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as any)}
        className="p-2 border rounded flex-grow"
      >
        <option value="default">Default</option>
        <option value="date-asc">Date (Oldest)</option>
        <option value="date-desc">Date (Newest)</option>
        <option value="priority">Priority</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value as any)}
        className="p-2 border rounded flex-grow"
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default Filters;
