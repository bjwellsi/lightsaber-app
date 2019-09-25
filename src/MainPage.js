import React from 'react';
import { Cards } from './Cards';
import { strikes } from './StrikeList.js';
import { guards } from './GuardList.js';
import { footwork } from './FootworkList.js';
import { GettingStarted } from './GettingStarted.js';


export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'landing' }
  }

  render() {
    let page;
    if (this.state.page === 'landing') {
      page = <h3>Select a category to get started!</h3>;
    }
    else if (this.state.page === 'start') {
      page = <GettingStarted/>;
    } else if (this.state.page === 'guards') {
      page = <Cards type="guard" cards={guards} />;
    }
    else if (this.state.page === 'strikes') {
      page = <Cards type="strike" cards={strikes} />;
    }
    else if (this.state.page === 'footwork') {
        page = <Cards type="footwork" cards={footwork} />;
      }

    return (
      <div>
        <header className="App-header">
          <h1>Learn how to lightsaber fight!</h1>
          <div className="selector-grid">
            <button onClick={() => { this.setState({ page: 'start' }) }}>Getting Started</button>
            <button onClick={() => { this.setState({ page: 'strikes' }) }}>Strikes</button>
            <button onClick={() => { this.setState({ page: 'guards' }) }}>Guards</button>
            <button onClick={() => { this.setState({ page: 'footwork' }) }}>Footwork</button>
          </div>
        </header>
        <main>
        {page}
        </main>
      </div>
    )
  }
}