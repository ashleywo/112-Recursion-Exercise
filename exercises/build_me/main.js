/** 
 * @file Select the Language
 * @author 
 */
var main = function(ex) {
    //always quiz-immediate
    console.log(ex.data.meta.mode);

    ex.graphics.ctx.fillStyle = "black";
    var count = 0;
    var lastClicked = -1;

    //(x, y) is the lower-left corner of the triangle
    function triangle(x, y, size, ct) {
        var t = {};
        t.top = y-size*(Math.pow(3, 0.5))/2;
        t.bottom = y;
        t.left = x;
        t.right = x + size;
        t.ct = ct;
        t.draw = function () {
            ex.graphics.ctx.moveTo(x, y);
            ex.graphics.ctx.lineTo(x + size, y);
            ex.graphics.ctx.lineTo(x + size/2, (y-size*(Math.pow(3, 0.5))/2));
            ex.graphics.ctx.lineTo(x, y);
            ex.graphics.ctx.stroke();
            ex.graphics.ctx.fill();
        };
        t.clicked = function (x, y) {
            if (x > t.left && x < t.right && y > t.top && y  < t.bottom) {
                return t.ct;
            } else {
                return -1;
            }
        };

        var clicke = {};
        t.clicke = clicke;
        clicke.mouseLastX = 0;
        clicke.mouseLastY = 0;

        clicke.mousedown = function(event) {
            var x = event.offsetX;
            var y = event.offsetY;
            if (t.clicked(x,y) != -1) {
                lastClicked = t.clicked(x,y);
                clicke.mouseLastX = x;
                clicke.mouseLastY = y;
                alert(lastClicked);
            }
        };

        ex.graphics.on("mousedown",clicke.mousedown);
        return t;
    }

    function drawSierpinsky(x, y, size, level) {
        if (level == 0)
        {
            ex.data.triangles[count] = triangle(x, y, size, count);
            ex.data.triangles[count].draw();
            // ex.graphics.ctx.fillText(count, x - 20, y+10);
            count++;
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
            ex.data.triangles = {};
            drawSierpinsky(x, y, size, level);
        }
        return sT;

    }

    /**
     * @returns {object} See Piazza post 
     */
    var generateContent = function () {
        var content = {};
        var sT1 = sierpinskyTriangle(200, 500, 500, 4);
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

};