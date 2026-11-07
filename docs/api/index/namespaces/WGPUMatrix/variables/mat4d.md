---
url: >-
  https://kryft-studios.github.io/cosmotic/cosmotic/api/index/namespaces/WGPUMatrix/variables/mat4d.md
---
[**@cosmotic/core**](../../../../README.md)

***

[@cosmotic/core](../../../../packages.md) / [index](../../../README.md) / [WGPUMatrix](../README.md) / mat4d

# Variable: mat4d

> `const` **mat4d**: `object`

Defined in: node_modules/.pnpm/wgpu-matrix@3.4.2/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.d.ts:393

## Type Declaration

### add

> **add**: <`T`>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### a

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### b

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### aim

> **aim**: <`T`>(`position`, `target`, `up`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### position

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### target

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### up

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### axisRotate

> **axisRotate**: <`T`>(`m`, `axis`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### axis

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### axisRotation

> **axisRotation**: <`T`>(`axis`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### axis

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### cameraAim

> **cameraAim**: <`T`>(`eye`, `target`, `up`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### eye

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### target

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### up

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### clone

> **clone**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### copy

> **copy**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### create

> **create**: (`v0?`, `v1?`, `v2?`, `v3?`, `v4?`, `v5?`, `v6?`, `v7?`, `v8?`, `v9?`, `v10?`, `v11?`, `v12?`, `v13?`, `v14?`, `v15?`) => `Float64Array`<`ArrayBufferLike`>

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

##### v9?

`number`

##### v10?

`number`

##### v11?

`number`

##### v12?

`number`

##### v13?

`number`

##### v14?

`number`

##### v15?

`number`

#### Returns

`Float64Array`<`ArrayBufferLike`>

### determinant

> **determinant**: (`m`) => `number`

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

#### Returns

`number`

### equals

> **equals**: (`a`, `b`) => `boolean`

#### Parameters

##### a

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### b

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

#### Returns

`boolean`

### equalsApproximately

> **equalsApproximately**: (`a`, `b`) => `boolean`

#### Parameters

##### a

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### b

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

#### Returns

`boolean`

### fromMat3

> **fromMat3**: <`T`>(`m3`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m3

[`Mat3Arg`](../type-aliases/Mat3Arg.md)

##### dst?

`T`

#### Returns

`T`

### fromQuat

> **fromQuat**: <`T`>(`q`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### frustum

> **frustum**: <`T`>(`left`, `right`, `bottom`, `top`, `near`, `far`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### left

`number`

##### right

`number`

##### bottom

`number`

##### top

`number`

##### near

`number`

##### far

`number`

##### dst?

`T`

#### Returns

`T`

### frustumReverseZ

> **frustumReverseZ**: <`T`>(`left`, `right`, `bottom`, `top`, `near`, `far?`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### left

`number`

##### right

`number`

##### bottom

`number`

##### top

`number`

##### near

`number`

##### far?

`number`

##### dst?

`T`

#### Returns

`T`

### getAxis

> **getAxis**: <`T`>(`m`, `axis`, `dst?`) => `Float64Array`<`ArrayBufferLike`> | `T`

#### Type Parameters

##### T

`T` *extends* [`Vec3Arg`](../type-aliases/Vec3Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### axis

`number`

##### dst?

`T`

#### Returns

`Float64Array`<`ArrayBufferLike`> | `T`

### getScaling

> **getScaling**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Vec3Arg`](../type-aliases/Vec3Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### getTranslation

> **getTranslation**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Vec3Arg`](../type-aliases/Vec3Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### identity

> **identity**: <`T`>(`dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### dst?

`T`

#### Returns

`T`

### inverse

> **inverse**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### invert

> **invert**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### lookAt

> **lookAt**: <`T`>(`eye`, `target`, `up`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### eye

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### target

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### up

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### mul

> **mul**: <`T`>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### a

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### b

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### mulScalar

> **mulScalar**: <`T`>(`m`, `s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### multiply

> **multiply**: <`T`>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### a

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### b

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### multiplyScalar

> **multiplyScalar**: <`T`>(`m`, `s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### negate

> **negate**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### ortho

> **ortho**: <`T`>(`left`, `right`, `bottom`, `top`, `near`, `far`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### left

`number`

##### right

`number`

##### bottom

`number`

##### top

`number`

##### near

`number`

##### far

`number`

##### dst?

`T`

#### Returns

`T`

### perspective

> **perspective**: <`T`>(`fieldOfViewYInRadians`, `aspect`, `zNear`, `zFar`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### fieldOfViewYInRadians

`number`

##### aspect

`number`

##### zNear

`number`

##### zFar

`number`

##### dst?

`T`

#### Returns

`T`

### perspectiveReverseZ

> **perspectiveReverseZ**: <`T`>(`fieldOfViewYInRadians`, `aspect`, `zNear`, `zFar?`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### fieldOfViewYInRadians

`number`

##### aspect

`number`

##### zNear

`number`

##### zFar?

`number`

##### dst?

`T`

#### Returns

`T`

### rotate

> **rotate**: <`T`>(`m`, `axis`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### axis

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateX

> **rotateX**: <`T`>(`m`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateY

> **rotateY**: <`T`>(`m`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateZ

> **rotateZ**: <`T`>(`m`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotation

> **rotation**: <`T`>(`axis`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### axis

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotationX

> **rotationX**: <`T`>(`angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotationY

> **rotationY**: <`T`>(`angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotationZ

> **rotationZ**: <`T`>(`angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### scale

> **scale**: <`T`>(`m`, `v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### scaling

> **scaling**: <`T`>(`v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### set

> **set**: <`T`>(`v0`, `v1`, `v2`, `v3`, `v4`, `v5`, `v6`, `v7`, `v8`, `v9`, `v10`, `v11`, `v12`, `v13`, `v14`, `v15`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

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

##### v9

`number`

##### v10

`number`

##### v11

`number`

##### v12

`number`

##### v13

`number`

##### v14

`number`

##### v15

`number`

##### dst?

`T`

#### Returns

`T`

### setAxis

> **setAxis**: <`T`>(`m`, `v`, `axis`, `dst`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### axis

`number`

##### dst

`T`

#### Returns

`T`

### setTranslation

> **setTranslation**: <`T`>(`a`, `v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### a

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### translate

> **translate**: <`T`>(`m`, `v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### translation

> **translation**: <`T`>(`v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### v

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### transpose

> **transpose**: <`T`>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### uniformScale

> **uniformScale**: <`T`>(`m`, `s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### m

[`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### s

`number`

##### dst?

`T`

#### Returns

`T`

### uniformScaling

> **uniformScaling**: <`T`>(`s`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`Mat4Arg`](../type-aliases/Mat4Arg.md) = `Float64Array`<`ArrayBufferLike`>

#### Parameters

##### s

`number`

##### dst?

`T`

#### Returns

`T`
