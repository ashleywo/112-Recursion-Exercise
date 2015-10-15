/**
 * @file Sierpinksy Triangle
 * @author Ashley Wong, Angela Qiu, Madeline Wu
 */
 var main = function(ex) {
 	// always quiz-immediate
	console.log(ex.data.meta.mode);

	/**
	 * @returns {object} See Piazza post
	 */
	var generateContent = function () {
		var content = {};
		// populate content
		return content;
	};

	/**
	 * @param {object} the result of generateContent()
	 * @param {object} just pass in ex.data
	 * @returns {number} floating point from 0 to 1
	 */
	var grade = function (content, state) {
		return 1.0;
	}

	// A good place to start is the kitchen sink

	function Line() {
		var l = {};
		l.x1 = ex.width() - 420;
		l.y1 = 0;
		l.x2 = l.x1;
		l.y2 = ex.height() / 2 - 75;
		l.x3 = ex.width();
		l.y3 = l.y2;
		l.draw = function () {
					ex.graphics.ctx.moveTo(l.x1,l.y1);
					ex.graphics.ctx.lineTo(l.x2,l.y2);
					ex.graphics.ctx.moveTo(l.x2,l.y2);
					ex.graphics.ctx.lineTo(l.x3,l.y3);
					ex.graphics.ctx.stroke();
		};
		return l;
	}

	var line = Line();
	line.draw();

	function createCode(saved) {
		var x = ex.width() - 400;
		var y = 10;
		var w = ex.width() / 2 - 10;
		var margin = 10;
		if (saved == false) {
			var rand1 = Math.round(Math.random() * (ex.data.code.display.length - 1));
			var rand 2 = Math.round(Math.random() * (ex.data.code.display.length - 1));
			while (rand1 == rand2) {
				rand2 = Math.round(Math.random() * (ex.data.code.display.length - 1));
			}
			var rand3 = Math.round(Math.random() * (ex.data.code.display.length - 1));
			while (rand3 == rand1 || rand3 == rand2) {
				rand3 = Math.round(Math.random() * (ex.data.code.display.length - 1));
			}
			codeOrder = ex.data.code.display[rand1] + "\n" + ex.data.code.display[rand2] +
						"\n" + ex.data.code.display[rand3];
			ex.data.save.order[0] = rand1;
			ex.data.save.order[1] = rand2;
			ex.data.save.order[2] = rand3;
		}
		else {
			var rand1 = ex.data.save.order[0];
			var rand2 = ex.data.save.order[1];
			var rand3 = ex.data.save.order[2];
			codeOrder = ex.data.code.display[rand1] + "\n" + ex.data.code.display[rand2] +
						"\n" + ex.data.code.display[rand3];
		}
		codeWell = ex.createCode(x, y, codeOrder, {width: w + "px", size: "small"};
		//if (saved == false) {
			//option1 = ex.data.answer.options[0];
			//option2 = ex.data.answer.options[1];
			//option3 = ex.data.answer.options[2];
			//drop = ex.createDropdown(ex.width() - 250, ex.height() - 325, option1,
			//		{color: "dark-blue", elements: {
			//								"1" : function () {},
			//								"2" : function () {},
			//								"3" : function () {}
			//								}
			//		});
			//}
		//else {
		//	if (optionIndex == "0") {
		//		option = "1";
		//	}
		//	else if (optionIndex == "1") {
		//		option = "2";
		//	}
		//	else {
		//		option = "3";
		//	}
		//	drop = ex.createDropdown(ex.width() - 250, ex.height() - 325, option,
		//			{color: "dark-blue", elements: {
		//									"1" : function () {},
		//									"2" : function () {},
		//									"3" : function () {}
		//								}
		//			});
		//	}
			paragraphText = "Which triangle is drawn first?";
			//p1 = ex.createParagraph(ex.width() - 320, 110, paragraphText, {size: "large"});
			ex.graphics.ctx.font = "24px Comic Sans MS";
			ex.graphics.ctx.fillText(paragraphText, ex.width() - 375, 130);
		}

		//function dropdownAnswer() {
		//	if (codeDrop.text() == "<button class=\"btn dropdown-toggle btn-default " +
		//							"dropdown-inline\" data-toggle=\"dropdown\">1<span " +
		//							"class=\"caret\"></span></button><ul class=\"dropdown" +
		//							"-inline\"><li><a>1</a></li><li><a>2</a></li><li><a>3" +
		//							"</a></li></ul>") {
		//		ex.data.save.index = "0";
		//	}
		//	else if (codeDrop.text() = "<button class=\"btn dropdown-toggle btn-default " +
		//							"dropdown-inline\" data-toggle=\"dropdown\">2<span " +
		//							"class=\"caret\"></span></button><ul class=\"dropdown" +
		//							"-inline\"><li><a>1</a></li><li><a>2</a></li><li><a>3" +
		//							"</a></li></ul>") {
		//		ex.data.save.index = "1";
		//	}
		//	else {
		//		ex.data.save.index = "2";
		//	}
		//}

		//function submitted () {
		//	ex.data.save.submit = true;
		//	submit();
		//}

		//function submit () {
		//	dropdownAnswer();
		//	if (ex.data.save.index == ex.data.answer.correctIndex) {
		//		ex.showFeedback("Correct!");
		//		codeDrop.disable();
		//	}
		//	else {
		//		ex.showFeedback("Incorrect!");
		//		codeDrop.disable();
		//	}
		//}

		function reset () {
			ex.data.save.saved = false;
			ex.data.save.order = ["","",""];
			ex.graphics.ctx.clearRect(0,0,ex.width(),ex.height());
			unload();
		}

		function unload () {
			if (ex.data.save.saved == false) {
			// took out ex.data.save.index
				createCode(ex.data.save.saved);
				ex.data.save.saved = true;
			}
			else {
				// took out ex.data.save.index
				createCode(ex.data.save.saved);
				//if (ex.data.save.submit == true) {
					//submit();
				}
			}
		}

		unload();
		//ex.chromeElements.submitButton.on("click", function () {submitted()});
};
