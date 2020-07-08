class Paper{
    constructor(x,y) {
        var options = {
           
          'restitution':0.3,
            'friction':0.10,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,70, options);
        this.radius = 70;
        this.image=loadImage("images/paper.png");

        
        World.add(world, this.body,this.image);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}