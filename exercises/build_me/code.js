
// code on the side of the screen
// questions and answers (quiz/test mode)

var main = function(ex) 
	
	var modes = ["practice","quiz"];

	function Line() {
		var l = {};
		l.x1 = ex.width() - 200;
		l.y1 = 0;
		l.x2 = l.x1;
		l.y2 = ex.height();
		l.draw = function () {
			ex.graphics.ctx.moveTo(l.x1,l.y1);
			ex.graphics.ctx.lineTo(l.x2,l.y2);
			ex.graphics.ctx.stroke();
		};
		return l;
	}

	var line = Line();

	function createCode(textArea, optionIndex, saved) {
		var x = ex.width() - 150;
		var y = 0;
		var w = ex.width() / 3;
		var margin = 10;
		// ex.data.code.display in ex.data.json should be
		// the sierpinski triangle code
		codeWell = ex.createCode(x, y, ex.data.code.display,
								{width: w + "px", size: "small"});
		if (saved == false) {
			// save options in ex.data.answer.options (list)
			option1 = ex.data.answer.options[0];
			option2 = ex.data.answer.options[1];
			codeDrop = ex.createDropdown(0,0,option1, {
				elements: {
						"1" : function () {},
						"2" : function () {}
				}
			});
		}
		else {
			if (optionIndex == "0") {
				option = "1";
			}
			else {
				option = "2";
			}
			codeDrop = ex.createDropdown(0,0,option, {
					elements: {
						"1" : function () {};
						"2" : function () {};
					}
				});
		}
		ex.insertDropdown(codeWell, "1", codeDrop);
		answer = "Explain your answer.";
		// edit this based on client
		var row = 10;
		var col = 10;
		text = ex.createTextArea(ex.width() / 3 + margin * 5, margin
