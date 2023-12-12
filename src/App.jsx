import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './styles.css';

function App() {
  const [list, setList] = useState(() => {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      return JSON.parse(storage);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(list));
  }, [list]);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayIndex = new Date().getDay();

  const addTodo = (content) => {
    setList(list.concat({ id: crypto.randomUUID(), content, checked: false }));
  };

  const toggleChecked = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setList(newList);
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <div className="todo--container">
        <div className="form--container">
          <h1 className="form--title">
            Hello, it&apos;s {days[dayIndex]}! Here&apos;s your daily task list.
          </h1>
          <TodoForm addTodo={addTodo} />
        </div>

        <div className="list--container">
          <h1 className="list--title">Tasks</h1>
          {list.length === 0 && 'No task in the list'}
          <TodoList
            toggleChecked={toggleChecked}
            deleteItem={deleteItem}
            list={list}
          />
        </div>
      </div>
    </>
  );
}

export default App;
