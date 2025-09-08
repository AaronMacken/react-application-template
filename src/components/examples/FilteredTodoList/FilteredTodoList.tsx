import { useState } from 'react';

const TODOS = ['Buy groceries', 'Walk the dog', 'Read a book'];

type FormattedTodos = {
  todo: string;
  id: string;
  isCompleted: boolean;
}[];

const formatTodos = (todos: string[]) => {
  return todos.map((todo, index) => ({
    todo,
    id: `${index}-${todo.split(' ')[0]}`,
    isCompleted: false
  }));
};

type TodosProps = {
  todos: FormattedTodos;
  onClick: (id: string) => void;
  onRemove: (id: string) => void;
};

const Todos = ({
  todos,
  onClick: handleClick,
  onRemove: handleRemove
}: TodosProps) => {
  return todos.map(({ id, isCompleted, todo }) => (
    <li>
      <button
        style={{ opacity: isCompleted ? 0.5 : 1 }}
        type="button"
        onClick={() => handleClick(id)}
      >
        {todo}
      </button>
      <button type="button" onClick={() => handleRemove(id)}>
        X
      </button>
    </li>
  ));
};

type FilteredTodoListProps = {
  todos: string[];
};

const FilteredTodoList = ({ todos = TODOS }: FilteredTodoListProps) => {
  const [currentTodos, setCurrentTodos] = useState(formatTodos(todos));
  const [addTodoInput, setAddTodoInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    const updatedTodos = [
      ...currentTodos,
      {
        todo: addTodoInput,
        isCompleted: false,
        id: `${currentTodos.length}-${addTodoInput.split(' ')[0]}`
      }
    ];

    setCurrentTodos(updatedTodos);
  };

  const removeTodo = (id: string) => {
    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);

    setCurrentTodos(updatedTodos);
  };

  const handleTodoClick = (id: string) => {
    const updatedTodos = currentTodos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }

      return todo;
    });

    setCurrentTodos(updatedTodos);
  };

  const getFilteredTodos = () => {
    if (filter === 'all') {
      return currentTodos;
    }

    const shouldReturnCompletedTodos = filter === 'completed';

    return currentTodos.filter(({ isCompleted }) =>
      shouldReturnCompletedTodos ? isCompleted : !isCompleted
    );
  };

  const filteredTodos = getFilteredTodos();

  return (
    <>
      <h1>Add Todo</h1>
      <input
        type="text"
        value={addTodoInput}
        onChange={({ target: { value } }) => setAddTodoInput(value)}
      />
      <button type="button" onClick={addTodo}>
        Add
      </button>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
      <ul>
        <Todos
          todos={filteredTodos}
          onClick={handleTodoClick}
          onRemove={removeTodo}
        />
      </ul>
    </>
  );
};

export default FilteredTodoList;
