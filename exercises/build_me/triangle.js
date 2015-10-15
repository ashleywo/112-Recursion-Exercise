/** 
 * @file Select the Language
 * @author 
 */
var main = function(ex) {
    //always quiz-immediate
    console.log(ex.data.meta.mode);

    ex.graphics.ctx.fillStyle = "black";

    function Line(x1, y1, x2, y2) {
        var l = {};
        l.draw = function () {
            ex.graphics.ctx.moveTo(x1, y1);
            ex.graphics.ctx.lineTo(x2, y2);
            ex.graphics.ctx.stroke();   
        };
        return l;
    }

    //(x, y) is the lower-left corner of the triangle
    function triangle(x, y, size) {
        var t = {};
        t.draw = function () {
            ex.graphics.ctx.moveTo(x, y);
            ex.graphics.ctx.lineTo(x + size, y);
            ex.graphics.ctx.lineTo(x + size/2, (y-size*(Math.pow(3, 0.5))/2));
            ex.graphics.ctx.lineTo(x, y);
            ex.graphics.ctx.stroke();
            ex.graphics.ctx.fill();
        }
        return t;
    }

    function drawSierpinsky(x, y, size, level) {
        if (level == 0)
        {
            var t = triangle(x, y, size);
            t.draw();
        }
        else {
            drawSierpinsky(x, y, size/2, level-1);
            drawSierpinsky(x+size/2, y, size/2, level-1);
            drawSierpinsky(x+size/4, y-size*(Math.pow(3, 0.5))/4, size/2, level-1);
        }
    }

    function sierpinskyTriangle(x, y, size, level) {
        var sT = {};
        sT.draw = function() {
            console.log(x, y, size, level);
            drawSierpinsky(x, y, size, level);
        }
        return sT;

    }

    /**
     * @returns {object} See Piazza post 
     */
    var generateContent = function () {
        var content = {};
        var sT1 = sierpinskyTriangle(200, 500, 500, 3);
        sT1.draw();
        return content;
    };

    ex.data.content = generateContent();

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
