[@cosmotic/core](../../../../packages.md) / [texture](../../../index.md) / [Texture](../index.md) / View

# Class: View

Defined in: [packages/core/src/texture/index.ts:272](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L272)

## Constructors

### Constructor

> **new View**(`z_parentTexture`, `viewDesc`): `View`

Defined in: [packages/core/src/texture/index.ts:273](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L273)

#### Parameters

##### z\_parentTexture

[`Texture`](../../../classes/Texture.md)

##### viewDesc

[`view_descriptor`](../interfaces/view_descriptor.md)

#### Returns

`View`

## Properties

### aspect

> **aspect**: `GPUTextureAspect` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:301](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L301)

Aspect of the texture view.

***

### label

> **label**: `string` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:303](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L303)

The label of this texture view

***

### layersBase

> **layersBase**: `number` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:309](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L309)

Layers base.

***

### mipLevelBase

> **mipLevelBase**: `number` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:307](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L307)

Mip level base, being the index of the most detailed texture

***

### swizzle

> **swizzle**: `string` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:305](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L305)

Swizzle of this texture view.

***

### z\_parentTexture

> `readonly` **z\_parentTexture**: [`Texture`](../../../classes/Texture.md)

Defined in: [packages/core/src/texture/index.ts:274](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L274)

***

### z\_tv

> `readonly` **z\_tv**: `GPUTextureView`

Defined in: [packages/core/src/texture/index.ts:299](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L299)
