# Mason's SVG Animation Repo

This application renders a few triangle svgs which have some very basic css animations and click events. Below are the resources I used during the morning workshop at DevMountain on 2/26/18.

## Resources

* [CSS Shapes](https://css-tricks.com/examples/ShapesOfCSS/)
* [SVG Shapes/elements](https://www.w3schools.com/graphics/svg_polygon.asp)
* [SVG path element](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
* [SVG to JSX online converter](http://svg-jsx.patmoody.com/)
* [VS Code extension to strip svgs of unnecessary code](https://marketplace.visualstudio.com/items?itemName=jock.svg)
* [SVG line animation using stroke-dasharray](https://css-tricks.com/svg-line-animation-works/)
* [Animated buttom example](https://codepen.io/seanmccaffery/pen/xBpbG)
* [Creative Coding with React & SVG](https://www.youtube.com/watch?v=D40JphLwqpk)
  (this is the video I followed to make the animated triangles. It is super cool and easy to follow.)
* [Sarah Drasner's Huggy Laser Panda Factory Codepen](https://codepen.io/sdras/pen/waXKPw)

* Popular Third-party libraries used to help with animating SVGs
  * [GreenSock](https://greensock.com/)
  * [MoJS](http://mojs.io/)
  * [Snap.svg](http://snapsvg.io/)

* [Emily's repo](https://github.com/emkeator/svg-animations)

## Workshop Flow

- What are SVGs, and why are they cool?
    - Small file size compared to images like .jpg and .png
    - You can access and manipulate/animate all the individual pieces (xml)
        - This also means you can be very precise with click events
- Show some elaborate examples to get students excited before starting with basics
    - Sarah Drasner’s codepens
    - MoJS examples
- Show css shapes vs svg shapes
- Talk about the path element
- Show how React works well with svgs
    - Beware of jsx syntax differences
    - Build triangle example using components
    - Other scenes from Creative Coding with React & SVG video
- Show animation using css and click events
    - Triangle example
- Talk about stroke-dasharray and stroke-dashoffset
    - SVG line animation resource (css-tricks article)
    - Codepen button example
- Introduce Emily’s repo
    - Talk about how she really used state to help with her animations
    - Mention requestAnimationFrame()
    - Mention that there are third party libraries Mo.js, snap.svg, greensock to help with animating svgs

