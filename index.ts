// IE11/Edge scrollIntoView polyfill
import * as smoothscroll from "smoothscroll-polyfill";
// const smoothscroll = require("smoothscroll-polyfill");
smoothscroll.polyfill();

type Block = "start" | "center" | "end" | "nearest";
export const smoothScroll = (element: Element, block: Block = "center") => {
  // Native modern functionality with IE11 support in a basic way, via polyfill
  element.scrollIntoView({
    behavior: "smooth",
    block
  });
};

const anchorClick = (anchorLink: HTMLElement, e: Event) => {
  e.preventDefault();
  // Grab the href and thence the targetted element
  var targetSelector = anchorLink.getAttribute("href") || "",
    target = document.querySelector(targetSelector);
  if (target) {
    exports.smoothScroll(target);
  }
};

// Loop over anchor links
export const smoothScrollAnchor = () => {
  const anchorLinks = document.querySelectorAll('[href^="#"]:not([href="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    var anchorLink = <HTMLElement>anchorLinks[i];
    anchorLinks[i].addEventListener(
      "click",
      anchorClick.bind(null, anchorLink)
    );
  }
};
