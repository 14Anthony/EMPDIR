import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>EMPLOYEE: {props.name}</p>
            <p>Tenure: {props.tenure}</p>
            <p>Extension: {props.ext}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;