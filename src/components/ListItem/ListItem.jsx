import React from 'react';

function ListItem({name, code, children}) {

  return (
    <li key={code}>
      <p>{name}</p>
    </li>
  );
}

export default ListItem;