import React from 'react';
import { Strike } from './Strike.js';
import ab from '../../images/from_book/strikes/cleave_ab.png';
import cd from '../../images/from_book/strikes/cleave_cd.png';
import left from '../../images/from_book/strikes/left_cleave.png';


export class Cleave extends React.Component {
    render() {
        let name = "Cleave"
        let abim = <img src={ab} alt={name} />
        let cdim = <img src={cd} alt={name} />
        let leftim = <img src={left} alt={name} />

        let steps = (
            <p>
                
            </p>
        );
        return <Strike fullscreen={this.props.fullscreen} name={name}>
            <div>
                {abim}
                {cdim}
            </div>
            <div>
                {abim}
                {cdim}
                {steps}
                <hr />
                <p>
    
                </p>
            </div>
        </Strike >
    }
}