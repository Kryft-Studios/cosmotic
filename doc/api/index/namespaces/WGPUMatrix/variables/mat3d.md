[**@cosmotic/core**](../../../../README.md)

***

[@cosmotic/core](../../../../packages.md) / [index](../../../README.md) / [WGPUMatrix](../README.md) / mat3d

# Variable: mat3d

> `const` **mat3d**: `object`

Defined in: node\_modules/.pnpm/wgpu-matrix@3.4.2/node\_modules/wgpu-matrix/dist/3.x/wgpu-matrix.d.ts:349

## Type Declaration

### add

> **add**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### b

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### clone

> **clone**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### copy

> **copy**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### create

> **create**: (`v0?`, `v1?`, `v2?`, `v3?`, `v4?`, `v5?`, `v6?`, `v7?`, `v8?`) => `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v0?

`number`

##### v1?

`number`

##### v2?

`number`

##### v3?

`number`

##### v4?

`number`

##### v5?

`number`

##### v6?

`number`

##### v7?

`number`

##### v8?

`number`

#### Returns

`Float64Array`\<`ArrayBufferLike`\>

### determinant

> **determinant**: (`m`) => `number`

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

#### Returns

`number`

### equals

> **equals**: (`a`, `b`) => `boolean`

#### Parameters

##### a

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### b

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

#### Returns

`boolean`

### equalsApproximately

> **equalsApproximately**: (`a`, `b`) => `boolean`

#### Parameters

##### a

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### b

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

#### Returns

`boolean`

### fromMat4

> **fromMat4**: \<`T`\>(`m4`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m4

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### fromQuat

> **fromQuat**: \<`T`\>(`q`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### get3DScaling

> **get3DScaling**: \<`T`\>(`m`, `dst?`) => `Float64Array`\<`ArrayBufferLike`\> \| `T`

#### Type Parameters

##### T

`T` *extends* [`Vec3Arg`](../type-aliases/Vec3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`Float64Array`\<`ArrayBufferLike`\> \| `T`

### getAxis

> **getAxis**: \<`T`\>(`m`, `axis`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Vec2Arg`](../type-aliases/Vec2Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### axis

`number`

##### dst?

`T`

#### Returns

`T`

### getScaling

> **getScaling**: \<`T`\>(`m`, `dst?`) => `Float64Array`\<`ArrayBufferLike`\> \| `T`

#### Type Parameters

##### T

`T` *extends* [`Vec2Arg`](../type-aliases/Vec2Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`Float64Array`\<`ArrayBufferLike`\> \| `T`

### getTranslation

> **getTranslation**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Vec2Arg`](../type-aliases/Vec2Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### identity

> **identity**: \<`T`\>(`dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### dst?

`T`

#### Returns

`T`

### inverse

> **inverse**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### invert

> **invert**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### mul

> **mul**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### b

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### mulScalar

> **mulScalar**: \<`T`\>(`m`, `s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### multiply

> **multiply**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### b

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### multiplyScalar

> **multiplyScalar**: \<`T`\>(`m`, `s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### negate

> **negate**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### rotate

> **rotate**: \<`T`\>(`m`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateX

> **rotateX**: \<`T`\>(`m`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateY

> **rotateY**: \<`T`\>(`m`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateZ

> **rotateZ**: \<`T`\>(`m`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotation

> **rotation**: \<`T`\>(`angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotationX

> **rotationX**: \<`T`\>(`angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotationY

> **rotationY**: \<`T`\>(`angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotationZ

> **rotationZ**: \<`T`\>(`angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### scale

> **scale**: \<`T`\>(`m`, `v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### v

[`Vec2Arg`](../type-aliases/Vec2Arg.md)

##### dst?

`T`

#### Returns

`T`

### scale3D

> **scale3D**: \<`T`\>(`m`, `v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### scaling

> **scaling**: \<`T`\>(`v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v

[`Vec2Arg`](../type-aliases/Vec2Arg.md)

##### dst?

`T`

#### Returns

`T`

### scaling3D

> **scaling3D**: \<`T`\>(`v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### set

> **set**: \<`T`\>(`v0`, `v1`, `v2`, `v3`, `v4`, `v5`, `v6`, `v7`, `v8`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v0

`number`

##### v1

`number`

##### v2

`number`

##### v3

`number`

##### v4

`number`

##### v5

`number`

##### v6

`number`

##### v7

`number`

##### v8

`number`

##### dst?

`T`

#### Returns

`T`

### setAxis

> **setAxis**: \<`T`\>(`m`, `v`, `axis`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### v

[`Vec2Arg`](../type-aliases/Vec2Arg.md)

##### axis

`number`

##### dst?

`T`

#### Returns

`T`

### setTranslation

> **setTranslation**: \<`T`\>(`a`, `v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### v

[`Vec2Arg`](../type-aliases/Vec2Arg.md)

##### dst?

`T`

#### Returns

`T`

### translate

> **translate**: \<`T`\>(`m`, `v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### v

[`Vec2Arg`](../type-aliases/Vec2Arg.md)

##### dst?

`T`

#### Returns

`T`

### translation

> **translation**: \<`T`\>(`v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v

[`Vec2Arg`](../type-aliases/Vec2Arg.md)

##### dst?

`T`

#### Returns

`T`

### transpose

> **transpose**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### uniformScale

> **uniformScale**: \<`T`\>(`m`, `s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### uniformScale3D

> **uniformScale3D**: \<`T`\>(`m`, `s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### uniformScaling

> **uniformScaling**: \<`T`\>(`s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### uniformScaling3D

> **uniformScaling3D**: \<`T`\>(`s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat3Arg`](../type-aliases/Mat3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### s

`number`

##### dst?

`T`

#### Returns

`T`
