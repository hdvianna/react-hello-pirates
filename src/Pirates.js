import React, { Component } from 'react';
import Pirate from './Pirate';

const Pirates = ({ pirates, del }) => {
        const piratesJSXs = pirates.map((pirate, i) => {
        const { name, age, rank } = pirate;
        
        return age > 30 ? (
            <li key={"pirate".concat(i)}>
                <Pirate name={name} age={age} rank={rank} />
                <button onClick={del.bind(this, i)}>Delete</button>
                {true?<h2>pirate</h2>:<h2>ninja</h2>}
            </li>
        ) : null;
    });
    return (
        <ul>
            {piratesJSXs}
        </ul>
    );
}

export default Pirates;

