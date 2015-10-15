/** 
 * @file Select the Language
 * @author 
 */
function drawAnimationTriangle(x,y,size,ex) {
    ex.graphics.ctx.fillStyle = "black";
    ex.graphics.ctx.beginPath();
    ex.graphics.ctx.moveTo(x,y);
    ex.graphics.ctx.lineTo(x+size,y);
    ex.graphics.ctx.lineTo(x+size/2,y-size*(Math.pow(3,0.5))/2);
    ex.graphics.ctx.closePath();
    ex.graphics.ctx.fill();
}

function recursiveTriangles(x,y,size,level,time,ex) {
    if (level == 0) {
        console.log("HI");
        var timeSpent = level*500;
        setTimeout(function() {
            drawAnimationTriangle(x,y,size,ex);
        },level*500); //half a second delay per new level?
        return timeSpent;
    } else {
        level--;
        time += 500;
        var t1 = recursiveTriangles(x,y,size/2,level,time,ex);
        var t2 = recursiveTriangles(x+size/2,y,size/2,level,time,ex);
        var scale = (Math.pow(3,0.5))/4; //for the purposes of recursion
        var t3 = recursiveTriangles(x+size/4,y-size*scale,size/2,level,
                                    time,ex);
        return t1+t2+t3;
    }
}

function drawDifferentLevels(ex) {
    var levels = 3; //for now, we can change later if need be
    var delay = 0;
    var i = 0;
    //bounding box dimensions
    var left = ex.width() - 420;
    var bottom = 0;
    var top = ex.height() / 2 - 75;
    var right = ex.width();
    for (i=0; i<levels; i) {
        setTimeout(function(i) {
            var height = ex.height();
            console.log(i);
            var x = left + height/4;
            var y = bottom + height*3.0/4;
            recursiveTriangles(x,y,height/2,i,0,ex);
        },delay);
        delay += 2000;
        setTimeout(function() {
            ex.graphics.ctx.clearRect(0,0,ex.width(),ex.height());
        },delay);
    }
}

function createAnimation(ex) {
    drawDifferentLevels(ex);
}
var main = function(ex) {
    //always quiz-immediate
    console.log(ex.data.meta.mode);
    createAnimation(ex);
    /**
     * @returns {object} See Piazza post 
     */
    var generateContent = function () {
        var content = {};
        //populate content
        return content;
    };

    /**
     * @param {object} the result of generateContent()
     * @param {object} just pass in ex.data
     * @returns {number} floating point from 0 to 1
     */
    var grade = function (content,state) {
        return 1.0; 
    };

    //A good place to start is the kitchen sink

};
