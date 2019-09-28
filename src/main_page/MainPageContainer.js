import React from 'react';
import { MainPage } from './MainPage.js';

//updates fullscreen projection 
//holds each element of the page

export class MainPageContainer extends React.Component {
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
  }

  fullscreenOff() {
    this.setState({
      fullscreen: false,
      fullscreenSec: ''
    });
    window.scrollTo(0, 0);
  }

  setFullscreen(sec) {
    this.setState({
      fullscreen: true,
      fullscreenSec: sec
    });
    window.scrollTo(0, 0);
  }

  setPage(type) {
    this.setState({ page: type });
    this.fullscreenOff();
  }

  render() {
    console.log(this.state.page)
    return <MainPage setPage={this.setPage}
      isFullscreen={this.state.fullscreen}
      fullscreenSec={this.state.fullscreenSec}
      fullscreenOff={this.fullscreenOff}
      setFullscreen={this.setFullscreen}
      page={this.state.page} />
  }
}