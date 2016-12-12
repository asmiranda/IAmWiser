function writeCone(paper, obj) {
	var h = $(obj).attr("h");
	var r = $(obj).attr("r");

	paper.clear();
	var triangle = paper.path("M0 100 L50 0 L100 100").attr({ fill: "none", stroke: "black", opacity: "1"});;
	var arcFront = paper.path("M0 100 A 5 1 0 0 0 100 100").attr({ fill: "none", stroke: "black", opacity: "1"});
	var arcDashBack = paper.path("M0,100 A 5 1 0 0 1 100 100").attr({ fill: "none", stroke: "gray", opacity: "1", "stroke-dasharray": "5, 5"});

	var pathDashHeight = paper.path("M50 0 50 100").attr({ fill: "none", stroke: "red", opacity: "1", "stroke-dasharray": "5, 5"});
	var pathDashRadius = paper.path("M0 100 50 100").attr({ fill: "none", stroke: "magenta", opacity: "1", "stroke-dasharray": "5, 5"});
	var textHeight = paper.text(55, 50, h);
	var textRadius = paper.text(30, 110, r);

	var gDraw = paper.g(triangle, arcFront, arcDashBack);
	nextFrame(gDraw, myFrames3, 0);

	var gDimension = paper.g(pathDashHeight, pathDashRadius, textHeight, textRadius);
	gDimension.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
}

function writeSphere(paper, obj) {
	var r = $(obj).attr("r");

	paper.clear();
	var circle = paper.circle(50, 50, 49).attr({ fill: "none", stroke: "black", opacity: "1"});;
	var arcFront = paper.path("M1 50 A 5 2 0 0 0 98 50").attr({ fill: "none", stroke: "black", opacity: "1"});
	var arcDashBack = paper.path("M1 50 A 5 2 0 0 1 98 50").attr({ fill: "none", stroke: "gray", opacity: "1", "stroke-dasharray": "5, 5"});
	var pathDashRadius = paper.path("M0 50 50 50").attr({ fill: "none", stroke: "magenta", opacity: "1", "stroke-dasharray": "5, 5"});
	var textRadius = paper.text(55, 52, r);

	var gDraw = paper.g(arcFront, arcDashBack, pathDashRadius);
	nextFrame(gDraw, myFrames3, 0);
}

function writeCylinder(paper, obj) {
	var h = $(obj).attr("h");
	var r = $(obj).attr("r");

	paper.clear();
	var pathLeft = paper.path("M0 10 0 120").attr({ fill: "none", stroke: "black", opacity: "1"});
	var pathRight = paper.path("M100 10 100 120").attr({ fill: "none", stroke: "black", opacity: "1"});

	var arcFrontA = paper.path("M0 10 A 5 1 0 0 0 100 10").attr({ fill: "none", stroke: "black", opacity: "1"});
	var arcDashBackA = paper.path("M0 10 A 5 1 0 0 1 100 10").attr({ fill: "none", stroke: "gray", opacity: "1", "stroke-dasharray": "5, 5"});
	var arcFrontB = paper.path("M0 120 A 5 1 0 0 0 100 120").attr({ fill: "none", stroke: "black", opacity: "1"});
	var arcDashBackB = paper.path("M0 120 A 5 1 0 0 1 100 120").attr({ fill: "none", stroke: "gray", opacity: "1", "stroke-dasharray": "5, 5"});

	var pathDashHeight = paper.path("M50 10 50 120").attr({ fill: "none", stroke: "red", opacity: "1", "stroke-dasharray": "5, 5"});
	var pathDashRadius = paper.path("M0 120 50 120").attr({ fill: "none", stroke: "magenta", opacity: "1", "stroke-dasharray": "5, 5"});
	var textHeight = paper.text(55, 60, h);
	var textRadius = paper.text(40, 130, r);

	var gDraw = paper.g(pathLeft, pathRight, arcFrontA, arcDashBackA, arcFrontB, arcDashBackB);
	nextFrame(gDraw, myFrames3, 0);

	var gDimension = paper.g(pathDashHeight, pathDashRadius, textHeight, textRadius);
	gDimension.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
}

function writeRectPrism(paper, obj) {
	var w = $(obj).attr("w");
	var h = $(obj).attr("h");
	var l = $(obj).attr("l");

	paper.clear();
	var rectFront = paper.rect(0,20,100,120).attr({ fill: "none", stroke: "black", opacity: "1"});
	var rectTop = paper.path("M0 20 L30 0 L130 0 L100 20").attr({ fill: "none", stroke: "black", opacity: "1"});
	var rectRight = paper.path("M130 0 L130 120 L100 140").attr({ fill: "none", stroke: "black", opacity: "1"});

	var pathBackA = paper.path("M30 0 L30 120").attr({ fill: "none", stroke: "red", opacity: "1", "stroke-dasharray": "5, 5"});
	var pathBackB = paper.path("M0 140 L30 120 L130 120").attr({ fill: "none", stroke: "magenta", opacity: "1", "stroke-dasharray": "5, 5"});

	var textHeight = paper.text(35, 60, h);
	var textWidth = paper.text(60, 130, w);
	var textLength = paper.text(20, 135, l);

	var gDraw = paper.g(rectFront, rectTop, rectRight);
	nextFrame(gDraw, myFrames3, 0);

	var gDimension = paper.g(pathBackA, pathBackB);
	gDimension.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
}

function writeRectPyramid(paper, obj) {
	var w = $(obj).attr("w");
	var h = $(obj).attr("h");
	var l = $(obj).attr("l");

	paper.clear();
	var triangleFront = paper.path("M0 120 L70 0 L120 120z").attr({ fill: "none", stroke: "black", opacity: "1"});
	var triangleRight = paper.path("M70 0 L140 100 L120 120").attr({ fill: "none", stroke: "black", opacity: "1"});
	var triangleBack = paper.path("M70 0 L40 100 L0 120").attr({ fill: "none", stroke: "red", opacity: "1", "stroke-dasharray": "5, 5"});
	var pathBackB = paper.path("M40 100 L140 100").attr({ fill: "none", stroke: "blue", opacity: "1", "stroke-dasharray": "5, 5"});
	var pathHeight = paper.path("M70 0 L70 115").attr({ fill: "none", stroke: "magenta", opacity: "1", "stroke-dasharray": "5, 5"});

	var textHeight = paper.text(75, 60, h);
	var textWidth = paper.text(90, 95, w);
	var textLength = paper.text(20, 115, l);

	var gDraw = paper.g(pathBackB, triangleFront, triangleBack, triangleRight);
	nextFrame(gDraw, myFrames3, 0);

	var gDimension = paper.g(textHeight, textWidth, textLength);
	gDimension.animate({ transform: 'r360,150,150' }, 1000, mina.bounce );
}

function sendSelected(b, val) {
	if (b) {
		app.captureAnswer(val);
	}
}

function sendJSon(text) {
	var obj = JSON.parse(text);
	$('#question').html(obj.question);
	$('#rationale').html(obj.rationale);
	$('#answerlbla').html(obj.answer1);
	$('#answerlblb').html(obj.answer2);
	$('#answerlblc').html(obj.answer3);
	$('#answerlbld').html(obj.answer4);

	$('#answera').prop('checked', false);
	$('#answerb').prop('checked', false);
	$('#answerc').prop('checked', false);
	$('#answerd').prop('checked', false);
	
	$('#answer'+obj.examAnswer).prop('checked', true);
	
	$("#answerlbla").css("color", "black");
	$("#answerlblb").css("color", "black");
	$("#answerlblc").css("color", "black");
	$("#answerlbld").css("color", "black");

	if (obj.showAnswer) {
		$("#rationale").show();
		$("#answerlbl"+obj.correctAnswer).css("color", "blue");

		$('#answera').prop('disabled', true);
		$('#answerb').prop('disabled', true);
		$('#answerc').prop('disabled', true);
		$('#answerd').prop('disabled', true);
		var status = "<b>Completed [score = "+obj.examScore+"]</b>";

        $('#submit').prop("disabled", "true");
	}
	else {
		$("#rationale").hide();
		var status = "";
	}
	$('#status').html(status);
	$('#itemOffset').html("ITEM "+(obj.qOffset+1)+" of "+obj.qSize);

	$('#prev').prop("disabled", false);
    $('#prev').prop("disabled", false);
    if (obj.qOffset == 0) {
        $('#prev').prop("disabled", true);
    }
    else if (obj.qOffset+1 >= obj.size) {
        $('#next').prop("disabled", true);
    }
	rewriteAllSymbols();
}
