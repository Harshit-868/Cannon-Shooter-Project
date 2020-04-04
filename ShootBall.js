class ShootBall {
  constructor(A, B) {
    var options = {
      bodyA: A,
      bodyB: B,
      stiffness: 0.05,
      length: 10
    }
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }
  
  attach(body) {
    flag = "red";
    this.chain.bodyA = body;
  }

  display() {
    if (this.chain.bodyA) {
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;
    }
  }
}