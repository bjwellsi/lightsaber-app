import React from 'react';
import { Selector } from './Selector.js';

//displays header

export const Header = (props) => {
  return (<header className="App-header">
    <h1>Learn how to lightsaber fight!</h1>
    <Selector setPage={props.setPage} />
  </header>)

}