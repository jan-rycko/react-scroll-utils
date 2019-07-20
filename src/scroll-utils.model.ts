import {Component, RefObject} from 'react';

export interface IScrollComponent<E extends HTMLElement = HTMLElement> extends Component {
    scrollContainer: RefObject<E>
}

export interface IXScrollComponent<E extends HTMLElement = HTMLElement> extends IScrollComponent<E> {
    state: {
        isAtXStart?: boolean
        isAtXEnd?: boolean
        scrollX?: number
        maxXScroll?: number
        [id: string]: any
    }
}

export interface IYScrollComponent<E extends HTMLElement = HTMLElement> extends IScrollComponent<E> {
    state: {
        isAtYStart?: boolean
        isAtYEnd?: boolean
        scrollY?: number
        maxYScroll?: number
        [id: string]: any
    }
}

// FOR COMPONENTS THAT ARE NOT SURE WHICH SCROLL (X or Y) WILL BE USED, FOR EXAMPLE PROVIDED BY PROP
export type IXYScrollComponent<E extends HTMLElement = HTMLElement> = IXScrollComponent<E> & IYScrollComponent<E>;
// FOR COMPONENTS THAT WILL USE EITHER SCROLL, FOR EXAMPLE WHICH ONE IS BIGGER
export type IXOrYScrollComponent<E extends HTMLElement = HTMLElement> = IXScrollComponent<E> | IYScrollComponent<E>;

export type TouchAndWheelEvent = WheelEvent & TouchEvent;

export interface IScrollHandlers {
    handleTouchAndWheel?: (event?: TouchAndWheelEvent) => void
    handleTouchEnd?: (event?: TouchEvent) => void
    handleScroll?: (event?: Event) => void // includes also scrollbar event
}

export enum DirectionSign {
    Minus = -1,
    Zero = 0,
    Plus = 1,
}

export interface ISmoothScroll {
    scroll?: Scroll
    event?: TouchAndWheelEvent
    delta?: number
    callback?(): void
}

export interface ISetScrollingPosition {
    scroll?: Scroll
    margin?: number
    callback?(): void
}

export interface IMoveByScrollStep {
    direction: DirectionSign
    scroll?: Scroll
    step?: number
    pages?: number
    maxScroll?: number
    animate?: boolean
    callback?: () => void
}

export interface IMoveToPosition {
    scroll?: Scroll
    position: number
    step?: number
    pages?: number
    maxScroll?: number
    callback?: () => void
    animate?: boolean
}

export interface IRoundPositionToScrollStep {
    scroll?: Scroll
    step?: number
    pages?: number
}

export enum Scroll {
    X = 'X',
    Y = 'Y',
}

export enum ScrollDirection {
    X = 'Left',
    Y = 'Top',
}

export enum ScrollSize {
    X = 'Width',
    Y = 'Height',
}

export enum ScrollEventMode {
    Touch = 1,
    Wheel,
    TouchAndWheel,
}

export interface IScrollUtilsOptions<E extends HTMLElement = HTMLElement> extends IScrollHandlers {
    component: IXOrYScrollComponent<E>
    scroll: Scroll
    eventMode?: ScrollEventMode
    step?: number
    pages?: number
}
