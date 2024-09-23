const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    // Fill the background with blue color
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const offsetX = width * 0.17;
    const offsetY = height * 0.17;

    const off = width * 0.02;

    // Loop to draw a 5x5 grid of rectangles
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        // Calculate the position for each rectangle
        let x = offsetX + (w + gap) * i;
        let y = offsetY + (h + gap) * j;

        // Set line width for strokes
        context.lineWidth = 4;

        // Draw the outer rectangle
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        // Randomly draw an inner rectangle
        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
