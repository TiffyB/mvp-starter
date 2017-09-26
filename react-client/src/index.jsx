import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddItem from './components/AddItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        // console.log(data[0].itemname[0].toUpperCase());
        // data = data.map((item) => {
        //   item.itemname[0] = item.itemname[0].toUpperCase();
        //   console.log(item.itemname[0])
        //   return item;
        // })
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

  handleSubmit(e) {
    console.log("event value: ", e.target.value);
    e.preventDefault();
    console.log("clicked!")
  }

  render () {
    return (<div>
      <h1>KitchInventory</h1>
      <AddItem handleSubmit={this.handleSubmit.bind(this)}/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

