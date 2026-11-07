[**@cosmotic/core**](../../../../README.md)

***

[@cosmotic/core](../../../../packages.md) / [index](../../../README.md) / [WGPUMatrix](../README.md) / quatd

# Variable: quatd

> `const` **quatd**: `object`

Defined in: node\_modules/.pnpm/wgpu-matrix@3.4.2/node\_modules/wgpu-matrix/dist/3.x/wgpu-matrix.d.ts:442

## Type Declaration

### add

> **add**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### angle

> **angle**: (`a`, `b`) => `number`

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`number`

### clone

> **clone**: \<`T`\>(`q`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### conjugate

> **conjugate**: \<`T`\>(`q`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### copy

> **copy**: \<`T`\>(`q`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### create

> **create**: (`x?`, `y?`, `z?`, `w?`) => `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### x?

`number`

##### y?

`number`

##### z?

`number`

##### w?

`number`

#### Returns

`Float64Array`\<`ArrayBufferLike`\>

### divScalar

> **divScalar**: \<`T`\>(`v`, `k`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

##### k

`number`

##### dst?

`T`

#### Returns

`T`

### dot

> **dot**: (`a`, `b`) => `number`

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`number`

### equals

> **equals**: (`a`, `b`) => `boolean`

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`boolean`

### equalsApproximately

> **equalsApproximately**: (`a`, `b`) => `boolean`

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`boolean`

### fromAxisAngle

> **fromAxisAngle**: \<`T`\>(`axis`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### axis

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### fromEuler

> **fromEuler**: \<`T`\>(`xAngleInRadians`, `yAngleInRadians`, `zAngleInRadians`, `order`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### xAngleInRadians

`number`

##### yAngleInRadians

`number`

##### zAngleInRadians

`number`

##### order

[`RotationOrder`](../type-aliases/RotationOrder.md)

##### dst?

`T`

#### Returns

`T`

### fromMat

> **fromMat**: \<`T`\>(`m`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### m

[`Mat3Arg`](../type-aliases/Mat3Arg.md) \| [`Mat4Arg`](../type-aliases/Mat4Arg.md)

##### dst?

`T`

#### Returns

`T`

### fromValues

> **fromValues**: (`x?`, `y?`, `z?`, `w?`) => `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### x?

`number`

##### y?

`number`

##### z?

`number`

##### w?

`number`

#### Returns

`Float64Array`\<`ArrayBufferLike`\>

### identity

> **identity**: \<`T`\>(`dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### dst?

`T`

#### Returns

`T`

### inverse

> **inverse**: \<`T`\>(`q`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### len

> **len**: (`v`) => `number`

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`number`

### length

> **length**: (`v`) => `number`

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`number`

### lengthSq

> **lengthSq**: (`v`) => `number`

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`number`

### lenSq

> **lenSq**: (`v`) => `number`

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

#### Returns

`number`

### lerp

> **lerp**: \<`T`\>(`a`, `b`, `t`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### t

`number`

##### dst?

`T`

#### Returns

`T`

### mul

> **mul**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### mulScalar

> **mulScalar**: \<`T`\>(`v`, `k`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

##### k

`number`

##### dst?

`T`

#### Returns

`T`

### multiply

> **multiply**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### normalize

> **normalize**: \<`T`\>(`v`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### rotateX

> **rotateX**: \<`T`\>(`q`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateY

> **rotateY**: \<`T`\>(`q`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotateZ

> **rotateZ**: \<`T`\>(`q`, `angleInRadians`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### angleInRadians

`number`

##### dst?

`T`

#### Returns

`T`

### rotationTo

> **rotationTo**: \<`T`\>(`aUnit`, `bUnit`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### aUnit

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### bUnit

[`Vec3Arg`](../type-aliases/Vec3Arg.md)

##### dst?

`T`

#### Returns

`T`

### scale

> **scale**: \<`T`\>(`v`, `k`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### v

[`QuatArg`](../type-aliases/QuatArg.md)

##### k

`number`

##### dst?

`T`

#### Returns

`T`

### set

> **set**: \<`T`\>(`x`, `y`, `z`, `w`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

##### dst?

`T`

#### Returns

`T`

### slerp

> **slerp**: \<`T`\>(`a`, `b`, `t`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### t

`number`

##### dst?

`T`

#### Returns

`T`

### sqlerp

> **sqlerp**: \<`T`\>(`a`, `b`, `c`, `d`, `t`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### c

[`QuatArg`](../type-aliases/QuatArg.md)

##### d

[`QuatArg`](../type-aliases/QuatArg.md)

##### t

`number`

##### dst?

`T`

#### Returns

`T`

### sub

> **sub**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### subtract

> **subtract**: \<`T`\>(`a`, `b`, `dst?`) => `T`

#### Type Parameters

##### T

`T` *extends* [`QuatArg`](../type-aliases/QuatArg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### a

[`QuatArg`](../type-aliases/QuatArg.md)

##### b

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`T`

### toAxisAngle

> **toAxisAngle**: \<`T`\>(`q`, `dst?`) => `object`

#### Type Parameters

##### T

`T` *extends* [`Vec3Arg`](../type-aliases/Vec3Arg.md) = `Float64Array`\<`ArrayBufferLike`\>

#### Parameters

##### q

[`QuatArg`](../type-aliases/QuatArg.md)

##### dst?

`T`

#### Returns

`object`

##### angle

> **angle**: `number`

##### axis

> **axis**: `T`
