// app/MicRecorder.ts
export default class MicRecorder {
  private recorder?: MediaRecorder;
  private chunks: BlobPart[] = [];
  public stream?: MediaStream;        // expose this

  async warmUp() {
    if (this.stream) return;
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
  }

  async start() {
    if (!this.stream) await this.warmUp();
    const stream = this.stream!;
    this.recorder = new MediaRecorder(stream);
    this.chunks = [];
    this.recorder.ondataavailable = (e) => this.chunks.push(e.data);
    this.recorder.start();
  }

  stop(): Promise<Blob> {
    return new Promise((resolve) => {
      this.recorder!.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'audio/webm' });
        resolve(blob);
      };
      this.recorder!.stop();
    });
  }
}
