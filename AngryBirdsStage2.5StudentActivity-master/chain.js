class Chain{

    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            length:20

        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pA = this.chain.bodyA.position;
        var pB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pA.x,pA.y,pB.x,pB.y);
    }















}