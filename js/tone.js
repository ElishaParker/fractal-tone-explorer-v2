let audioCtx = null;
let oscillator = null;
let soundEnabled = false;
function startSound(freq = 432) {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = freq;
  oscillator.type = 'sine';
  oscillator.connect(audioCtx.destination);
  oscillator.start();
}
function stopSound() {
  if (oscillator) oscillator.stop();
  oscillator = null;
}