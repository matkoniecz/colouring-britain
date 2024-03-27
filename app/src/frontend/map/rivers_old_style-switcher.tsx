
    import React from 'react';

    import './map-button.css';
    import { useDisplayPreferences } from '../displayPreferences-context';

    export const Rivers_old_styleSwitcher: React.FC<{}> = () => {
        const { rivers_old_style, rivers_old_styleSwitch, darkLightTheme } = useDisplayPreferences();
        return (
            <form className={`map-button ${rivers_old_style}-state ${darkLightTheme}`} onSubmit={rivers_old_styleSwitch}>
                <button className="btn btn-outline btn-outline-dark"
                    type="submit">
                    {(rivers_old_style === 'enabled')? 'rivers_old_style on' : 'rivers_old_style off'}
                </button>
            </form>
        );
    }
    