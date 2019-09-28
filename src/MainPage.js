import React from 'react';
import { Cards } from './Cards';
import { strikes } from './StrikeList.js';
import { guards } from './GuardList.js';
import { footwork } from './FootworkList.js';
import { GettingStarted } from './GettingStarted.js';


export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'landing',
      fullscreen: false
    }
    this.fullscreenOff = this.fullscreenOff.bind(this);
    this.setFullscreen = this.setFullscreen.bind(this);
  }

  fullscreenOff() {
    this.setState({
      fullscreen: false, 
      fullscreenSec: ''
    });
    window.scrollTo(0,0);
  }

  setFullscreen(sec) {
    this.setState({
      fullscreen: true,
      fullscreenSec: sec
    });
    window.scrollTo(0,0);
  }

  page(type){
    this.setState({ page: type });
    this.fullscreenOff();
  }

  render() {
    let page;
    if (this.state.page === 'landing') {
      page = <h3>Select a category to get started!</h3>;
    }
    else if (this.state.page === 'start') {
      page = <GettingStarted />;
    } else if (this.state.page === 'guards') {
      page = <Cards type="guard" cards={guards} setFullscreen={this.setFullscreen} fullscreenOff={this.fullscreenOff} />;
    }
    else if (this.state.page === 'strikes') {
      page = <Cards type="strike" cards={strikes} setFullscreen={this.setFullscreen} fullscreenOff={this.fullscreenOff} />;
    }
    else if (this.state.page === 'footwork') {
      page = <Cards type="footwork" cards={footwork} setFullscreen={this.setFullscreen} fullscreenOff={this.fullscreenOff} />;
    }

    return (
      <div>
        <header className="App-header">
          <h1>Learn how to lightsaber fight!</h1>
          <div className="selector-grid" id="header">
            <button onClick={() => { this.page('start')}}>Getting Started</button>
            <button onClick={() => { this.page('strikes')}}>Strikes</button>
            <button onClick={() => { this.page('guards')}}>Guards</button>
            <button onClick={() => { this.page('footwork')}}>Footwork</button>
          </div>
        </header>
        <main id="main">
          {page}
          {this.state.fullscreen && this.state.fullscreenSec}
        </main>
      </div>
    )
  }
}