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
exports.smoothScroll = function (element, block) {
    if (block === void 0) { block = "center"; }
    // Native modern functionality with IE11 support in a basic way, via polyfill
    element.scrollIntoView({
        behavior: "smooth",
        block: block
    });
};
var anchorClick = function (anchorLink, e) {
    e.preventDefault();
    // Grab the href and thence the targetted element
    var targetSelector = anchorLink.getAttribute("href") || "", target = document.querySelector(targetSelector);
    if (target) {
        exports.smoothScroll(target);
        // Pop it in the current URL anyway, so it can be used on subsequent page load (but using history so it doesn't try to scroll)
        history.pushState({}, "", "#" + targetSelector.replace("#", ""));
    }
};
// Loop over anchor links
exports.smoothScrollAnchor = function () {
    var anchorLinks = document.querySelectorAll('[href^="#"]:not([href="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
        var anchorLink = anchorLinks[i];
        anchorLinks[i].addEventListener("click", anchorClick.bind(null, anchorLink));
    }
};
