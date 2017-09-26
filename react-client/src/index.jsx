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

  update() {
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

  removeItem(item, update) { 
    var itemToRemove = {
      itemname: item.itemname
    }
    $.ajax({
      type: 'POST',
      url: '/items/remove',
      data: JSON.stringify(itemToRemove),
      contentType: 'application/json',
      success: (data) => {
        update()
      },
      error: (err) => {
        console.log("err", err);
      }
    })
  }

  removeOne(item) {
    //subtract one from quantity
  }


  render () {
    return (<div>
      <h1>KitchInventory</h1>
      <AddItem update={this.componentDidMount.bind(this)}/>
      <List items={this.state.items} removeItem={this.removeItem} update={this.componentDidMount.bind(this)}/>
      <GroceryList items={this.state.neededItems}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

