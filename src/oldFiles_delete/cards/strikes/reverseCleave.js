import React from 'react';
import { Strike } from './Strike.js';
import image from '../../images/from_book/strikes/reverse_cleave.png';


export class ReverseCleave extends React.Component {
    render() {
        let name = "Reverse Cleave"
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