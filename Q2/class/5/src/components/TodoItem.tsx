import React, { useState, useContext } from 'react';
import { Todo } from '../types/TodoTypes';
import { TodoContext } from '../context/TodoContext';
import { Trash2, Edit2, Save, X, CheckCircle2, Circle } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const context = useContext(TodoContext);

  if (!context) return null;

  const { toggleTodo, deleteTodo, updateTodoPriority } = context;

  const handleSaveEdit = () => {
    if (editText.trim()) {
      context.todos = context.todos.map((t) =>
        t.id === todo.id ? { ...t, text: editText.trim() } : t
      );
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
      {/* Edit Mode */}
      {isEditing ? (
        <div className="flex items-center space-x-2 w-full">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow p-1 border rounded"
          />
          <button onClick={handleSaveEdit} className="text-green-500 hover:text-green-700">
            <Save />
          </button>
          <button onClick={() => setIsEditing(false)} className="text-red-500 hover:text-red-700">
            <X />
          </button>
        </div>
      ) : (
        // View Mode
        <div className="flex items-center w-full">
          {/* Completion Toggle */}
          <div
            className="flex items-center space-x-3 flex-grow cursor-pointer"
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.completed ? (
              <CheckCircle2 className="text-green-500" />
            ) : (
              <Circle className="text-gray-400" />
            )}
            <span
              className={`flex-grow ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
          </div>

          {/* Priority Selector */}
          <select
            value={todo.priority}
            onChange={(e) => updateTodoPriority(todo.id, e.target.value as 'low' | 'medium' | 'high')}
            className={`mr-2 p-1 rounded text-xs 
              ${
                todo.priority === 'high'
                  ? 'bg-red-200'
                  : todo.priority === 'medium'
                  ? 'bg-yellow-200'
                  : 'bg-green-200'
              }`}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
