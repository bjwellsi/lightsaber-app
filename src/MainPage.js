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
      page: 'start',
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
    function cardSelector() {
      let pageHeader = this.state.page;
      if(pageHeader === 'guards') return guards;
      else if (pageHeader === 'strikes') return strikes;
      else if (pageHeader === 'footwork') return footwork;
      else throw ('Somehow pageHeader isnt one of the options');
    } 

    let page;
    if (this.state.page === 'start') {
      page = <GettingStarted />;
    } else {
      page = <Cards type={this.state.page} cards={cardSelector()} setFullscreen={this.setFullscreen} fullscreenOff={this.fullscreenOff} />;      
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