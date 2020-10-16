import React, { Component } from 'react';
import Person from './components/person';
import './App.css';


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
        otherState: 'Changed State',
        showPersons: false
    };


    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Employee Director</h1>
                <p></p>
                <p></p>
                <button>filter names</button>
                <Person id={this.state.persons[0].id} name={this.state.persons[0].name} tenure={this.state.persons[0].tenure} ext={this.state.persons[0].ext} />
                <Person id={this.state.persons[1].id} name={this.state.persons[1].name} tenure={this.state.persons[1].tenure} ext={this.state.persons[1].ext} />
                <Person id={this.state.persons[2].id} name={this.state.persons[2].name} tenure={this.state.persons[2].tenure} ext={this.state.persons[2].ext} />
                <Person id={this.state.persons[3].id} name={this.state.persons[2].name} tenure={this.state.persons[3].tenure} ext={this.state.persons[3].ext} />
                <Person id={this.state.persons[4].id} name={this.state.persons[4].name} tenure={this.state.persons[4].tenure} ext={this.state.persons[4].ext} />
                <Person id={this.state.persons[5].id} name={this.state.persons[5].name} tenure={this.state.persons[5].tenure} ext={this.state.persons[5].ext} />
                <Person id={this.state.persons[6].id} name={this.state.persons[6].name} tenure={this.state.persons[6].tenure} ext={this.state.persons[6].ext} />

            </div>
        )
    }
}


export default App;