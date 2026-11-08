[@cosmotic/core](../../../../../../packages.md) / [index](../../../../../index.md) / [WGPUMatrix](../../../index.md) / [utils](../index.md) / inverseLerp

# Function: inverseLerp()

> **inverseLerp**(`a`, `b`, `v`): `number`

Defined in: node\_modules/.pnpm/wgpu-matrix@3.4.2/node\_modules/wgpu-matrix/dist/3.x/utils.d.ts:37

Compute the opposite of lerp. Given a and b and a value between
a and b returns a value between 0 and 1. 0 if a, 1 if b.
Note: no clamping is done.

## Parameters

### a

`number`

start value

### b

`number`

end value

### v

`number`

value between a and b

## Returns

`number`

(v - a) / (b - a)
