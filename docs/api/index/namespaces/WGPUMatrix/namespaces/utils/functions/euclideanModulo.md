[**@cosmotic/core**](../../../../../../README.md)

***

[@cosmotic/core](../../../../../../packages.md) / [index](../../../../../README.md) / [WGPUMatrix](../../../README.md) / [utils](../README.md) / euclideanModulo

# Function: euclideanModulo()

> **euclideanModulo**(`n`, `m`): `number`

Defined in: node\_modules/.pnpm/wgpu-matrix@3.4.2/node\_modules/wgpu-matrix/dist/3.x/utils.d.ts:53

Compute the euclidean modulo

```
// table for n / 3
-5, -4, -3, -2, -1,  0,  1,  2,  3,  4,  5   <- n
------------------------------------
-2  -1  -0  -2  -1   0,  1,  2,  0,  1,  2   <- n % 3
 1   2   0   1   2   0,  1,  2,  0,  1,  2   <- euclideanModule(n, 3)
```

## Parameters

### n

`number`

dividend

### m

`number`

divisor

## Returns

`number`

the euclidean modulo of n / m
