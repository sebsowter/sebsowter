//---------- Code for color and matrix logics

var Point = function (x, y) {
	this.x = x;
	this.y = y;
};

var Matrix = function (width, height) {
	this.width = width;
	this.height = height;

	this.count = new Point(0, 0);
	this.speed = new Point(0, 0);
	this.sign = new Point(0, 0);
	this.unit = new Point(1, 1);
	this.offset = new Point(Math.floor(width / 2), Math.floor(height / 2));

	this.points = [];
	for (var i = 0; i < width; i++) {
		this.points.push(new Array(height));
	}
	this.updatePoints(function (x, y) {
		return 0;
	});
};

Matrix.prototype = {
	get: function (x, y) {
		var ix = this.getIndex(x + this.offset.x, this.width);
		var iy = this.getIndex(y + this.offset.y, this.height);

		return this.points[ix][iy];
	},

	set: function (x, y, value) {
		var ix = this.getIndex(x, this.width);
		var iy = this.getIndex(y, this.height);

		this.points[ix][iy] = value;
	},

	setSpeed: function (dx, dy) {
		this.speed.x = Math.abs(dx);
		this.speed.y = Math.abs(dy);

		this.sign.x = dx / Math.abs(dx);
		this.sign.y = dy / Math.abs(dy);
	},

	setRandomSpeed: function (max) {
		var rad = 360 * Math.random() * (Math.PI / 180);
		var sx = Math.sin(rad);
		var sy = Math.cos(rad);

		this.setSpeed(sx, sy);
	},

	setUnit: function (x, y) {
		this.unit.x = x;
		this.unit.y = y;
	},

	getIndex: function (value, border) {
		var offset = Math.abs(value) % (2 * border);
		if (offset >= border) {
			return 2 * border - offset - 1;
		} else {
			return offset;
		}
	},

	updatePoints: function (func) {
		var p = [];
		for (var i = 0; i < this.width; i++) {
			for (var j = 0; j < this.height; j++) {
				p[i * this.height + j] = func.call(null, i, j);
			}
		}

		for (var i = 0; i < this.width; i++) {
			for (var j = 0; j < this.height; j++) {
				this.set(i, j, p[i * this.height + j]);
			}
		}
	},

	eachPoint: function (func) {
		for (var i = 0; i < this.width; i++) {
			for (var j = 0; j < this.height; j++) {
				func.call(null, i, j, this.get(i, j));
			}
		}
	},

	movePoints: function () {
		this.count.x += this.speed.x;
		this.count.y += this.speed.y;

		if (this.count.x >= 1) {
			this.offset.x -= this.sign.x * this.unit.x;
			this.count.x--;
		}

		if (this.count.y >= 1) {
			this.offset.y -= this.sign.y * this.unit.y;
			this.count.y--;
		}
	},

	drawPoints: function () {
		for (var i = 0; i < this.width; i++) {
			var a = [];
			for (var j = 0; j < this.height; j++) {
				a.push(('0' + this.get(i, j)).slice(-2));
			}
			console.log(a.join(','));
		}
		console.log('');
	}
};

//---------- Code for drawing canvas
var canvas;
var canvasWidth;
var canvasHeight;
var context;

var SPEED = 10;
var MATRIX_NUM = 3;

var rectWidth = 400;
var rectHeight = 400;
var mapSize = 4;
var unitSize = 2;

var matrixes;
var imageData;

var count = 0;

function init() {
	canvas = document.createElement('canvas');
	canvas.id = 'c';
	document.body.appendChild(canvas);

	//canvas = document.getElementById('c');
	document.addEventListener('resize', resize);
	resize();

	initPoints();
	imageData = context.createImageData(rectWidth, rectHeight);
	setInterval(loop, 1000 / 30);
}

function resize() {
	canvasWidth = canvas.width = window.innerWidth;
	canvasHeight = canvas.height = window.innerHeight;
	context = canvas.getContext('2d');
}

function initPoints() {
	matrixes = [];
	for (var i = 0; i < MATRIX_NUM; i++) {
		var matrix = new Matrix(rectWidth * mapSize, rectHeight * mapSize);
		var simplexNoise = new SimplexNoise();

		matrix.updatePoints(function (x, y) {
			return Math.floor(simplexNoise.noise(x / 400, y / 400) * 128) + 128;
		});

		matrix.setRandomSpeed(SPEED);
		matrix.setUnit(unitSize, unitSize);

		matrixes.push(matrix);
	}
}

function loop() {
	for (var i = 0; i < MATRIX_NUM; i++) {
		matrixes[i].movePoints();
	}

	var data = imageData.data;

	for (var x = 0; x < rectWidth; x++) {
		for (var y = 0; y < rectHeight; y++) {
			var index = (x * rectHeight + y) * 4;
			//console.log(`x: ${x}, y: ${y}:`, matrixes[0].get(x, y));

			const cyan = [0, 0.75, 1];
			const yellow = [1, 0.9, 0];

			//const red = ;
			//const green = ;
			//const blue = ;

			data[index + 0] = matrixes[0].get(x, y) * cyan[0]; // red
			data[index + 1] = matrixes[0].get(x, y) * cyan[1]; // green
			data[index + 2] = matrixes[0].get(x, y) * cyan[2]; // blue
			data[index + 3] = 255; // alpha
		}
	}
	context.putImageData(imageData, 0, 0);

	count += 1;
}

// Init
window.addEventListener ? window.addEventListener('load', init, false) : (window.load = init);
