class Figure {
	constructor(func, ...sizes) {
		this.func = func
		this.sizes = sizes
	}

	draw(x, y, scale) {
		this.func(x, y, ...(this.sizes.map(x => x * scale/100)))
	}
}

var testRect;

function setup() { // 最初に実行される関数
	createCanvas(displayWidth, displayHeight); // canvasの作成
	testRect = new Figure(rect_center, 100, 100, 20)
}

function draw() { // 毎フレーム実行される関数
	background(127)
	//十字線
	// rect_center(windowWidth/2, windowHeight/2, line_size*0.6, line_size*0.6, line_size*0.05)
	line_size = Math.min(windowWidth, windowHeight)
	testRect.draw(windowWidth/2, windowHeight/2, line_size/2)
}

function rect_center(x, y, w, h, ...args) {
	rect(x - w/2, y - h/2, w, h, ...args)
}

