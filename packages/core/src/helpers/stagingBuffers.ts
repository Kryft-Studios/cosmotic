
export class StagingBuffer {
  public readonly z_device: GPUDevice;
  public readonly cfg: StagingBuffer.buffer_config;

  public length: number;
  public z_buf: GPUBuffer;

  private z_mapPromise?: Promise<void>;
  private z_readPromise: Promise<void> = Promise.resolve();

  constructor(
    device: GPUDevice,
    length: number,
    cfg: StagingBuffer.buffer_config = {},
  ) {
    this.z_device = device;
    this.length = length;
    this.cfg = cfg;

    this.z_buf = this.createBuffer(length);
  }

  private createBuffer(size: number) {
    return this.z_device.createBuffer({
      size,
      usage:
        this.cfg.usageFlags ??
        (GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST),
      label: this.cfg.label ?? "Staging Buffer",
    });
  }

  /**
   * Ensures that the staging buffer has sufficient capacity.
   */
  expandBufferIfRequired(size: number) {
    if (size <= this.length) return;

    if (this.z_buf.mapState !== "unmapped") {
      throw new Error("Cannot resize a mapped staging buffer");
    }

    this.length = Math.max(size, this.length * 2);

    const old = this.z_buf;
    this.z_buf = this.createBuffer(this.length);

    old.destroy();
  }

  /**
   * Maps the buffer, reusing an existing pending map operation.
   */
  async map(
    ...params: Parameters<GPUBuffer["mapAsync"]>
  ): Promise<void> {
    if (this.z_buf.mapState === "mapped") return;

    if (this.z_mapPromise) {
      await this.z_mapPromise;
      return;
    }

    const promise = this.z_buf.mapAsync(...params);
    this.z_mapPromise = promise;

    try {
      await promise;
    } finally {
      if (this.z_mapPromise === promise) {
        this.z_mapPromise = undefined;
      }
    }
  }

  /**
   * Reads a range of bytes from the staging buffer.
   * Returned data owns its memory and survives unmapping.
   */
  async getRange(
    offset = 0,
    size = this.length - offset,
  ): Promise<ArrayBuffer> {
    await this.map(GPUMapMode.READ, offset, size);

    try {
      return this.z_buf.getMappedRange(offset, size).slice(0);
    } finally {
      this.z_buf.unmap();
    }
  }

  /**
   * Queues a GPU copy target and its corresponding readback.
   */
  copyBTargetInfo(size: number) {
    this.expandBufferIfRequired(size);

    const buffer = this.z_buf;

    return {
      info: [buffer, 0, size] as [
        GPUBuffer,
        number,
        number,
      ],

      getRange: async (): Promise<ArrayBuffer> => {
        const previous = this.z_readPromise;

        let release!: () => void;

        this.z_readPromise = new Promise<void>((resolve) => {
          release = resolve;
        });

        await previous;

        try {
          if (buffer !== this.z_buf) {
            throw new Error("Staging buffer was replaced");
          }

          return await this.getRange(0, size);
        } finally {
          release();
        }
      },
    };
  }

  destroy() {
    this.z_buf.destroy();
  }

  async waitRead(){
    return await this.z_readPromise
  }
}

export namespace StagingBuffer {
  export interface buffer_config {
    usageFlags?: GPUBufferUsageFlags;
    label?: string;
  }
}

export default StagingBuffer;
