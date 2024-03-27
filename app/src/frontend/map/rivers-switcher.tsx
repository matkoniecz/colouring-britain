
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export const RiversSwitcher: React.FC<{}> = () => {
        const { rivers, riversSwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${rivers}-state ${darkLightTheme}`} onSubmit={riversSwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(rivers === 'enabled')? 'rivers on' : 'rivers off'}
                </button>
            </form>
        );
    }
    