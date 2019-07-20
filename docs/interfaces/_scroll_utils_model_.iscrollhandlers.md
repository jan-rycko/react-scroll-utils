> **[react-scroll-utils](../README.md)**

[Globals](../globals.md) / ["scroll-utils.model"](../modules/_scroll_utils_model_.md) / [IScrollHandlers](_scroll_utils_model_.iscrollhandlers.md) /

# Interface: IScrollHandlers

## Hierarchy

* **IScrollHandlers**

  * [IScrollUtilsOptions](_scroll_utils_model_.iscrollutilsoptions.md)

## Index

### Properties

* [handleScroll](_scroll_utils_model_.iscrollhandlers.md#optional-handlescroll)
* [handleTouchAndWheel](_scroll_utils_model_.iscrollhandlers.md#optional-handletouchandwheel)
* [handleTouchEnd](_scroll_utils_model_.iscrollhandlers.md#optional-handletouchend)

## Properties

### `Optional` handleScroll

• **handleScroll**? : *function*

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

*Defined in [scroll-utils.model.ts:36](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L36)*

#### Type declaration:

▸ (`event?`: `TouchEvent`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | `TouchEvent` |