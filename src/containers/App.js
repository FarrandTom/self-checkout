import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header/Header'
import WebcamCapture from '../components/Webcam/Webcam'
import Groceries from '../components/Groceries/Groceries'


class App extends Component {
  state = {
    groceries_array: [
      {id: 'rihs4iaiowj3', name: "Avocado", quantity: 2, price: '1.50'},
      {id: 'vaoiwjd109u1', name: "Orange", quantity: 3, price: '2.00'},
      {id: '2soijsoijefo', name: "Pear", quantity: 1, price: '0.75'}
    ]
  }

  deleteGroceryHandler = (groceryIndex) => {
    // Arrays and objects are reference types.
    // So need to call the spread operator (could alternately use the slice method),
    // to get a copy of the persons array- rather than a pointer to the
    // original array. Always update state in an immutable way.
    const groceries = [...this.state.groceries_array];
    groceries.splice(groceryIndex, 1);
    this.setState({groceries: groceries})
  }

  render() {

    return (
        <div className='App bx--grid'>
          <Header/>
          <div className='bx--row'>
            <div className='bx--col-xs-6'>
              <WebcamCapture />
            </div>
            <div className='bx--col-xs-6'>
              <Groceries
                groceries={this.state.groceries_array} 
                click={this.deleteGroceryHandler}/>
            </div>
          </div>
        </div>

    );
  }
}

export default App;
