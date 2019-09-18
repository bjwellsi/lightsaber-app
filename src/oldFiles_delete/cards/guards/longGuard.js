import React from 'react';
import { Guard } from './Guard.js';
import image from '../../images/from_book/guards/long_guard.png';
import alt from '../../images/from_book/guards/long_guard_alt.png';


export class LongGuard extends React.Component {
    render() {
        let name = "Long Guard"
        return <Guard fullscreen={this.props.fullscreen} name={name}>
            <img src={image} alt={name}/>
            <div>
                <p>
                    This guard is where you can hold the saber furthest from your body. It is likely one of the most frequently entered stances because its position is part of many strikes, including the cleave, thrust, and uppercut. It can be performed with either foot forward.
                    <hr/>
                    This stance is useful to test your opponent while creating distance between yourself and him while seeing how he reacts to a saber. Thrusts can also be performed from this guard by stepping forward.                    
                    </p>
                    <img src={alt}/>

            </div>
        </Guard>
    }
}