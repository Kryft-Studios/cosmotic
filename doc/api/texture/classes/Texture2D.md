[@cosmotic/core](../../packages.md) / [texture](../index.md) / Texture2D

# Class: Texture2D

Defined in: [packages/core/src/texture/index.ts:413](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L413)

A abstraction for webgpu textures and texture views

## Extends

- [`Texture`](Texture.md)

## Constructors

### Constructor

> **new Texture2D**(`_privateDevice`, `desc`): `Texture2D`

Defined in: [packages/core/src/texture/index.ts:414](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L414)

#### Parameters

##### \_privateDevice

`GPUDevice`

##### desc

[`descriptor`](../namespaces/Texture2D/interfaces/descriptor.md)

#### Returns

`Texture2D`

#### Overrides

[`Texture`](Texture.md).[`constructor`](Texture.md#constructor)

## Properties

### destroyed

> **destroyed**: `boolean`

Defined in: [packages/core/src/texture/index.ts:105](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L105)

#### Inherited from

[`Texture`](Texture.md).[`destroyed`](Texture.md#destroyed)

***

### dimension

> **dimension**: [`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:131](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L131)

dimension of this texture.

#### Inherited from

[`Texture`](Texture.md).[`dimension`](Texture.md#dimension)

***

### format

> **format**: `GPUTextureFormat`

Defined in: [packages/core/src/texture/index.ts:133](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L133)

format of this texture

#### Inherited from

[`Texture`](Texture.md).[`format`](Texture.md#format)

***

### label

> **label**: `string` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:135](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L135)

label of this texture

#### Inherited from

[`Texture`](Texture.md).[`label`](Texture.md#label)

***

### layersCount

> **layersCount**: `number`

Defined in: [packages/core/src/texture/index.ts:125](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L125)

array layer count of this texture

#### Inherited from

[`Texture`](Texture.md).[`layersCount`](Texture.md#layerscount)

***

### mipLevelCount

> **mipLevelCount**: `number` \| `undefined`

Defined in: [packages/core/src/texture/index.ts:129](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L129)

Mip level count

#### Inherited from

[`Texture`](Texture.md).[`mipLevelCount`](Texture.md#miplevelcount)

***

### sampleCount

> **sampleCount**: [`SampleCount`](../namespaces/Texture/enumerations/SampleCount.md) \| `undefined`

Defined in: [packages/core/src/texture/index.ts:127](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L127)

MSAA sample count

#### Inherited from

[`Texture`](Texture.md).[`sampleCount`](Texture.md#samplecount)

***

### size

> **size**: \[`number`, `number`, `number`\]

Defined in: [packages/core/src/texture/index.ts:123](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L123)

Size of this texture

#### Inherited from

[`Texture`](Texture.md).[`size`](Texture.md#size)

***

### usage

> **usage**: `number`

Defined in: [packages/core/src/texture/index.ts:121](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L121)

#### Inherited from

[`Texture`](Texture.md).[`usage`](Texture.md#usage)

***

### z\_device

> **z\_device**: `GPUDevice`

Defined in: [packages/core/src/texture/index.ts:20](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L20)

#### Inherited from

[`Texture`](Texture.md).[`z_device`](Texture.md#z-device)

***

### z\_dvc

> `readonly` **z\_dvc**: `Readonly`\<`Record`\<`any`, `any`\>\>

Defined in: [packages/core/src/texture/index.ts:120](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L120)

#### Inherited from

[`Texture`](Texture.md).[`z_dvc`](Texture.md#z-dvc)

***

### z\_gpuTexture

> `readonly` **z\_gpuTexture**: `GPUTexture`

Defined in: [packages/core/src/texture/index.ts:119](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L119)

i swear if u touch this and delete it and everything crashes DONT. BLAME. ME.

#### Inherited from

[`Texture`](Texture.md).[`z_gpuTexture`](Texture.md#z-gputexture)

## Methods

### getSize()

> **getSize**(): \[`number`, `number`, `number`\]

Defined in: [packages/core/src/texture/index.ts:164](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L164)

#### Returns

\[`number`, `number`, `number`\]

#### Inherited from

[`Texture`](Texture.md).[`getSize`](Texture.md#getsize)

***

### getSizeWMVec3()

> **getSizeWMVec3**(): `Float32Array`\<`ArrayBufferLike`\>

Defined in: [packages/core/src/texture/index.ts:161](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L161)

**Warning**: This does allocation (creates new wgpu-matrix.Vec3)

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Inherited from

[`Texture`](Texture.md).[`getSizeWMVec3`](Texture.md#getsizewmvec3)

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

#### Inherited from

[`Texture`](Texture.md).[`view`](Texture.md#view)

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

#### Inherited from

[`Texture`](Texture.md).[`write`](Texture.md#write)

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

#### Inherited from

[`Texture`](Texture.md).[`z_extend3dToAVec3`](Texture.md#z-extend3dtoavec3)

***

### z\_normalise()

> `static` **z\_normalise**(`d`): `GPUTextureViewDimension`

Defined in: [packages/core/src/texture/index.ts:106](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L106)

#### Parameters

##### d

[`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

#### Returns

`GPUTextureViewDimension`

#### Inherited from

[`Texture`](Texture.md).[`z_normalise`](Texture.md#z-normalise)

***

### z\_translateDimensionToTD()

> `static` **z\_translateDimensionToTD**(`d`): `GPUTextureDimension`

Defined in: [packages/core/src/texture/index.ts:112](https://github.com/Kryft-Studios/cosmotic/blob/14e0ed802e718c481be501f8a48ba990ba4c03ef/packages/core/src/texture/index.ts#L112)

#### Parameters

##### d

[`Dimension`](../namespaces/Texture/enumerations/Dimension.md) \| `GPUTextureViewDimension`

#### Returns

`GPUTextureDimension`

#### Inherited from

[`Texture`](Texture.md).[`z_translateDimensionToTD`](Texture.md#z-translatedimensiontotd)
