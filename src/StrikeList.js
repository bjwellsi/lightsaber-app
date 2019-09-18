import React from 'react';
import middleCut from './images/from_book/strikes/middle_cut.png';
import cleaveab from './images/from_book/strikes/cleave_ab.png';
import cleavecd from './images/from_book/strikes/cleave_cd.png';
import cleaveLeft from './images/from_book/strikes/left_cleave.png';
import reverseCleave from './images/from_book/strikes/reverse_cleave.png';
import basicStrike from './images/from_book/strikes/basic_strike.png';
import movingStrike from './images/from_book/strikes/step_forward_strike.png';
import uppercut from './images/from_book/strikes/uppercut.png';
import blowAngles from './images/from_book/strikes/blow_angles.png';

export let strikes = [
    {
        name: "Basic Strike",
        img: <img src={basicStrike} alt="Basic Strike" />,
        card: <div></div>,
        fullscreen: (
            < div >
                <p>
                    A: Start with the saber over your right shoulder
                <br />B: Breathe out while swinging the saber in front of you
                <br />C: Breathe in and chamber the saber to the left shoulder
                <br />D: Breathe out and bring the saber back through the center
                <br />E: Breathe in and chamber the saber back to the right
            </p>
                <hr />
                <p>
                    This should be your first swing, so start slowly and try to understand the dynamics of the movement. Once you have them down, try to move through each swing in one fluid motion. Do this several times, paying attention to how the saver feels as it moves left to right.
                <br />
                    With every attack, breathe out as you strike and in as you chamber. This is a habit that should stick with you for every strike you do. It allows control over oxygen intake during sparring and adds power to your strikes.
            </p>
            </div >
        )
    },
    {
        name: "Moving Strike",
        img: <img src={movingStrike} alt="Moving Strike" />,
        card: <div></div>,
        fullscreen: (
            <div>
                <p>A: Start with your saber chambered over your right shoulders
                    <br />B: Swing your saber forward while taking a step with your right foot
                    <br />C: Swing the saber to your left chamber without taking a step
                    <br />D: Bring the saber back to your center line
                    <hr />
                    This basic strike and step is fundamental to the rest of your practice. Try to time the strike to land at the same time that your step lands. This adds power to the technique.
                    <br />
                    To repeat the strike, step forward again while reversing the motions. Repeat this process until you’ve exhausted your ability to walk forward.
                    </p>
            </div>
        )
    },
    {
        name: "Middle Cut",
        img: <img src={middleCut} alt="Middle Cut" />,
        card: <div></div>,
        fullscreen: (<div>
            <p>
                A: Hold your saber to the left with the point facing behind you
                <br />B: Swing the saber across your body’s center-line
                <br />C: Fully extend your arms while moving the point of the blade in front of you
                <br />D: Keep the momentum up as the blade passes in front of you and continues right
                <hr />
                This cut crosses the center of your body and allows you to strike your opponent’s head, shoulders, and neck (and should be used with caution against a real opponent, ideally with protective headgear)
                <br />
                As you practice pay attention to how the saber feels in your hands. Practice moving and breathing while you strike.
            </p>
        </div>)

    },
    {
        name: "Cleave",
        img: <img src={cleaveab} alt="Cleave" />,
        card: <div></div>,
        fullscreen: (<div>
            <p>A: Stand in the power guard, with the saber chambered to the right
                <br />B: Bring the saber forward, keeping the hilt chest level and the point raised skyward
            <img src={cleavecd} alt="Next steps of cleave" />
                C: Strike the point through the center-line of your body, moving through long guard
            <br />D: Allow the point of the saber to descend to a space just above the ground in front of and to the left of you, into lower thrust guard
            <hr />
                The strength of the impact comes from the rotation of the blade as it swings from your shoulder to long guard position in C above. If real, the saber would cut your opponent from their lower jaw through their chest.
            <br />
                The reverse of this movement is called the false-edge reverse uppercut. The strike takes place with the false edge of the saber, and is called a reverse strike because the attack originates from the opposite side of your body from your forward foot.
            <br />
                To practice these strike, perform cleaves and uppercuts while stepping forward on each strike. If you chamber the saber over your left shoulder, you can instead perform a reverse cleave followed by a false-edge uppercut.
            <br />
                You can also allow the saber to continue past you to long tail guard for extra power on the next uppercut.
            <img src={cleaveLeft} alt="Left handed cleave" />
                A: Stand in power guard with a left shoulder chamber
            <br />B: Initiate your cleave
            <br />C: Reach maximum extension with long guard
            <br />D: Continue the strike until the point is pointed at the ground in lower thrust guard.
            <br />
                For left handed users, the cleave will be performed as shown above.
            </p>
        </div>)
    },
    {
        name: "Reverse Cleave",
        img: <img src={reverseCleave} alt="Reverse Cleave" />,
        card: <div></div>,
        fullscreen: (
            < div >
                <p>
                    A: Stand in Power Guard with your saber chambered over your left shoulder
                <br />B: Swing your saber forward
                <br />C: As you step forward, enter a long guard
                <br />D: Bring your saber down into a front guard
                <hr />
                    This movement can be used like the cleave, but it allows you to strike from the opposite side of your body.
            </p>
            </div >
        )
    },
    {
        name: "Uppercut",
        img: <img src={uppercut} alt="Uppercut" />,
        card: <div></div>,
        fullscreen: (
            <div>
                <p>
                    A: Start in Front Guard
                <br />B: Send the point of the saber into a long guard
                <br />C: As you step forward, maintaining your long guard, chamber the saber over your left shoulder as a power guard
                <hr />
                    This move can be performed without the chamber back into power guard, and in actual sparring, entering guards where the saber is behind you should only be done with the utmost caution, as it leaves you defenseless.
                <br />This move can also be performed without the step.
                </p>
            </div>
        )
    },
    {
        name: "Strike Angles",
        img: <img src={blowAngles} alt="Strike Angles" />,
        card: <div></div>,
        fullscreen: (
            <div>
                <p>
                These are the blow angles for a right handed fighter. You should always aim to strike in the straightest line possible, and it can be helpful to visualize these arrows with your strikes. Straight strikes reduce the time an opponent has to respond, which is why learning control is fundamentally important. 
                <br/><br/>
                When sparring, it is important to learn to half blow to avoid damaging  your sparring partner. This means only performing the blow halfway and in a controlled manner, so if the blow lands it won’t cause as much damage. While practicing it can be useful to use a target such as a punching bag and aim to stop right when contact is made.
                <br/><br/>
                If sparring with full blows, be sure to use protective gear. 
                </p>
            </div>
        )
    }
]
