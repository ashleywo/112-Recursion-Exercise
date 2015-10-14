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
        }
        return t;
    }

    /**
     * @returns {object} See Piazza post 
     */
    var generateContent = function () {
        var content = {};
        var l1 = Line(10, 10, 50, 50);
        l1.draw();
        var t1 = triangle(100, 100, 100);
        t1.draw();
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
