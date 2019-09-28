import React from 'react';
import { Cards } from './body/cards/Cards';
import { GettingStarted } from './body/GettingStarted.js';
import { Header } from './header/Header.js';

//holds each element of the page

export class MainPage extends React.Component {
    render() {
        function displayPage(obj) {
            if (obj.props.page === 'start') {
                return <GettingStarted />;
            } else {
                return <Cards type={obj.props.page} 
                setFullscreen={obj.props.setFullscreen} 
                fullscreenOff={obj.props.fullscreenOff} />;
            }
        }

        return (
            <div>
                <Header setPage={this.props.setPage} />
                <main id="main">
                    {displayPage(this)}
                    {this.props.isFullscreen && this.props.fullscreenSec}
                </main>
            </div>
        )
    }
}