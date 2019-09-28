import React from 'react';
import forwardBackward from './images/from_book/footwork/forwardBackward_step.png';
import fullTurn from './images/from_book/footwork/full_turn.png';
import halfTurn from './images/from_book/footwork/half_turn.png';
import stableTurn from './images/from_book/footwork/stable_turn.png';



export let footwork = [
    {
        name: "Forward, Backward, Half Step",
        img: <img src={forwardBackward} alt="Forward and Backward Step" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>This step is very simple. Stand as pictured above. Step forward with your left foot. Then back, then forward. Each step is simply called a step forward or a step backward.
<br /><br />
                    One can also half step forward or backward by stepping without changing which foot is in front and which behind. These maintain foot positioning for whichever guard is being employed.
<br /><br />
                    Another kind of step is the step across, where you crosses an imaginary line drawn from in front of you to in front of your opponent. Essentially this changes your bodily rotation relative to your opponent.
<br /><br />
                    Often the back heel is raised to allow subsequent steps to be taken faster. </p>
            </div>
        )
    },
    {
        name: "Full Turn",
        img: <img src={fullTurn} alt="Full Turn" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>This is the hardest turn to perform. The student leaves their front foot in place, leaving their weight on it throughout the turn. Then, they spin their rear foot around their body to face the other way. This movement allows the student to quickly face any direction.  </p>
            </div>
        )
    },
    {
        name: "Half Turn",
        img: <img src={halfTurn} alt="Half Turn" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>In illustration A, the student faces the right. In B, he takes a forward step forward with the right foot while turning slightly to the left. His weight is held primarily in the foot with the shadow under it. This is how to perform a half turn. </p>
            </div>
        )
    },
    {
        name: "Stable Turn",
        img: <img src={stableTurn} alt="Stable Turn" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>This turn involves no movement of the feet. In the images above, the student faces the left while placing his weight on his right foot. To turn right, he shifts his weight to the other foot while turning only his torso. 
This turn allows stable movement, thus its name. </p>
            </div>
        )
    }
]