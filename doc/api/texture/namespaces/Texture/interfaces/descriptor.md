[@cosmotic/core](../../../../packages.md) / [texture](../../../index.md) / [Texture](../index.md) / descriptor

# Interface: descriptor

Defined in: [packages/core/src/texture/index.ts:361](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L361)

The descriptor for the texture.

## Extended by

- [`descriptor`](../../Texture2D/interfaces/descriptor.md)

## Properties

### defaultViewConfig?

> `optional` **defaultViewConfig?**: [`view_descriptor`](view_descriptor.md)

Defined in: [packages/core/src/texture/index.ts:405](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L405)

default view config. all individually passed configs are deeply rested to this.

***

### dimension

> **dimension**: [`Dimension`](../enumerations/Dimension.md) \| `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:363](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L363)

The dimension of this texture. If you use GPUTextureViewDimension, we lookup using Dimension[.dimension]

***

### format

> **format**: `GPUTextureFormat`

Defined in: [packages/core/src/texture/index.ts:365](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L365)

What the data format for this texture is.

***

### label?

> `optional` **label?**: `string`

Defined in: [packages/core/src/texture/index.ts:374](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L374)

The label of this texture

***

### layers

> **layers**: `object`

Defined in: [packages/core/src/texture/index.ts:369](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L369)

Layer config for this texture. Base is configured individually in view descriptor or in defaultViewConfig

#### count?

> `optional` **count?**: `number`

***

### mipLevel?

> `optional` **mipLevel?**: `object`

Defined in: [packages/core/src/texture/index.ts:376](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L376)

mip level config for this texture

#### count

> **count**: `number`

Mip level count for your texture.

**GPUTextureDescriptor.mipLevelCount** for more documentation

Example:

For a texture of size 256×256:

| Level | Resolution |
|-------|------------|
| 0 | 256 × 256 |
| 1 | 128 × 128 |
| 2 | 64 × 64 |
| 3 | 32 × 32 |
| 4 | 16 × 16 |
| 5 | 8 × 8 |
| 6 | 4 × 4 |
| 7 | 2 × 2 |
| 8 | 1 × 1 |

***

### sampleCount?

> `optional` **sampleCount?**: [`SampleCount`](../enumerations/SampleCount.md)

Defined in: [packages/core/src/texture/index.ts:401](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L401)

**MSAA Sample Count**.

***

### size

> **size**: `GPUExtent3D`

Defined in: [packages/core/src/texture/index.ts:403](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L403)

size of this texture

***

### usage

> **usage**: `number`

Defined in: [packages/core/src/texture/index.ts:367](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L367)

What the usage of this texture is.
