import React from 'react';
// import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Add Kitchen Item </h4>
    <form action="POST">
    Item name:<br>
    <input type="text" name="itemname"><br>
    Expiration:<br>
    <input type="date" name="expiration">
    <input type="submit" value="Submit">
    </form>
  </div>
)

export default List;