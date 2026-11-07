
import { Context } from "./context";
import { context, toWGSL } from "./symbols";
import { wgsl_representation } from "./types";

export class Scalar implements wgsl_representation {
  constructor(
    public wgslName: string,
    public info: Scalar.info,
    public check: (value: any) => boolean,
  ) {}

  [toWGSL](ctx: Context): string {
    if (ctx !== Context.SCALAR) {
      throw new TypeError("Scalar cannot be represented in this context.");
    }

    return this.wgslName;
  }

  static readonly [context] = new Set([Context.SCALAR]) as Set<Context>;
  [context] = Scalar[context];
}

export namespace Scalar {
  export type info =
    | {
        hostShareable: true;
        bytes: number | null;
      }
    | {
        hostShareable: false;
        bytes: number;
      };

  export namespace info {
    export type partial1 = { bytes: number | null };
    export type partial2 = { hostShareable: true };
    export type partial3 = {
      hostShareable: false;
      bytes: number;
    };

    export type unsure = {
      hostShareable?: boolean;
      bytes?: number | null;
    };

    export function from(a: unsure): info {
      const hostShareable = a.hostShareable ?? a.bytes != null;

      if (!hostShareable && a.bytes == null) {
        throw new TypeError("Non-host-shareable scalar requires a byte size.");
      }

      return {
        hostShareable,
        bytes: a.bytes ?? null,
      } as info;
    }
  }

  export const uint32 = new Scalar(
    "u32",
    Scalar.info.from({ bytes: 4 }),
    (v: any) =>
      typeof v === "number" && Number.isInteger(v) && v >= 0 && v <= 4294967295,
  );

  export const int32 = new Scalar(
    "i32",
    Scalar.info.from({ bytes: 4 }),
    (v: any) =>
      typeof v === "number" &&
      Number.isInteger(v) &&
      v >= -2147483648 &&
      v <= 2147483647,
  );

  export const float32 = new Scalar(
    "f32",
    Scalar.info.from({ bytes: 4 }),
    (v: any) => typeof v === "number" && Math.abs(v) <= 3.40282347e38,
  );

  export const float16 = new Scalar(
    "f16",
    Scalar.info.from({ bytes: 2 }),
    (v: any) => typeof v === "number" && Math.abs(v) <= 65504,
  );

  export const bool = new Scalar(
    "bool",
    Scalar.info.from({ hostShareable: false }),
    (v: any) => typeof v === "boolean",
  );
}
export default Scalar;

