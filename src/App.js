import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Tom", age: 24},
      {name: "Cazza", age: 56},
      {name: "Richy", age: 57}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('WAGWAN');
    // DON'T DO THIS this.state.persons[0].name = 'Thomas';
    this.setState( {
      persons: [
      {name: newName, age: 24},
      {name: "Carole", age: 56},
      {name: "Richy", age: 57}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Tom", age: 24},
        {name: event.target.value, age: 56},
        {name: "Richy", age: 57}
      ]
    })
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
          {this.state.persons.map(person => {
            return <Person 
                name={person.name}
                age={person.age}/>
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
