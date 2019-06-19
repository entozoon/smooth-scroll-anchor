// IE11/Edge scrollIntoView polyfill
import * as smoothscroll from "smoothscroll-polyfill";
// const smoothscroll = require("smoothscroll-polyfill");
smoothscroll.polyfill();

type Block = "start" | "center" | "end" | "nearest";

export const smoothScroll = (element: Element, options: any) => {
  // Native modern functionality with IE11 support in a basic way, via polyfill
  element.scrollIntoView({
    behavior: options.behaviour,
    block: options.block
  });
};

const anchorClickGen = (options: any) => {
  return (anchorLink: HTMLElement, e: Event) => {
    e.preventDefault();
    // Grab the href and thence the targetted element
    var targetSelector = anchorLink.getAttribute("href") || "",
      target = document.querySelector(targetSelector);
    if (target) {
      exports.smoothScroll(target, options);
      // Pop it in the current URL anyway, so it can be used on subsequent page load (but using history so it doesn't try to scroll)
      history.pushState({}, "", `#${targetSelector.replace("#", "")}`);
    }
  };
};

// Loop over anchor links
export const smoothScrollAnchor = ({
  behaviour = "smooth",
  block = "center"
}) => {
  const anchorLinks = document.querySelectorAll('[href^="#"]:not([href="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    var anchorLink = <HTMLElement>anchorLinks[i];
    anchorLinks[i].addEventListener(
      "click",
      anchorClickGen({ block }).bind(null, anchorLink)
    );
  }
};
