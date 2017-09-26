import React from 'react';

const ListItem = (props) => (
  <div>
  <span>{props.item.itemname}</span>
  <span> (qty: {props.item.quantity})</span>
  <span> 
  <button name="remove" onClick={props.removeItem}>Remove</button>
  </span>
  </div>
)

export default ListItem;