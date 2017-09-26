import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Digital Pantry </h4>
    <span className="listHeader">There are { props.items.length } items in your pantry.</span>
    { props.items.map(item => <ListItem  item={item} removeItem={props.removeItem} update={props.update}/>)}
  </div>
)

export default List;