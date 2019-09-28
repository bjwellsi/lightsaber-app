import React from 'react';
import powerRight from './images/from_book/guards/power_guard.png';
import powerLeft from './images/from_book/guards/left_power_guard.png';
import backGuard from './images/from_book/guards/back_guard.png';
import horizontalGuard from './images/from_book/guards/back_guard_horizontal.png';
import backThrustGuard from './images/from_book/guards/back_thrust_guard.png';
import frontGuard from './images/from_book/guards/front_guard.png';
import longGuard from './images/from_book/guards/long_guard.png';
import altLongGuard from './images/from_book/guards/long_guard_alt.png';
import longTailGuard from './images/from_book/guards/long_tail_guard.png';
import lowerThrustGuard from './images/from_book/guards/lower_thrust_guard.png';


export let guards = [
    {
        name: "Power Guard",
        img: <img src={powerRight} alt="Power Guard" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>Hold the saber over your right shoulder, in a relaxed and comfortable way, with your feet spread as shown above. This guard is held similarly to how one would hold a baseball bat. In this stance it is right chambered. Covering the opposite shoulder with the saber would make it left chambered, as shown below.
                    <hr />
                    Keep your back straight and loose in this guard, avoiding strain by over twisting. Keep your shoulders in line with your hips and both hands on the handle, gripping it tightly without crushing the handle.
                    <hr />
                    From this position, the cleave is a very powerful strike one can perform.
                    <hr />
                    This guard allows for the strongest blows. It also allows you to defend and strike quickly while delivering powerful blows. A thrust can be countered from this position by performing a cleave.
                </p>
                <img src={powerLeft} alt="Left Power Guard" />
            </div>
        )
    },
    {
        name: "Back Guard",
        img: <img src={backGuard} alt="Back Guard" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>
                    This is a variant of the power guard, with the weight held on the back foot instead of the front. It can be entered into from a power guard by performing a stable turn. The blade can be held horizontally to the shoulders (below) or more vertically. (above) Either is acceptable, it’s a matter of preference.
                </p>
                <img src={horizontalGuard} alt="Horizontal Guard" />
                <p>The back guard is useful much for the same reasons as the power guard, the main difference being that the back guard sets one up for other strikes. Which to adopt is a matter of of distance between oneself and one’s opponent. </p>
            </div>
        )
    },
    {
        name: "Back Thrust Guard",
        img: <img src={backThrustGuard} alt="Back Thrust Guard" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>
                    This guard can be entered into by doing a stable turn during a lower thrust guard, while maintaining your saber’s position in space. This is a rear weighted position.
                <hr />
                    This is a good position from which to perform strong thrusts, even without taking a step. It can also be used to parry with a false-edge reverse uppercut.
                </p>
            </div>
        )
    },
    {
        name: "Front Guard",
        img: <img src={frontGuard} alt="Front Guard" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>
                    This guard exposes your front to the opponent. The blade is held low but the point shouldn’t touch the ground.
                    <hr />
                    Your body weight should be mostly held on your front foot, and your heel should be lifted. This position should not be difficult to maintain, and your body should feel relaxed.
                    <hr />
                    This guard is largely defensive, as it allows uppercuts to parry cleaves and thrusts, or any such downward strike from your opponent. Thrusts can be performed from this position, but it’s best for uppercuts.
                    </p>
            </div>
        )
    },
    {
        name: "Long Guard",
        img: <img src={longGuard} alt="Long Guard" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>
                    This guard is where you can hold the saber furthest from your body. It is likely one of the most frequently entered stances because its position is part of many strikes, including the cleave, thrust, and uppercut. It can be performed with either foot forward.
                    <hr/>
                    This stance is useful to test your opponent while creating distance between yourself and him while seeing how he reacts to a saber. Thrusts can also be performed from this guard by stepping forward.                    
                    </p>
                    <img src={altLongGuard} alt="Long Guard"/>
            </div>
        )
    },
    {
        name: "Long Tail Guard",
        img: <img src={longTailGuard} alt="Long Tail Guard" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>
                    This guard involves holding the saber behind you, like a tail. Your weight should be on your front foot, similar to the power guard.
                    <hr/>
                    It may be helpful to think of this guard as the counter to the power guard, as the reverse uppercut is performed from this stance and can parry a cleave from a power guard. It can be useful to wait in the long tail guard if the opponent is in a power guard, but you can also shift to a lower thrust stance to prepare to thrust.
                </p>
            </div>
        )
    },
    {
        name: "Lower Thrust Guard",
        img: <img src={lowerThrustGuard} alt="Lower Thrust Guard" />,
        card: (
            <div>
            </div>
        ),
        fullscreen: (
            <div>
                <p>
                This guard is a a good upward thrusting position, and the point of the blade is held low to the ground. In addition to the thrust you can perform a false-edge reverse uppercut from this position. 
                </p>
            </div>
        )
    }
]