import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Grocery Inventory </h4>
    There are { props.items.length } items in your pantry.
    { props.items.map(item => <ListItem item={item} removeItem={props.removeItem} update={props.update}/>)}
  </div>
)

export default List;