import React from 'react';
import { Guard } from './Guard.js';
import image from '../../images/from_book/guards/long_tail_guard.png';


export class LongTailGuard extends React.Component {
    render() {
        let name = "Long Tail Guard"
        return <Guard fullscreen={this.props.fullscreen} name={name}>
            <img src={image} alt={name} />
            <div>
                <p>
                    This guard involves holding the saber behind you, like a tail. Your weight should be on your front foot, similar to the power guard.
                    <hr/>
                    It may be helpful to think of this guard as the counter to the power guard, as the reverse uppercut is performed from this stance and can parry a cleave from a power guard. It can be useful to wait in the long tail guard if the opponent is in a power guard, but you can also shift to a lower thrust stance to prepare to thrust.
                </p>
            </div>
        </Guard>
    }
}