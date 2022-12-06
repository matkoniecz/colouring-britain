import React from 'react';

import './housing-switcher.css';
import { useDisplayPreferences } from '../displayPreferences-context';

interface HousingSwitcherProps {
}

const HousingSwitcherProps: React.FC<HousingSwitcherProps> = (props) => {
    const { housing, housingSwitch } = useDisplayPreferences();
    return (
    <form className={`housing-switcher ${housing}`} onSubmit={housingSwitch}>
        <button className="btn btn-outline btn-outline-dark"
            type="submit">
            {(housing === 'enabled')? 'Switch off Housing Zones overlay' : 'Switch on Housing Zones overlay'}
        </button>
    </form>
    );
}

export default HousingSwitcherProps;
