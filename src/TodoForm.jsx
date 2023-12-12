import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === '') return;

    addTodo(newItem);
    setNewItem('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form--label" htmlFor="form--input">
        Add a new task
      </label>
      <input
        className="form--input"
        type="text"
        id="form--input"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button className="btn btn--submit" type="submit">
        <span className="material-symbols-outlined">add</span>
      </button>
    </form>
  );
};

export default TodoForm;
