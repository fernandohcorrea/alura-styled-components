import React from 'react';
import Item from './Item';


export default ({extratoLista, ...props}) => {
  
  return (
    <>
      {extratoLista?.updates.map(({ id, type, from, value, date }) => (
        <Item key={id} dataItem={{id, type, from, value, date}} />
      ))}
    </>
  );
}
