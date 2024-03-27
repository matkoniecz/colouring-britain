import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { LayerEnablementState, MapTheme } from './config/map-config';

interface DisplayPreferencesContextState {
    showOverlayList: (e: React.FormEvent<HTMLFormElement>) => void;
    resetLayersAndHideTheirList: (e: React.FormEvent<HTMLFormElement>) => void;

    vista: LayerEnablementState;
    vistaSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    vistaSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    flood: LayerEnablementState;
    floodSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    floodSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    creative: LayerEnablementState;
    creativeSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    creativeSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    housing: LayerEnablementState;
    housingSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    housingSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    conservation: LayerEnablementState;
    conservationSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    conservationSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    parcel: LayerEnablementState;
    parcelSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    parcelSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    rivers: LayerEnablementState;
    riversSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    riversSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    borough: LayerEnablementState;
    boroughSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    boroughSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    historicData: LayerEnablementState;
    historicDataSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    historicDataSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    historicMap: LayerEnablementState;
    historicMapSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    historicMapSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    aerialPhotosMap: LayerEnablementState;
    aerialPhotosMapSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    aerialPhotosMapSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    historicalFootprints: LayerEnablementState;
    historicalFootprintsSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    historicalFootprintsSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    openStreetMap: LayerEnablementState;
    openStreetMapSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    openStreetMapSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    darkLightTheme: MapTheme;
    darkLightThemeSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    darkLightThemeSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;

    showLayerSelection: LayerEnablementState;
    showLayerSelectionSwitch: (e: React.FormEvent<HTMLFormElement>) => void;
    showLayerSelectionSwitchOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const stub = (): never => {
    throw new Error('DisplayPreferencesProvider not set up');
};

export const DisplayPreferencesContext = createContext<DisplayPreferencesContextState>({
    showOverlayList: stub,
    resetLayersAndHideTheirList: stub,

    vista: undefined,
    vistaSwitch: stub,
    vistaSwitchOnClick: undefined,

    flood: undefined,
    floodSwitch: stub,
    floodSwitchOnClick: undefined,

    creative: undefined,
    creativeSwitch: stub,
    creativeSwitchOnClick: undefined,

    housing: undefined,
    housingSwitch: stub,
    housingSwitchOnClick: undefined,

    conservation: undefined,
    conservationSwitch: stub,
    conservationSwitchOnClick: undefined,

    rivers: undefined,
    riversSwitch: stub,
    riversSwitchOnClick: undefined,

    parcel: undefined,
    parcelSwitch: stub,
    parcelSwitchOnClick: undefined,

    borough: undefined,
    boroughSwitch: stub,
    boroughSwitchOnClick: undefined,

    historicData: undefined,
    historicDataSwitch: stub,
    historicDataSwitchOnClick: undefined,

    historicMap: undefined,
    historicMapSwitch: stub,
    historicMapSwitchOnClick: undefined,

    aerialPhotosMap: undefined,
    aerialPhotosMapSwitch: stub,
    aerialPhotosMapSwitchOnClick: undefined,

    historicalFootprints: undefined,
    historicalFootprintsSwitch: stub,
    historicalFootprintsSwitchOnClick: undefined,

    openStreetMap: undefined,
    openStreetMapSwitch: stub,
    openStreetMapSwitchOnClick: undefined,

    darkLightTheme: undefined,
    darkLightThemeSwitch: stub,
    darkLightThemeSwitchOnClick: undefined,

    showLayerSelection: undefined,
    showLayerSelectionSwitch: stub,
    showLayerSelectionSwitchOnClick: undefined,
});

const noop = () => {};

export const DisplayPreferencesProvider: React.FC<{}> = ({children}) => {
    const defaultVista = 'disabled'
    const defaultFlood = 'disabled'
    const defaultCreative = 'disabled'
    const defaultHousing = 'disabled'
    const defaultBorough = 'enabled'
    const defaultRivers = 'disabled'
    const defaultParcel = 'disabled'
    const defaultConservation = 'disabled'
    const defaultHistoricData = 'disabled'
    const defaultHistoricMap = 'disabled'
    const defaultaerialPhotosMap = 'disabled'
    const defaultHistoricalFootprints = 'disabled'
    const defaultOpenStreetMap = 'disabled'
    const defaultShowLayerSelection = 'disabled'
    const [vista, setVista] = useState<LayerEnablementState>(defaultVista);
    const [flood, setFlood] = useState<LayerEnablementState>(defaultFlood);
    const [creative, setCreative] = useState<LayerEnablementState>(defaultCreative);
    const [housing, setHousing] = useState<LayerEnablementState>(defaultHousing);
    const [rivers, setRivers] = useState<LayerEnablementState>(defaultRivers);
    const [borough, setBorough] = useState<LayerEnablementState>(defaultBorough);
    const [parcel, setParcel] = useState<LayerEnablementState>(defaultParcel);
    const [conservation, setConservation] = useState<LayerEnablementState>(defaultConservation);
    const [historicData, setHistoricData] = useState<LayerEnablementState>(defaultHistoricData);
    const [historicMap, setHistoricMap] = useState<LayerEnablementState>(defaultHistoricMap);
    const [aerialPhotosMap, setaerialPhotosMap] = useState<LayerEnablementState>(defaultHistoricMap);
    const [historicalFootprints, setHistoricalFootprints] = useState<LayerEnablementState>(defaultHistoricalFootprints);
    const [openStreetMap, setOpenStreetMapMap] = useState<LayerEnablementState>(defaultOpenStreetMap);
    const [darkLightTheme, setDarkLightTheme] = useState<MapTheme>('night');
    const [showLayerSelection, setShowLayerSelection] = useState<LayerEnablementState>(defaultShowLayerSelection);

    const showOverlayList = useCallback(
        (e) => {
            setShowLayerSelection('enabled')
        },
        []
    )

    const resetLayersAndHideTheirList = useCallback(
        (e) => {
            setVista(defaultVista);
            setFlood(defaultFlood);
            setCreative(defaultCreative);
            setHousing(defaultHousing);
            setRivers(defaultRivers);
            setBorough(defaultBorough)
            setParcel(defaultParcel);
            setConservation(defaultConservation);
            setHistoricData(defaultHistoricData);
            setHistoricMap(defaultHistoricMap);
            setHistoricalFootprints(defaultHistoricalFootprints);
            setShowLayerSelection(defaultShowLayerSelection); // reset layers + hiding this panel is integrated into one action
            //setDarkLightTheme('night'); // reset only layers
    },
        []
    )

    function anyLayerModifiedState() {
        if(vista != defaultVista) {
            return true;
        }
        if(flood != defaultFlood) {
            return true;
        }
        if(creative != defaultCreative) {
            return true;
        }
        if(housing != defaultHousing) {
            return true;
        }
        if(rivers != defaultRivers) {
            return true;
        }
        if(borough != defaultBorough) {
            return true;
        }
        if(parcel != defaultParcel) {
            return true;
        }
        if(conservation != defaultConservation) {
            return true;
        }
        if(historicData != defaultHistoricData) {
            return true;
        }
        if(historicMap != defaultHistoricMap) {
            return true;
        }
        if(aerialPhotosMap != defaultaerialPhotosMap) {
            return true;
        }
        if(historicalFootprints != defaultHistoricalFootprints) {
            return true;
        }
        if(openStreetMap != defaultOpenStreetMap) {
            return true;
        }
        //darkLightTheme not handled here
        return false;
    }

    const vistaSwitch = useCallback(
        (e) => {
            e.preventDefault();
            const newVista = (vista === 'enabled')? 'disabled' : 'enabled';
            setVista(newVista);
        },
        [vista],
    )

    const vistaSwitchOnClick = (e) => {
            e.preventDefault();
            const newVista = (vista === 'enabled')? 'disabled' : 'enabled';
            setVista(newVista);
    }

    const floodSwitch = useCallback(
        (e) => {
            e.preventDefault();
            const newFlood = (flood === 'enabled')? 'disabled' : 'enabled';
            setFlood(newFlood);
        },
        [flood],
    )

    const floodSwitchOnClick = (e) => {
        e.preventDefault();
        const newFlood = (flood === 'enabled')? 'disabled' : 'enabled';
        setFlood(newFlood);
    }

    const housingSwitch = useCallback(
        (e) => {
            e.preventDefault();
            const newHousing = (housing === 'enabled')? 'disabled' : 'enabled';
            setHousing(newHousing);
        },
        [housing],
    )

    const housingSwitchOnClick = (e) => {
        e.preventDefault();
        const newHousing = (housing === 'enabled')? 'disabled' : 'enabled';
        setHousing(newHousing);
    }

    const creativeSwitch = useCallback(
        (e) => {
            e.preventDefault();
            const newCreative = (creative === 'enabled')? 'disabled' : 'enabled';
            setCreative(newCreative);
        },
        [creative],
    )

    const creativeSwitchOnClick = (e) => {
        e.preventDefault();
        const newCreative = (creative === 'enabled')? 'disabled' : 'enabled';
        setCreative(newCreative);
    }

    const riversSwitch = useCallback(
        (e) => {
            flipRivers(e)
        },
        [rivers],
    )
    const riversSwitchOnClick = (e) => {
        flipRivers(e)
    }
    function flipRivers(e) {
        e.preventDefault();
        const newRivers = (rivers === 'enabled')? 'disabled' : 'enabled';
        setRivers(newRivers);
    }

    const boroughSwitch = useCallback(
        (e) => {
            flipBorough(e)
        },
        [borough],
    )
    const boroughSwitchOnClick = (e) => {
        flipBorough(e)
    }
    function flipBorough(e) {
        e.preventDefault();
        const newBorough = (borough === 'enabled')? 'disabled' : 'enabled';
        setBorough(newBorough);
    }

    const parcelSwitch = useCallback(
        (e) => {
            flipParcel(e)
        },
        [parcel],
    )
    const parcelSwitchOnClick = (e) => {
        flipParcel(e)
    }
    function flipParcel(e) {
        e.preventDefault();
        const newParcel = (parcel === 'enabled')? 'disabled' : 'enabled';
        setParcel(newParcel);
    }

    const conservationSwitch = useCallback(
        (e) => {
            flipConservation(e)
        },
        [conservation],
    )
    const conservationSwitchOnClick = (e) => {
        flipConservation(e)
    }
    function flipConservation(e) {
        e.preventDefault();
        const newConservation = (conservation === 'enabled')? 'disabled' : 'enabled';
        setConservation(newConservation);
    }

    const historicDataSwitch = useCallback(
        (e) => {
            if (historicMap === 'enabled') {
                flipHistoricMap(e);
            }
            if (historicalFootprints === 'enabled') {
                flipHistoricFootprints(e);
            }
            flipHistoricData(e);
        },
        [historicData, historicMap, historicalFootprints],
    )
    const historicDataSwitchOnClick = (e) => {
        flipHistoricData(e)
    }
    function flipHistoricData(e) {
        e.preventDefault();
        const newHistoric = (historicData === 'enabled')? 'disabled' : 'enabled';
        setHistoricData(newHistoric);
    }

    const historicMapSwitch = useCallback(
        (e) => {
            if (historicData === 'enabled') {
                flipHistoricData(e);
            }
            if (historicalFootprints === 'enabled') {
                flipHistoricFootprints(e);
            }
            flipHistoricMap(e);
        },
        [historicMap, historicData, historicalFootprints],
    )
    const historicMapSwitchOnClick = (e) => {
        flipHistoricMap(e)
    }
    function flipHistoricMap(e) {
        e.preventDefault();
        const newHistoric = (historicMap === 'enabled')? 'disabled' : 'enabled';
        
        setHistoricMap(newHistoric);
    }

    const aerialPhotosMapSwitch = useCallback(
        (e) => {
            flipaerialPhotosMap(e);
        },
        [aerialPhotosMap],
    )
    const aerialPhotosMapSwitchOnClick = (e) => {
        flipaerialPhotosMap(e)
    }
    function flipaerialPhotosMap(e) {
        e.preventDefault();
        const newHistoric = (aerialPhotosMap === 'enabled')? 'disabled' : 'enabled';
        setaerialPhotosMap(newHistoric);
    }

    const historicalFootprintsSwitch = useCallback(
        (e) => {
            if (historicMap === 'enabled') {
                flipHistoricMap(e);
            }
            if (historicData === 'enabled') {
                flipHistoricData(e);
            }
            flipHistoricFootprints(e)
        },
        [historicMap, historicData, historicalFootprints],
    )
    const historicalFootprintsSwitchOnClick = (e) => {
        flipHistoricFootprints(e)
    }
    function flipHistoricFootprints(e) {
        e.preventDefault();
        const newFootprints = (historicalFootprints === 'enabled')? 'disabled' : 'enabled';
        setHistoricalFootprints(newFootprints);
    }

    const openStreetMapSwitch = useCallback(
        (e) => {
            flipOpenStreetMap(e);
        },
        [openStreetMap],
    )
    const openStreetMapSwitchOnClick = (e) => {
        flipOpenStreetMap(e)
    }
    function flipOpenStreetMap(e) {
        e.preventDefault();
        const newOpenStreetMap = (openStreetMap === 'enabled')? 'disabled' : 'enabled';
        setOpenStreetMapMap(newOpenStreetMap);
    }

    const darkLightThemeSwitch = useCallback(
        (e) => {
            flipDarkLightTheme(e)
        },
        [darkLightTheme],
    )
    const darkLightThemeSwitchOnClick = (e) => {
        flipDarkLightTheme(e)
    }
    function flipDarkLightTheme(e) {
        e.preventDefault();
        const newDarkLightTheme = (darkLightTheme === 'light')? 'night' : 'light';
        setDarkLightTheme(newDarkLightTheme);
    }

    const showLayerSelectionSwitch = useCallback(
        (e) => {
            flipShowLayerSelection(e)
        },
        [showLayerSelection],
    )
    const showLayerSelectionSwitchOnClick = (e) => {
        flipShowLayerSelection(e)
    }
    function flipShowLayerSelection(e) {
        e.preventDefault();
        const newShowLayerSelection = (showLayerSelection === 'enabled')? 'disabled' : 'enabled';
        setShowLayerSelection(newShowLayerSelection);
    }


    return (
        <DisplayPreferencesContext.Provider value={{
            showOverlayList,
            resetLayersAndHideTheirList,

            vista,
            vistaSwitch,
            vistaSwitchOnClick,
            flood,
            floodSwitch,
            floodSwitchOnClick,
            creative,
            creativeSwitch,
            creativeSwitchOnClick,
            housing,
            housingSwitch,
            housingSwitchOnClick,
            conservation,
            conservationSwitch,
            conservationSwitchOnClick,
            parcel,
            parcelSwitch,
            parcelSwitchOnClick,
            rivers,
            riversSwitch,
            riversSwitchOnClick,

            borough,
            boroughSwitch,
            boroughSwitchOnClick,
        
            historicData,
            historicDataSwitch,
            historicDataSwitchOnClick,

            historicMap,
            historicMapSwitch,
            historicMapSwitchOnClick,

            aerialPhotosMap,
            aerialPhotosMapSwitch,
            aerialPhotosMapSwitchOnClick,

            historicalFootprints,
            historicalFootprintsSwitch,
            historicalFootprintsSwitchOnClick,

            openStreetMap,
            openStreetMapSwitch,
            openStreetMapSwitchOnClick,

            darkLightTheme,
            darkLightThemeSwitch,
            darkLightThemeSwitchOnClick,

            showLayerSelection,
            showLayerSelectionSwitch,
            showLayerSelectionSwitchOnClick
        }}>
            {children}
        </DisplayPreferencesContext.Provider>
    );
};

export const useDisplayPreferences = (): DisplayPreferencesContextState => {
    return useContext(DisplayPreferencesContext);
};