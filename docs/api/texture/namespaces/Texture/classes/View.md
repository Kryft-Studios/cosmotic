---
url: >-
  https://kryft-studios.github.io/cosmotic/cosmotic/api/texture/namespaces/Texture/classes/View.md
---
[**@cosmotic/core**](../../../../README.md)

***

[@cosmotic/core](../../../../packages.md) / [texture](../../../README.md) / [Texture](../README.md) / View

# Class: View

Defined in: [packages/core/src/texture/index.ts:82](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L82)

## Constructors

### Constructor

> **new View**(`z_parentTexture`, `viewDesc`): `View`

Defined in: [packages/core/src/texture/index.ts:83](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L83)

#### Parameters

##### z_parentTexture

[`Texture`](../../../classes/Texture.md)

##### viewDesc

[`view_descriptor`](../interfaces/view_descriptor.md)

#### Returns

`View`

## Properties

### aspect

> **aspect**: `GPUTextureAspect` | `undefined`

Defined in: [packages/core/src/texture/index.ts:107](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L107)

Aspect of the texture view.

***

### label

> **label**: `string` | `undefined`

Defined in: [packages/core/src/texture/index.ts:109](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L109)

The label of this texture view

***

### layersBase

> **layersBase**: `number` | `undefined`

Defined in: [packages/core/src/texture/index.ts:115](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L115)

Layers base.

***

### mipLevelBase

> **mipLevelBase**: `number` | `undefined`

Defined in: [packages/core/src/texture/index.ts:113](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L113)

Mip level base, being the index of the most detailed texture

***

### swizzle

> **swizzle**: `string` | `undefined`

Defined in: [packages/core/src/texture/index.ts:111](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L111)

Swizzle of this texture view.

***

### z_parentTexture

> `readonly` **z\_parentTexture**: [`Texture`](../../../classes/Texture.md)

Defined in: [packages/core/src/texture/index.ts:84](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L84)

***

### z_tv

> `readonly` **z\_tv**: `GPUTextureView`

Defined in: [packages/core/src/texture/index.ts:105](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L105)
