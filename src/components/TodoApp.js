import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoCounter from './TodoCounter';

function TodoApp() {
  const [todoItems, setTodoItems] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [selected, setSelected] = useState("all");

  const onAdd = (content) => {
    setTodoItems([...todoItems, { id: nextId, content: content, completed: false }]);
    setNextId(nextId + 1);
  }

  const onDelete = id => {
    setTodoItems(todoItems.filter(todo => todo.id !== id));
  }

  const onUpdate = (id, content) => {
    const todos = todoItems.map(todo => todo.id === id ? {
      id: todo.id,
      content: content,
      completed: todo.completed
    } : todo);
    setTodoItems(todos);
  }

  const onToggle = (id) => {
    const todos = todoItems.map(todo => todo.id === id ? {
      id: todo.id,
      content: todo.content,
      completed: !todo.completed
    } : todo);
    setTodoItems(todos);
  }

  const onSelect = isSelected => {
    setSelected(isSelected);
    console.log(isSelected);
  }

  const selectedTodoItem = () => {
    switch (selected) {
      case "active":
        return todoItems.filter(todo => todo.completed === false);
      case "completed":
        return todoItems.filter(todo => todo.completed === true);
    }
    return todoItems;
  }

  return (
    <section className="todoapp">
      <h1>TODOS</h1>
      <TodoInput onAdd={onAdd}/>
      <TodoList todoItems={selectedTodoItem()}
                onToggle={onToggle}
                onDelete={onDelete}
                onUpdate={onUpdate}/>
      <TodoCounter todoItems={selectedTodoItem()} selected={selected} onSelect={onSelect}/>
    </section>
  );
}

export default TodoApp;