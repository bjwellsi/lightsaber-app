import React from 'react';
import { Guard } from './Guard.js';
import right from '../../images/from_book/guards/back_guard.png';
import left from '../../images/from_book/guards/back_guard_horizontal.png';


export class BackGuard extends React.Component {
    render() {
        let name = "Back Guard"
        return <Guard fullscreen={this.props.fullscreen} name={name}>
            <img src={right} alt={name} />
            <div>
                <p>
                    This is a variant of the power guard, with the weight held on the back foot instead of the front. It can be entered into from a power guard by performing a stable turn. The blade can be held horizontally to the shoulders (below) or more vertically. (above) Either is acceptable, it’s a matter of preference.
                </p>
                <img src={left} alt="Horizontal Guard" />
                <p>The back guard is useful much for the same reasons as the power guard, the main difference being that the back guard sets one up for other strikes. Which to adopt is a matter of of distance between oneself and one’s opponent. </p>

            </div>
        </Guard>
    }
}