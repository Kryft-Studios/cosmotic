import Vector3, { vector3like } from "../vec/vec3";

export interface transform {
  position: vector3like;
  rotation: vector3like;
  scale: vector3like;
}
export class Transform implements transform {
  constructor(
    public position = new Vector3(),
    public rotation = new Vector3(),
    public scale = new Vector3(),
  ) {}
}
export { LocalTransform, LocalVector3 } from "./local";
