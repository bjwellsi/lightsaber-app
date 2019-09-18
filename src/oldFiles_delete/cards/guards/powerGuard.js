import React from 'react';
import { Guard } from './Guard.js';
import right from '../../images/from_book/guards/power_guard.png';
import left from '../../images/from_book/guards/left_power_guard.png';


export class PowerGuard extends React.Component {

    render() {
        let name = "Power Guard"
        return <Guard fullscreen={this.props.fullscreen} name={name}>
            <img src={right} alt={name} />
            <div>
                <p>Hold the saber over your right shoulder, in a relaxed and comfortable way, with your feet spread as shown above. This guard is held similarly to how one would hold a baseball bat. In this stance it is right chambered. Covering the opposite shoulder with the saber would make it left chambered, as shown below.
                        <hr />
                    Keep your back straight and loose in this guard, avoiding strain by over twisting. Keep your shoulders in line with your hips and both hands on the handle, gripping it tightly without crushing the handle.
                        <hr />
                    From this position, the cleave is a very powerful strike one can perform.
                        <hr />
                    This guard allows for the strongest blows. It also allows you to defend and strike quickly while delivering powerful blows. A thrust can be countered from this position by performing a cleave.
                    </p>
                <img src={left} alt="Left Power Guard" />
            </div>
        </Guard>
    }
}