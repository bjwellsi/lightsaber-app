import React from 'react';

export class Strike extends React.Component {
    render() {
        let jsx;
        if (this.props.fullscreen === false) {
            jsx = (
                <div className="strike_data_card card">
                    <h3>{this.props.name}</h3>
                    {this.props.children[0]}
                </div>
            );
        } else {
            jsx = (
                <div className="strike_data_full">
                    <h3>{this.props.name}</h3>
                    {this.props.children[1]}
                </div>
            )
        }
        return jsx;
    }
}