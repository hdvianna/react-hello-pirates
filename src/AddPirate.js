import React, { Component } from 'react';
import './AddPirate.css';

class AddPirate extends Component {
    state = {
        name: null,
        age: null,
        rank: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.add(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label> 
                <input type="text" id="name" onChange={this.handleChange} />
                
                <label htmlFor="age">Age:</label> 
                <input type="number" id="age" onChange={this.handleChange} />
                
                <label htmlFor="rank">Rank:</label> 
                <input type="text" id="rank" onChange={this.handleChange} />

                <input type="submit"/>
            </form>
        );
    }
}

export default AddPirate;