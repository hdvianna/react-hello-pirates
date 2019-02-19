import React, { Component } from 'react';
import Pirate from './Pirate';

class Pirates extends Component {    
    render() {
        const { pirates } = this.props;        
        const piratesJSXs = pirates.map ((pirate, i) => {
            const { name, age, rank } = pirate;
            return (
                <li key={"pirate".concat(i)}>
                    <Pirate name={name} age={age} rank={rank} />
                </li>
            )
        });
        return (
            <ul>                
                { piratesJSXs }                
            </ul>
        );
    }
}

export default Pirates;