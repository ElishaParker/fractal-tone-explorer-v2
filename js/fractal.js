const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let running = true;
let t = 0;
function drawFractal(x, y, size, depth, hue) {
  if (depth > 5) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  const x2 = x + Math.cos(t + depth) * size;
  const y2 = y + Math.sin(t + depth) * size;
  ctx.lineTo(x2, y2);
  ctx.stroke();
  drawFractal(x2, y2, size * 0.7, depth + 1, hue + 40);
  drawFractal(x2, y2, size * 0.7, depth + 1, hue - 40);
}
function animate() {
  if (!running) return;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawFractal(canvas.width / 2, canvas.height / 2, 150, 0, t % 360);
  t += 0.5;
  requestAnimationFrame(animate);
}
animate();