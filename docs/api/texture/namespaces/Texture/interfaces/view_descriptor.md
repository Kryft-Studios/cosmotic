---
url: >-
  https://kryft-studios.github.io/cosmotic/cosmotic/api/texture/namespaces/Texture/interfaces/view_descriptor.md
---
[**@cosmotic/core**](../../../../README.md)

***

[@cosmotic/core](../../../../packages.md) / [texture](../../../README.md) / [Texture](../README.md) / view_descriptor

# Interface: view_descriptor

Defined in: [packages/core/src/texture/index.ts:153](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L153)

## Properties

### aspect?

> `optional` **aspect?**: `GPUTextureAspect`

Defined in: [packages/core/src/texture/index.ts:158](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L158)

Texture aspect for your view. Normally you should use all

***

### label?

> `optional` **label?**: `string`

Defined in: [packages/core/src/texture/index.ts:155](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L155)

A label for your texture view

***

### layers?

> `optional` **layers?**: `object`

Defined in: [packages/core/src/texture/index.ts:160](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L160)

Layers configuration for this view. For configurating the count, you must config the texture descriptor

#### base?

> `optional` **base?**: `number`

***

### mipLevel?

> `optional` **mipLevel?**: `object`

Defined in: [packages/core/src/texture/index.ts:166](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L166)

Mip level configuration for this view. For configurating the count, you must config the texture desc

#### base?

> `optional` **base?**: `number`

***

### swizzle?

> `optional` **swizzle?**: `string`

Defined in: [packages/core/src/texture/index.ts:163](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L163)
