---
url: >-
  https://kryft-studios.github.io/cosmotic/cosmotic/api/index/namespaces/WGPUMatrix/namespaces/utils/functions/inverseLerp.md
---
[**@cosmotic/core**](../../../../../../README.md)

***

[@cosmotic/core](../../../../../../packages.md) / [index](../../../../../README.md) / [WGPUMatrix](../../../README.md) / [utils](../README.md) / inverseLerp

# Function: inverseLerp()

> **inverseLerp**(`a`, `b`, `v`): `number`

Defined in: node_modules/.pnpm/wgpu-matrix@3.4.2/node_modules/wgpu-matrix/dist/3.x/utils.d.ts:37

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
