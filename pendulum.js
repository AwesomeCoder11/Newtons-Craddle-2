const { FILL } = require("./p5");

class Pendulum {
    constructor(x, y, color) {
      var options = { 
        restitution: 1,
        friction: 0,                    
        density: 1.2
      };
  
      this.body = Bodies.rectangle(x, y, 40, 40., options);
      this.x = x;
      this.y = y;
      this.color = color
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
        noStroke();
        fill(this.color);
      ellipse(0, 0, 60,60);
      pop();
    }
  }
  