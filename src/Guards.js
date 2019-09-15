import React from 'react';
import { Guard } from './Guard';

export class Guards extends React.Component {
    
    render() {
        let jsx = (
            <div className="card_grid">
                <Guard name="move1" instructions="Do blah blah blah"/> 
                <Guard name="move2" instructions="Do more blah blah"/>
                <Guard name="move3" instructions="even more stlklkjnkkjkbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbhjuff"/>
                <Guard name="move4" instructions="boodigit aspidf "/>
                <Guard name="move5" instructions="asdkfjo98"/>
                <Guard name="move6" instructions="asdi;ojo"/>
            </div>
        );
        return jsx;
    }
}
