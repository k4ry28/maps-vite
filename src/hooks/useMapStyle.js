import { useState } from 'react';
import { getMapStyle } from '@/utils/getMapStyle';

export const useMapStyle = (style) => {
    const [mapStyle, setMapStyle] = useState(getMapStyle(style));

    const handleStyleChange = (style) => {
        setMapStyle(getMapStyle(style));
    }

    return { mapStyle, handleStyleChange };
}

