import React from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <h1>Changeable Employee Director</h1>
            <p >Employ: {props.name}</p>
            <p>I am {props.age}</p>
            <p>Find me at ext {props.ext}</p>
            <input />
        </div>
    )
}