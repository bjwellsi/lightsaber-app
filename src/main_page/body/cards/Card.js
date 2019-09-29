import React from 'react';

//stores card info as well as fullscreen info

export class Card extends React.Component {

    constructor(props) {
        super(props);
        this.fullscreen = this.fullscreen.bind(this);
    }

    fullscreen(e) {
        let sec = (<div className={this.props.fullscreenClass} onClick={this.props.fullscreenOff}>
            <h3>{this.props.name}</h3>
            {this.props.children[0]}
            {this.props.children[2]}
        </div>);
        this.props.setFullscreen(sec);
    }

    render() {
        return (
            <div href="main" className={this.props.cardType} onClick={this.fullscreen}>
                <h3>{this.props.name}</h3>
                {this.props.children[0]}
                {this.props.children[1]}
            </div>
        );
    }
}

/*
Card.propTypes = {
    fullscreenOff: React.PropTypes.func.isRequired,
    setFullscreen: React.PropTypes.func.isRequired,
    cardType: React.PropTypes.string.isRequired,
    fullscreenClass: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
}*/