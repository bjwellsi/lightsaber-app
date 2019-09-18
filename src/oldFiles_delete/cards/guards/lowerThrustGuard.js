import React from 'react';
import { Guard } from './Guard.js';
import image from '../../images/from_book/guards/lower_thrust_guard.png';


export class LowerThrustGuard extends React.Component {
    render() {
        let name = "Lower Thrust Guard"
        return <Guard fullscreen={this.props.fullscreen} name={name}>
            <img src={image} alt={name} />
            <div>
                <p>
                This guard is a a good upward thrusting position, and the point of the blade is held low to the ground. In addition to the thrust you can perform a false-edge reverse uppercut from this position. 
                </p>
            </div>
        </Guard>
    }
}