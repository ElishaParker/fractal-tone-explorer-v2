document.getElementById('toggleSound').addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) startSound();
  else stopSound();
});
document.getElementById('pause').addEventListener('click', () => running = false);
document.getElementById('resume').addEventListener('click', () => {
  if (!running) {
    running = true;
    animate();
  }
});