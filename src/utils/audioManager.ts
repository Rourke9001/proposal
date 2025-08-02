// src/utils/audioManager.ts
class AudioManagerClass {
  private audio: HTMLAudioElement | null = null;

  init(src: string) {
    this.audio = new Audio(src);
    this.audio.loop = true;
    this.audio.volume = 0.3;
  }

  play() {
    if (this.audio) {
      this.audio.play().catch(e => console.log('Audio play failed:', e));
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  setVolume(volume: number) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }
}

// Create singleton instance
const AudioManager = new AudioManagerClass();

// Initialize with your song
AudioManager.init('/assets/audio/song.mp3');

export default AudioManager;