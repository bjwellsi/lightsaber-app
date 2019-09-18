import React from 'react';
import { Strike } from './Strike.js';
import image from '../../images/from_book/strikes/middle_cut.png';


export class MiddleCut extends React.Component {
    render() {
        let name = "Middle Cut"
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