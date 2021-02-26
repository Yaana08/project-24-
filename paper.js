class paper { 
    constructor(x,y,radius) {
        var options={
            isStatic:false, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    

    this.body = bodies.circle(x,y,radius,option);
    this.radius = radius; 

    World.add(world,this.body); 
    }
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    fill("white");
    elipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
} 
} 