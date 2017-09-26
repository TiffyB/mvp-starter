import React from 'react';

const GroceryItem = (props) => (
  <div>
  <span className="listItem">{props.item.itemname}</span>
  <span className="listItem"> (qty: {props.item.quantity})</span>
  <span> 
  <button name="remove" onClick={function(e) {
  	props.removeItem(props.item, props.update);
  }} >X</button>
  <button name="purchased" onClick={function(e) {
  	props.moveItem(props.item, props.update);
  }} >Purchased!</button>
  </span>
  </div>
)

export default GroceryItem;