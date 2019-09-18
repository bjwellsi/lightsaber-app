import React from 'react';
import { Strike } from './Strike.js';
import image from '../../images/from_book/strikes/basic_strike.png';


export class BasicStrike extends React.Component {
    render() {
        let name = "Basic Strike"
        let pic = <img src={image} alt={name} />
        let steps = (
            <p>
                A: Start with the saber over your right shoulder
                <br />B: Breathe out while swinging the saber in front of you
                <br />C: Breathe in and chamber the saber to the left shoulder
                <br />D: Breathe out and bring the saber back through the center
                <br />E: Breathe in and chamber the saber back to the right
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
                This should be your first swing, so start slowly and try to understand the dynamics of the movement. Once you have them down, try to move through each swing in one fluid motion. Do this several times, paying attention to how the saver feels as it moves left to right.
                <br />
                With every attack, breathe out as you strike and in as you chamber. This is a habit that should stick with you for every strike you do. It allows control over oxygen intake during sparring and adds power to your strikes.
            </p>
            </div>
        </Strike >
    }
}