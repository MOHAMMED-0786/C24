class log {
    constructor(x, y, height, angle) {
      var options = {
          restitution:0.7998,
          friction:2,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("green")
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };