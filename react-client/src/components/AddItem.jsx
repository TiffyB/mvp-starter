import React from 'react';
// import ListItem from './ListItem.jsx';
class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      quantity: ''
    }
  }

  handleSubmit(e) {
    var context = this;
    e.preventDefault();
    console.log(context);
    var groceryItem = {
      item: context.state.item,
      quantity: context.state.quantity
    }
    $.ajax({
      type: 'POST',
      url: 'http:\//\//127.0.0.1:3000/items',
      data: JSON.stringify(groceryItem),
      contentType: 'application/json',
      success: function(data) {
        context.clearInput();
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

  clearInput() {

    this.setState({
      item: '',
      quantity: ''
    })
  }
  
  render() {
    return(
      <div>
        <h4> Add Purchased Grocery Item Below </h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Item name:<br/>
          <input type="text" name="itemname" onChange={this.changeItem.bind(this)} /><br/>
          Quantity: <br/>
          <input type="text" name="quantity" onChange={this.changeQuantity.bind(this)} /><br/>
          <input name="submit" type="submit" value="Submit"  />
        </form>
      </div>)
  }
}
export default AddItem;