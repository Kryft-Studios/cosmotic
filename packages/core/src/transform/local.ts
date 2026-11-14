import { transform } from ".";
import Vector3 from "../vec/vec3";
import type { vector3like } from "../vec/vec3";

/** A vector stored in local space whose value is resolved from its parents. */
export class LocalVector3 extends Array<number> {
  static get [Symbol.species](): ArrayConstructor {
    return Array;
  }

  constructor(value: vector3like = new Vector3()) {
    super(3);
    this.local = new Vector3(value);
    Object.freeze(this);
  }

  readonly local: Vector3;
  readonly children: LocalVector3[] = [];
  readonly parents: LocalVector3[] = [];

  get value(): Vector3 {
    return this.parentOffset().add(this.local);
  }

  get x(): number {
    return this.value.x;
  }

  get [0](): number {
    return this.x;
  }

  set x(value: number) {
    this.local.x = value - this.parentOffset().x;
  }

  set [0](value: number) {
    this.x = value;
  }

  get y(): number {
    return this.value.y;
  }

  get [1]() {
    return this.y;
  }

  set y(value: number) {
    this.local.y = value - this.parentOffset().y;
  }
  set [1](v: number) {
    this.y = v;
  }

  get z(): number {
    return this.value.z;
  }
  set [2](v: number) {
    this.z = v;
  }
  get [2]() {
    return this.z;
  }

  set z(value: number) {
    this.local.z = value - this.parentOffset().z;
  }

  set(value: vector3like): this;
  set(x: number, y: number, z: number): this;
  set(valueOrX: vector3like | number, y?: number, z?: number): this {
    const worldValue =
      typeof valueOrX === "number"
        ? new Vector3(valueOrX, y ?? 0, z ?? 0)
        : new Vector3(valueOrX);
    this.local.copy(worldValue.subtract(this.parentOffset()));
    return this;
  }

  setLocal(value: vector3like): this;
  setLocal(x: number, y: number, z: number): this;
  setLocal(valueOrX: vector3like | number, y?: number, z?: number): this {
    if (typeof valueOrX === "number") {
      this.local.set(valueOrX, y ?? 0, z ?? 0);
    } else {
      this.local.set(valueOrX);
    }
    return this;
  }

  add(value: vector3like): this {
    return this.set(this.value.add(value));
  }

  addChild(child: LocalVector3): LocalVector3 {
    if (this.children.includes(child)) return child;
    if (child === this || child.hasDescendant(this)) {
      throw new Error(
        "Adding this child would create a vector hierarchy cycle.",
      );
    }

    this.children.push(child);
    child.parents.push(this);
    return child;
  }

  removeChild(child: LocalVector3): boolean {
    const childIndex = this.children.indexOf(child);
    if (childIndex === -1) return false;

    this.children.splice(childIndex, 1);
    const parentIndex = child.parents.indexOf(this);
    if (parentIndex !== -1) child.parents.splice(parentIndex, 1);
    return true;
  }

  addParent(parent: LocalVector3): this {
    parent.addChild(this);
    return this;
  }

  removeParent(parent: LocalVector3): boolean {
    return parent.removeChild(this);
  }

  private parentOffset(): Vector3 {
    const offset = new Vector3();
    for (const parent of this.parents) offset.add(parent.value);
    return offset;
  }

  private hasDescendant(
    target: LocalVector3,
    visited = new Set<LocalVector3>(),
  ): boolean {
    if (this === target) return true;
    if (visited.has(this)) return false;
    visited.add(this);

    return this.children.some((child) => child.hasDescendant(target, visited));
  }
}
export class LocalTransform implements transform {
  constructor(
    public position = new LocalVector3(),
    public rotation = new LocalVector3(),
    public scale = new LocalVector3(),
  ) {}
}
