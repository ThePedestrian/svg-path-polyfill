# svg-path-polyfill
Polyfill that adds `getTotalLength()`, `getPointAtLength(x)`, and more to  [SVGPathElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement "SVGPathElement") interface. This addresses missing APIs on browsers like IE11 or older.

Furthermore, moving of the APIs is known to cause issues as pointed out by MDN:

> In SVG 2 the getPathSegAtLength() and createSVGPathSeg* methods were removed and the pathLength property and the getTotalLength() and getPointAtLength() methods were moved to [SVGGeometryElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement "SVGGeometryElement").

This polyfill address these issues.

## Usage
###### Web Browser
    <!-- Regular -->
    <script type="text/javascript" src="https://raw.githubusercontent.com/ThePedestrian/svg-path-polyfill/master/build/svg-path-polyfill.js"></script>
    
    <!-- Minified version -->
    <script type="text/javascript" src="https://raw.githubusercontent.com/ThePedestrian/svg-path-polyfill/master/build/svg-path-polyfill.min.js"></script>


###### Node
    npm install --save-dev https://github.com/ThePedestrian/svg-path-polyfill


## Credits
This project makes use of [svg-path-properties](https://github.com/rveciana "svg-path-properties") library by Roger Rovira to compute the path lengths and various other properties.

## License
MIT License

Copyright (c) 2019 Uffaz Nathaniel