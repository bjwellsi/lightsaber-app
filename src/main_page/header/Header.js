import React from 'react';
import { Selector } from './Selector.js';

//displays header

export class Header extends React.Component {    
    render() {
        return (<header className="App-header">
        <h1>Learn how to lightsaber fight!</h1>
        <Selector setPage={this.props.setPage}/>
      </header>)
    }
} 