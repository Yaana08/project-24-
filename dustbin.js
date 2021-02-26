class dustbin { 
    constructor(x,y,width,height) {
        var options={
            isStatic:true, 
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width; 
        this.height = height; 
        World.add(world,this.body); 
    } 
}
display()
    var pos = this.body.position; 
    imageMode(CENTER);
    fill("red"); 
    rect(pos.y,pos.x,this.width,this.height); 
    image(this.image, 0, 0, this.width, this.height);


 
