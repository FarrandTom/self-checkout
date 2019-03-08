import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header/Header'
import WebcamCapture from '../components/Webcam/Webcam'
import Groceries from '../components/Groceries/Groceries'


class App extends Component {
  state = {
    groceriesArray: []
  }

  deleteGroceryHandler = (groceryIndex) => {
    // Arrays and objects are reference types.
    // So need to call the spread operator (could alternately use the slice method),
    // to get a copy of the persons array- rather than a pointer to the
    // original array. Always update state in an immutable way.
    const groceries = [...this.state.groceriesArray];
    groceries.splice(groceryIndex, 1);
    this.setState({groceries: groceries});
  }
  
  // Grovery data from backend. 
  // The Webcam component sends an Axios POST request to the backend which returns the detected groceries
  // This data is passed to the state via the below callback, which the Webcam component executes.
  updateGroceryStateHandler = (dataFromChild) => {
    const groceries = [...this.state.groceriesArray];
    const totalGroceries = groceries.concat(dataFromChild);
    
    // This code can be cleaned up be good enough for now!
    // each foreach loop should be contained within a function that can be reused. 
    let priceHolder = {};
    totalGroceries.forEach(function (d) {
        if (priceHolder.hasOwnProperty(d.name)) {
          priceHolder[d.name] = priceHolder[d.name] + d.price
        } else {       
          priceHolder[d.name] = d.price
        }
    });
    
    let quantityHolder = {};
    totalGroceries.forEach(function (d) {
      if (quantityHolder.hasOwnProperty(d.name)) {
        quantityHolder[d.name] = quantityHolder[d.name] + d.quantity
      } else {       
        quantityHolder[d.name] = d.quantity
      }
    });

    let finalGroceries = [];
    
    for(let prop in quantityHolder) {
      finalGroceries.push({name: prop, price: (Math.floor(priceHolder[prop] * 100) / 100 ), quantity: quantityHolder[prop]});   
    }

    this.setState({groceriesArray: finalGroceries});
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
                groceries={this.state.groceriesArray} 
                click={this.deleteGroceryHandler}/>
            </div>
          </div>
        </div>

    );
  }
}

export default App;
