import React from 'react';
// import ListItem from './ListItem.jsx';
class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: ''
    }
  }

  handleSubmit(e) {
    // var context = this;
    console.log("state value", this.state.item)
    e.preventDefault();
    console.log("clicked!")
    // var groceryItem = {
    //   item: context.state.item
    // }
    // $.ajax({
    //   method: 'POST',
    //   url: 'http:\//\//127.0.0.1:3000/items',
    //   data: (context.state.item)
    //   success(data): {

    //   } 
    // })
  }

  changeItem(e) {
    this.setState({
      item: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h4> Add Kitchen Item </h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Item name:<br/>
          <input type="text" name="itemname" onChange={this.changeItem.bind(this)} /><br/>
          <input name="submit" type="submit" value="Submit"  />
        </form>
      </div>)
  }
}
export default AddItem;