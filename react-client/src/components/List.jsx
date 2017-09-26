import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Grocery Inventory </h4>
    There are { props.items.length } items in your pantry.
    { props.items.map(item => <ListItem item={item} removeItem={props.removeItem.bind(item)}/>)}
  </div>
)

export default List;