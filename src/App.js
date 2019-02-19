import React, { Component } from 'react';
import Pirates from './Pirates';
import Pirate from './Pirate';
import AddPirate from './AddPirate';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    pirates : [
      {name: 'Tomkin \'Black Eyes\' Read', age: 21, rank: 'Landsmen'},
      {name: 'Bridger \'Mumbling\' Smithy', age: 37, rank: 'Gunner'}
    ]
  };

  addPirate = (pirate) => {
    let pirates = [...this.state.pirates, pirate]
    this.setState({
      pirates: pirates
    });
  }

  deletePirate = (i) => {
    console.log(i);
    let pirates = [...this.state.pirates]
    pirates.splice(i, 1);
    console.log(pirates);        
    this.setState({
      pirates: pirates
    });
  }

  componentDidMount() {
    console.log('App mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App updated!', prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>Ahoy, pirates!</h1>
        <AddPirate add={this.addPirate} />
        <Pirate name="Henry Every" age="54" rank="Captain"/>
        <hr />
        <Pirate name="Sandhurst 'Golden Tooth' Kimberly" age="31" rank="Mate"/>
        <hr />
        <Pirates del={this.deletePirate} pirates={ this.state.pirates } />
      </div>
    );
  }
}

export default App;
