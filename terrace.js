class Terrace{
    constructor(x,y,width,height)  {
    
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        
        
        World.add(world,this.body);
    }

display()
{
    Push();
    rectMode(CENTER);
    fill("128,128,128");

    rect(this.body.position.x, this.body.position.y,this.width,this.height);
    Pop();

}
}
