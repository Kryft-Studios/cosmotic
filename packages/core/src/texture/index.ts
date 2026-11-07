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
import { deepClone, deepRest } from "../helpers";

/** A abstraction for webgpu textures and texture views */
export class Texture {
  constructor(
    public z_device: GPUDevice,
    descriptor: Texture.descriptor,
  ) {
    this.label = descriptor.label;
    this.format = descriptor.format;
    this.dimension = descriptor.dimension;
    this.layersCount = descriptor.layers.count;
    this.sampleCount = descriptor.sampleCount;
    this.mipLevelCount = descriptor.mipLevel?.count;
    this.size = descriptor.size;
    this.usage = descriptor.usage;
    this.z_dvc = Object.freeze(deepClone(descriptor.defaultViewConfig ?? {}));
    this.z_gpuTexture = z_device.createTexture({
      dimension: Texture.translateDimensionToTD(descriptor.dimension),
      format: descriptor.format,
      label: descriptor.label,
      mipLevelCount: descriptor.mipLevel?.count,
      sampleCount: descriptor.sampleCount,
      size: descriptor.size,
      textureBindingViewDimension: Texture.normalise(descriptor.dimension),
      usage: descriptor.usage,
    });
  }
  static normalise(
    d: Texture.Dimension | GPUTextureViewDimension,
  ): GPUTextureViewDimension {
    if (typeof d === "number") return Texture.ReverseDimensionEnum[d];
    else return d;
  }
  static translateDimensionToTD(
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
  view(cfg?: Texture.view_descriptor, noMerge:boolean=false) {
    return new Texture.View(
      this,
      noMerge ? cfg ?? {} : (cfg ? deepRest(this.z_dvc, cfg) : this.z_dvc)
    );
  }
}
export namespace Texture {
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
        dimension: Texture.normalise(z_parentTexture.dimension),
        aspect: viewDesc.aspect,
        baseArrayLayer: this.layersBase,
        baseMipLevel: this.mipLevelBase,
        format: z_parentTexture.format,
        usage: z_parentTexture.usage,
        swizzle: this.swizzle,
        arrayLayerCount: z_parentTexture.layersCount?z_parentTexture.layersCount - (this.layersBase??0) : undefined,
        mipLevelCount: z_parentTexture.mipLevelCount?z_parentTexture.mipLevelCount - (this.mipLevelBase??0) : undefined,
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
  export type swizzle =
    string;
  export interface view_descriptor {
    /** A label for your texture view */
    label?: string;

    /** Texture aspect for your view. Normally you should use all */
    aspect?: GPUTextureAspect;
    /** Layers configuration for this view. For configurating the count, you must config the texture descriptor */
    layers?: { /** not range checked yet. */base?: number };


    swizzle?: swizzle;

    /** Mip level configuration for this view. For configurating the count, you must config the texture desc */
    mipLevel?: {/** not range checked yet. */ base?: number };
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
