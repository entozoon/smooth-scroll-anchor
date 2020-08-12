"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE11/Edge scrollIntoView polyfill
var smoothscroll = __importStar(require("smoothscroll-polyfill"));
// const smoothscroll = require("smoothscroll-polyfill");
smoothscroll.polyfill();
exports.smoothScroll = function (element, options) {
    if (options === void 0) { options = {}; }
    // Native modern functionality with IE11 support in a basic way, via polyfill
    if (options.offset) {
        // If given an offset, re-position the target element for a split second while triggering scroll
        var position = element.style.position, top_1 = element.style.top;
        element.style.position = "relative";
        element.style.top = "-" + options.offset + "px";
        element.scrollIntoView({
            behavior: options.behaviour,
            block: options.block,
        });
        element.style.position = position;
        element.style.top = top_1;
    }
    else {
        element.scrollIntoView({
            behavior: options.behaviour,
            block: options.block,
        });
    }
};
var anchorClickGen = function (options) {
    return function (anchorLink, e) {
        e.preventDefault();
        // Grab the href and thence the targetted element
        var targetSelector = anchorLink.getAttribute("href") || "", target = document.querySelector(targetSelector);
        if (target) {
            exports.smoothScroll(target, options);
            // Pop it in the current URL anyway, so it can be used on subsequent page load (but using history so it doesn't try to scroll)
            history.pushState({}, "", "#" + targetSelector.replace("#", ""));
        }
    };
};
// Loop over anchor links
exports.smoothScrollAnchor = function (_a) {
    var _b = _a.behaviour, behaviour = _b === void 0 ? "smooth" : _b, _c = _a.block, block = _c === void 0 ? "center" : _c, _d = _a.offset, offset = _d === void 0 ? 0 : _d, _e = _a.anchorQuerySelector, anchorQuerySelector = _e === void 0 ? '[href^="#"]:not([href="#"])' : _e;
    var anchorLinks = document.querySelectorAll(anchorQuerySelector);
    for (var i = 0; i < anchorLinks.length; i++) {
        var anchorLink = anchorLinks[i];
        anchorLinks[i].addEventListener("click", anchorClickGen({ behaviour: behaviour, block: block, offset: offset }).bind(null, anchorLink));
    }
};
