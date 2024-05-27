# Map Styles

You can found and download open source map styles (like basic and dark styles) from "https://openmaptiles.org/styles/". 

Just download the style file and place on the `src/constants/map/styles/` folder.
After that, you need to replace the `{key}` value on the string `sources.openmaptiles.url` and `glyphs` with their own key from "https://www.maptiler.com".

Example of the style file:


```json
{
  "version": 8,
  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "https://free.tilehosting.com/data/v3.json?key={key}"
    }
  },
  "glyphs": "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key={key}",  
}
```

You can view other free styles on the "https://www.maptiler.com/maps/" page.

In my case I used two styles, basic and dark, from the json file and other two from the cloud of Maptiler.
