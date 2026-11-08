[@cosmotic/core](../../../../packages.md) / [texture](../../../index.md) / [Texture2D](../index.md) / descriptor

# Interface: descriptor

Defined in: [packages/core/src/texture/index.ts:419](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L419)

The descriptor for the texture.

## Extends

- [`descriptor`](../../Texture/interfaces/descriptor.md)

## Properties

### defaultViewConfig?

> `optional` **defaultViewConfig?**: [`view_descriptor`](../../Texture/interfaces/view_descriptor.md)

Defined in: [packages/core/src/texture/index.ts:405](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L405)

default view config. all individually passed configs are deeply rested to this.

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`defaultViewConfig`](../../Texture/interfaces/descriptor.md#defaultviewconfig)

***

### dimension

> **dimension**: `"2d"`

Defined in: [packages/core/src/texture/index.ts:420](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L420)

The dimension of this texture. If you use GPUTextureViewDimension, we lookup using Dimension[.dimension]

#### Overrides

[`descriptor`](../../Texture/interfaces/descriptor.md).[`dimension`](../../Texture/interfaces/descriptor.md#dimension)

***

### format

> **format**: `GPUTextureFormat`

Defined in: [packages/core/src/texture/index.ts:365](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L365)

What the data format for this texture is.

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`format`](../../Texture/interfaces/descriptor.md#format)

***

### label?

> `optional` **label?**: `string`

Defined in: [packages/core/src/texture/index.ts:374](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L374)

The label of this texture

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`label`](../../Texture/interfaces/descriptor.md#label)

***

### layers

> **layers**: `object`

Defined in: [packages/core/src/texture/index.ts:369](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L369)

Layer config for this texture. Base is configured individually in view descriptor or in defaultViewConfig

#### count?

> `optional` **count?**: `number`

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`layers`](../../Texture/interfaces/descriptor.md#layers)

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

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`mipLevel`](../../Texture/interfaces/descriptor.md#miplevel)

***

### sampleCount?

> `optional` **sampleCount?**: [`SampleCount`](../../Texture/enumerations/SampleCount.md)

Defined in: [packages/core/src/texture/index.ts:401](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L401)

**MSAA Sample Count**.

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`sampleCount`](../../Texture/interfaces/descriptor.md#samplecount)

***

### size

> **size**: `GPUExtent3D`

Defined in: [packages/core/src/texture/index.ts:403](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L403)

size of this texture

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`size`](../../Texture/interfaces/descriptor.md#size)

***

### usage

> **usage**: `number`

Defined in: [packages/core/src/texture/index.ts:367](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L367)

What the usage of this texture is.

#### Inherited from

[`descriptor`](../../Texture/interfaces/descriptor.md).[`usage`](../../Texture/interfaces/descriptor.md#usage)
