React-Tappable
==============

Tappable component for React. Abstracts touch events to implement `onTap`, `onPress`, and pinch events.

The events mimic their native equivalents as closely as possible:

* the baseClass (default: `Tappable`) has `-active` or `-inactive` added to it to enable pressed-state styling
* the pressed state is visually cancelled if the touch moves too far away from the element, but resumes if the touch comes back again
* when you start scrolling a parent element, the touch event is cancelled
* if the `onPress` property is set, it will cancel the touch event after the press happens

When touch events are not supported, it will fall back to mouse events.


### Adding it to your project

~~~
meteor add praneybehl:react-tappable
~~~


## Demo & Examples

[Live Demo:](http://jedwatson.github.io/react-tappable/)


Usage
=====

React-tappable generates a React component (defaults to `<span>`) and binds touch events to it.

To disable default event handling (e.g. scrolling) set the `preventDefault` prop.

```js

<Tappable onTap={this.handleTapEvent}>Tap me</Tappable>
```

### Properties

* `activeDelay` ms delay before the `-active` class is added, defaults to `0`
* `component` component to render, defaults to `'span'`
* `className` optional class name for the component
* `classBase` base to use for the active/inactive classes
* `moveThreshold` px to allow movement before cancelling a tap; defaults to `100`
* `pressDelay` ms delay before a press event is detected, defaults to `1000`
* `pressMoveThreshold` px to allow movement before ignoring long presses; defaults to `5`
* `preventDefault` (boolean) automatically call preventDefault on all events
* `stopPropagation` (boolean) automatically call stopPropagation on all events
* `style` (object) styles to apply to the component

### Special Events

These are the special events implemented by `Tappable`.

* `onTap` fired when touchStart or mouseDown is followed by touchEnd or mouseUp within the moveThreshold
* `onPress` fired when a touch is held for the specified ms
* `onPinchStart` fired when two fingers land on the screen
* `onPinchMove` fired on any movement while two fingers are on screen
* `onPinchEnd` fired when less than two fingers are left on the screen, onTouchStart is triggered, if one touch remains

#### Pinch Events

Pinch events come with a special object with additional data to actually be more useful than the native events:

* touches: Array of Objects - {identifier, pageX, pageY} - raw data from the event
* center: Object - {x, y} - Calculated center between the two touch points
* angle: Degrees - angle of the line connecting the two touch points to the X-axis
* distance: Number of pixels - between the two touch points
* displacement: Object {x, y} - offset of the center since the pinch began
* displacementVelocity: Object {x, y} : Pixels/ms - Immediate velocity of the displacement
* rotation: degrees - delta rotation since the beginning of the gesture
* rotationVelocity: degrees/millisecond - immediate rotational velocity
* zoom: Number - Zoom factor - ratio between distance between the two touch points now over initial
* zoomVelocity: zoomFactor/millisecond - immediate velocity of zooming
* time: milliseconds since epoch - Timestamp

#### Known Issues

* The pinch implementation has not been thoroughly tested
* Any touch event with 3 three or more touches is completely ignored.

### Native Events

The following native event handlers can also be specified.

* `onTouchStart`
* `onTouchMove`
* `onTouchEnd`
* `onMouseDown`
* `onMouseUp`
* `onMouseMove`
* `onMouseOut`

Returning `false` from `onTouchStart` or `onMouseDown` handlers will prevent `Tappable` from handling the event.


This package is a wrap around [React-Tappable](https://github.com/JedWatson/react-tappable/) by Jed Watson

## License

(MIT License)
