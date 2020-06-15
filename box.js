class Box {
  constructor(x, y, w, h) {
    const options = {
    //'restitution': 0.8,
      'friction':0.1
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    //this.body.Visiblity = 255;

  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    if(this.body.speed < 3){
    this.body.Visiblity = this.Visiblity - 5;
     }

    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
    fill(0);
    rectMode(CENTER);
    imageMode(CENTER);
    image(box1Img,0, 0, this.w, this.h);
    pop();
  }
}
