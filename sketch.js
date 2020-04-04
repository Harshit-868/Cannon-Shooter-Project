// This line creates different constant for Engine, World, Bodies etc.
const {Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;
// You could have multiple flags like: start, launch to indicate the state of the game.
var engine, world;
var tanker, ground;
var ball_1, ball_2, ball_3;
var launcherX, launcherY;
var angle = 0;
var flag = "start";

function setup() {
  // Setup the canvas, the ground, the tanker, the shooting ball and the bubble balls.
  var canvas = createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 460, 800, 40);
  tanker = new Tanker(60, 390, 80, 30);

  ball_1 = new Ball(400, 50, 20)
  ball_2 = new Ball(500, 100, 20)
  ball_3 = new Ball(600, 150, 20)
}

function draw() {
  // Remember to update the Matter Engine and set the background.
  background(225, 245, 255);
  Matter.Engine.update(engine);
  ground.display()
  ball_2.display()
  ball_1.display()
  ball_3.display();
  tanker.display();
}