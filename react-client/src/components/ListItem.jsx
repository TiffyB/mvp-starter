import React from 'react';

const ListItem = (props) => (
  <div>
  <span className="listItem">{props.item.itemname}</span>
  <span className="listItem"> (qty: {props.item.quantity})</span>
  <span> 
  <button name="remove" onClick={function(e) {
  	props.removeItem(props.item, props.update);
  }} >Finished!</button>
  </span>
  </div>
)

export default ListItem;