import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");
  const change = event => {
    setValue(event.target.value);
  }
  const addItem = event => {
    if (event.key && event.key === "Enter") {
      onAdd(value);
      setValue("");
    }
  }
  return (
    <div>
      <input className="new-todo"
             placeholder="할 일을 입력해주세요"
             value={value}
             onChange={change}
             onKeyPress={addItem}
      />
    </div>
  );
}

export default TodoInput;