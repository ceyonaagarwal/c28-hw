class Tree
{
     constructor(x,y,width,height)
     {
         var options={
             isStatic:true
        }
         this.body=Bodies.rectangle(x,y,width,height,options);
         this.width=width;
         this.height=height;
         this.image=loadImage("images/tree.png");
         World.add(world,this.body);
     }
     display()
     {
         push();
         translate(this.body.position.x,this.body.position.y);
         imageMode(CENTER);
         fill(255);
         image(this.image,0,-300,450,600);
         pop();
     }
}    