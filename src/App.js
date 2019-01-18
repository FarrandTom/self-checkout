import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={style}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
