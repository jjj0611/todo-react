import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoItems, onToggle, onDelete, onUpdate }) {
  return (
    <div className="main">
      <ul className="todo-list">
        {todoItems.map(todoItem =>
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            content={todoItem.content}
            completed={todoItem.completed}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />)}
      </ul>
    </div>
  );
}

export default TodoList;