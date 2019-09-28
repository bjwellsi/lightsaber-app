import React from 'react';
import { Cards } from './body/cards/Cards';
import { GettingStarted } from './body/GettingStarted.js';
import { Header } from './header/Header.js';

//updates fullscreen projection 
//holds each element of the page

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'start',
      fullscreen: false
    }

    //binds
    this.fullscreenOff = this.fullscreenOff.bind(this);
    this.setFullscreen = this.setFullscreen.bind(this);
    this.setPage = this.setPage.bind(this);
    this.displayPage = this.displayPage.bind(this);
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

  setPage(type){
    this.setState({ page: type });
    this.fullscreenOff();
  }

  displayPage(pageState){
    if (this.state.page === 'start') {
      return <GettingStarted />;
    } else {
      return <Cards type={this.state.page} setFullscreen={this.setFullscreen} fullscreenOff={this.fullscreenOff} />;      
    }
  }

  render() {
    return (
      <div>
        <Header setPage={this.setPage}/>
        <main id="main">
          {this.displayPage()}
          {this.state.fullscreen && this.state.fullscreenSec}
        </main>
      </div>
    )
  }
}