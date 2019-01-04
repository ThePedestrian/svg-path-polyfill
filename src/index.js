var path = require("svg-path-properties");

/**
 * Creates a simple SVG with a path
 */
function createSimpleSVGWithPath() {
    var xmlns = "http://www.w3.org/2000/svg";
    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS (null, "width", 100);
    svgElem.setAttributeNS (null, "height", 100);
    svgElem.innerHTML = '<path d="M5,5 C5,45 45,45 45,5" />';
    return svgElem;
}

/**
 * Test if the getTotalLength() function is supported
 */
function isGetTotalLengthSupported() {
    try {
        var svgElem = createSimpleSVGWithPath();
        svgElem.children[0].getTotalLength();
        return true;
    } catch (err) {
        // getTotalLength() API is not supported
    }
    return false;
}

// Means it is an older browser
if (!isGetTotalLengthSupported()) {
    var svgProto = SVGPathElement.prototype;

    svgProto.getTotalLength = function() {
        var d = this.getAttribute('d');
        if (d) {
            try {
                var p = path.svgPathProperties(d);
                return p.getTotalLength();
            } catch (err) {}
        }
        return 0;
    };

    svgProto.getPointAtLength = function(fractionLength) {
        var d = this.getAttribute('d');
        if (d) {
            try {
                var p = path.svgPathProperties(d);
                return p.getPointAtLength(fractionLength);
            } catch (err) {}
        }
        return {x: 0, y: 0};
    };

    svgProto.getTangentAtLength = function(fractionLength) {
        var d = this.getAttribute('d');
        if (d) {
            try {
                var p = path.svgPathProperties(d);
                return p.getTangentAtLength(fractionLength);
            } catch (err) {}
        }
        return {x: 0, y: 0};
    };
}