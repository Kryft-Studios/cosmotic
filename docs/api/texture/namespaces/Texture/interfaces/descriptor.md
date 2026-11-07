[**@cosmotic/core**](../../../../README.md)

***

[@cosmotic/core](../../../../packages.md) / [texture](../../../README.md) / [Texture](../README.md) / descriptor

# Interface: descriptor

Defined in: [packages/core/src/texture/index.ts:169](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L169)

The descriptor for the texture.

## Properties

### defaultViewConfig?

> `optional` **defaultViewConfig?**: [`view_descriptor`](view_descriptor.md)

Defined in: [packages/core/src/texture/index.ts:213](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L213)

default view config. all individually passed configs are deeply rested to this.

***

### dimension

> **dimension**: [`Dimension`](../enumerations/Dimension.md) \| `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:171](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L171)

The dimension of this texture. If you use GPUTextureViewDimension, we lookup using Dimension[.dimension]

***

### format

> **format**: `GPUTextureFormat`

Defined in: [packages/core/src/texture/index.ts:173](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L173)

What the data format for this texture is.

***

### label?

> `optional` **label?**: `string`

Defined in: [packages/core/src/texture/index.ts:182](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L182)

The label of this texture

***

### layers

> **layers**: `object`

Defined in: [packages/core/src/texture/index.ts:177](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L177)

Layer config for this texture. Base is configured individually in view descriptor or in defaultViewConfig

#### count?

> `optional` **count?**: `number`

***

### mipLevel?

> `optional` **mipLevel?**: `object`

Defined in: [packages/core/src/texture/index.ts:184](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L184)

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

Defined in: [packages/core/src/texture/index.ts:209](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L209)

**MSAA Sample Count**.

***

### size

> **size**: `GPUExtent3D`

Defined in: [packages/core/src/texture/index.ts:211](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L211)

size of this texture

***

### usage

> **usage**: `number`

Defined in: [packages/core/src/texture/index.ts:175](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L175)

What the usage of this texture is.
