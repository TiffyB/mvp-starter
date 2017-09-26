import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div>
    <h4> Grocery List </h4>
    There are { props.items.length } items on your list.
    { props.items.map(item => <GroceryItem item={item} removeItem={props.removeItem} update={props.update}/>)}
  </div>
)

export default GroceryList;