/** 
 * @file Sierpinksy Triangle
 * @author 
 */
var main = function(ex) {

    //A good place to start is the kitchen sink

    function Line() {
        var l = {};
        l.x1 = ex.width() - 420;
        l.y1 = 0;
        l.x2 = l.x1;
        l.y2 = ex.height() / 2 - 75;
        l.x4 = ex.width();
        l.y4 = l.y2;
        l.draw = function () {
                    ex.graphics.ctx.moveTo(l.x1,l.y1);
                    ex.graphics.ctx.lineTo(l.x2, l.y2);
                    ex.graphics.ctx.moveTo(l.x2,l.y2);
                    ex.graphics.ctx.lineTo(l.x4,l.y4);
                    ex.graphics.ctx.stroke();
        };
        return l;
    }

    var line = Line();

    function createCode(saved) {
        var x = ex.width() - 400;
        var y = 10;
        var w = ex.width() / 2 - 10;
        var margin = 10;
        // if (saved == false) {
        //     var rand1 = Math.round(Math.random() * (ex.data.code.display.length - 1));
        //     var rand2 = Math.round(Math.random() * (ex.data.code.display.length - 1));
        //     while (rand1 == rand2) {
        //         rand2 = Math.round(Math.random() * (ex.data.code.display.length - 1));
        //     }
        //     var rand3 = Math.round(Math.random() * (ex.data.code.display.length - 1));
        //     while(rand3 == rand1 || rand3 == rand2) {
        //         rand3 = Math.round(Math.random() * (ex.data.code.display.length - 1));
        //     }
        //     codeOrder = ex.data.code.display[rand1] + "\n" + ex.data.code.display[rand2] +
        //                     "\n" + ex.data.code.display[rand3];
        //     ex.data.save.order[0] = rand1;
        //     ex.data.save.order[1] = rand2;
        //     ex.data.save.order[2] = rand3;
        // }
        // else {
        //     var rand1 = ex.data.save.order[0];
        //     var rand2 = ex.data.save.order[1];
        //     var rand3 = ex.data.save.order[2];
        //     codeOrder = ex.data.code.display[rand1] + "\n" + ex.data.code.display[rand2] +
        //                     "\n" + ex.data.code.display[rand3];
        // }
        codeOrder = ex.data.code.display[0] + "\n" + ex.data.code.display[1] + "\n" +
                    ex.data.code.display[2];
        codeWell = ex.createCode(x, y, codeOrder,
                    {width: w + "px", size: "small"});
        // if (saved == false) {
        //     option1 = ex.data.answer.options[0];
        //     option2 = ex.data.answer.options[1];
        //     option3 = ex.data.answer.options[2];
        //     drop = ex.createDropdown(ex.width() - 250,ex.height() - 325,option1, {
        //                 color: "dark-blue",
        //                 elements: {
        //                     "1" : function () {},
        //                     "2" : function () {},
        //                     "3" : function () {}
        //                 }
        //     });
        // }
        // else {
        //     if (optionIndex == "0") {
        //         option = "1";
        //     }
        //     else if (optionIndex == "1") {
        //         option = "2";
        //     }
        //     else {
        //         option = "3";
        //     }
        //     drop = ex.createDropdown(ex.width() - 250,ex.height() - 325,option, {
        //                 color: "dark-blue",
        //                 elements: {
        //                     "1" : function () {},
        //                     "2" : function () {},
        //                     "3" : function () {}
        //                 }
        //     });
        // }
        paragraphText = "Which triangle is drawn first?";
        ex.graphics.ctx.font = "24px Comic Sans MS";
        ex.graphics.ctx.fillText (paragraphText, ex.width() - 375, 130);
        line.draw();
        //p1 = ex.createParagraph(ex.width() - 320, 110, paragraphText, {size: "large"});
        // answer = "Explain your answer.";
        // var row = 10;
        // var col = 10;
        // text = ex.createTextArea(ex.width() / 3 + margin * 5, margin,
        //         answer, {resize: false, cols: col, rows: row});
        // text.text(textArea);
    }

    // function displayAnswer() {
    //     if (ex.data.answer.showAnswer == true) {
    //         text.text(ex.data.save.yourAnswer);
    //     }
    //     else {
    //         text.text(ex.data.answer.explanation);
    //     }
    // }    

    // function dropdownAnswer() {
    //     if (codeDrop.text() == "<button class=\"btn dropdown-toggle btn-default dropdown-inline\" " +
    //                             "data-toggle=\"dropdown\">1<span class=\"caret\"" +
    //                             "></span></button><ul class=\"dropdown-menu dropdown-inline\"" +
    //                             "><li><a>1</a></li><li><a>2</a></li><li><a>3</a></li></ul>") {
    //         ex.data.save.index = "0";
    //     }
    //     else if (codeDrop.text() = "<button class=\"btn dropdown-toggle btn-default dropdown-inline\" " +
    //                             "data-toggle=\"dropdown\">2<span class=\"caret\"" +
    //                             "></span></button><ul class=\"dropdown-menu dropdown-inline\"" +
    //                             "><li><a>1</a></li><li><a>2</a></li><li><a>3</a></li></ul>") {
    //         ex.data.save.index = "1";
    //     }
    //     else {
    //         ex.data.save.index = "2";
    //     }
    // }

    // function click () {
    //     if (ex.data.answer.showAnswer == true) {
    //         displayAnswer();
    //         ex.data.answer.showAnswer = false;
    //     }
    //     else {
    //         if (ex.data.save.yourAnswer == "") {
    //             ex.data.save.yourAnswer = text.text();
    //             //displayAnswer();
    //             //ex.data.answer.showAnswer = true;
    //         }
    //         else {
    //             displayAnswer();
    //             ex.data.answer.showAnswer = true;
    //         }
    //     }
    // }

    // function submitted() {
    //     ex.data.save.submit = true;
    //     submit();
    // }

    // function submit () {
    //     dropdownAnswer();
    //     if (ex.data.meta.mode != "quiz-delay") {
    //         if (ex.data.save.index == ex.data.answer.correctIndex) {
    //             ex.showFeedback("Correct!");
    //             codeDrop.disable();
    //             //text.disable(); 
    //         }
    //         else {
    //             ex.showFeedback("Incorrect!");
    //             codeDrop.disable();
    //             //text.disable();
    //         }
    //     }
    // }

    function reset () {
        ex.data.save.saved = false;
        ex.data.save.order = ["", "", ""];
        ex.graphics.ctx.clearRect(0,0,ex.width(), ex.height());
        unload();
    }

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
            ex.graphics.ctx.fillStyle = "black";
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
            ex.graphics.ctx.fillStyle = "black";
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
        var sT1 = sierpinskyTriangle(50, 450, 450, 4);
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

    function unload(){
        if (ex.data.save.saved == false) {
            // if (ex.data.answer.showAnswer == false) {
                createCode(ex.data.save.saved);
            // }
            ex.data.save.saved = true;
        }
        else {
            createCode(ex.data.save.saved);
            // if (ex.data.save.submit == true) {
            //     submit();
            }
    }   
    unload();
    ex.chromeElements.resetButton.on("click", reset);
    //ex.chromeElements.submitButton.on("click", function () {submitted()});
    //ex.chromeElements.displayCAButton.on("click", function () {click()});
};