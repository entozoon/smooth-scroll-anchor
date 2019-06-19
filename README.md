# Smooth Scroll Anchor

Automatically scroll to any given anchor links.

## Install

```console
npm i --save smooth-scroll-anchor
```

## Use

```ts
import { smoothScrollAnchor } from "smooth-scroll-anchor";
smoothScrollAnchor();
```

## Markup

```html
<a href="#target">Click to scroll</a>
<div id="target">Target element</div>
```

## Options

A few cheeky lil' things can be configured like so:

```ts
smoothScrollAnchor({
  behaviour: "smooth", // [smooth | auto] Smooth animated scroll or instant
  block: "center", // [start | center | end | nearest] Alignment of the target element when it's finished scrolling
  offset: 200 // Optional offset of the target scroll position. Handy if you have a fixed header!
});
```

## Support

IE11+, Edge (via polyfill) and all modern browsers (native functionality)
