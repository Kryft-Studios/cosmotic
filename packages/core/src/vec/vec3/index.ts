import type { Vec3 as WGPUVec3 } from "wgpu-matrix";
import { allows_any } from "../../helpers/types/allowsany";

export type vector3like =
  | allows_any<Vector3>
  | WGPUVec3
  | allows_any<GPUExtent3D>
  | allows_any<GPUExtent3DStrict>
  | readonly [number?, number?, number?]
  | allows_any<{[0]: number, [1]?: number, [2]?: number}>
  | allows_any<{ readonly [0]: number, readonly[1]?: number, readonly [2]?: number}>
/** A small three-component vector with an immutable array shape. */
export class Vector3 extends Array<number> {
  static get [Symbol.species](): ArrayConstructor {
    return Array;
  }

  #components: [number, number, number] = [0, 0, 0];

  constructor();
  constructor(x: number, y?: number, z?: number);
  constructor(value: vector3like);
  constructor(
    xOrValue: number | vector3like = 0,
    y = 0,
    z = 0,
  ) {
    super(3);
    if (typeof xOrValue === "number") {
      this.x = xOrValue;
      this.y = y;
      this.z = z;
    } else {
      [this.x, this.y, this.z] = Vector3.read(xOrValue);
    }
    Object.freeze(this);
  }

  get x(): number {
    return this.#components[0];
  }

  set x(value: number) {
    this.#components[0] = value;
  }

  get y(): number {
    return this.#components[1];
  }

  set y(value: number) {
    this.#components[1] = value;
  }

  get z(): number {
    return this.#components[2];
  }

  set z(value: number) {
    this.#components[2] = value;
  }

  get [0](): number {
    return this.x;
  }

  get [1](): number {
    return this.y;
  }

  get [2](): number {
    return this.z;
  }

  private static read(value: vector3like): [number, number, number] {
    if (value instanceof Vector3) {
      return [value.x, value.y, value.z];
    }
    if ("width" in value) {
      return [
        value.width,
        value.height ?? 1,
        value.depthOrArrayLayers ?? 1,
      ];
    }

    if (0 in value) {
      const components = value as { 0: number; 1: number; 2: number };
      return [components[0] ?? 0, components[1] ?? 0, components[2] ?? 0];
    }

    const components = Array.from(value as Iterable<number>);
    return [components[0] ?? 0, components[1] ?? 0, components[2] ?? 0];
  }

  set(x: number, y: number, z: number): this;
  set(value: vector3like): this;
  set(xOrValue: number | vector3like, y = 0, z = 0): this {
    if (typeof xOrValue === "number") {
      this.x = xOrValue;
      this.y = y;
      this.z = z;
    } else {
      [this.x, this.y, this.z] = Vector3.read(xOrValue);
    }
    return this;
  }

  copy(value: vector3like): this {
    return this.set(value);
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  add(value: vector3like): this {
    const [x, y, z] = Vector3.read(value);
    this.x += x;
    this.y += y;
    this.z += z;
    return this;
  }

  addScalar(value: number): this {
    this.x += value;
    this.y += value;
    this.z += value;
    return this;
  }

  subtract(value: vector3like): this {
    const [x, y, z] = Vector3.read(value);
    this.x -= x;
    this.y -= y;
    this.z -= z;
    return this;
  }

  multiply(value: vector3like): this {
    const [x, y, z] = Vector3.read(value);
    this.x *= x;
    this.y *= y;
    this.z *= z;
    return this;
  }

  multiplyScalar(value: number): this {
    this.x *= value;
    this.y *= value;
    this.z *= value;
    return this;
  }

  divide(value: vector3like): this {
    const [x, y, z] = Vector3.read(value);
    this.x /= x;
    this.y /= y;
    this.z /= z;
    return this;
  }

  divideScalar(value: number): this {
    return this.multiplyScalar(1 / value);
  }

  negate(): this {
    return this.multiplyScalar(-1);
  }

  dot(value: vector3like): number {
    const [x, y, z] = Vector3.read(value);
    return this.x * x + this.y * y + this.z * z;
  }

  cross(value: vector3like): this {
    const [x, y, z] = Vector3.read(value);
    const cx = this.y * z - this.z * y;
    const cy = this.z * x - this.x * z;
    const cz = this.x * y - this.y * x;
    return this.set(cx, cy, cz);
  }

  lengthSquared(): number {
    return this.dot(this);
  }

  magnitude(): number {
    return Math.sqrt(this.lengthSquared());
  }

  normalize(): this {
    const length = this.magnitude();
    return length === 0 ? this.set(0, 0, 0) : this.divideScalar(length);
  }

  setLength(length: number): this {
    return this.normalize().multiplyScalar(length);
  }

  distanceToSquared(value: vector3like): number {
    const [x, y, z] = Vector3.read(value);
    const dx = this.x - x;
    const dy = this.y - y;
    const dz = this.z - z;
    return dx * dx + dy * dy + dz * dz;
  }

  distanceTo(value: vector3like): number {
    return Math.sqrt(this.distanceToSquared(value));
  }

  lerp(value: vector3like, alpha: number): this {
    const [x, y, z] = Vector3.read(value);
    this.x += (x - this.x) * alpha;
    this.y += (y - this.y) * alpha;
    this.z += (z - this.z) * alpha;
    return this;
  }

  equals(value: vector3like): boolean {
    const [x, y, z] = Vector3.read(value);
    return this.x === x && this.y === y && this.z === z;
  }

  toArray(): [number, number, number] {
    return [this.x, this.y, this.z];
  }

  toVec3(): WGPUVec3 {
    return new Float32Array([this.x, this.y, this.z]) as WGPUVec3;
  }

  toExtent3D(): GPUExtent3DStrict {
    return {
      width: this.x,
      height: this.y,
      depthOrArrayLayers: this.z,
    };
  }
}

export default Vector3;