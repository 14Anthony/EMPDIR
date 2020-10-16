import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Travis', tenure: 28, ext: 1234 },
      { id: '2', name: 'Blake', tenure: 9, ext: 234 },
      { id: '3', name: 'Joe', tenure: 2, ext: 12 },
      { id: '4', name: 'Matt', tenure: 29, ext: 567 },
      { id: '5', name: 'Daniel', tenure: 8, ext: 987 },
      { id: '6', name: 'Frank', tenure: 15, ext: 237 },
      { id: '7', name: 'Superman', tenure: 26, ext: 6543 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'dodgerblue',
      color: 'white',
      font: 'inherit',
      border: '1px solid darkgrey ',
      padding: '10px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              tenure={person.tenure}
              ext={person.ext}
              id={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'orangered'
    }

    let classes = [];

    if (this.state.persons.length <= 3) {
      classes.push('bolder');

    }
    if (this.state.persons.length <= 1) {
      classes.push('orangered')
    }
    return (
      <div className="App">
        <h1>Employee Directory</h1>
        <p className={classes.join('')}>Meet your Collegues</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
