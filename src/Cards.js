import React from 'react';
import { Card } from './Card.js';

export class Cards extends React.Component {

    render() {
        let dev = false;
        let cardClass = "card";
        let fullscreenClass = "";
        if(this.props.type === "strike"){
            cardClass = "strike_data_card card";
            fullscreenClass = "strike_data_full";
        } else if(this.props.type === "guard"){
            cardClass = "guard_data_card card";
            fullscreenClass = "guard_data_full";

        } else if(this.props.type === "step_turn"){
            cardClass="card"
            fullscreenClass = "step_turn_full"
        }

        let jsx = (
            <div className="card_grid">
                {
                    this.props.cards.map((item) => (
                        <Card fullscreen={dev} name={item.name} cardType={cardClass} fullscreenType={fullscreenClass}>
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
