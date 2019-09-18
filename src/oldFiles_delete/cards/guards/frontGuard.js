import React from 'react';
import { Guard } from './Guard.js';
import image from '../../images/from_book/guards/front_guard.png';


export class FrontGuard extends React.Component {
    render() {
        let name = "Front Guard"
        return <Guard fullscreen={this.props.fullscreen} name={name}>
            <img src={image} alt={name} />
            <div>
                <p>
                    This guard exposes your front to the opponent. The blade is held low but the point shouldn’t touch the ground.
                    <hr />
                    Your body weight should be mostly held on your front foot, and your heel should be lifted. This position should not be difficult to maintain, and your body should feel relaxed.
                    <hr/>
                    This guard is largely defensive, as it allows uppercuts to parry cleaves and thrusts, or any such downward strike from your opponent. Thrusts can be performed from this position, but it’s best for uppercuts. 
                    </p>
            </div>
        </Guard>
    }
}