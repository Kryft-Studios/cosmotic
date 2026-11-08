[@cosmotic/core](../../../../packages.md) / [texture](../../../index.md) / [Texture](../index.md) / view\_descriptor

# Interface: view\_descriptor

Defined in: [packages/core/src/texture/index.ts:346](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L346)

## Properties

### aspect?

> `optional` **aspect?**: `GPUTextureAspect`

Defined in: [packages/core/src/texture/index.ts:351](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L351)

Texture aspect for your view. Normally you should use all

***

### label?

> `optional` **label?**: `string`

Defined in: [packages/core/src/texture/index.ts:348](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L348)

A label for your texture view

***

### layers?

> `optional` **layers?**: `object`

Defined in: [packages/core/src/texture/index.ts:353](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L353)

Layers configuration for this view. For configurating the count, you must config the texture descriptor

#### base?

> `optional` **base?**: `number`

***

### mipLevel?

> `optional` **mipLevel?**: `object`

Defined in: [packages/core/src/texture/index.ts:358](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L358)

Mip level configuration for this view. For configurating the count, you must config the texture desc

#### base?

> `optional` **base?**: `number`

***

### swizzle?

> `optional` **swizzle?**: `string`

Defined in: [packages/core/src/texture/index.ts:355](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L355)
