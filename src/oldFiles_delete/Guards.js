import React from 'react';
import { PowerGuard } from './cards/guards/powerGuard';
import { BackGuard } from './cards/guards/backGuard';
import { FrontGuard } from './cards/guards/frontGuard';
import { LowerThrustGuard } from './cards/guards/lowerThrustGuard';
import { BackThrustGuard } from './cards/guards/backThrustGuard';
import { LongGuard } from './cards/guards/longGuard';
import { LongTailGuard } from './cards/guards/longTailGuard';


export class Guards extends React.Component {
    
    render() {
        let dev = false;
        let jsx = (
            <div className="card_grid">
                <PowerGuard fullscreen={dev}/>
                <BackGuard fullscreen={dev}/>
                <FrontGuard fullscreen={dev}/>
                <LowerThrustGuard fullscreen={dev}/>
                <BackThrustGuard fullscreen={dev}/>
                <LongGuard fullscreen={dev}/>
                <LongTailGuard fullscreen={dev}/>
                
            </div>
        );
        return jsx;
    }
}
