import {clampToMax} from './number-utils';
import {
    IMoveByScrollStep,
    IMoveToPosition,
    IRoundPositionToScrollStep,
    IScrollUtilsOptions,
    ISetScrollingPosition,
    ISmoothScroll,
    IXOrYScrollComponent,
    IXYScrollComponent,
    TouchAndWheelEvent,
    Scroll,
    ScrollDirection,
    ScrollEventMode,
    ScrollSize,
} from './scroll-utils.model';

class ScrollUtils<E extends HTMLElement = HTMLElement> implements IScrollUtilsOptions<E> {
    component;
    scroll;
    eventMode = ScrollEventMode.TouchAndWheel;
    handleTouchAndWheel;
    handleTouchEnd;
    handleScroll;
    step;
    pages;

    static transitionTime = 300;

    static scrollTransitionTime = ScrollUtils.transitionTime + 200;

    static get scrollTransitionStyle() {
        return { transition: `transform ${ScrollUtils.scrollTransitionTime}ms ease-in-out` };
    }

    get scrollingElement(): E {
        return this.component.scrollContainer.current;
    }

    set eventModeSet(eventMode: ScrollEventMode) {
        this.eventMode = eventMode;
    }

    set stepSet(step: number) {
        this.step = step;
    }

    set pagesSet(pages: number) {
        this.pages = pages;
    }

    set scrollSet(scroll: Scroll) {
        this.scroll = scroll;
    }

    constructor({
        component,
        scroll,
        eventMode,
        handleScroll,
        handleTouchAndWheel,
        handleTouchEnd,
        step,
        pages,
    }: IScrollUtilsOptions) {
        this.component = component;
        this.scroll = scroll;
        this.eventMode = eventMode || this.eventMode;
        this.handleScroll = handleScroll;
        this.handleTouchAndWheel = handleTouchAndWheel;
        this.handleTouchEnd = handleTouchEnd;
        this.step = step;
        this.pages = pages;
    }

    // element property selectors and calculations
    getElementScrollSize = (element: HTMLElement = this.scrollingElement, scroll = this.scroll) => {
        return element[`scroll${ScrollSize[scroll]}`];
    };

    getElementScroll = (element: HTMLElement = this.scrollingElement, scroll = this.scroll) => {
        return element[`scroll${ScrollDirection[scroll]}`];
    };

    getElementSize = (element: HTMLElement = this.scrollingElement, scroll = this.scroll) => {
        return element[`offset${ScrollSize[scroll]}`];
    };

    getElementPosition = (element: HTMLElement = this.scrollingElement, scroll = this.scroll) => {
        return element[`offset${ScrollDirection[scroll]}`];
    };

    getPositionInScrollElement = (element: HTMLElement = this.scrollingElement, scroll = this.scroll): number => {
        return this.getElementPosition(element, scroll) - this.getElementScroll(this.scrollingElement, scroll);
    };

    getMaxScroll = (element: HTMLElement = this.scrollingElement, scroll = this.scroll) => {
        return this.getElementScrollSize(element, scroll) - this.getElementSize(element, scroll);
    };

    setMaxScroll = (element: HTMLElement = this.scrollingElement, scroll = this.scroll) => {
        element[`scroll${ScrollDirection[scroll]}`] = this.getMaxScroll(element, scroll);
    };

    scrollByDelta = (delta: number, element: HTMLElement = this.scrollingElement, scroll = this.scroll): void => {
        this.scrollToPosition(this.getElementScroll(element, scroll) + delta, element, scroll);
    };

    scrollToPosition = (scrollValue: number, element: HTMLElement = this.scrollingElement, scroll = this.scroll) => {
        const maxScroll = this.getMaxScroll(element, scroll);

        element[`scroll${ScrollDirection[scroll]}`] = clampToMax(scrollValue, maxScroll);
    };

    getElementScrollSizeWithScrollStep = (step: number = this.step, pages: number = this.pages) => pages * step;

    getMaxScrollWithScrollStep = (scrollStep: number = this.step, pages: number = this.pages) =>
        this.getElementScrollSizeWithScrollStep(scrollStep, pages) - scrollStep;

    // STATE MANAGEMENT – so component can update it's state props if defined.
    setScrollingPosition = ({ margin = 10, callback, scroll = this.scroll }: ISetScrollingPosition = {}) => {
        const position: Partial<IXOrYScrollComponent['state']> = {};
        const elementScroll = this.getElementScroll(this.scrollingElement, scroll);
        const maxScroll = this.getMaxScroll(this.scrollingElement, scroll);

        this.addToScrollPositionState(position,
            `scroll${scroll}`,
            elementScroll,
        );
        this.addToScrollPositionState(position,
            `max${scroll}Scroll`,
            maxScroll,
        );
        this.addToScrollPositionState(position,
            `isAt${scroll}Start`,
            elementScroll <= margin,
        );
        this.addToScrollPositionState(position,
            `isAt${scroll}End`,
            elementScroll >= (maxScroll - margin),
        );

        if (Object.keys(position).length) {
            this.component.setState(position, callback);
        }
    };

    private addToScrollPositionState = (position: Partial<IXOrYScrollComponent['state']>, name: string, newValue: boolean | number) => {
        const prevValue = this.component.state[name];

        if (prevValue !== undefined && prevValue !== newValue) {
            position[name] = newValue;
        }
    };

    private lockScroll: boolean;
    private isScrollMoveAnimated: boolean;
    private isScrollAttached: boolean;

    private setScrollState = (scrollValue: number, maxScroll: number, animate: boolean = true, callback?: () => void, scroll = this.scroll) => {
        if (animate) this.lockScroll = true;
        this.isScrollMoveAnimated = animate;

        this.component.setState({
            [`scroll${scroll}`]: scrollValue,
            [`isAt${scroll}End`]: scrollValue === maxScroll,
            [`isAt${scroll}Start`]: scrollValue === 0,
        }, window.setTimeout.bind(null,
            () => {
                if (animate) this.lockScroll = false;
                if (typeof callback === 'function') callback();
            },
            ScrollUtils.transitionTime,
        ))
    };

    // HANDLERS WITH SIDE ACTIONS
    private handleTouchAndWheelAndCleanDelta = (event: TouchAndWheelEvent) => {
        this.handleTouchAndWheel(event);

        this.cleanScrollDelta();
    };

    private cleanDeltaAndHandleTouchEnd = (event: TouchEvent) => {
        this.cleanScrollDelta();

        if (this.handleTouchEnd) {
            this.handleTouchEnd(event);
        }
    };

    // SCROLL DELTA calculations
    private lastX: number;
    private lastY: number;

    private cleanScrollDelta = () => {
        this.lastX = 0;
        this.lastY = 0;
    };

    getScrollDelta = (event: TouchAndWheelEvent, scroll = this.scroll): number => {
        const delta = event[`delta${scroll}`];
        if (delta) { // if WheelEvent
            if (this.isInLineDeltaMode(event)) {
                return delta * 40;
            }

            return delta;
        }

        if (event.changedTouches && event.changedTouches.length) { // if TouchEvent

            const last = this[`last${scroll}`];
            const current = event.changedTouches[0][`screen${scroll}`];

            this[`last${scroll}`] = current;

            if (last) {
                return last - current;
            }
        }

        return 0;
    };

    getMaxScrollDelta = (event: TouchAndWheelEvent): number => {
        const xScrollDelta = this.getScrollDelta(event, Scroll.X);
        const yScrollDelta = this.getScrollDelta(event, Scroll.Y);

        if (Math.abs(xScrollDelta) > Math.abs(yScrollDelta)) {
            return xScrollDelta;
        } else {
            return yScrollDelta;
        }
    };

    private isInLineDeltaMode = (event: WheelEvent): boolean => event.deltaMode === 1; // FF

    // ATTACH/DETACH HANDLERS
    attachScrolling = () => {
        if (this.isScrollAttached) {
            return;
        }

        if (!this.handleTouchAndWheel) {
            console.error('You cannot attach handlers without custom Touch and Wheel handler');
        }

        this.isScrollAttached = true;

        if (this.eventMode !== ScrollEventMode.Touch) {
            window.addEventListener(
                'wheel',
                this.handleTouchAndWheelAndCleanDelta,
                { passive: false },
            );
        }

        if (this.eventMode !== ScrollEventMode.Wheel) {
            window.addEventListener(
                'touchmove',
                this.handleTouchAndWheel,
                { passive: false },
            );

            window.addEventListener(
                'touchend',
                this.cleanDeltaAndHandleTouchEnd,
            );
        }

        if (this.handleScroll) {
            window.addEventListener('scroll', this.handleScroll);
        }
    };

    detachScrolling = () => {
        if (!this.isScrollAttached) {
            return;
        }

        if (!this.handleTouchAndWheel) {
            console.error('You cannot detach handlers, Touch and Wheel handler is not set');
        }

        if (this.eventMode !== ScrollEventMode.Touch) {
            window.removeEventListener(
                'wheel',
                this.handleTouchAndWheelAndCleanDelta,
            );
        }

        if (this.eventMode !== ScrollEventMode.Wheel) {
            window.removeEventListener('touchmove', this.handleTouchAndWheel);

            window.removeEventListener(
                'touchend',
                this.cleanDeltaAndHandleTouchEnd,
            );
        }

        if (this.handleScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        }

        this.isScrollAttached = false;
    };

    // SMOOTH SCROLL requestAnimationFrame based - pass at least Touch/Wheel event OR delta - uses scrollLeft/Top
    private timeout: number;
    private animation: number;

    smoothScroll = ({ event, delta, callback, scroll = this.scroll }: ISmoothScroll) => {
        if (delta === undefined && event) {
            delta = this.getScrollDelta(event);
        }

        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            window.clearTimeout(this.timeout);
        }

        if (event && event.touches) {
            this.scrollByDelta(delta);

            if (typeof callback === 'function') callback();

            const deltaAfterScroll = delta * 20;

            this.timeout = window.setTimeout(
                this.animation = window.requestAnimationFrame.bind(null,
                    this.smoothScrollAnimation.bind(null, deltaAfterScroll, callback)
                ),
                30
            );
        } else {
            const deltaToScroll = delta * 3;

            this.animation = window.requestAnimationFrame(
                this.smoothScrollAnimation.bind(null, deltaToScroll, callback)
            );
        }
    };

    // moves to scroll value (scrollLeft/Top)
    smoothScrollToPosition = (scrollValue: number) => {
        if (!this.scrollingElement) {
            return;
        }

        const delta = scrollValue - this.getElementScroll(this.scrollingElement);

        this.smoothScroll({
            delta,
            callback: this.setScrollingPosition,
        });
    };

    // keep interval lower than delay
    private interval = 25;
    private delay = 300;

    private isDeltaBelowPx = (delta: number) => Math.abs(delta) < 1;
    private calculateStep = (delta: number) => this.interval * delta / this.delay;

    private lastTimestamp = 0;
    private isSlowEnoughToStop = (timestamp: number) => (timestamp - (this.lastTimestamp || timestamp)) > 100;

    // SCROLL ANIMATION – start with requestAnimationFrame – callback may be undefined, but is used to pass scrollX/scrollY to Component's state
    // it's flawed because step decreases too fast, not reaching original delta
    // that's why it cannot be use to animate slides-like UI
    smoothScrollAnimation = (delta: number = 0, callback: () => void, timestamp: number): void => {
        if (this.isDeltaBelowPx(delta)) {
            this.lastTimestamp = 0;
            return;
        }

        if (this.isSlowEnoughToStop(timestamp)) {
            this.lastTimestamp = 0;
            return;
        }

        this.lastTimestamp = timestamp;

        let step = this.calculateStep(delta);

        if (this.isDeltaBelowPx(step)) {
            step = Math.sign(delta);
        }

        const scrollByDirectionBefore = this.getElementScroll(this.scrollingElement);

        this.scrollByDelta(step);

        const scrollByDirectionAfter = this.getElementScroll(this.scrollingElement);

        if (scrollByDirectionBefore === scrollByDirectionAfter) {
            this.lastTimestamp = 0;
            return
        }

        if (typeof callback === 'function') callback();

        if (scrollByDirectionAfter === this.getMaxScroll(this.scrollingElement)) {
            this.lastTimestamp = 0;
            return;
        }

        this.animation = window.requestAnimationFrame(
            this.smoothScrollAnimation.bind(null, delta - step, callback)
        );
    };

    // let's try to construct step to reach defined position, ideally in given time
    calculateStepToDefinitePosition = (originalDelta: number, remainingDelta: number) => {
        const partLeft = remainingDelta / originalDelta;
        const step = remainingDelta * (1 / 12) * Math.pow(1 / partLeft, 2);

        return step;
    };

    smoothScrollToDefinitePosition = ({ originalDelta, remainingDelta, callback }: {
        originalDelta: number
        remainingDelta: number
        callback: () => void
        // tslint:disable-next-line:align
    }, timestamp: number) => {
        if (this.isDeltaBelowPx(remainingDelta)) {
            this.lastTimestamp = 0;
            return;
        }

        this.lastTimestamp = timestamp;

        let step = this.calculateStepToDefinitePosition(originalDelta, remainingDelta);

        if (this.isDeltaBelowPx(step)) {
            step = remainingDelta;
        }

        const scrollByDirectionBefore = this.getElementScroll(this.scrollingElement);

        this.scrollByDelta(step);

        const scrollByDirectionAfter = this.getElementScroll(this.scrollingElement);

        if (scrollByDirectionBefore === scrollByDirectionAfter) {
            this.lastTimestamp = 0;
            return
        }

        if (typeof callback === 'function') callback();

        if (scrollByDirectionAfter === this.getMaxScroll(this.scrollingElement)) {
            this.lastTimestamp = 0;
            return;
        }

        this.animation = window.requestAnimationFrame(
            this.smoothScrollToDefinitePosition.bind(null, {
                originalDelta,
                remainingDelta: remainingDelta - step,
                callback,
            }),
        );
    };

    // SCROLL BY STEP - scroll by transform: translate(x, y) only so far, but would be nice to unify and use scrollLeft/Top
    private getScrollValue(scroll: Scroll = this.scroll) {
        return this.component.state[`scroll${scroll}`];
    }

    moveByScrollStep = ({ scroll = this.scroll, step = this.step, pages = this.pages, direction, maxScroll, animate = true, callback }: IMoveByScrollStep) => {
        if (!this.scrollingElement || this.lockScroll) {
            return;
        }

        if ((step === undefined || pages === undefined) && maxScroll === undefined) {
            console.error('Could not move scrollValue to position, could not get maxScroll. Provide either maxScroll directly or pages and scrollStep');
            return;
        }

        const maxScrollValue = maxScroll !== undefined ?
            maxScroll
            : this.getMaxScrollWithScrollStep(step, pages);
        const scrollValue = clampToMax(this.getScrollValue(scroll) + direction * step, maxScrollValue);

        this.setScrollState(scrollValue, maxScrollValue, animate, callback, scroll);
    };

    moveToPosition = ({scroll = this.scroll, step = this.step, pages = this.pages, position, maxScroll, callback, animate = false}: IMoveToPosition) => {
        if (!this.scrollingElement || this.lockScroll) {
            return;
        }

        if ((step === undefined || pages === undefined) && maxScroll === undefined) {
            console.error('Could not move scrollValue to position, could not get maxScroll. Provide either maxScroll directly or pages and scrollStep');
            return;
        }

        const maxScrollValue = maxScroll ? maxScroll : this.getMaxScrollWithScrollStep(step, pages);
        const scrollValue = clampToMax(position, maxScrollValue);

        this.setScrollState(scrollValue, maxScroll, animate, callback, scroll);
    };

    roundPositionToScrollStep = ({scroll = this.scroll, step = this.step, pages = this.pages}: IRoundPositionToScrollStep) => {
        if (!this.scrollingElement || this.lockScroll) {
            return;
        }

        const currentPageIndex = Math.round(this.getScrollValue(scroll) / step);

        const maxScroll = this.getMaxScrollWithScrollStep(step, pages);
        const scrollValue = clampToMax(currentPageIndex * step, maxScroll);

        this.setScrollState(scrollValue, maxScroll, false, undefined, scroll);
    };

    getScrolledByStepChildrenStyle = (scroll = this.scroll) => {
        switch (scroll) {
            case Scroll.X:
                return {
                    ...(this.isScrollMoveAnimated ? ScrollUtils.scrollTransitionStyle : {}),
                    transform: `translate(${-this.getScrollValue(scroll)}px, 0)`,
                };
            case Scroll.Y:
                return {
                    ...(this.isScrollMoveAnimated ? ScrollUtils.scrollTransitionStyle : {}),
                    transform: `translate(0, ${-this.getScrollValue(scroll)}px)`,
                };
        }
    };
}

export default ScrollUtils;