import React from 'react';

export class Card extends React.Component {
   
    constructor(props){
        super(props);
        this.state = ({fullscreen: this.props.fullscreen});
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
    }

    toggleFullscreen() {
        this.setState({fullscreen: !this.state.fullscreen});
    }

    render() {
        let jsx;
        if (this.state.fullscreen === false) {
            jsx = (
                <div className={this.props.cardType} onClick={this.toggleFullscreen}>
                    <h3>{this.props.name}</h3>
                    {this.props.children[0]}
                    {this.props.children[1]}
                </div>
            );
        } else {
            jsx = (
                <div className={this.state.fullscreenType} onClick={this.toggleFullscreen}>
                    <h3>{this.props.name}</h3>
                    {this.props.children[0]}
                    {this.props.children[2]}
                </div>
            )
        }
        return jsx;
    }
}