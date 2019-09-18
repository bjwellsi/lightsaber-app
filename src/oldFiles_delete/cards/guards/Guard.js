import React from 'react';

export class Guard extends React.Component {
    render() {
        let jsx;
        if (this.props.fullscreen === false) {
            jsx = (
                <div className="guard_data_card card">
                    <h3>{this.props.name}</h3>
                    {this.props.children[0]}
                    <h5>Leads into</h5>
                </div>
            );
        } else {
            jsx = (
                <div className="guard_data_full">
                    <h3>{this.props.name}</h3>
                    {this.props.children[0]}
                    {this.props.children[1]}
                    <h5>Leads into:</h5>
                </div>
            )
        }
        return jsx;
    }
}