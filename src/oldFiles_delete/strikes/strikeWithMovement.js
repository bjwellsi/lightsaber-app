import React from 'react';
import { Strike } from './Strike.js.js.js';
import image from '../../images/from_book/strikes/step_forward_strike.png';


export class WithMovement extends React.Component {
    render() {
        let name = "Strike With Movement"
        let pic = <img src={image} alt={name} />
        let steps = (
            <p>
                
            </p>
        );
        return <Strike fullscreen={this.props.fullscreen} name={name}>
            <div>
                {pic}
            </div>
            <div>
                {pic}
                {steps}
                <hr />
                <p>
    
                </p>
            </div>
        </Strike >
    }
}