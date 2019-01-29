import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Header from '../components/Header/Header'
import Webcam from '../components/Webcam/Webcam'
import Groceries from '../components/Groceries/Groceries'

class App extends Component {
  state = {
    persons: [
      {id: 'rihs4iaiowj3', name: "Tom", age: 24},
      {id: 'vaoiwjd109u1', name: "Cazza", age: 56},
      {id: '2soijsoijefo', name: "Richy", age: 57}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Remember not to manipulate the state directly. javascript objects are 
    // reference types therefore you get a pointer back which is mutable. 
    // Use the spread operator again.
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // Arrays and objects are reference types.
    // So need to call the spread operator (could alternately use the slice method),
    // to get a copy of the persons array- rather than a pointer to the
    // original array. Always update state in an immutable way.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      );
    }

    return (
        <div className='App bx--grid'>
          <Header/>
          <div className='bx--row'>
            <div className='bx--col-xs-6'>
              <Webcam />
            </div>
            <div className='bx--col-xs-6'>
              <Groceries />
            </div>
          </div>
        </div>

    );
  }
}

export default App;
