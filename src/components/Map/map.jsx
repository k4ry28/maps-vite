import { useContext } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl/maplibre';
import { MapConfigurations } from './configurations';
import { MapStyleContext } from '@/contexts/mapStyleContext';


export const MapLibre = () => {
    const { mapStyle } = useContext(MapStyleContext);

    return (
        <div className="flex flex-col gap-2 mt-5 w-5/6">
                <ReactMapGL
                    initialViewState={{
                        longitude: -68.843019,
                        latitude: -32.899973, 
                        zoom: 12
                    }}
                    style={{
                        width: '100%',
                        height: '83dvh'
                    }}
                    mapStyle={mapStyle}
                >
                    <NavigationControl />
                    <MapConfigurations />
                </ReactMapGL>
        </div>
        
    )
}