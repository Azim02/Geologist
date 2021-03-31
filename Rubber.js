class Rubber 
{      
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1,
            'isStatic': false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        fill("blue");
         rect(0,0,this.width,this.height);
        pop();    
      }
}
 