import React from 'react';
import anatomyOfHilt from './images/from_book/getting_started/hilt_anatomy.png';
import anatomyOfBlade from './images/from_book/getting_started/blade_anatomy.png';
import grip from './images/from_book/getting_started/grip.png';
import gripShifting from './images/from_book/getting_started/grip_shifting.png';
import edgeAnatomy from './images/from_book/getting_started/edge_anatomy.png';
import bladeRotation from './images/from_book/getting_started/blade_rotation.png';

export class GettingStarted extends React.Component {
    render() {
        return (
            <div className="getting_started">
                <h2>Anatomy of a hilt</h2>
                <img src={anatomyOfHilt} alt="Anatomy of a hilt" />
                <p>The hilt serves as the grip and houses the emitter.
                    The emitter holds the blade in place with a retention screw, and acts as a heat sink for the led bulb.
                    The activation switch powers on the saber.
                    The grip is held by the user.
                    The pommel is a counterweight for the blade, and can be used to strike if needed. </p>
                <hr></hr>    
                <h2>Anatomy of a blade</h2>
                <img src={anatomyOfBlade} alt="Anatomy of a blade" />
                <p>The blade is used to strike the opponent and defend against attacks.
                    The point is the tip of the blade, used to guide the weapon during strikes and thrusts. </p>
                    <hr></hr>

                <h2>Grip</h2>
                <img src={grip} alt="Grip" />
                <p>Lightly grip the saber as shown above, leaving a space between the hands which will
                    vary depending on the hilt length. It should generally be at least half a fist width. Hold the saber in front of you, slightly bend your elbows and relax your shoulders. Slightly flex the muscles of your upper rib cage (just below your armipits) to tighten them. Leave a space between the pommel and your belly button that is at least one fist width. </p>

                    <hr></hr>
                    <h2>Grip shifting during a swing</h2>
                <img src={gripShifting} alt="Grip Shifting" />
                <p>A: Chambered one-handed grip
                    <br />B: The blade swinging forward, guided by its point
                    <br />C: Chambered two-handed grip
                    <br />D: The blade swinging forward, guided by its point
                    <br /><br />
                    “Chambering” is akin to cocking the slide of a gun to chamber a round, it prepares a strike. The handle should be against the web of one’s thumb.
                    When striking with a two handed grip, the pommel rests in the heel of the hand.
                    It may be helpful to imagine shaking hands with the hilt, leaving one’s grip slightly relaxed to allow freedom of movement.
	                The grip will shift as one strikes. </p>
                <hr></hr>
                <h2>Edges of a blade</h2>
                <img src={edgeAnatomy} alt="Edge of the blade" />
                <p>Though sabers are rounded, it is helpful to think of them as traditional swords. If they were, the edge that faces away from oneself would be the true edge, while the one facing toward oneself would be the false edge. A strike delivered from the false edge is called a false-edge strike.
                </p>
                <hr></hr>
                <h2>Points of rotation</h2>
                <img src={bladeRotation} alt="Blade Rotation" />
                <p>A strike will cause a saber to rotate around a rotation point. If one were to toss the saber in the air and allow it to rotate naturally around its gravitational center, it would rotate around a point between 2 and 3 on the diagram. This is called the strong. To maximize striking power, however, one should aim to land strikes between D and E on the diagram.</p>
            </div>
        )
    }
}