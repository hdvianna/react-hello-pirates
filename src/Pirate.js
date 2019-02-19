import React, { Component } from 'react';

class Pirate extends Component {
    render() {
        return(
            <div className="pirate">
                <div>
                    Name: {this.props.name}
                </div>
                <div>
                    Age: {this.props.age}
                </div>
                <div>
                    Rank: {this.props.rank}
                </div>                
            </div>
        );
    }
}

export default Pirate;