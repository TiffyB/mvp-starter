import React from 'react';
import ListItem from './ListItem.jsx';

const GroceryList = (props) => (
  <div>
    <h4> Grocery List </h4>
    There are { props.items.length } items on your list.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default GroceryList;