import React from 'react';

const ListItem = (props) => (
  <div>
  <span>{props.item.itemname}</span>
  <span> Qty: {props.item.quantity}</span>
  </div>
)

export default ListItem;