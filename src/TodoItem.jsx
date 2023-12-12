const TodoItem = ({ id, content, checked, toggleChecked, deleteItem }) => {
  return (
    <li className="list--item">
      <label className={`list--label ${checked ? 'strike' : ''}`} htmlFor={id}>
        <input
          className="list--input"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={() => toggleChecked(id)}
        />
        {content}
      </label>
      <button className="btn btn--remove" onClick={() => deleteItem(id)}>
        <span className="material-symbols-outlined">delete</span>
      </button>
    </li>
  );
};

export default TodoItem;
