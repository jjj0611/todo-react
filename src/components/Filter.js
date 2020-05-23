import React from 'react';

function Filter({selected, type, name, onSelect}) {
  const generateClassName = () => {
    return type + (selected === type ? " selected" : "");
  }
  const onClickHandler = event => {
    onSelect(type);
  }
  return (
    <li>
      <a className={generateClassName()} href={`#/${type}`} onClick={onClickHandler}>{name}</a>
    </li>
  );
}

export default Filter;