import React from 'react';
import { Cards } from './body/cards/Cards';
import { GettingStarted } from './body/GettingStarted.js';
import { Header } from './header/Header.js';

//holds each element of the page

function displayPage(props) {
    if (props.page === 'start') {
        return <GettingStarted />;
    } else {
        return <Cards type={props.page}
            setFullscreen={props.setFullscreen}
            fullscreenOff={props.fullscreenOff} />;
    }
}

export const MainPage = (props) => {
    return (
        <div>
            <Header setPage={props.setPage} />
            <main id="main">
                {displayPage(props)}
                {props.isFullscreen && props.fullscreenSec}
            </main>
        </div>
    )

}