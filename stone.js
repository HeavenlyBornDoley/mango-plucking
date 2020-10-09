class stone{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
      }
    }
