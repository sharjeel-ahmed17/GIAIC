export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
    priority: 'low' | 'medium' | 'high';
    dueDate: string | null;
  }
  
  export type FilterOptions = 'all' | 'active' | 'completed';
  export type SortOptions = 'default' | 'date-asc' | 'date-desc' | 'priority';
  export type PriorityFilterOptions = 'all' | 'low' | 'medium' | 'high';
  
  export interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    updateTodoPriority: (id: number, priority: 'low' | 'medium' | 'high') => void;
    setTodoDueDate: (id: number, dueDate: string) => void;
    setFilter: (filter: FilterOptions) => void;
    setSortBy: (sortBy: SortOptions) => void;
    setPriorityFilter: (priority: PriorityFilterOptions) => void;
    filter: FilterOptions;
    sortBy: SortOptions;
    priorityFilter: PriorityFilterOptions;
  }
  