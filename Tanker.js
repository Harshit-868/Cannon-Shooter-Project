class Tanker {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  };

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    if (keyIsDown(LEFT_ARROW) && angle > -1.5708) {
      angle -= 0.05
      Body.setAngle(tanker.body, angle);
    }
    if (keyIsDown(RIGHT_ARROW) && angle < 0) {
      angle += 0.05
      Body.setAngle(tanker.body, angle);
    }

    launcherX = pos.x + ((this.height + 100) * cos(angle))
    launcherY = pos.y - ((this.height - 100) * sin(angle))

    fill(0, 100, 0);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.width, this.height);
    pop();
    arc(70, height - 65, 90, 100, PI, TWO_PI);
    line(25, 435, 115, 435);
    ellipse(50, 435, 30, 30);
    ellipse(92.5, 435, 30, 30);
  }
}