import React from 'react';
import { Card } from './Card.js';

export class Cards extends React.Component {

    render() {
        let dev = false;
        /*let cardClass = "card";
        if(this.props.type === "strike"){
            cardClass = "strike_data_card card";
        } else if(this.props.type === "guard"){
            cardClass = "guard_data_card card";
        } else if(this.props.type === "step_turn"){
            cardClass="card"
        }*/

        let jsx = (
            <div className="card_grid">
                {
                    this.props.cards.map((item) => (
                        <Card fullscreen={dev} name={item.name} cardType="card" fullscreenClass="full" setFullscreen={this.props.setFullscreen} fullscreenOff={this.props.fullscreenOff}>
                            {item.img}
                            {item.card}
                            {item.fullscreen}
                        </Card>
                    ))
                }

            </div>
        );
        return jsx;
    }
}
