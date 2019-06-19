// IE11/Edge scrollIntoView polyfill
import * as smoothscroll from "smoothscroll-polyfill";
// const smoothscroll = require("smoothscroll-polyfill");
smoothscroll.polyfill();

type Behaviour = "smooth" | "auto";
type Block = "start" | "center" | "end" | "nearest";

export const smoothScroll = (element: HTMLElement, options: any) => {
  // Native modern functionality with IE11 support in a basic way, via polyfill
  if (options.offset) {
    // If given an offset, re-position the target element for a split second while triggering scroll
    const position = element.style.position,
      top = element.style.top;
    element.style.position = "relative";
    element.style.top = `-${options.offset}px`;
    element.scrollIntoView({
      behavior: options.behaviour,
      block: options.block
    });
    element.style.position = position;
    element.style.top = top;
  } else {
    element.scrollIntoView({
      behavior: options.behaviour,
      block: options.block
    });
  }
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
  block = "center",
  offset = 0
}: {
  behaviour?: Behaviour;
  block?: Block;
  offset?: number;
}) => {
  const anchorLinks = document.querySelectorAll('[href^="#"]:not([href="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    var anchorLink = <HTMLElement>anchorLinks[i];
    anchorLinks[i].addEventListener(
      "click",
      anchorClickGen({ behaviour, block, offset }).bind(null, anchorLink)
    );
  }
};
