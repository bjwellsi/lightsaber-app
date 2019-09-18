import React from 'react';

export class Card extends React.Component {
    render() {
        let jsx;
        if (this.props.fullscreen === false) {
            jsx = (
                <div className={this.props.cardType}>
                    <h3>{this.props.name}</h3>
                    {this.props.children[0]}
                    {this.props.children[1]}
                </div>
            );
        } else {
            jsx = (
                <div className={this.props.fullscreenType}>
                    <h3>{this.props.name}</h3>
                    {this.props.children[0]}
                    {this.props.children[2]}
                </div>
            )
        }
        return jsx;
    }
}