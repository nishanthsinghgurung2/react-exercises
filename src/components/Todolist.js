import React, { useState } from 'react';

const Todolist = () => {
  const [todoListItems, setTodoListItems] = useState([]);
  const [itemTobeAdded, setItemTobeAdded] = useState('');

  const handleChange = (e) => {
    console.log('e.target.value...', e.target.value);
    setItemTobeAdded(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('handleSubmit....');
    e.preventDefault();
    setTodoListItems([...todoListItems, itemTobeAdded]);
  };

  const removeItem = (e) => {
    const updatedItemsList = todoListItems.filter(todoListItem => todoListItem!== e.target.name);
    setTodoListItems(updatedItemsList);
  }
  console.log('todoListItems....', todoListItems);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="new-item" type="text" onBlur={handleChange} />
        <button data-testid="add-item-btn">Add Todo Item</button>
      </form>
      {todoListItems.length > 0 && todoListItems.map((item, index) => 
        <div data-testid={item} key={item}>{item}   <button data-testid={`${item}${index}`} name={item} onClick={removeItem}>Remove</button></div>
      )}
    </div>
  );
};

export default Todolist;