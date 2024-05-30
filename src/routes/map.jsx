import { MapLibre } from '@/components/Map/map.jsx';
import { MapStyleContextProvider } from '@/contexts/mapStyleContext.jsx';

export default function Map() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1>Maps</h1>
            <MapStyleContextProvider>
                <MapLibre />
            </MapStyleContextProvider>
        </div>
    )
}