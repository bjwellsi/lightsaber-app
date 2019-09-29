import React from 'react';
import { Card } from './Card.js';
import { strikes } from './move_lists/StrikeList.js';
import { guards } from './move_lists/GuardList.js';
import { footwork } from './move_lists/FootworkList.js';

//builds list of cards

export const Cards = (props) => {

    function cardSelector(pageHeader) {
        if (pageHeader === 'guards') return guards;
        else if (pageHeader === 'strikes') return strikes;
        else if (pageHeader === 'footwork') return footwork;
        else throw new Error('Somehow pageHeader isnt one of the options (thrown from cards.js) PageHeader: ' + pageHeader);
    }

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
                cardSelector(props.type).map((item) => (
                    <Card name={item.name} cardType="card"
                        fullscreenClass="full"
                        setFullscreen={props.setFullscreen}
                        fullscreenOff={props.fullscreenOff}
                    >
                        {item.img}
                        {item.card}
                        {item.fullscreen}
                    </Card>
                ))
            }
        </div>
    );
}

/*
Cards.propTypes = {
    type: React.PropTypes.string.isRequired
}*/