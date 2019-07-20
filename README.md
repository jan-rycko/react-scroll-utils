# react-scroll-utils
Utils to handle various scrolling needs.
It attaches to ref inside component, handles touch, scroll and wheel events consistently.

## Installation
```sh
npm install --save react-scroll-utils
```

## Docs
Complete docs can be found [here](https://github.com/jan-rycko/react-scroll-utils/tree/master/docs).

Below some use cases in more details.

## Component

For example purposes let's assume we want to create two types of components, that will handle two types of possible scrolling scenarios.
- One will render scrollable horizontal Image slider.
- Second one will render scrollable (vertical) list of ToDo elements.

### Initializing component. 
If you're using typescript, there is a component type to help with implementation.

```ts
import React from 'react';
import ScrollUtils, {IXScrollComponent, TouchAndWheelEvent} from 'react-scroll-utils';

class ScrollComponent extends React.PureComponent implements IXScrollComponent<HTMLElement> {
    scrollUtils: ScrollUtils;
    scrollContainer = React.createRef<HTMLElement>();
    state = {
        // will be populated on scroll change
        // each of those state props is optional
        isAtXStart: true,
        isAtXEnd: false,
        scrollX: 0,
        maxXScroll: null,
    };
}
```

Example above assumes you're creating component handling X scroll (our Image slider).
There is also similar interface for Y scroll to handle our vertical list.

There are also two types of X + Y scroll handling.
For our slider we might as well use the latter to react not only to X scroll, but bigger of X or Y.

```ts
// For components that are not sure which scroll (X or Y) will be used, for example provided by prop
export type IXYScrollComponent<E extends HTMLElement = HTMLElement> = IXScrollComponent<E> & IYScrollComponent<E>;
// FOR COMPONENTS THAT WILL USE EITHER SCROLL, FOR EXAMPLE WHICH ONE IS BIGGER
export type IXOrYScrollComponent<E extends HTMLElement = HTMLElement> = IXScrollComponent<E> | IYScrollComponent<E>;
```

Either direction scroll, especially animated, can be handled in two ways – both having their pros and cons.
- by setting transform: translate style on all children of the scrollable component
- by applying scrollLeft and scrollTop on a frame to frame basis, thus requiring to calculate values on a movement curve

Let's start with the basics applying first scenario to our component.

### Initializing ScrollUtils
Our scrollContainer ref is attached to our scrolling element.
Let's pass our whole component to ScrollUtils to help us handle state changes and attach our handlers.

Note: handlers will attach to window, so we want to make sure to detach them when they're not used.
- Slider type, scrolling based on css transform: translate.
```ts
componentDidMount() {
    const {slides} = this.props;
    
    // those ones you'll want to calculate or hardcode, thus setter methods are provided to re-calculate them when needed
    const scrollComponentWidth = this.scrollComponent.current.offsetWidth;
    const pages = Math.ceil(slides / 4); // render 4 slides in a row, styling grid is up to you
    
    this.scrollUtils = new ScrollUtils({
        component: this,
        scroll: Scroll.X,
        handleTouchAndWheel: this.handleTouchAndWheel, // minimal setup to controll reading various scroll
        step: scrollComponentWidth,
        pages, 
    });
    
    this.scrollUtils.attachScrolling(); // toggle whenever needed
}

componentWillUnmount() {
    this.scrollUtils.detachScrolling(); // or whenever scrolling is toggled off
}
```

### Reading scroll consistently

Let's read scroll delta and decide what to do with it:

```ts
handleTouchAndWheel = (event: TouchAndWheelEvent) => { // WheelEvent & TouchEvent
    // remember that it is a window event
    if (!this.scrollContainer.current.contains(event.target)) {
        return;
    }
    
    event.preventDefault(); // if we want to stop document scrolling
    
    const delta = this.scrollUtils.getScrollDelta(event, /* Scroll.X - provided on init, customizable */);
    
    // note: here you could also use this.scrollUtils.getMaxScrollDelta(event) to get max from X/Y movement 
    
    if (!delta) {
        return;
    }
    
    this.scrollUtils.moveByScrollStep({
        direction: Math.sign(delta), // DirectionSign.Plus | DirectionSign.Minus | DirectionSign.Zero,
        // callback, // do something after scroll is unlocked
        // if needed, other options can be overwritten here
        // scroll,
        // step,
        // pages,
        // or customized:
        // maxScroll,
        // animate,
    });
};
```
We passed pure event to getScrollDelta. No matter if it's a Wheel or Touch event, getScrollDelta will handle it.
Only downside is for TouchEvent we don't get delta first frame as delta is calculated from position diff.

We provided other options before, so the only thing we need to do now is to pass direction to move – -1, 0 or +1 for any _Scroll_.
moveByScrollStep will apply proper component state for us.

Animation is locked for ScrollUtils.transitionTime (static, defaults to 300)
and will run for ScrollUtils.scrollTransitionTime (defaults to ScrollUtils.transitionTime + 200).

### Applying scroll style
Now as this util only populated state for us it's still up to us what to do with it. For the most common case we can apply it like that:

```ts
render() {
    const {slides} = this.props;

    return (
        <div ref={this.scrollContainer}>
            {slides.map(slide => {
                <div style={this.scrollUtils.getScrolledByStepChildrenStyle(/* Scroll.X - provided on init, customizable */)}>
                    <h3>{slide.title}</h3>
                    <img src={slide.src} />
                </div>
            })}
        </div>
    );
}
```

And that's it. Our components children now will get transforms based on our scroll.
Pixel scroll X or Y value and boolean values isAt(X/Y)(Start/End) can be used to calculate style and other components (for example arrows) according to your needs.

As it is component's state we can react to it in component lifecycle methods:

```ts
componentDidUpdate(prevProps) {
    const {slides} = this.props;
    const {isAtXEnd, maxScroll} = this.state;
    
    const slidesAdded = slides.length !== prevProps.slides.length;
    
    if (slidesAdded && isAtXEnd) {
        this.scrollUtils.moveToPosition({ position: maxScroll, animate: false });
    }
}
```

Approach to handle transform rather than scrollTop/Left has it's upside – we can fairly easy move to a definite position.

We will also not be forced to use overflow: hidden;

Downside is it's harder to sync transform animation with for example touch movement.

### Handling scroll values

Let's go back to ScrollUtils initialization and do it a bit differently this time to handle our ToDo list. Again let's start from minimal setup:
```ts
this.scrollUtils = new ScrollUtils({
    component: this,
    scroll: Scroll.Y,
    handleTouchAndWheel: this.handleTouchAndWheel,
});

this.scrollUtils.attachScrolling();
```

```ts
handleTouchAndWheel = (event: TouchAndWheelEvent) => {
    if (!this.scrollContainer.current.contains(event.target)) {
        return;
    }

    event.preventDefault();

    // this is optional here, for customisation
    // smoothScroll can derive delta from event based on your initial config
    const delta = this.scrollUtils.getScrollDelta(event);

    if (!delta) {
        return;
    }

    this.scrollUtils.smoothScroll({
        event,
        delta,
        // smoothScroll will not set state for us, but we can manually use setScrollingPosition for this
        // this will run on every scroll animation step
        callback: this.scrollUtils.setScrollingPosition,
    });
};
```

And that's it. Remember to set overflow: hidden; on scrollContainer.

As our ToDo list grow, we might want to ensure that we always see last element on the list:
```ts
componentDidUpdate(prevProps) {
    const {slides} = this.props;
    const {isAtYEnd, maxYScroll} = this.state;
    
    const slidesAdded = slides.length !== prevProps.slides.length;
    
    if (slidesAdded && isAtYEnd) {
        this.scrollUtils.smoothScrollToPosition(maxYScroll);
    }
}

```

There are more case specific methods in ScrollUtils.

Feel free to explore them as well as different possibilities that'll arise while creating new scrollable components.

## Issues and contribution
If you have any issues, use GitHub issue tracker. If you want to contribute, you're very welcome to send pull request as well as feature requests to me directly.
