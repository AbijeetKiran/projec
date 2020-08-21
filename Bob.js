class Bob{
    constructor(x ,y ,r){
        var options={
            isStatic:false,
            restitution:1.2,
            friction:0.0,
            density:0.4
          }
          this.x = x;
          this.y = y;
          this.r = 50;
          this.body = Bodies.circle(x ,y ,r/2,options);
          World.add(world,this.body);
          
    
    
    }
    
    display(){
    
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0 ,0 ,this.r ,this.r);
        pop();
    
    
    
    }
    
    
    
    
    }