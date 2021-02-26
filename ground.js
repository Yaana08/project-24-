class ground{
    constructor(x,y,width,height) 
    var options = {
         isStatic:true, 
        }

{
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width; 
        this.height = height; 
        World.add(world,this.body); 
} 

display()
    var pos = this.body.position; 
    imageMode(CENTER);
    fill("black"); 
    rect(pos.y,pos.x,this.width,this.height); 
    