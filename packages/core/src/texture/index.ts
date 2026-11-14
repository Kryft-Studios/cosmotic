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
import { deepClone, deepRest, StagingBuffer } from "../helpers";
import { Vec3, vec3 } from "wgpu-matrix";
import EventEmitter from "eventemitter3";

/** A abstraction for webgpu textures and texture views */
export class Texture {
  events = new Texture.Events();

  constructor(
    public readonly z_stagingBuffer: StagingBuffer,
    public readonly z_device: GPUDevice,
    desc:
      | Texture.descriptor
      | Texture.wrap_options
      | Texture
      | Texture.gpubuffer_wrap_options
      | Texture.ab_wrap_options
      | Texture.typedarr_wrap_options
      | Texture.urlwrap_options
      | Texture.blob_wrap_options
      | Texture.ib_wrap_options
      | Texture.externalimage_wrap_options,
  ) {
    let owned = true;
    let des!: Texture.descriptor;
    let wrappedUpload: (() => void) | undefined;
    const defaultUsage =
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.RENDER_ATTACHMENT;
    const normaliseWrapSize = (
      size: Texture.vec3multityped,
    ): [number, number, number] => Texture.z_extend3dToAVec3(size);
    const makeWrapDescriptor = (
      size: Texture.vec3multityped,
      format: GPUTextureFormat,
      dimension: Texture.Dimension | GPUTextureViewDimension | GPUTextureDimension = "2d",
      label?: string,
      mipLevelCount: number = 1,
      usage: GPUTextureUsage[keyof GPUTextureUsage] = defaultUsage,
    ): Texture.descriptor => {
      const resolvedSize = normaliseWrapSize(size);
      return {
        dimension,
        format,
        label,
        layers: { count: resolvedSize[2] },
        mipLevel: { count: mipLevelCount },
        sampleCount: 1,
        size: resolvedSize,
        usage,
      };
    };
    if ("texture" in desc) {
      const descriptor = desc.texture;
      owned = desc.owned ?? false;
      const mockDescriptor: Texture.descriptor = {
        dimension: desc.dimension
          ? Texture.lookupEToGTD[
              Texture.Dimension[Texture.z_normaliseDimension(desc.dimension)]
            ] !== descriptor.dimension
            ? (() => {
                throw new Error(
                  "Invalid dimension given in wrap_options which is not compatible with the given texture",
                );
              })()
            : Texture.z_normaliseDimension(desc.dimension)
          : (descriptor.textureBindingViewDimension ?? descriptor.dimension),
        format: descriptor.format,
        layers: {
          count: descriptor.depthOrArrayLayers,
        },
        label: descriptor.label,
        mipLevel: { count: descriptor.mipLevelCount },
        sampleCount: descriptor.sampleCount,
        usage: descriptor.usage,
        size: [
          descriptor.width,
          descriptor.height,
          descriptor.depthOrArrayLayers,
        ],
      };
      des = mockDescriptor;
      this.size = mockDescriptor.size as [number, number, number];
      this.label = mockDescriptor.label;
      this.format = mockDescriptor.format;
      this.dimension = mockDescriptor.dimension;
      this.layersCount = mockDescriptor.layers.count;
      this.sampleCount = mockDescriptor.sampleCount;
      this.mipLevelCount = mockDescriptor.mipLevel?.count;
      this.usage = mockDescriptor.usage;
      if (desc.recreate || desc.recreate === undefined) {
        this.z_gpuTexture = z_device.createTexture({
          dimension: Texture.z_translateDimensionToTD(mockDescriptor.dimension),
          format: mockDescriptor.format,
          label: mockDescriptor.label,
          mipLevelCount: mockDescriptor.mipLevel?.count,
          sampleCount: mockDescriptor.sampleCount,
          size: mockDescriptor.size,
          textureBindingViewDimension: Texture.z_normaliseDimension(
            mockDescriptor.dimension,
          ),
          usage: mockDescriptor.usage,
        });
      } else {
        console.warn(
          "If you pass a texture with wrap_options.clone = false, we cannot check if its destroyed. so please, do not pass a destroyed texture",
        );
        this.z_gpuTexture = descriptor;
      }

      this.z_dvc = Object.freeze(desc.dvc ?? {});
    } else {
      if (
        "textureSize" in desc &&
        "format" in desc &&
        "buffer" in desc &&
        !("byteLength" in desc)
      ) {
        const source = desc;
        const size = normaliseWrapSize(source.textureSize);
        const mipLevel = "mipLevel" in source ? source.mipLevel ?? 0 : 0;
        const origin =
          "origin" in source ? source.origin ?? { x: 0, y: 0, z: 0 } : { x: 0, y: 0, z: 0 };
        const offset = "offset" in source ? source.offset ?? 0 : 0;
        desc = makeWrapDescriptor(
          size,
          source.format,
          source.dimension ?? "2d",
          undefined,
          mipLevel + 1,
        );
        wrappedUpload = () => {
          const encoder = z_device.createCommandEncoder({
            label: "Operation: Texture.wrap",
          });
          encoder.copyBufferToTexture(
            {
              buffer: source.buffer as GPUBuffer,
              offset,
              bytesPerRow: source.bytesPerRow,
              rowsPerImage: source.rowsPerImage,
            },
            {
              texture: this.z_gpuTexture,
              mipLevel,
              origin,
            },
            {
              width: size[0],
              height: size[1],
              depthOrArrayLayers: size[2],
            },
          );
          z_device.queue.submit([encoder.finish()]);
        };
      } else if (
        "textureSize" in desc &&
        "format" in desc &&
        "buffer" in desc &&
        "byteLength" in desc
      ) {
        const source = desc;
        const size = normaliseWrapSize(source.textureSize);
        const origin =
          "origin" in source ? source.origin ?? { x: 0, y: 0, z: 0 } : { x: 0, y: 0, z: 0 };
        desc = makeWrapDescriptor(
          size,
          source.format,
          source.dimension ?? "2d",
          undefined,
          1,
        );
        wrappedUpload = () => {
          const data = new Uint8Array(
            source.buffer,
            source.byteOffset ?? 0,
            source.byteLength ??
              source.buffer.byteLength - (source.byteOffset ?? 0),
          );
          Texture.write(
            z_device,
            this,
            data as unknown as GPUAllowSharedBufferSource,
            size,
            {
              bytesPerRow: source.bytesPerRow,
              rowsPerImage: source.rowsPerImage,
            },
            {
              origin: { width: 0, height: 0, depthOrArrayLayers: 0 } as GPUExtent3DStrict,
            },
          );
        };
      } else if (
        "textureSize" in desc &&
        "format" in desc &&
        "data" in desc
      ) {
        const source = desc;
        const size = normaliseWrapSize(source.textureSize);
        const mipLevelCount =
          "mipLevel" in source ? Number(source.mipLevel ?? 1) : 1;
        desc = makeWrapDescriptor(
          size,
          source.format,
          source.dimension ?? "2d",
          undefined,
          mipLevelCount,
        );
        wrappedUpload = () => {
          Texture.write(
            z_device,
            this,
            source.data as unknown as GPUAllowSharedBufferSource,
            size,
            {
              bytesPerRow: source.bytesPerRow,
              rowsPerImage: source.rowsPerImage,
            },
            {
              origin: { width: 0, height: 0, depthOrArrayLayers: 0 } as GPUExtent3DStrict,
            },
          );
        };
      } else if ("source" in desc) {
        const source = desc;
        const sourceImage = source.source as { width?: number; height?: number };
        if (
          typeof sourceImage.width === "number" &&
          typeof sourceImage.height === "number"
        ) {
          const size = normaliseWrapSize([
            sourceImage.width,
            sourceImage.height,
            1,
          ]);
          desc = makeWrapDescriptor(
            size,
            source.format ?? "rgba8unorm",
            source.dimension ?? "2d",
            undefined,
            1,
          );
          wrappedUpload = () => {
            z_device.queue.copyExternalImageToTexture(
              {
                source: source.source,
                flipY: false,
                origin: { x: 0, y: 0 } as GPUOrigin2D,
              },
              {
                texture: this.z_gpuTexture,
                mipLevel: 0,
                origin: { x: 0, y: 0, z: 0 } as GPUOrigin3D,
              },
              {
                width: size[0],
                height: size[1],
                depthOrArrayLayers: size[2],
              },
            );
          };
        }
      } else if ("image" in desc) {
        const source = desc;
        const imageSource = source.image as { width?: number; height?: number };
        if (
          typeof imageSource.width === "number" &&
          typeof imageSource.height === "number"
        ) {
          const size = normaliseWrapSize([
            imageSource.width,
            imageSource.height,
            1,
          ]);
          desc = makeWrapDescriptor(
            size,
            source.format ?? "rgba8unorm",
            source.dimension ?? "2d",
            undefined,
            1,
          );
          wrappedUpload = () => {
            z_device.queue.copyExternalImageToTexture(
              {
                source: source.image,
                flipY: false,
                origin: { x: 0, y: 0 } as GPUOrigin2D,
              },
              {
                texture: this.z_gpuTexture,
                mipLevel: 0,
                origin: { x: 0, y: 0, z: 0 } as GPUOrigin3D,
              },
              {
                width: size[0],
                height: size[1],
                depthOrArrayLayers: size[2],
              },
            );
          };
        }
      } else if ("blob" in desc || "url" in desc) {
        throw new Error(
          "Texture constructor wrap options for Blob/URL sources are asynchronous and must be decoded before creating a Texture. Use an ImageBitmap or canvas/source instead.",
        );
      }
      const normalizedDesc = desc as Texture.descriptor;
      const legacyDesc = normalizedDesc as Texture.descriptor & {
        z_dvc?: Texture.view_descriptor;
        layersCount?: number;
        mipLevelCount?: number;
      };
      if ("layersCount" in legacyDesc) {
        const mockDescriptor: Texture.descriptor = {
          defaultViewConfig: legacyDesc.z_dvc,
          dimension: legacyDesc.dimension,
          format: legacyDesc.format,
          label: legacyDesc.label,
          layers: { count: legacyDesc.layersCount },
          mipLevel: { count: legacyDesc.mipLevelCount ?? 1 },
          sampleCount: legacyDesc.sampleCount,
          size: legacyDesc.size,
          usage: legacyDesc.usage,
        };
        desc = mockDescriptor;
      }
      des = desc as Texture.descriptor;
      const descriptor = desc as Texture.descriptor;
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

      const maxMipLevelCount =
        Math.floor(Math.log2(Math.max(...this.size))) + 1;

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
        textureBindingViewDimension: Texture.z_normaliseDimension(
          descriptor.dimension,
        ),
        usage: descriptor.usage,
      });
    }
    let actuallyDestoryed = false;
    this.destroyed = false;
    const original = this.z_gpuTexture.destroy.bind(this.z_gpuTexture);

    const destroy = (
      val: boolean,
      destructionEvent: "texture-raw-destroy" | "property-set",
    ) => {
      if (!val && !actuallyDestoryed) return;
      if (val && actuallyDestoryed) return;
      if (!val && actuallyDestoryed)
        throw new Error("Can't bring a texture from dead.");
      if (owned) original();
      this.events.emit("destroyed", destructionEvent);
      actuallyDestoryed = true;
    };

    Object.defineProperty(this, "destroyed", {
      get() {
        return actuallyDestoryed;
      },
      set: (val: boolean) => {
        destroy(val, "property-set");
      },
    });
    this.z_gpuTexture.destroy = () => {
      destroy(true, "texture-raw-destroy");
    };
    Texture.z_lookupGTexToWrap.set(this.z_gpuTexture, this);
    if (this.z_dvc) Texture.z_validateViewDescriptor(this.z_dvc, des);
    this.mipSize = Object.freeze(
      this.size.map((dimension, index) =>
        index === 2 && this.dimension !== "3d"
          ? dimension
          : Math.max(1, dimension >> ((this.mipLevelCount ?? 1) - 1)),
      ),
    );
    this.byteLength = Texture.estimateTextureSize(
      this.size[0],
      this.size[1],
      this.size[2],
      this.mipLevelCount ?? 1,
      Texture.getBytesPerTexel(this.format),
      this.dimension,
    );
    if (wrappedUpload) wrappedUpload();
  }
  byteLength;
  destroyed;

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
  mipSize;
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
  static z_normaliseDimension(
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

  view(cfg?: Texture.view_descriptor, noMerge: boolean = false) {
    return Texture.view(this, cfg, noMerge);
  }
  static getGPUTexture(t: Texture | GPUTexture) {
    return "z_gpuTexture" in t ? t.z_gpuTexture : t;
  }
  static view(
    from: GPUTexture | Texture,
    cfg?: Texture.view_descriptor,
    noMerge: boolean = false,
  ) {
    const tex = this.getGPUTexture(from);
    const config = noMerge
      ? (cfg ?? {})
      : cfg
        ? "z_dvc" in from
          ? deepRest(from.z_dvc, cfg)
          : cfg
        : "z_dvc" in from
          ? from.z_dvc
          : {};
    const v = new Texture.View(tex, config);
    if ("z_gpuTexture" in from) from.events.emit("view-created", v);
    return v;
  }

  static z_removeRowPadding(
    source: ArrayBuffer,
    rowBytes: number,
    bytesPerRow: number,
    rowsPerImage: number,
    depth: number,
  ): ArrayBuffer {
    if (rowBytes === bytesPerRow) {
      return source;
    }

    const src = new Uint8Array(source);

    const result = new Uint8Array(rowBytes * rowsPerImage * depth);

    for (let z = 0; z < depth; z++) {
      for (let y = 0; y < rowsPerImage; y++) {
        const srcOffset = z * bytesPerRow * rowsPerImage + y * bytesPerRow;

        const dstOffset = (z * rowsPerImage + y) * rowBytes;

        result.set(src.subarray(srcOffset, srcOffset + rowBytes), dstOffset);
      }
    }

    return result.buffer;
  }

  private static z_readLocks = new WeakMap<StagingBuffer, Promise<void>>();
  async read(size?: Texture.vec3multityped, disti: Texture.copyinfo = {}) {
    return Texture.read(this.z_device, this, this.z_stagingBuffer, disti, size);
  }
  static gpuTexelCopyInfoFrom(
    texture: GPUTexture,
    disti: Texture.copyinfo = {},
    size?: Texture.vec3multityped,
  ): GPUTexelCopyTextureInfo {
    const a = this.z_validateAndNormaliseDInfo(texture, disti, size);
    return {
      aspect: disti.withAspect,
      mipLevel: a.mipLevel,
      origin: a.origin,
      texture: texture,
    };
  }
  static z_estimateTextureSize(
    format: GPUTextureFormat,
    extent: [number, number, number],
  ) {
    // Calculate copy layout.
    const bpt = this.getBytesPerTexel(format);

    const rowBytes = extent[0] * bpt;
    const bytesPerRow = Math.ceil(rowBytes / 256) * 256;
    const rowsPerImage = extent[1];

    const depth = extent[2];

    const bufferSize = bytesPerRow * rowsPerImage * depth;
    return { bytesPerRow, depth, rowsPerImage, bufferSize, rowBytes };
  }
  static async read(
    d: GPUDevice,
    t: GPUTexture | Texture,
    sb: StagingBuffer,
    disti: Texture.copyinfo = {},
    size?: Texture.vec3multityped,
  ): Promise<ArrayBuffer> {
    const texture = this.getGPUTexture(t);

    const extent = this.z_validateAndNormaliseDInfo(t, disti, size).extent;
    // Validate the requested region.
    const { bytesPerRow, depth, rowsPerImage, bufferSize, rowBytes } =
      this.z_estimateTextureSize(texture.format, extent);

    // Allocate or reuse staging storage.
    const btarget = sb.copyBTargetInfo(bufferSize);

    // Encode texture-to-buffer copy.
    const encoder = d.createCommandEncoder({
      label: "Operation: Texture.read",
    });

    encoder.copyTextureToBuffer(
      this.gpuTexelCopyInfoFrom(texture, disti, size),
      {
        buffer: btarget.info[0],
        offset: 0,
        bytesPerRow,
        rowsPerImage,
      },
      extent,
    );

    d.queue.submit([encoder.finish()]);

    // Retrieve the padded GPU readback.
    const data = await btarget.getRange();

    // Remove GPU row-pitch padding.
    return this.z_removeRowPadding(
      data,
      rowBytes,
      bytesPerRow,
      rowsPerImage,
      depth,
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
  static z_normaliseVec3(
    a: GPUExtent3D | GPUExtent3DStrict | Vec3 | [number, number, number],
  ): [number, number, number] {
    if ("width" in a) {
      return [a.width, a.height ?? 1, a.depthOrArrayLayers ?? 1];
    } else {
      return [...a] as [number, number, number];
    }
  }
  static z_lookupGTexToWrap = new WeakMap<GPUTexture, Texture>();
  write(
    data: GPUAllowSharedBufferSource,
    size?: GPUExtent3D,
    copylayout?: GPUTexelCopyBufferLayout,
    copyinfo?: Texture.copyinfo,
  ) {
    Texture.write(
      this.z_device,
      this.z_gpuTexture,
      data,
      size,
      copylayout,
      copyinfo,
    );
  }
  clear(copyinfo?: Texture.copyinfo) {
    Texture.clear(this.z_device, this, copyinfo);
  }
  static clear(
    device: GPUDevice,
    texture: GPUTexture | Texture,
    copyinfo?: Texture.copyinfo,
  ) {
    const gpuTexture = this.getGPUTexture(texture);

    const { extent, origin, mipLevel } = this.z_validateAndNormaliseDInfo(
      texture,
      copyinfo,
    );

    const byteLength =
      extent[0] *
      extent[1] *
      (extent[2] ?? 1) *
      this.getBytesPerTexel(gpuTexture.format);

    device.queue.writeTexture(
      this.gpuTexelCopyInfoFrom(gpuTexture, copyinfo, extent),
      new Uint8Array(byteLength),
      {},
      extent,
    );
  }
  /* made this wrong lol, use this maybe for copyTo  static async clear(sbuffer: StagingBuffer, device: GPUDevice,texture : GPUTexture | Texture, copyinfo?: Texture.copyinfo){
const {mipSize, extent, origin, mipLevel} = this.validateAndNormaliseDInfo(texture, copyinfo)
const tinfo = sbuffer.copyBTargetInfo("z_gpuTexture" in texture ? texture.byteLength : this.estimateTextureSize(texture.width,texture.height,texture.depthOrArrayLayers, texture.mipLevelCount, this.getBytesPerTexel(texture.format)) )
device.createCommandEncoder()
      .copyTextureToBuffer({aspect: copyinfo?.withAspect, mipLevel, origin, "texture": "z_gpuTexture" in texture ? texture.z_gpuTexture : texture}, {"buffer": sbuffer.z_buf}, "z_gpuTexture" in texture ? texture.size :  [texture.width, texture.height, texture.depthOrArrayLayers])

  }*/

  static z_validateAndNormaliseDInfo(
    texture: GPUTexture | Texture,
    copyinfo: Texture.copyinfo = {},
    size?: GPUExtent3D | GPUExtent3DStrict | Vec3 | [number, number, number],
  ) {
    const mipLevel = copyinfo.atMipLevel ?? 0;

    const rawTexture = this.getGPUTexture(texture);

    const mipLevelCount = rawTexture.mipLevelCount;
    const dimension = rawTexture.dimension;

    if (
      !Number.isInteger(mipLevel) ||
      mipLevel < 0 ||
      mipLevel >= mipLevelCount
    ) {
      throw new Error("Invalid mip level.");
    }

    // Get base texture dimensions.
    const baseSize =
      "size" in texture
        ? this.z_normaliseVec3(texture.size)
        : ([
            rawTexture.width,
            rawTexture.height,
            rawTexture.depthOrArrayLayers,
          ] as [number, number, number]);

    // Calculate dimensions at the selected mip level.
    const mipSize = [
      Math.max(1, baseSize[0] >> mipLevel),
      dimension === "1d" ? 1 : Math.max(1, baseSize[1] >> mipLevel),
      dimension === "3d" ? Math.max(1, baseSize[2] >> mipLevel) : baseSize[2],
    ] as [number, number, number];

    // Normalize origin.
    const origin =
      copyinfo.origin !== undefined
        ? this.z_extend3dToAVec3(copyinfo.origin)
        : ([0, 0, 0] as [number, number, number]);

    // Default extent is the remaining region after origin.
    const extent =
      size !== undefined
        ? this.z_normaliseVec3(size)
        : ([
            mipSize[0] - origin[0],
            mipSize[1] - origin[1],
            mipSize[2] - origin[2],
          ] as [number, number, number]);

    // Validate region.
    for (let i = 0; i < 3; i++) {
      if (
        !Number.isSafeInteger(origin[i]) ||
        origin[i] < 0 ||
        !Number.isSafeInteger(extent[i]) ||
        extent[i] <= 0 ||
        origin[i] + extent[i] > mipSize[i]
      ) {
        throw new Error(`Texture read exceeds mip-level bounds on axis ${i}.`);
      }
    }

    // Validate texture copy compatibility.
    if (rawTexture.sampleCount !== 1) {
      throw new Error("Cannot directly read a multisampled texture.");
    }

    if (!(rawTexture.usage & GPUTextureUsage.COPY_SRC)) {
      throw new Error("Texture must have GPUTextureUsage.COPY_SRC.");
    }

    return {
      mipSize,
      extent,
      origin,
      mipLevel,
    };
  }

  static readonly bytesPerTexel: Partial<Record<GPUTextureFormat, number>> = {
    // 8-bit formats
    r8unorm: 1,
    r8snorm: 1,
    r8uint: 1,
    r8sint: 1,

    // 16-bit formats
    r16uint: 2,
    r16sint: 2,
    r16float: 2,

    rg8unorm: 2,
    rg8snorm: 2,
    rg8uint: 2,
    rg8sint: 2,

    // 32-bit formats
    r32uint: 4,
    r32sint: 4,
    r32float: 4,

    rg16uint: 4,
    rg16sint: 4,
    rg16float: 4,

    rgba8unorm: 4,
    "rgba8unorm-srgb": 4,
    rgba8snorm: 4,
    rgba8uint: 4,
    rgba8sint: 4,

    bgra8unorm: 4,
    "bgra8unorm-srgb": 4,

    rgb10a2unorm: 4,
    rgb10a2uint: 4,
    rg11b10ufloat: 4,
    rgb9e5ufloat: 4,

    // 64-bit formats
    rg32uint: 8,
    rg32sint: 8,
    rg32float: 8,

    rgba16uint: 8,
    rgba16sint: 8,
    rgba16float: 8,

    // 128-bit formats
    rgba32uint: 16,
    rgba32sint: 16,
    rgba32float: 16,

    // Depth/stencil formats
    stencil8: 1,
    depth16unorm: 2,
    depth24plus: 4, // Estimated; implementation-dependent
    "depth24plus-stencil8": 4,
    depth32float: 4,
    "depth32float-stencil8": 8,
  };
  static getBytesPerTexel(format: GPUTextureFormat): number {
    const result = this.bytesPerTexel[format];

    if (result === undefined) {
      throw new Error(`Unsupported or compressed texture format: ${format}`);
    }

    return result;
  }
  static estimateTextureSize(
    width: number,
    height: number,
    depth: number,
    mipLevels: number,
    bytesPerTexel: number,
    dimension: Texture.Dimension | GPUTextureViewDimension,
  ): number {
    let total = 0;

    for (let i = 0; i < mipLevels; i++) {
      const w = Math.max(1, width >> i);
      const h = Math.max(1, height >> i);
      const d =
        dimension === "3d" || dimension === Texture.Dimension["3d"]
          ? Math.max(1, depth >> i)
          : depth;

      total += w * h * d * bytesPerTexel;
    }

    return total;
  }
  static write(
    device: GPUDevice,
    texture: Texture | GPUTexture,
    data: GPUAllowSharedBufferSource,
    size?: GPUExtent3D,
    copylayout?: GPUTexelCopyBufferLayout,
    copyinfo?: Texture.copyinfo,
  ) {
    const { mipSize, extent, origin, mipLevel } =
      this.z_validateAndNormaliseDInfo(texture, copyinfo, size);

    // Validate mip level
    if (
      !Number.isInteger(mipLevel) ||
      mipLevel < 0 ||
      mipLevel >= (texture.mipLevelCount ?? 1)
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
    // Perform write
    device.queue.writeTexture(
      this.gpuTexelCopyInfoFrom(this.getGPUTexture(texture), copyinfo, extent),
      data,
      copylayout ?? {},
      extent,
    );
    if ("view" in texture) {
      texture.events.emit("write", data, size, copylayout, copyinfo);
    } else if (this.z_lookupGTexToWrap.has(texture)) {
      this.z_lookupGTexToWrap
        .get(texture)
        ?.events.emit("write", data, size, copylayout, copyinfo);
    }
  }
  copyTo(
    to: GPUTexture | GPUBuffer | Texture,
    copyInfos?: { src?: Texture.copyinfo; dist?: Texture.copyinfo },
    size?: Texture.vec3multityped,
    offset?: number,
  ) {
    return Texture.copyTo(
      this.z_device,
      this.z_gpuTexture,
      to,
      copyInfos?.src,
      copyInfos?.dist,
      size,
      offset,
    );
  }
  static copyTo(
    device: GPUDevice,
    self: Texture | GPUTexture,
    to: GPUTexture | GPUBuffer | Texture,
    srccopyinfo?: Texture.copyinfo,
    distcopyinfo?: Texture.copyinfo,
    size?: Texture.vec3multityped,
    offset?: number,
  ) {
    const gpuT = this.getGPUTexture(self);
    const normalised = this.z_validateAndNormaliseDInfo(
      self,
      srccopyinfo,
      size,
    );
    if (!(gpuT.usage & GPUTextureUsage.COPY_SRC))
      throw new Error("Can't copy from this texture, it doesnt have COPY_SRC");
    if ("format" in to) {
      if (!(to.usage & GPUTextureUsage.COPY_DST))
        throw new Error("Can't copy to this texture, it doesnt have COPY_DST");
      const cmde = device.createCommandEncoder({
        label: "Operation: Texture.copyTo",
      });
      cmde.copyTextureToTexture(
        this.gpuTexelCopyInfoFrom(gpuT, srccopyinfo, normalised.extent),
        this.gpuTexelCopyInfoFrom(
          this.getGPUTexture(to),
          distcopyinfo,
          normalised.extent,
        ),
        normalised.extent,
      );
      device.queue.submit([cmde.finish()]);
    } else {
      if (!(to.usage & GPUTextureUsage.COPY_DST))
        throw new Error("Can't copy to this buffer, it doesnt have COPY_DST");

      const cmde = device.createCommandEncoder({
        label: "Operation: Texture.copyTo",
      });
      const a = this.z_estimateTextureSize(self.format, normalised.extent);
      cmde.copyTextureToBuffer(
        this.gpuTexelCopyInfoFrom(gpuT, srccopyinfo, normalised.extent),
        {
          buffer: to,
          bytesPerRow: a.bytesPerRow,
          offset,
          rowsPerImage: a.rowsPerImage,
        },
        normalised.extent,
      );
      device.queue.submit([cmde.finish()]);
    }
  }
  /** validates a view descriptor against a descriptor */
  static z_validateViewDescriptor(
    vd: Texture.view_descriptor,
    d: Texture.descriptor,
  ) {
    const mipCount = d.mipLevel?.count ?? 1;
    const layerCount = d.layers?.count ?? 1;
    const mipBase = vd.mipLevel?.base ?? 0;
    const layerBase = vd.layers?.base ?? 0;

    if (!Number.isInteger(mipBase) || mipBase < 0 || mipBase >= mipCount)
      throw new Error(
        "Texture.z_validateViewDescriptor: Invalid mip level base.",
      );

    if (
      !Number.isInteger(layerBase) ||
      layerBase < 0 ||
      layerBase >= layerCount
    )
      throw new Error(
        "Texture.z_validateViewDescriptor: Invalid array layer base.",
      );
  }
}
export namespace Texture {
  export type vec3multityped =
    Vec3 | [number, number, number] | GPUExtent3D | GPUExtent3DStrict;
  export interface EventsIntf {
    "view-created": [view: Texture.View];
    destroyed: [reason: "texture-raw-destroy" | "property-set"];
    write: Parameters<InstanceType<typeof Texture>["write"]>;
  }
  export class Events extends EventEmitter<EventsIntf> {
    constructor() {
      super();
    }
  }
  export interface copyinfo {
    withAspect?: GPUTextureAspect;
    atMipLevel?: number;
    origin?: GPUExtent3DStrict;
  }
  export class View {
    constructor(
      public readonly z_parentTexture: GPUTexture,
      viewDesc: Texture.view_descriptor,
    ) {
      this.aspect = viewDesc.aspect;
      this.label = viewDesc.label;
      this.swizzle = viewDesc.swizzle;
      this.mipLevelBase = viewDesc.mipLevel?.base;
      this.layersBase = viewDesc.layers?.base;
      this.z_tv = z_parentTexture.createView({
        dimension: Texture.z_normaliseDimension(z_parentTexture.dimension),
        aspect: viewDesc.aspect,
        baseArrayLayer: this.layersBase,
        baseMipLevel: this.mipLevelBase,
        format: z_parentTexture.format,
        usage: z_parentTexture.usage,
        swizzle: this.swizzle,
        arrayLayerCount: z_parentTexture.depthOrArrayLayers
          ? z_parentTexture.depthOrArrayLayers - (this.layersBase ?? 0)
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
  /** options for wrapping a existing GPUTexture */
  export interface wrap_options {
    /** ViewDimension of the texture. must be compatible with the texture's dimension */
    dimension?: Dimension | GPUTextureViewDimension;

    /** Default view descriptor */
    dvc?: view_descriptor;

    /** whether the texture is owned by the class, that is, if this class gets destroyed, the texture should too */
    owned?: boolean;

    /** The texture to wrap */
    texture: GPUTexture;
    /** recreates the texture from properties.   */
    recreate?: boolean;
  }
  
  export interface gpubuffer_wrap_options {
    buffer: GPUBuffer;
    offset?: number;
    size?: number;
    bytesPerRow: number;
    rowsPerImage?: number;
    format: GPUTextureFormat;
    textureSize: Texture.vec3multityped;
    dimension?: GPUTextureDimension;
    mipLevel?: number;
    origin?: GPUOrigin3D;
  }
  export interface ab_wrap_options {
      buffer: ArrayBuffer;
      byteOffset?: number;
      byteLength?: number;
      bytesPerRow: number;
      rowsPerImage?: number;
      format: GPUTextureFormat;
      textureSize: Texture.vec3multityped;
      dimension?: GPUTextureDimension;
    
  }
  export interface typedarr_wrap_options {
    data: ArrayBufferView;
    bytesPerRow: number;
    rowsPerImage?: number;
    format: GPUTextureFormat;
    textureSize: Texture.vec3multityped;
    dimension?: GPUTextureDimension;
  }
  export interface urlwrap_options {
    url: string | URL;
    fetchOptions?: RequestInit;
    format?: GPUTextureFormat;
    mipLevelCount?: number;
    dimension?: GPUTextureDimension;
    flipY?: boolean;
  }
  export interface blob_wrap_options {
    blob: Blob;
    format?: GPUTextureFormat;
    mipLevelCount?: number;
    dimension?: GPUTextureDimension;
    flipY?: boolean;
  }
  export interface ib_wrap_options {
    image: ImageBitmap;
    format?: GPUTextureFormat;
    mipLevelCount?: number;
    dimension?: GPUTextureDimension;
    flipY?: boolean;
  }
  export interface externalimage_wrap_options {
      source: GPUCopyExternalImageSource;
      format?: GPUTextureFormat;
      mipLevelCount?: number;
      dimension?: GPUTextureDimension;
      flipY?: boolean;
    
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

export class Texture1D extends Texture {
  constructor(
    _stagingBuffer: StagingBuffer,
    _privateDevice: GPUDevice,
    desc: Texture1D.descriptor,
  ) {
    super(_stagingBuffer, _privateDevice, desc);
  }
}
export namespace Texture1D {
  export interface descriptor extends Texture.descriptor {
    dimension: "1d";
  }
}

export class Texture2D extends Texture {
  constructor(
    _stagingBuffer: StagingBuffer,
    _privateDevice: GPUDevice,
    desc: Texture2D.descriptor,
  ) {
    super(_stagingBuffer, _privateDevice, desc);
  }
}
export namespace Texture2D {
  export interface descriptor extends Texture.descriptor {
    dimension: "2d";
  }

  export class Array extends Texture {
    static registry = new Map<string, Texture2D.Array>();
    private readonly items = new Map<number, ImageBitmap>();
    private readonly changes = new Map<number, ImageBitmap>();
    private nextIndex = 0;

    static has(key: string) {
      return this.registry.has(key);
    }

    static get(key: string) {
      return this.registry.get(key);
    }

    static set(key: string, texture: Texture2D.Array) {
      this.registry.set(key, texture);
      return texture;
    }

    register(image: ImageBitmap) {
      if (this.nextIndex >= this.size[2]) {
        throw new Error("Texture2D.Array has no free layers.");
      }

      const index = this.nextIndex++;
      this.set(index, image);
      return index;
    }

    set(index: number, image: ImageBitmap) {
      if (!Number.isInteger(index) || index < 0 || index >= this.size[2]) {
        throw new RangeError("Texture2D.Array layer index is out of range.");
      }

      this.items.set(index, image);
      this.changes.set(index, image);
      return this;
    }

    get(index: number) {
      return this.items.get(index);
    }

    async flushChanges() {
      for (const [index, image] of this.changes) {
        const upload =
          image.width === this.size[0] && image.height === this.size[1]
            ? image
            : await createImageBitmap(image, {
                resizeWidth: this.size[0],
                resizeHeight: this.size[1],
                resizeQuality: "high",
              });

        this.z_device.queue.copyExternalImageToTexture(
          { source: upload, flipY: false },
          {
            texture: this.z_gpuTexture,
            mipLevel: 0,
            origin: { x: 0, y: 0, z: index },
          },
          { width: this.size[0], height: this.size[1], depthOrArrayLayers: 1 },
        );

        if (upload !== image) upload.close();
        if (this.changes.get(index) === image) this.changes.delete(index);
      }
    }

    static delete(key: string) {
      return this.registry.delete(key);
    }

    static from(
      key: string,
      _stagingBuffer: StagingBuffer,
      _privateDevice: GPUDevice,
      desc: Texture2D.Array.descriptor,
    ) {
      const texture = new Texture2D.Array(_stagingBuffer, _privateDevice, desc);
      this.registry.set(key, texture);
      return texture;
    }

    constructor(
      _stagingBuffer: StagingBuffer,
      _privateDevice: GPUDevice,
      desc: Texture2D.Array.descriptor,
    ) {
      super(_stagingBuffer, _privateDevice, {
        ...desc,
        dimension: "2d-array",
        usage:
          (desc.usage ??
            (GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT)) |
          GPUTextureUsage.COPY_DST,
      });
    }
  }

  export namespace Array {
    export interface descriptor extends Texture.descriptor {
      dimension: "2d-array";
    }
  }
}

export class Texture3D extends Texture {
  constructor(
    _stagingBuffer: StagingBuffer,
    _privateDevice: GPUDevice,
    desc: Texture3D.descriptor,
  ) {
    super(_stagingBuffer, _privateDevice, desc);
  }
}
export namespace Texture3D {
  export interface descriptor extends Texture.descriptor {
    dimension: "3d";
  }
}

export class TextureCube extends Texture {
  constructor(
    _stagingBuffer: StagingBuffer,
    _privateDevice: GPUDevice,
    desc: TextureCube.descriptor,
  ) {
    super(_stagingBuffer, _privateDevice, desc);
  }
}
export namespace TextureCube {
  export interface descriptor extends Texture.descriptor {
    dimension: "cube";
  }

  export interface item {
    px: ImageBitmap;
    nx: ImageBitmap;
    py: ImageBitmap;
    ny: ImageBitmap;
    pz: ImageBitmap;
    nz: ImageBitmap;
  }

  export class Array extends Texture {
    static registry = new Map<string, TextureCube.Array>();
    private readonly items = new Map<number, TextureCube.item>();
    private readonly changes = new Map<number, TextureCube.item>();
    private nextIndex = 0;

    static has(key: string) {
      return this.registry.has(key);
    }

    static get(key: string) {
      return this.registry.get(key);
    }

    static set(key: string, texture: TextureCube.Array) {
      this.registry.set(key, texture);
      return texture;
    }

    register(item: TextureCube.item) {
      const capacity = this.size[2] / 6;
      if (this.nextIndex >= capacity) {
        throw new Error("TextureCube.Array has no free cube layers.");
      }

      const index = this.nextIndex++;
      this.set(index, item);
      return index;
    }

    set(index: number, item: TextureCube.item) {
      const capacity = this.size[2] / 6;
      if (!Number.isInteger(index) || index < 0 || index >= capacity) {
        throw new RangeError("TextureCube.Array cube index is out of range.");
      }

      this.items.set(index, item);
      this.changes.set(index, item);
      return this;
    }

    get(index: number) {
      return this.items.get(index);
    }

    async flushChanges() {
      const faces: (keyof TextureCube.item)[] = [
        "px",
        "nx",
        "py",
        "ny",
        "pz",
        "nz",
      ];

      for (const [index, item] of this.changes) {
        for (const [faceIndex, face] of faces.entries()) {
          const image = item[face];
          const upload =
            image.width === this.size[0] && image.height === this.size[1]
              ? image
              : await createImageBitmap(image, {
                  resizeWidth: this.size[0],
                  resizeHeight: this.size[1],
                  resizeQuality: "high",
                });

          this.z_device.queue.copyExternalImageToTexture(
            { source: upload, flipY: false },
            {
              texture: this.z_gpuTexture,
              mipLevel: 0,
              origin: { x: 0, y: 0, z: index * 6 + faceIndex },
            },
            { width: this.size[0], height: this.size[1], depthOrArrayLayers: 1 },
          );

          if (upload !== image) upload.close();
        }

        if (this.changes.get(index) === item) this.changes.delete(index);
      }
    }

    static delete(key: string) {
      return this.registry.delete(key);
    }

    static from(
      key: string,
      _stagingBuffer: StagingBuffer,
      _privateDevice: GPUDevice,
      desc: TextureCube.Array.descriptor,
    ) {
      const texture = new TextureCube.Array(_stagingBuffer, _privateDevice, desc);
      this.registry.set(key, texture);
      return texture;
    }

    constructor(
      _stagingBuffer: StagingBuffer,
      _privateDevice: GPUDevice,
      desc: TextureCube.Array.descriptor,
    ) {
      super(_stagingBuffer, _privateDevice, {
        ...desc,
        dimension: "cube-array",
        usage:
          (desc.usage ??
            (GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT)) |
          GPUTextureUsage.COPY_DST,
      });
    }
  }

  export namespace Array {
    export interface descriptor extends Texture.descriptor {
      dimension: "cube-array";
    }
  }
}