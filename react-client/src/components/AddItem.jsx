import React from 'react';
// import ListItem from './ListItem.jsx';
class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
    this.state = {
      item: '',
      quantity: ''
    }
  }

  handleSubmit(e) {
    var context = this;
    console.log(e);
    e.preventDefault();
    var groceryItem = {
      itemname: this.state.item,
      quantity: this.state.quantity
    }
    this.setState({
      item: '',
      quantity: ''
    })
    $.ajax({
      type: 'POST',
      url: 'http:\//\//127.0.0.1:3000/items',
      data: JSON.stringify(groceryItem),
      contentType: 'application/json',
      success: function(data) {
        console.log('data', data);
        context.props.update();
      },
      error: function(error) {
        console.log(error);
      }
    })
  }

  addGrocery(e) {
    var context = this;
    console.log(e);
    e.preventDefault();
    var groceryItem = {
      item: this.state.item,
      quantity: this.state.quantity
    }
    this.setState({
      item: '',
      quantity: ''
    })
    $.ajax({
      type: 'POST',
      url: 'http:\//\//127.0.0.1:3000/groceries',
      data: JSON.stringify(groceryItem),
      contentType: 'application/json',
      success: function(data) {
        console.log('data', data);
        context.props.update();
      },
      error: function(error) {
        console.log(error);
      }
    })
  }

  changeItem(e) {
    this.setState({
      item: e.target.value
    })
  }

  changeQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  
  render() {
    return(
      <div>
        <h4> Add Purchased Grocery Item Below </h4>
        <form onSubmit={this.handleSubmit}>
          Item name:<br/>
          <input type="text" className="itemname" name="itemname" value={this.state.item} onChange={this.changeItem.bind(this)} /><br/>
          Quantity: <br/>
          <input type="text" className="quantity" name="quantity" value={this.state.quantity} onChange={this.changeQuantity.bind(this)} /><br/>

          <button type="button" onClick={this.handleSubmit}>Add to Pantry</button>
          <button type="button" onClick={this.addGrocery}>Add to Grocery List</button>
        </form>
      </div>)
  }
}
export default AddItem;