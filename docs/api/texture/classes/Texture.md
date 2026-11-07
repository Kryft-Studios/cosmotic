[**@cosmotic/core**](../../README.md)

***

[@cosmotic/core](../../packages.md) / [texture](../README.md) / Texture

# Class: Texture

Defined in: [packages/core/src/texture/index.ts:15](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L15)

A abstraction for webgpu textures and texture views

## Constructors

### Constructor

> **new Texture**(`z_device`, `descriptor`): `Texture`

Defined in: [packages/core/src/texture/index.ts:16](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L16)

#### Parameters

##### z\_device

`GPUDevice`

##### descriptor

[`descriptor`](../namespaces/Texture/interfaces/descriptor.md)

#### Returns

`Texture`

## Properties

### dimension

> **dimension**: [`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:65](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L65)

dimension of this texture.

***

### format

> **format**: `GPUTextureFormat`

Defined in: [packages/core/src/texture/index.ts:67](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L67)

format of this texture

***

### label

> **label**: `string` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:69](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L69)

label of this texture

***

### layersCount

> **layersCount**: `number` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:59](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L59)

array layer count of this texture

***

### mipLevelCount

> **mipLevelCount**: `number` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:63](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L63)

Mip level count

***

### sampleCount

> **sampleCount**: [`SampleCount`](../namespaces/Texture/enumerations/SampleCount.md) \| `undefined`

Defined in: [packages/core/src/texture/index.ts:61](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L61)

MSAA sample count

***

### size

> **size**: `GPUExtent3D`

Defined in: [packages/core/src/texture/index.ts:57](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L57)

Size of this texture

***

### usage

> **usage**: `number`

Defined in: [packages/core/src/texture/index.ts:55](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L55)

***

### z\_device

> **z\_device**: `GPUDevice`

Defined in: [packages/core/src/texture/index.ts:17](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L17)

***

### z\_dvc

> `readonly` **z\_dvc**: `Readonly`\<`Record`\<`any`, `any`\>\>

Defined in: [packages/core/src/texture/index.ts:54](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L54)

***

### z\_gpuTexture

> `readonly` **z\_gpuTexture**: `GPUTexture`

Defined in: [packages/core/src/texture/index.ts:53](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L53)

i swear if u touch this and delete it and everything crashes DONT. BLAME. ME.

## Methods

### view()

> **view**(`cfg?`, `noMerge?`): [`View`](../namespaces/Texture/classes/View.md)

Defined in: [packages/core/src/texture/index.ts:74](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L74)

creates a view from the given view descriptor, merged with the default view descriptor

if no merge is true, it wont merge with default

#### Parameters

##### cfg?

[`view_descriptor`](../namespaces/Texture/interfaces/view_descriptor.md)

##### noMerge?

`boolean` = `false`

#### Returns

[`View`](../namespaces/Texture/classes/View.md)

***

### normalise()

> `static` **normalise**(`d`): `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:40](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L40)

#### Parameters

##### d

[`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

#### Returns

`GPUTextureViewDimension`

***

### translateDimensionToTD()

> `static` **translateDimensionToTD**(`d`): `GPUTextureDimension`

Defined in: [packages/core/src/texture/index.ts:46](https://github.com/Kryft-Studios/cosmotic/blob/3e05f8ea027f62c70c59d2ca079af97bd05faf32/packages/core/src/texture/index.ts#L46)

#### Parameters

##### d

[`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

#### Returns

`GPUTextureDimension`
