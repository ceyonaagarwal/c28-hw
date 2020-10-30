class Stone
{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution: 0,
            friction: 1,
            density: 1.2
       }
        this.body=Bodies.circle(x,y,r,options);
        this.width=width;
        this.height=height;
        this.r = r;
        this.image=loadImage("images/stone.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image,0,0,this.r*2,this.r*2);
        pop(); 
    }
}

