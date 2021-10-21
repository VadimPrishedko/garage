class Circle extends Figure {
  constructor(radius) {
    super(radius, radius);
    this.borderRadius = 50;
  }

  render(id) {
    const div = document.createElement("div");
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.top = `${this.y}px`;
    div.style.right = `${this.x}px`;
    div.style.borderRadius = `${this.borderRadius}%`;
    div.style.background = this.background;
    div.id = id;
    // document.body.appendChild(div);
    this.move(div);
  }

  move(div) {
    const intervalStep = setInterval(() => {
      if (this.y > window.innerHeight) {
        clearInterval(intervalStep);
        this.y = 0
      } 
      this.y += this.step;
      div.style.top = this.y + "px";
    }, 80);
  }

}
