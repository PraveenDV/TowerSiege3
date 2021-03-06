class Block{
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width; 
        this.height = height;      
        this.visibility=255;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        var angle = this.body.angle;
        if(this.body.speed<5){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke("yellow")
        strokeWeight(3);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-10;
        tint(255,this.visibility);
        rect( 0, 0, this.width, this.height);
        pop();
      }

      
      }


score(){
  if(this.visibility<0 && this.visibility>=105){
    score++;
  }
}
}
