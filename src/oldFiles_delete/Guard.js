import React from 'react';
import img from './temp.jpg';

export class Guard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullscreen: false
        }
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
    }

    toggleFullscreen() {
        if (!this.state.fullscreen) {
            this.setState({
                fullscreen: true
            })
        } else {
            this.setState({
                fullscreen: false
            })
        }
    }

    render() {
        let div;
        if (this.state.fullscreen === false) {
            div = (
                <div className="card guard" onClick={this.toggleFullscreen}>
                    <h3>{this.props.name}</h3>
                    <img src={img} alt="Temporary"/>
                    <h5>Counters:</h5>
                    <ul>
                        <li>a counter</li>
                        <li>another</li>
                    </ul>
                </div>)
        } else {
            div = (
                <div className="card fullscreen guard" onClick={this.toggleFullscreen}>
                    <h3>{this.props.name}</h3>
                    <img src={img} alt="Temporary"/>
                    <p>{this.props.instructions}</p>

                    <h5>Counters:</h5>
                    <ul>
                        <li>a counter</li>
                        <li>another</li>
                    </ul>
                </div>
            )
        }
        return div;
    }
}