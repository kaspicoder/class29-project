class Launcher{
    constructor(body1,point){
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.launcher = Constraint.create(options);
      
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.launcher.pointB;
            strokeWeight(4);
            
        }
      
    }
    
    fly(){
        this.launcher.bodyA=null
    }

}
