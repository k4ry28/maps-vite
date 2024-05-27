import { createContext } from 'react';
import { useMapStyle } from '@/hooks/useMapStyle';

export const MapStyleContext = createContext({});

export function MapStyleContextProvider({ children }) {

    const { mapStyle, handleStyleChange } = useMapStyle();

    return (
        <MapStyleContext.Provider value={{ mapStyle, handleStyleChange }}>
            {children}
        </MapStyleContext.Provider>
    );
}
