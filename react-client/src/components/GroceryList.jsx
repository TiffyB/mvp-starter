import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div>
    <h4> Grocery List </h4>
    <span className="listHeader"> There are { props.items.length } items on your list.</span>
    { props.items.map(item => <GroceryItem  item={item} removeItem={props.removeItem} moveItem={props.moveItem} update={props.update}/>)}
  </div>
)

export default GroceryList;