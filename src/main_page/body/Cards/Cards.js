import React from 'react';
import { Card } from './Card.js/index.js.js';
import { strikes } from '../cards/move_lists/StrikeList.js';
import { guards } from '../cards/move_lists/GuardList.js';
import { footwork } from '../cards/move_lists/FootworkList.js';

//builds list of cards

export class Cards extends React.Component {

    render() {
        function cardSelector(pageHeader) {
            if (pageHeader === 'guards') return guards;
            else if (pageHeader === 'strikes') return strikes;
            else if (pageHeader === 'footwork') return footwork;
            else throw ('Somehow pageHeader isnt one of the options');
        }

        let dev = false;
        /*let cardClass = "card";
        if(this.props.type === "strike"){
            cardClass = "strike_data_card card";
        } else if(this.props.type === "guard"){
            cardClass = "guard_data_card card";
        } else if(this.props.type === "step_turn"){
            cardClass="card"
        }*/

        return (
            <div className="card_grid">
                {
                    cardSelector(this.props.type).map((item) => (
                        <Card fullscreen={dev} name={item.name} cardType="card" fullscreenClass="full" setFullscreen={this.props.setFullscreen} fullscreenOff={this.props.fullscreenOff}>
                            {item.img}
                            {item.card}
                            {item.fullscreen}
                        </Card>
                    ))
                }

            </div>
        );
    }
}