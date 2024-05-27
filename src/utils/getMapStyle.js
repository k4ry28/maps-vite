import basic_style from '@/constants/map/styles/basic.json';
import dark_style from '@/constants/map/styles/dark.json';

export const getMapStyle = (style) => {

    const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

    switch (style) {
        case 'basic':
            return basic_style;
        case 'dark':
            return dark_style;
        case 'dark-v2':
            return `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${API_KEY}`;
        case 'satellite':
            return `https://api.maptiler.com/maps/hybrid/style.json?key=${API_KEY}`;
        default:
            return basic_style;
    }
}