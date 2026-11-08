[@cosmotic/core](../../packages.md) / [texture](../index.md) / Texture

# Class: Texture

Defined in: [packages/core/src/texture/index.ts:18](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L18)

A abstraction for webgpu textures and texture views

## Extended by

- [`Texture2D`](Texture2D.md)

## Constructors

### Constructor

> **new Texture**(`z_device`, `descriptor`): `Texture`

Defined in: [packages/core/src/texture/index.ts:19](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L19)

#### Parameters

##### z\_device

`GPUDevice`

##### descriptor

[`descriptor`](../namespaces/Texture/interfaces/descriptor.md)

#### Returns

`Texture`

## Properties

### destroyed

> **destroyed**: `boolean`

Defined in: [packages/core/src/texture/index.ts:105](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L105)

***

### dimension

> **dimension**: [`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:131](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L131)

dimension of this texture.

***

### format

> **format**: `GPUTextureFormat`

Defined in: [packages/core/src/texture/index.ts:133](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L133)

format of this texture

***

### label

> **label**: `string` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:135](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L135)

label of this texture

***

### layersCount

> **layersCount**: `number`

Defined in: [packages/core/src/texture/index.ts:125](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L125)

array layer count of this texture

***

### mipLevelCount

> **mipLevelCount**: `number` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:129](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L129)

Mip level count

***

### sampleCount

> **sampleCount**: [`SampleCount`](../namespaces/Texture/enumerations/SampleCount.md) \| `undefined`

Defined in: [packages/core/src/texture/index.ts:127](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L127)

MSAA sample count

***

### size

> **size**: \[`number`, `number`, `number`\]

Defined in: [packages/core/src/texture/index.ts:123](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L123)

Size of this texture

***

### usage

> **usage**: `number`

Defined in: [packages/core/src/texture/index.ts:121](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L121)

***

### z\_device

> **z\_device**: `GPUDevice`

Defined in: [packages/core/src/texture/index.ts:20](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L20)

***

### z\_dvc

> `readonly` **z\_dvc**: `Readonly`\<`Record`\<`any`, `any`\>\>

Defined in: [packages/core/src/texture/index.ts:120](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L120)

***

### z\_gpuTexture

> `readonly` **z\_gpuTexture**: `GPUTexture`

Defined in: [packages/core/src/texture/index.ts:119](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L119)

i swear if u touch this and delete it and everything crashes DONT. BLAME. ME.

## Methods

### getSize()

> **getSize**(): \[`number`, `number`, `number`\]

Defined in: [packages/core/src/texture/index.ts:164](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L164)

#### Returns

\[`number`, `number`, `number`\]

***

### getSizeWMVec3()

> **getSizeWMVec3**(): `Float32Array`\<`ArrayBufferLike`\>

Defined in: [packages/core/src/texture/index.ts:161](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L161)

**Warning**: This does allocation (creates new wgpu-matrix.Vec3)

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

***

### view()

> **view**(`cfg?`, `noMerge?`): [`View`](../namespaces/Texture/classes/View.md)

Defined in: [packages/core/src/texture/index.ts:140](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L140)

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

### write()

> **write**(`data`, `size?`, `copylayout?`, `distinfo?`): `void`

Defined in: [packages/core/src/texture/index.ts:168](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L168)

#### Parameters

##### data

`GPUAllowSharedBufferSource`

##### size?

`GPUExtent3D`

##### copylayout?

`GPUTexelCopyBufferLayout`

##### distinfo?

[`distinfo`](../namespaces/Texture/interfaces/distinfo.md)

#### Returns

`void`

***

### z\_extend3dToAVec3()

> `static` **z\_extend3dToAVec3**(`extend3d`, `arrayLayerCount?`): \[`number`, `number`, `number`\]

Defined in: [packages/core/src/texture/index.ts:146](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L146)

#### Parameters

##### extend3d

`GPUExtent3D` \| `GPUExtent3DStrict`

##### arrayLayerCount?

`number`

#### Returns

\[`number`, `number`, `number`\]

***

### z\_normalise()

> `static` **z\_normalise**(`d`): `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:106](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L106)

#### Parameters

##### d

[`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

#### Returns

`GPUTextureViewDimension`

***

### z\_translateDimensionToTD()

> `static` **z\_translateDimensionToTD**(`d`): `GPUTextureDimension`

Defined in: [packages/core/src/texture/index.ts:112](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L112)

#### Parameters

##### d

[`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

#### Returns

`GPUTextureDimension`
