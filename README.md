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

Live demo: [jedwatson.github.io/react-tappable](http://jedwatson.github.io/react-tappable/)


Usage
=====
