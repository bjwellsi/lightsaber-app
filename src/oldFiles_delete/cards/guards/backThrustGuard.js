import React from 'react';
import { Guard } from './Guard.js.js';
import image from '../../images/from_book/guards/back_thrust_guard.png';


export class BackThrustGuard extends React.Component {
    render() {
        let name = "Back Thrust Guard"
        return <Guard fullscreen={this.props.fullscreen} name={name}>
            <img src={image} alt={name} />
            <div>
                <p>
                    This guard can be entered into via a stable turn during a lower thrust guard while maintaining your saber’s position in space. This is a rear weighted position.
                    <hr/>
                    This is a good position from which to perform strong thrusts, even without taking a step. It can also be used to parry with a false-edge reverse uppercut. </p>
            </div>
        </Guard>
    }
}