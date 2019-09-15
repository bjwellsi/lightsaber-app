import React from 'react';
import ReactDOM from 'react-dom';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let div = (<div className="card" >
            <h3>{this.props.name}</h3>
        </div>)
        return div;
    }
}