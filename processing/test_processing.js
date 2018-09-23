function setup() { // 最初に実行される関数
	createCanvas(displayWidth, displayHeight); // canvasの作成
}

function draw() { // 毎フレーム実行される関数
	background(127)
	// 四角形
	line(0, windowHeight/2, windowWidth, windowHeight/2)
	line(windowWidth/2, 0, windowWidth/2, windowHeight)
	rect(windowWidth/2, windowHeight/2, 50, 50)
	rect_center(windowWidth/2, windowHeight/2, 50, 50)
}

function rect_center(x, y, w, h, ...args) {
	rect(x - w/2, y - h/2, w, h, args)
}