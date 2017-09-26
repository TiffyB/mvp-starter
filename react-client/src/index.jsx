import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddItem from './components/AddItem.jsx';
import GroceryList from './components/GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      neededItems: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {

        data = data.sort(function(a, b) {
          var itemA = a.itemname.toUpperCase();
          var itemB = b.itemname.toUpperCase();
          if (itemA < itemB) {
            return -1;
          }
          if (itemA > itemB) {
            return 1;
          }
          return 0;
        })
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  removeItem() {
    var context = this;
    console.log('clicked')
    // console.log(this.itemname);

    var itemToRemove = {
      itemname: this.itemname
    }
    console.log(itemToRemove)
    $.ajax({
      type: 'POST',
      url: '/items/remove',
      data: JSON.stringify(itemToRemove),
      contentType: 'application/json',
      success: (data) => {
        // context.componentDidMount();
        console.log(data);
      },
      error: (err) => {
        console.log("err", err);
      }
    })
  }


  render () {
    return (<div>
      <h1>KitchInventory</h1>
      <AddItem update={this.componentDidMount.bind(this)}/>
      <List items={this.state.items} removeItem={this.removeItem}/>
      <GroceryList items={this.state.neededItems}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

