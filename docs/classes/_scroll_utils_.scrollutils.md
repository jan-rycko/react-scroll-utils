> **[react-scroll-utils](../README.md)**

[Globals](../globals.md) / ["scroll-utils"](../modules/_scroll_utils_.md) / [ScrollUtils](_scroll_utils_.scrollutils.md) /

# Class: ScrollUtils <**E**>

## Type parameters

▪ **E**: *`HTMLElement`*

## Hierarchy

* **ScrollUtils**

## Implements

* [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md)‹*`E`*›

## Index

### Constructors

* [constructor](_scroll_utils_.scrollutils.md#constructor)

### Properties

* [component](_scroll_utils_.scrollutils.md#component)
* [eventMode](_scroll_utils_.scrollutils.md#eventmode)
* [handleScroll](_scroll_utils_.scrollutils.md#handlescroll)
* [handleTouchAndWheel](_scroll_utils_.scrollutils.md#handletouchandwheel)
* [handleTouchEnd](_scroll_utils_.scrollutils.md#handletouchend)
* [pages](_scroll_utils_.scrollutils.md#pages)
* [scroll](_scroll_utils_.scrollutils.md#scroll)
* [step](_scroll_utils_.scrollutils.md#step)
* [scrollTransitionTime](_scroll_utils_.scrollutils.md#static-scrolltransitiontime)
* [transitionTime](_scroll_utils_.scrollutils.md#static-transitiontime)

### Accessors

* [eventModeSet](_scroll_utils_.scrollutils.md#eventmodeset)
* [pagesSet](_scroll_utils_.scrollutils.md#pagesset)
* [scrollSet](_scroll_utils_.scrollutils.md#scrollset)
* [scrollingElement](_scroll_utils_.scrollutils.md#scrollingelement)
* [stepSet](_scroll_utils_.scrollutils.md#stepset)
* [scrollTransitionStyle](_scroll_utils_.scrollutils.md#static-scrolltransitionstyle)

### Methods

* [attachScrolling](_scroll_utils_.scrollutils.md#attachscrolling)
* [calculateStepToDefinitePosition](_scroll_utils_.scrollutils.md#calculatesteptodefiniteposition)
* [detachScrolling](_scroll_utils_.scrollutils.md#detachscrolling)
* [getElementPosition](_scroll_utils_.scrollutils.md#getelementposition)
* [getElementScroll](_scroll_utils_.scrollutils.md#getelementscroll)
* [getElementScrollSize](_scroll_utils_.scrollutils.md#getelementscrollsize)
* [getElementScrollSizeWithScrollStep](_scroll_utils_.scrollutils.md#getelementscrollsizewithscrollstep)
* [getElementSize](_scroll_utils_.scrollutils.md#getelementsize)
* [getMaxScroll](_scroll_utils_.scrollutils.md#getmaxscroll)
* [getMaxScrollDelta](_scroll_utils_.scrollutils.md#getmaxscrolldelta)
* [getMaxScrollWithScrollStep](_scroll_utils_.scrollutils.md#getmaxscrollwithscrollstep)
* [getPositionInScrollElement](_scroll_utils_.scrollutils.md#getpositioninscrollelement)
* [getScrollDelta](_scroll_utils_.scrollutils.md#getscrolldelta)
* [getScrolledByStepChildrenStyle](_scroll_utils_.scrollutils.md#getscrolledbystepchildrenstyle)
* [moveByScrollStep](_scroll_utils_.scrollutils.md#movebyscrollstep)
* [moveToPosition](_scroll_utils_.scrollutils.md#movetoposition)
* [roundPositionToScrollStep](_scroll_utils_.scrollutils.md#roundpositiontoscrollstep)
* [scrollByDelta](_scroll_utils_.scrollutils.md#scrollbydelta)
* [scrollToPosition](_scroll_utils_.scrollutils.md#scrolltoposition)
* [setMaxScroll](_scroll_utils_.scrollutils.md#setmaxscroll)
* [setScrollingPosition](_scroll_utils_.scrollutils.md#setscrollingposition)
* [smoothScroll](_scroll_utils_.scrollutils.md#smoothscroll)
* [smoothScrollAnimation](_scroll_utils_.scrollutils.md#smoothscrollanimation)
* [smoothScrollToDefinitePosition](_scroll_utils_.scrollutils.md#smoothscrolltodefiniteposition)
* [smoothScrollToPosition](_scroll_utils_.scrollutils.md#smoothscrolltoposition)

## Constructors

###  constructor

\+ **new ScrollUtils**(`__namedParameters`: object): *[ScrollUtils](_scroll_utils_.scrollutils.md)*

*Defined in [scroll-utils.ts:53](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L53)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`component` | [IXScrollComponent](../interfaces/_scroll_utils_model_.ixscrollcomponent.md)‹*`HTMLElement`*› \| [IYScrollComponent](../interfaces/_scroll_utils_model_.iyscrollcomponent.md)‹*`HTMLElement`*› |
`eventMode` | [ScrollEventMode](../enums/_scroll_utils_model_.scrolleventmode.md) |
`handleScroll` | function |
`handleTouchAndWheel` | function |
`handleTouchEnd` | function |
`pages` | number |
`scroll` | [Scroll](../enums/_scroll_utils_model_.scroll.md) |
`step` | number |

**Returns:** *[ScrollUtils](_scroll_utils_.scrollutils.md)*

## Properties

###  component

• **component**: *any*

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[component](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#component)*

*Defined in [scroll-utils.ts:18](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L18)*

___

###  eventMode

• **eventMode**: *[ScrollEventMode](../enums/_scroll_utils_model_.scrolleventmode.md)* =  ScrollEventMode.TouchAndWheel

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[eventMode](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#optional-eventmode)*

*Defined in [scroll-utils.ts:20](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L20)*

___

###  handleScroll

• **handleScroll**: *any*

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[handleScroll](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#optional-handlescroll)*

*Defined in [scroll-utils.ts:23](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L23)*

___

###  handleTouchAndWheel

• **handleTouchAndWheel**: *any*

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[handleTouchAndWheel](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#optional-handletouchandwheel)*

*Defined in [scroll-utils.ts:21](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L21)*

___

###  handleTouchEnd

• **handleTouchEnd**: *any*

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[handleTouchEnd](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#optional-handletouchend)*

*Defined in [scroll-utils.ts:22](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L22)*

___

###  pages

• **pages**: *any*

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[pages](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#optional-pages)*

*Defined in [scroll-utils.ts:25](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L25)*

___

###  scroll

• **scroll**: *any*

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[scroll](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#scroll)*

*Defined in [scroll-utils.ts:19](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L19)*

___

###  step

• **step**: *any*

*Implementation of [IScrollUtilsOptions](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md).[step](../interfaces/_scroll_utils_model_.iscrollutilsoptions.md#optional-step)*

*Defined in [scroll-utils.ts:24](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L24)*

___

### `Static` scrollTransitionTime

▪ **scrollTransitionTime**: *number* =  ScrollUtils.transitionTime + 200

*Defined in [scroll-utils.ts:29](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L29)*

___

### `Static` transitionTime

▪ **transitionTime**: *number* = 300

*Defined in [scroll-utils.ts:27](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L27)*

## Accessors

###  eventModeSet

• **set eventModeSet**(`eventMode`: [ScrollEventMode](../enums/_scroll_utils_model_.scrolleventmode.md)): *void*

*Defined in [scroll-utils.ts:39](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`eventMode` | [ScrollEventMode](../enums/_scroll_utils_model_.scrolleventmode.md) |

**Returns:** *void*

___

###  pagesSet

• **set pagesSet**(`pages`: number): *void*

*Defined in [scroll-utils.ts:47](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`pages` | number |

**Returns:** *void*

___

###  scrollSet

• **set scrollSet**(`scroll`: [Scroll](../enums/_scroll_utils_model_.scroll.md)): *void*

*Defined in [scroll-utils.ts:51](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`scroll` | [Scroll](../enums/_scroll_utils_model_.scroll.md) |

**Returns:** *void*

___

###  scrollingElement

• **get scrollingElement**(): *`E`*

*Defined in [scroll-utils.ts:35](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L35)*

**Returns:** *`E`*

___

###  stepSet

• **set stepSet**(`step`: number): *void*

*Defined in [scroll-utils.ts:43](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`step` | number |

**Returns:** *void*

___

### `Static` scrollTransitionStyle

• **get scrollTransitionStyle**(): *object*

*Defined in [scroll-utils.ts:31](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L31)*

**Returns:** *object*

* **transition**: *string* =  `transform ${ScrollUtils.scrollTransitionTime}ms ease-in-out`

## Methods

###  attachScrolling

▸ **attachScrolling**(): *void*

*Defined in [scroll-utils.ts:243](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L243)*

**Returns:** *void*

___

###  calculateStepToDefinitePosition

▸ **calculateStepToDefinitePosition**(`originalDelta`: number, `remainingDelta`: number): *number*

*Defined in [scroll-utils.ts:418](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L418)*

**Parameters:**

Name | Type |
------ | ------ |
`originalDelta` | number |
`remainingDelta` | number |

**Returns:** *number*

___

###  detachScrolling

▸ **detachScrolling**(): *void*

*Defined in [scroll-utils.ts:280](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L280)*

**Returns:** *void*

___

###  getElementPosition

▸ **getElementPosition**(`element`: `HTMLElement`, `scroll`: any): *number*

*Defined in [scroll-utils.ts:92](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L92)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *number*

___

###  getElementScroll

▸ **getElementScroll**(`element`: `HTMLElement`, `scroll`: any): *number*

*Defined in [scroll-utils.ts:84](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L84)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *number*

___

###  getElementScrollSize

▸ **getElementScrollSize**(`element`: `HTMLElement`, `scroll`: any): *number*

*Defined in [scroll-utils.ts:80](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L80)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *number*

___

###  getElementScrollSizeWithScrollStep

▸ **getElementScrollSizeWithScrollStep**(`step`: number, `pages`: number): *number*

*Defined in [scroll-utils.ts:118](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L118)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`step` | number |  this.step |
`pages` | number |  this.pages |

**Returns:** *number*

___

###  getElementSize

▸ **getElementSize**(`element`: `HTMLElement`, `scroll`: any): *number*

*Defined in [scroll-utils.ts:88](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L88)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *number*

___

###  getMaxScroll

▸ **getMaxScroll**(`element`: `HTMLElement`, `scroll`: any): *number*

*Defined in [scroll-utils.ts:100](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L100)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *number*

___

###  getMaxScrollDelta

▸ **getMaxScrollDelta**(`event`: [TouchAndWheelEvent](../modules/_scroll_utils_model_.md#touchandwheelevent)): *number*

*Defined in [scroll-utils.ts:229](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L229)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [TouchAndWheelEvent](../modules/_scroll_utils_model_.md#touchandwheelevent) |

**Returns:** *number*

___

###  getMaxScrollWithScrollStep

▸ **getMaxScrollWithScrollStep**(`scrollStep`: number, `pages`: number): *number*

*Defined in [scroll-utils.ts:120](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L120)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`scrollStep` | number |  this.step |
`pages` | number |  this.pages |

**Returns:** *number*

___

###  getPositionInScrollElement

▸ **getPositionInScrollElement**(`element`: `HTMLElement`, `scroll`: any): *number*

*Defined in [scroll-utils.ts:96](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L96)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *number*

___

###  getScrollDelta

▸ **getScrollDelta**(`event`: [TouchAndWheelEvent](../modules/_scroll_utils_model_.md#touchandwheelevent), `scroll`: any): *number*

*Defined in [scroll-utils.ts:204](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L204)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | [TouchAndWheelEvent](../modules/_scroll_utils_model_.md#touchandwheelevent) | - |
`scroll` | any |  this.scroll |

**Returns:** *number*

___

###  getScrolledByStepChildrenStyle

▸ **getScrolledByStepChildrenStyle**(`scroll`: any): *object | object*

*Defined in [scroll-utils.ts:523](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L523)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`scroll` | any |  this.scroll |

**Returns:** *object | object*

___

###  moveByScrollStep

▸ **moveByScrollStep**(`__namedParameters`: object): *void*

*Defined in [scroll-utils.ts:476](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L476)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`animate` | boolean | true |
`callback` | function | - |
`direction` | [DirectionSign](../enums/_scroll_utils_model_.directionsign.md) | - |
`maxScroll` | number | - |
`pages` | number |  this.pages |
`scroll` | [Scroll](../enums/_scroll_utils_model_.scroll.md) |  this.scroll |
`step` | number |  this.step |

**Returns:** *void*

___

###  moveToPosition

▸ **moveToPosition**(`__namedParameters`: object): *void*

*Defined in [scroll-utils.ts:494](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L494)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`animate` | boolean | false |
`callback` | function | - |
`maxScroll` | number | - |
`pages` | number |  this.pages |
`position` | number | - |
`scroll` | [Scroll](../enums/_scroll_utils_model_.scroll.md) |  this.scroll |
`step` | number |  this.step |

**Returns:** *void*

___

###  roundPositionToScrollStep

▸ **roundPositionToScrollStep**(`__namedParameters`: object): *void*

*Defined in [scroll-utils.ts:510](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L510)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`pages` | number |  this.pages |
`scroll` | [Scroll](../enums/_scroll_utils_model_.scroll.md) |  this.scroll |
`step` | number |  this.step |

**Returns:** *void*

___

###  scrollByDelta

▸ **scrollByDelta**(`delta`: number, `element`: `HTMLElement`, `scroll`: any): *void*

*Defined in [scroll-utils.ts:108](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L108)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delta` | number | - |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *void*

___

###  scrollToPosition

▸ **scrollToPosition**(`scrollValue`: number, `element`: `HTMLElement`, `scroll`: any): *void*

*Defined in [scroll-utils.ts:112](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L112)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`scrollValue` | number | - |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *void*

___

###  setMaxScroll

▸ **setMaxScroll**(`element`: `HTMLElement`, `scroll`: any): *void*

*Defined in [scroll-utils.ts:104](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L104)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | `HTMLElement` |  this.scrollingElement |
`scroll` | any |  this.scroll |

**Returns:** *void*

___

###  setScrollingPosition

▸ **setScrollingPosition**(`__namedParameters`: object): *void*

*Defined in [scroll-utils.ts:124](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L124)*

STATE MANAGEMENT – so component can update it's state props if defined.

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default |
------ | ------ | ------ |
`callback` | [callback](../interfaces/_scroll_utils_model_.isetscrollingposition.md#optional-callback) | - |
`margin` | number | 10 |
`scroll` | [Scroll](../enums/_scroll_utils_model_.scroll.md) |  this.scroll |

**Returns:** *void*

___

###  smoothScroll

▸ **smoothScroll**(`__namedParameters`: object): *void*

*Defined in [scroll-utils.ts:316](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L316)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`callback` | [callback](../interfaces/_scroll_utils_model_.ismoothscroll.md#optional-callback) | - |
`delta` | number | - |
`event` | `WheelEvent` & `TouchEvent` | - |
`scroll` | [Scroll](../enums/_scroll_utils_model_.scroll.md) |  this.scroll |

**Returns:** *void*

___

###  smoothScrollAnimation

▸ **smoothScrollAnimation**(`delta`: number, `callback`: function, `timestamp`: number): *void*

*Defined in [scroll-utils.ts:375](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L375)*

**Parameters:**

▪`Default value`  **delta**: *number*= 0

▪ **callback**: *function*

▸ (): *void*

▪ **timestamp**: *number*

**Returns:** *void*

___

###  smoothScrollToDefinitePosition

▸ **smoothScrollToDefinitePosition**(`__namedParameters`: object, `timestamp`: number): *void*

*Defined in [scroll-utils.ts:425](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L425)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`callback` | function |
`originalDelta` | number |
`remainingDelta` | number |

▪ **timestamp**: *number*

**Returns:** *void*

___

###  smoothScrollToPosition

▸ **smoothScrollToPosition**(`scrollValue`: number): *void*

*Defined in [scroll-utils.ts:349](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.ts#L349)*

**Parameters:**

Name | Type |
------ | ------ |
`scrollValue` | number |

**Returns:** *void*