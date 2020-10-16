import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyleDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
background-color: rgb(238, 136, 98);

@media (min width: 500px)': {
    width: '450px'
}
`;

return (
    // <div className="Person" style={style}>
    <StyleDiv>
        <p onClick={props.click}>EMPLOYEE: {props.name}</p>
        <p>Tenure: {props.tenure}</p>

        <p>Extension: {props.ext}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>

)


export default person; 