/**
 * @packageDocumentation
 * @author ObiloxYT
 * @author KryftStudios
 * @author YTCaplente
 * @since v0.1.0
 * @summary A texture abstraction
 * @access public
 * @file src/texture/index.ts
 * @fileoverview Implementation of an modular texture abstraction.
 */
import { default as D2D, CubeRegistry } from "@cosmos-js/wgpu-texture-registry";
const D2DRegistry = D2D.D2DRegistry;
import { deepClone, deepRest } from "../helpers";
import { vec3 } from "wgpu-matrix";

/** A abstraction for webgpu textures and texture views */
export class Texture {
  constructor(
    public z_device: GPUDevice,
    descriptor: Texture.descriptor,
  ) {
    const convertRes = Texture.z_extend3dToAVec3(
      descriptor.size,
      descriptor.layers.count,
    );
    let actualSize = [...convertRes];
    this.size = Object.freeze(actualSize) as [number, number, number];
    if (this.size[2] <= 0)
      throw new Error("Depth/LayerCount cannot be 0 or below!!");

    let layerCount = this.size[2];
    if (
      descriptor.layers?.count !== layerCount &&
      descriptor.layers?.count !== undefined
    ) {
      throw new Error(
        "Conflict! descriptor.layers.count and descriptor.size[2] are not the same!",
      );
    }
    descriptor.layers ??= {};
    descriptor.layers.count = layerCount;
    if (descriptor.dimension === "cube-array") {
      const remainder = this.size[2] % 6;

      if (remainder !== 0)
        throw new Error(
          "Uh oh! Given layer count isnt valid for cube-array: Must be a multiple of 6.",
        );

      layerCount = descriptor.layers.count = this.size[2];
    }

    this.label = descriptor.label;
    this.format = descriptor.format;
    this.dimension = descriptor.dimension;
    this.layersCount = descriptor.layers.count;
    this.sampleCount = descriptor.sampleCount;

    const maxMipLevelCount = Math.floor(Math.log2(Math.max(...this.size))) + 1;

    if (
      descriptor.mipLevel &&
      descriptor.mipLevel.count &&
      descriptor.mipLevel.count > maxMipLevelCount
    ) {
      throw new Error(
        "Mip level count exceeds maximum for texture dimensions!",
      );
    }
    this.mipLevelCount = descriptor.mipLevel?.count;
    if (descriptor.usage === undefined) {
      descriptor.usage =
        GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT;
    }
    this.usage = descriptor.usage;

    this.z_dvc = Object.freeze(deepClone(descriptor.defaultViewConfig ?? {}));
    this.z_gpuTexture = z_device.createTexture({
      dimension: Texture.z_translateDimensionToTD(descriptor.dimension),
      format: descriptor.format,
      label: descriptor.label,
      mipLevelCount: descriptor.mipLevel?.count,
      sampleCount: descriptor.sampleCount,
      size: descriptor.size,
      textureBindingViewDimension: Texture.z_normalise(descriptor.dimension),
      usage: descriptor.usage,
    });
    let actuallyDestoryed = false;
    this.destroyed = false;
    Object.defineProperty(this, "destroyed", {
      get() {
        return actuallyDestoryed;
      },
      set: (val: boolean) => {
        if (!val && !actuallyDestoryed) return;
        if (val && actuallyDestoryed) return;
        if (!val && actuallyDestoryed)
          throw new Error("Can't bring a texture from dead.");
        this.z_gpuTexture.destroy();
        actuallyDestoryed = true;
      },
    });
  }
  destroyed;
  static z_normalise(
    d: Texture.Dimension | GPUTextureViewDimension,
  ): GPUTextureViewDimension {
    if (typeof d === "number") return Texture.ReverseDimensionEnum[d];
    else return d;
  }
  static z_translateDimensionToTD(
    d: Texture.Dimension | GPUTextureViewDimension,
  ): GPUTextureDimension {
    if (typeof d === "number") return Texture.lookupEToGTD[d];
    else return Texture.lookupEToGTD[Texture.Dimension[d]];
  }
  /** i swear if u touch this and delete it and everything crashes DONT. BLAME. ME. */
  readonly z_gpuTexture;
  readonly z_dvc;
  usage;
  /** Size of this texture */
  size;
  /** array layer count of this texture */
  layersCount;
  /** MSAA sample count */
  sampleCount;
  /** Mip level count */
  mipLevelCount;
  /** dimension of this texture. */
  dimension;
  /** format of this texture */
  format;
  /** label of this texture */
  label;
  /** creates a view from the given view descriptor, merged with the default view descriptor
   *
   * if no merge is true, it wont merge with default
   */
  view(cfg?: Texture.view_descriptor, noMerge: boolean = false) {
    return new Texture.View(
      this,
      noMerge ? (cfg ?? {}) : cfg ? deepRest(this.z_dvc, cfg) : this.z_dvc,
    );
  }
  static z_extend3dToAVec3(
    extend3d: GPUExtent3D | GPUExtent3DStrict,
    arrayLayerCount?: number,
  ): [number, number, number] {
    if (Symbol.iterator in extend3d) {
      return extend3d as [number, number, number];
    } else {
      return [
        extend3d.width,
        extend3d.height ?? 1,
        extend3d.depthOrArrayLayers ?? arrayLayerCount ?? 1,
      ];
    }
  }
  /** **Warning**: This does allocation (creates new wgpu-matrix.Vec3) */
  getSizeWMVec3() {
    return vec3.create(this.size[0], this.size[1], this.size[2]);
  }
  getSize() {
    return this.size;
  }

  write(
    data: GPUAllowSharedBufferSource,
    size?: GPUExtent3D,
    copylayout?: GPUTexelCopyBufferLayout,
    distinfo?: Texture.distinfo,
  ) {
    const mipLevel = distinfo?.atMipLevel ?? 0;

    // Validate mip level
    if (
      !Number.isInteger(mipLevel) ||
      mipLevel < 0 ||
      mipLevel >= (this.mipLevelCount ?? 1)
    ) {
      throw new Error("Invalid mip level.");
    }

    // Normalize source data
    const source = ArrayBuffer.isView(data)
      ? {
          byteLength: data.byteLength,
          byteOffset: data.byteOffset,
        }
      : {
          byteLength: data.byteLength,
          byteOffset: 0,
        };

    // Validate copy layout
    if (copylayout) {
      const offset = copylayout.offset ?? 0;
      const bytesPerRow = copylayout.bytesPerRow;
      const rowsPerImage = copylayout.rowsPerImage;

      if (
        !Number.isSafeInteger(offset) ||
        offset < 0 ||
        offset >= source.byteLength
      ) {
        throw new Error("Invalid copylayout.offset.");
      }

      if (
        bytesPerRow !== undefined &&
        (!Number.isSafeInteger(bytesPerRow) || bytesPerRow <= 0)
      ) {
        throw new Error("Invalid copylayout.bytesPerRow.");
      }

      if (
        rowsPerImage !== undefined &&
        (!Number.isSafeInteger(rowsPerImage) || rowsPerImage <= 0)
      ) {
        throw new Error("Invalid copylayout.rowsPerImage.");
      }
    }

    const origin =
      distinfo?.origin !== undefined
        ? Texture.z_extend3dToAVec3(distinfo.origin)
        : [0, 0, 0];

    const extent = size ? Texture.z_extend3dToAVec3(size) : this.size;

    // Calculate dimensions at selected mip level
    const mipSize = this.size.map((dimension, index) =>
      index === 2 && this.dimension !== "3d"
        ? dimension
        : Math.max(1, dimension >> mipLevel),
    );

    // Validate destination bounds
    for (let i = 0; i < 3; i++) {
      if (
        !Number.isSafeInteger(origin[i]) ||
        origin[i] < 0 ||
        !Number.isSafeInteger(extent[i]) ||
        extent[i] <= 0 ||
        origin[i] + extent[i] > mipSize[i]
      ) {
        throw new Error(`Texture write exceeds mip-level bounds on axis ${i}.`);
      }
    }

    // Perform write
    this.z_device.queue.writeTexture(
      {
        texture: this.z_gpuTexture,
        mipLevel,
        origin,
        aspect: distinfo?.withAspect,
      },
      data,
      copylayout ?? {},
      extent,
    );
  }
}
export namespace Texture {
  export interface distinfo {
    withAspect?: GPUTextureAspect;
    atMipLevel?: number;
    origin: GPUExtent3DStrict;
  }
  export class View {
    constructor(
      public readonly z_parentTexture: Texture,
      viewDesc: Texture.view_descriptor,
    ) {
      this.aspect = viewDesc.aspect;
      this.label = viewDesc.label;
      this.swizzle = viewDesc.swizzle;
      this.mipLevelBase = viewDesc.mipLevel?.base;
      this.layersBase = viewDesc.layers?.base;
      this.z_tv = z_parentTexture.z_gpuTexture.createView({
        dimension: Texture.z_normalise(z_parentTexture.dimension),
        aspect: viewDesc.aspect,
        baseArrayLayer: this.layersBase,
        baseMipLevel: this.mipLevelBase,
        format: z_parentTexture.format,
        usage: z_parentTexture.usage,
        swizzle: this.swizzle,
        arrayLayerCount: z_parentTexture.layersCount
          ? z_parentTexture.layersCount - (this.layersBase ?? 0)
          : undefined,
        mipLevelCount: z_parentTexture.mipLevelCount
          ? z_parentTexture.mipLevelCount - (this.mipLevelBase ?? 0)
          : undefined,
        label: this.label ?? z_parentTexture.label,
      });
    }
    public readonly z_tv;
    /** Aspect of the texture view. */
    aspect;
    /** The label of this texture view */
    label;
    /** Swizzle of this texture view. */
    swizzle;
    /** Mip level base, being the index of the most detailed texture */
    mipLevelBase;
    /** Layers base.  */
    layersBase;
  }
  /** performance abstraction of {@link GPUTextureViewDimension} */
  export enum Dimension {
    // idk why i made this lwk
    // timepass ahh task
    "1d" = 0,
    "2d" = 1,
    "2d-array" = 2,
    "3d" = 3,
    cube = 4,
    "cube-array" = 5,
  }
  export const ReverseDimensionEnum = {
    [0]: "1d",
    [1]: "2d",
    [2]: "2d-array",
    [3]: "3d",
    [4]: "cube",
    [5]: "cube-array",
  } as const;
  /** @internal */
  export const lookupEToGTD: GPUTextureDimension[] = [
    "1d",
    "2d",
    "2d",
    "3d",
    "2d",
    "2d",
  ];
  export type swizzleletter = "1" | "0" | "r" | "g" | "b" | "a";
  /**
   * A four-component texture swizzle.
   * used to be a string literal type once but typedoc's ahhh expand it to full
   * @useDeclaredType
   */
  export type swizzle = string;
  export interface view_descriptor {
    /** A label for your texture view */
    label?: string;

    /** Texture aspect for your view. Normally you should use all */
    aspect?: GPUTextureAspect;
    /** Layers configuration for this view. For configurating the count, you must config the texture descriptor */
    layers?: { /** not range checked yet. */ base?: number };

    swizzle?: swizzle;

    /** Mip level configuration for this view. For configurating the count, you must config the texture desc */
    mipLevel?: { /** not range checked yet. */ base?: number };
  }
  /** The descriptor for the texture. */
  export interface descriptor {
    /** The dimension of this texture. If you use GPUTextureViewDimension, we lookup using Dimension[.dimension] */
    dimension: Dimension | GPUTextureViewDimension; //ye
    /** What the data format for this texture is. */
    format: GPUTextureFormat; //ye
    /** What the usage of this texture is. */
    usage: GPUTextureUsage[keyof GPUTextureUsage];
    /** Layer config for this texture. Base is configured individually in view descriptor or in defaultViewConfig */
    layers: {
      count?: number;
    };
    /** The label of this texture
     */
    label?: string; //ye
    /** mip level config for this texture */
    mipLevel?: {
      /**
       * Mip level count for your texture.
       *
       * **{@link GPUTextureDescriptor}.mipLevelCount** for more documentation
       *
       * Example:
       *
       * For a texture of size 256×256:
       *
       * | Level | Resolution |
       * |-------|------------|
       * | 0 | 256 × 256 |
       * | 1 | 128 × 128 |
       * | 2 | 64 × 64 |
       * | 3 | 32 × 32 |
       * | 4 | 16 × 16 |
       * | 5 | 8 × 8 |
       * | 6 | 4 × 4 |
       * | 7 | 2 × 2 |
       * | 8 | 1 × 1 |
       */
      count: number;
    };
    /** **MSAA Sample Count**.  */
    sampleCount?: SampleCount;
    /** size of this texture */
    size: GPUExtent3D;
    /** default view config. all individually passed configs are deeply rested to this. */
    defaultViewConfig?: view_descriptor;
  }
  export enum SampleCount {
    NONE = 1,
    FOUR = 4,
  }
}
export default Texture;
export class Texture2D extends Texture {
  constructor(_privateDevice: GPUDevice, desc: Texture2D.descriptor) {
    super(_privateDevice, desc);
  }
}
export namespace Texture2D {
  export interface descriptor extends Texture.descriptor {
    dimension: "2d";
  }
}
