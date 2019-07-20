> **[react-scroll-utils](../README.md)**

[Globals](../globals.md) / ["scroll-utils.model"](../modules/_scroll_utils_model_.md) / [IXScrollComponent](_scroll_utils_model_.ixscrollcomponent.md) /

# Interface: IXScrollComponent <**E, P, S, SS**>

## Type parameters

▪ **E**: *`HTMLElement`*

▪ **P**

▪ **S**

▪ **SS**

## Hierarchy

  * [IScrollComponent](_scroll_utils_model_.iscrollcomponent.md)‹*`E`*›

  * **IXScrollComponent**

## Index

### Properties

* [scrollContainer](_scroll_utils_model_.ixscrollcomponent.md#scrollcontainer)
* [state](_scroll_utils_model_.ixscrollcomponent.md#state)

### Methods

* [UNSAFE_componentWillMount](_scroll_utils_model_.ixscrollcomponent.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_scroll_utils_model_.ixscrollcomponent.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_scroll_utils_model_.ixscrollcomponent.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](_scroll_utils_model_.ixscrollcomponent.md#optional-componentdidcatch)
* [componentDidMount](_scroll_utils_model_.ixscrollcomponent.md#optional-componentdidmount)
* [componentDidUpdate](_scroll_utils_model_.ixscrollcomponent.md#optional-componentdidupdate)
* [componentWillMount](_scroll_utils_model_.ixscrollcomponent.md#optional-componentwillmount)
* [componentWillReceiveProps](_scroll_utils_model_.ixscrollcomponent.md#optional-componentwillreceiveprops)
* [componentWillUnmount](_scroll_utils_model_.ixscrollcomponent.md#optional-componentwillunmount)
* [componentWillUpdate](_scroll_utils_model_.ixscrollcomponent.md#optional-componentwillupdate)
* [getSnapshotBeforeUpdate](_scroll_utils_model_.ixscrollcomponent.md#optional-getsnapshotbeforeupdate)
* [shouldComponentUpdate](_scroll_utils_model_.ixscrollcomponent.md#optional-shouldcomponentupdate)

## Properties

###  scrollContainer

• **scrollContainer**: *`RefObject<E>`*

*Inherited from [IScrollComponent](_scroll_utils_model_.iscrollcomponent.md).[scrollContainer](_scroll_utils_model_.iscrollcomponent.md#scrollcontainer)*

*Defined in [scroll-utils.model.ts:4](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L4)*

___

###  state

• **state**: *object*

*Defined in [scroll-utils.model.ts:8](https://github.com/jan-rycko/react-scroll-utils/blob/45edc1c/src/scroll-utils.model.ts#L8)*

#### Type declaration:

● \[▪ **id**: *string*\]: any

* **isAtXEnd**? : *boolean*

* **isAtXStart**? : *boolean*

* **maxXScroll**? : *number*

* **scrollX**? : *number*

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:646

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: `Readonly<P>`, `nextContext`: any): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:678

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | `Readonly<P>` |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: `Readonly<P>`, `nextState`: `Readonly<S>`, `nextContext`: any): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:706

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | `Readonly<P>` |
`nextState` | `Readonly<S>` |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: `Error`, `errorInfo`: `ErrorInfo`): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:575

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | `Error` |
`errorInfo` | `ErrorInfo` |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:554

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: `Readonly<P>`, `prevState`: `Readonly<S>`, `snapshot?`: `SS`): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:617

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | `Readonly<P>` |
`prevState` | `Readonly<S>` |
`snapshot?` | `SS` |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:632

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: `Readonly<P>`, `nextContext`: any): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:661

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | `Readonly<P>` |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:570

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: `Readonly<P>`, `nextState`: `Readonly<S>`, `nextContext`: any): *void*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:691

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | `Readonly<P>` |
`nextState` | `Readonly<S>` |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: `Readonly<P>`, `prevState`: `Readonly<S>`): *`SS` | null*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:611

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | `Readonly<P>` |
`prevState` | `Readonly<S>` |

**Returns:** *`SS` | null*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: `Readonly<P>`, `nextState`: `Readonly<S>`, `nextContext`: any): *boolean*

*Inherited from void*

Defined in F:/Dev/react-scroll-utils/node_modules/@types/react/index.d.ts:565

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | `Readonly<P>` |
`nextState` | `Readonly<S>` |
`nextContext` | any |

**Returns:** *boolean*