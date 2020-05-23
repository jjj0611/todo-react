import React from 'react';
import Filter from './Filter.js';

function TodoCounter({todoItems, selected, onSelect}) {
  const filters = [{type:"all", name:"전체보기"}, {type:"active", name:"해야할 일"}, {type:"completed", name:"완료한 일"}];
  return (
    <div className="count-container">
      <span className="todo-count">총 <strong>{todoItems.length}</strong> 개</span>
      <ul className="filters">
        {filters.map(filter =>
          <Filter
            selected={selected}
            onSelect={onSelect}
            type={filter.type}
            name={filter.name}
          />
        )}
      </ul>
    </div>
  );
}

export default TodoCounter;