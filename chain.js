class Chain{
    constructor(bodyA,bodyB){
    var option= {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness:0.05,
        length:20,

    }
    this.chain= Constraint.create(options);
    World.add(world,this.chain);
}
display(){
    var pointA = this.chain.bodyA.position
var pointB = this.chain.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
