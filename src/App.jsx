import './App.css'
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapLibre } from './components/Map/map.jsx';
import { MapStyleContextProvider } from './contexts/mapStyleContext.jsx';

function App() {

  return (
    <main>
      <h1 className="text-3xl font-bold underline"> GeoMap </h1>
      <MapStyleContextProvider>
        <MapLibre />      
      </MapStyleContextProvider>
    </main>
  )
}

export default App;
