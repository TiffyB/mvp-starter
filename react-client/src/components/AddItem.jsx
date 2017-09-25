import React from 'react';
// import ListItem from './ListItem.jsx';

const AddItem = (props) => (
  <div>
    <h4> Add Kitchen Item </h4>
    <form>
	    Item name:<br/>
	    <input type="text" name="itemname"/><br/>
	    Expiration(optional):<br/>
	    <input type="date" name="expiration"/>
	    <input type="submit" value="Submit"/>
    </form>
  </div>
)

export default AddItem;