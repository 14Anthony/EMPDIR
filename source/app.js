import React, { Component } from 'react';


class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Travis', age: 28, ext: 1234 },
            { id: '2', name: 'Blake', age: 29, ext: 234 },
            { id: '3', name: 'Joe', age: 28, ext: 12 },
            { id: '4', name: 'Matt', age: 29, ext: 567 },
            { id: '5', name: 'Daniel', age: 28, ext: 987 },
            { id: '6', name: 'Frank', age: 29, ext: 237 },
            { id: '7', name: 'Superman', age: 26, ext: 6543 }
        ],
        otherState: 'Changed State',
        showPersons: false
    };

    render() {
        return (
            <div className="App">
                <h1>Changeable Employee Director</h1>
                <p></p>
                <p></p>
                <input />
            </div>
        )
    }
}


export default App;