class tree{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.tree = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.tree);
    }

    fly(){
        this.tree.bodyA = null;
    }

    display(){
        if (this.tree.bodyA){

        
        var pointA = this.tree.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
    
}