> **[react-scroll-utils](../README.md)**

[Globals](../globals.md) / ["scroll-utils.model"](../modules/_scroll_utils_model_.md) / [IScrollUtilsOptions](_scroll_utils_model_.iscrollutilsoptions.md) /

# Interface: IScrollUtilsOptions <**E**>

## Type parameters

▪ **E**: *`HTMLElement`*

## Hierarchy

* [IScrollHandlers](_scroll_utils_model_.iscrollhandlers.md)

  * **IScrollUtilsOptions**

## Implemented by

* [ScrollUtils](../classes/_scroll_utils_.scrollutils.md)

## Index

### Properties

* [component](_scroll_utils_model_.iscrollutilsoptions.md#component)
* [eventMode](_scroll_utils_model_.iscrollutilsoptions.md#optional-eventmode)
* [handleScroll](_scroll_utils_model_.iscrollutilsoptions.md#optional-handlescroll)
* [handleTouchAndWheel](_scroll_utils_model_.iscrollutilsoptions.md#optional-handletouchandwheel)
* [handleTouchEnd](_scroll_utils_model_.iscrollutilsoptions.md#optional-handletouchend)
* [pages](_scroll_utils_model_.iscrollutilsoptions.md#optional-pages)
* [scroll](_scroll_utils_model_.iscrollutilsoptions.md#scroll)
* [step](_scroll_utils_model_.iscrollutilsoptions.md#optional-step)

## Properties

###  component

• **component**: *[IXOrYScrollComponent](../modules/_scroll_utils_model_.md#ixoryscrollcomponent)‹*`E`*›*

*Defined in [scroll-utils.model.ts:107](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L107)*

___

### `Optional` eventMode

• **eventMode**? : *[ScrollEventMode](../enums/_scroll_utils_model_.scrolleventmode.md)*

*Defined in [scroll-utils.model.ts:109](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L109)*

___

### `Optional` handleScroll

• **handleScroll**? : *function*

*Inherited from [IScrollHandlers](_scroll_utils_model_.iscrollhandlers.md).[handleScroll](_scroll_utils_model_.iscrollhandlers.md#optional-handlescroll)*

*Defined in [scroll-utils.model.ts:37](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L37)*

#### Type declaration:

▸ (`event?`: `Event`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | `Event` |

___

### `Optional` handleTouchAndWheel

• **handleTouchAndWheel**? : *function*

*Inherited from [IScrollHandlers](_scroll_utils_model_.iscrollhandlers.md).[handleTouchAndWheel](_scroll_utils_model_.iscrollhandlers.md#optional-handletouchandwheel)*

*Defined in [scroll-utils.model.ts:35](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L35)*

#### Type declaration:

▸ (`event?`: [TouchAndWheelEvent](../modules/_scroll_utils_model_.md#touchandwheelevent)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | [TouchAndWheelEvent](../modules/_scroll_utils_model_.md#touchandwheelevent) |

___

### `Optional` handleTouchEnd

• **handleTouchEnd**? : *function*

*Inherited from [IScrollHandlers](_scroll_utils_model_.iscrollhandlers.md).[handleTouchEnd](_scroll_utils_model_.iscrollhandlers.md#optional-handletouchend)*

*Defined in [scroll-utils.model.ts:36](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L36)*

#### Type declaration:

▸ (`event?`: `TouchEvent`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | `TouchEvent` |

___

### `Optional` pages

• **pages**? : *number*

*Defined in [scroll-utils.model.ts:111](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L111)*

___

###  scroll

• **scroll**: *[Scroll](../enums/_scroll_utils_model_.scroll.md)*

*Defined in [scroll-utils.model.ts:108](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L108)*

___

### `Optional` step

• **step**? : *number*

*Defined in [scroll-utils.model.ts:110](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L110)*