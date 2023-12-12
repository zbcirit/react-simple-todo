import TodoItem from './TodoItem';

const TodoList = ({ list, toggleChecked, deleteItem }) => {
  return (
    <ul className="list">
      {list.map((item) => {
        return (
          <TodoItem
            key={item.id}
            {...item}
            toggleChecked={toggleChecked}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
