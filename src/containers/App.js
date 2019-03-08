import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header/Header'
import WebcamCapture from '../components/Webcam/Webcam'
import Groceries from '../components/Groceries/Groceries'


class App extends Component {
  state = {
    groceries_array: []
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
  
  // Fruit data from backend. 
  // The Webcam component sends an Axios POST request to the backend which returns the detected fruit
  // This data is passed to the state via the below callback, which the Webcam component executes.
  updateGroceryStateHandler = (dataFromChild) => {
    console.log(dataFromChild)
    const newState = [...this.state.groceries_array, dataFromChild]
    this.setState({groceries_array: newState})
    console.log(this.state)
  }

  render() {

    return (
        <div className='App bx--grid'>
          <Header/>
          <div className='bx--row'>
            <div className='bx--col-xs-6'>
              <WebcamCapture 
              callbackFromParent={this.updateGroceryStateHandler}/>
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
