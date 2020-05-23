import React, { useState } from 'react';

function TodoItem({id, content, completed, onToggle, onDelete, onUpdate}) {
  const [value, setValue] = useState(content);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [inChanging, setInChanging] = useState(false);
  const changeValue = event => {
    setValue(event.target.value);
  }
  const toggleCompleted = event => {
    onToggle(id);
    setIsCompleted(!completed);
  }
  const finishEditing = event => {
    if (event.key && event.key === "Enter") {
      onUpdate(id, value);
      setInChanging(false);
    }
  }
  const getInChange = event => {
    setInChanging(true);
  }
  return (
    <li className={completed ? "completed" : "" || inChanging ? "editing" : ""} onDoubleClick={getInChange}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isCompleted} onChange={toggleCompleted} />
        <label className="label">{value}</label>
        <button className="destroy" onClick={() => onDelete(id)}/>
      </div>
      <input className="edit" value={value} onChange={changeValue} onKeyPress={finishEditing}/>
    </li>
  );
}

export default TodoItem;