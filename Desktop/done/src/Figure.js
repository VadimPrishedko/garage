class Figure {
  constructor(width, height) {
    this.step = 10;
    this.width = width;
    this.height = height;
    this.background = `rgb(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)})`;
    this.x = this.random(0, window.innerWidth-100);
    this.y = 0;
    this.id = 1;
  }

  random(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
