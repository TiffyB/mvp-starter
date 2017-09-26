import React from 'react';

const GroceryItem = (props) => (
  <div>
  <span>{props.item.itemname}</span>
  <span> (qty: {props.item.quantity})</span>
  <span> 
  <button name="remove" onClick={function(e) {
  	props.removeItem(props.item, props.update);
  }} >Remove</button>
  </span>
  </div>
)

export default GroceryItem;