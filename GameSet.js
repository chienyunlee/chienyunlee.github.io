// JavaScript Document

//---------- Game 3 ----------
$('#game3').on('click', '.btn-reload', function() {
  $(this).parent().addClass('disappear');
});

//---------- Game 4 ----------
const holes = document.querySelectorAll('.hole');
const nts = document.querySelectorAll('.nt');
const scoreBoard = document.querySelector('.score');
const startG4 = document.querySelector('#btnG4');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];

if(hole === lastHole) {
	console.log('Same one');
	return randomHole(holes);
}
	lastHole = hole;
	return hole;
}

function peep() {
	const time = randomTime(800, 1500);
	const hole = randomHole(holes);
	hole.classList.remove('hit');
	hole.classList.add('up');
	
	setTimeout(() => {
		hole.classList.remove('up');
		if(!timeUp) peep();
	}, time);
}

function startGame4() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	startG4.classList.add('playing');
	peep();
	setTimeout(() => {
    	timeUp = true;
    	startG4.classList.remove('playing');
	}, 10000);
}

function bonk(e) {
	if(!e.isTrusted) return;
	score++;
	this.parentElement.classList.add('hit');
	this.parentElement.classList.remove('up');
	scoreBoard.textContent = score;
}

nts.forEach(nt => nt.addEventListener('click', bonk));


//---------- Game 5 ----------
//let x = 1;
//let y = 1;
//let easing = 0.05;
//
//function setup() {
//	var game5 = createCanvas(800, 450);
//	game5.parent('game5');
//	game5context = game5.drawingContext;
//	noStroke();
//}
//
//function draw() {
//	game5context.clearRect(0,0,800,450);
//	
//	let targetX = mouseX;
//	let dx = targetX - x;
//	x += dx * easing;
//
//	let targetY = mouseY;
//	let dy = targetY - y;
//	y += dy * easing;
//	
//	var gradient = game5context.createRadialGradient(x, y, 0, x, y, 30);
//	gradient.addColorStop(0, "#446AF3");
//  	gradient.addColorStop(1, "#1A3FC4");
//  	game5context.fillStyle = gradient;
//	ellipse(x, y, 60, 60);
//}


//---------- Game 7 ----------
const game7 = document.getElementById("game7");
const game7context = game7.getContext('2d');

let ball, user, com;
function setGame7Vars() {
	// Ball object
	ball = {
		x : game7.width/2,
		y : game7.height/2,
		radius : 25,
		velocityX : 5,
		velocityY : 5,
		speed : 7,
		color : "#1A3FC4"
	}

	// User Paddle
	user = {
		x : 0, // left side of canvas
		y : (game7.height - 120)/2, // -120 the height of paddle
		width : 20,
		height : 120,
		score : 0,
		color : "#B69BE9"
	}

	// COM Paddle
	com = {
		x : game7.width - 20, // - width of paddle
		y : (game7.height - 120)/2, // -100 the height of paddle
		width : 20,
		height : 120,
		score : 0,
		color : "#FE9FB8"
	}

}
setGame7Vars();

// NET
const net = {
    x : (game7.width - 4)/2,
    y : 0,
    height : 10,
    width : 4,
    color : "rgba(245,173,205,0.2)"
}

// draw a rectangle, will be used to draw paddles
function drawRect(x, y, w, h, color){
    game7context.fillStyle = color;
    game7context.fillRect(x, y, w, h);
}

// draw circle, will be used to draw the ball
function drawArc(x, y, r, color){
    game7context.fillStyle = color;
    game7context.beginPath();
    game7context.arc(x,y,r,0,Math.PI*2,true);
    game7context.closePath();
    game7context.fill();
}

// listening to the mouse

game7.addEventListener("mousemove", getMousePos);

function getMousePos(evt){
	console.log(evt);
    let rect = game7.getBoundingClientRect();    
    user.y = evt.clientY - rect.top - user.height/2;
}

// when COM or USER scores, we reset the ball
function resetBall(){
    ball.x = game7.width/2;
    ball.y = game7.height/2;
    ball.velocityX = -ball.velocityX;
    ball.speed = 10;
}

// draw the net
function drawNet(){
    for(let i = 0; i <= game7.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

// draw text
function drawText(text,x,y){
    game7context.fillStyle = "#F5ADCD";
    game7context.font = "75px Maven Pro";
    game7context.fillText(text, x, y);
}

// collision detection
function collision(b,p){
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
    
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
    
    return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}

// update function, the function that does all calculations
function update(){
	
    // change the score of players, if the ball goes to the left "ball.x<0" computer win, else if "ball.x > game7.width" the user win
    if( ball.x - ball.radius < 0 ){
        com.score++;
        resetBall();
    }else if( ball.x + ball.radius > game7.width){
        user.score++;
        resetBall();
    }
    
    // the ball has a velocity
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    
    // computer plays for itself, and we must be able to beat it
    // simple AI
    com.y += ((ball.y - (com.y + com.height/2)))*0.1;
    
    // when the ball collides with bottom and top walls we inverse the y velocity.
    if(ball.y - ball.radius < 0 || ball.y + ball.radius > game7.height){
        ball.velocityY = -ball.velocityY;
    }
    
    // we check if the paddle hit the user or the com paddle
    let player = (ball.x + ball.radius < game7.width/2) ? user : com;
    
    // if the ball hits a paddle
    if(collision(ball,player)){
        // we check where the ball hits the paddle
        let collidePoint = (ball.y - (player.y + player.height/2));
        // normalize the value of collidePoint, we need to get numbers between -1 and 1.
        // -player.height/2 < collide Point < player.height/2
        collidePoint = collidePoint / (player.height/2);
        
        // when the ball hits the top of a paddle we want the ball, to take a -45degees angle
        // when the ball hits the center of the paddle we want the ball to take a 0degrees angle
        // when the ball hits the bottom of the paddle we want the ball to take a 45degrees
        // Math.PI/4 = 45degrees
        let angleRad = (Math.PI/4) * collidePoint;
        
        // change the X and Y velocity direction
        let direction = (ball.x + ball.radius < game7.width/2) ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);
        
        // speed up the ball everytime a paddle hits it.
        ball.speed += 0.1;
    }
}

// render function, the function that does al the drawing
function render(){
    
    // clear the canvas
    game7context.clearRect(0, 0, game7.width, game7.height);
    
    // draw the user score to the left
    drawText(user.score,game7.width/4,game7.height/5);
    
    // draw the COM score to the right
    drawText(com.score,3*game7.width/4,game7.height/5);
    
    // draw the net
    drawNet();
    
    // draw the user's paddle
    drawRect(user.x, user.y, user.width, user.height, user.color);
    
    // draw the COM's paddle
    drawRect(com.x, com.y, com.width, com.height, com.color);
    
    // draw the ball
    drawArc(ball.x, ball.y, ball.radius, ball.color);
	
}

function game(){
    update();
    render();
}

// number of frames per second
let framePerSecond = 50;

function startGame7() {
	setGame7Vars();
	$('#btnG7').css('display', 'none');
	$('#win-text').css('display', 'none');
	$('#lose-text').css('display', 'none');
	let loop = setInterval(game,1000/framePerSecond);
	
	setTimeout(function() {
		clearInterval(loop);
		if (user.score >= com.score) {
	        $('#win-text').css('display', 'flex');
		} else {
			$('#lose-text').css('display', 'flex');
		}
	}, 10000);
}


// ---------- Doodle ----------
var doodlecolor = $('.doodle-color .selected').css('background-color');
var brushsize = document.getElementById('brush-size');
var size = brushsize.value;
var save = document.getElementById('doodle-save');
var share = document.getElementById('doodle-share');
var doodlecanvas = document.getElementById('doodle-canvas');
var doodlecontext = doodlecanvas.getContext('2d');
var lastEvent;
var mouseDown = false;

$('#doodle-canvas').mousedown(function(e) {
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e) {
	if (mouseDown) {
		doodlecontext.beginPath();
		doodlecontext.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		doodlecontext.lineTo(e.offsetX, e.offsetY);
		doodlecontext.lineJoin = 'round';
		doodlecontext.lineCap = 'round';
		doodlecontext.lineWidth = size;
		doodlecontext.strokeStyle = doodlecolor;
		doodlecontext.stroke();
		lastEvent = e;
	}
}).mouseup(function() {
	mouseDown = false;
}).mouseleave(function() {
	$('#doodle-canvas').mouseup();
});

$('.doodle-color').on('click', 'li', function() {
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');
  doodlecolor = $(this).css('background-color');
});

$('.doodle-size').on('click', 'input', function() {
  size = brushsize.value;
});

$('#doodle-clean').click(function() {
  doodlecontext.clearRect(0, 0, 800, 450);
});

$('#doodle-save').click(function() {
	save.setAttribute('download', 'myLDRR.png');
	save.setAttribute('href', doodlecanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
});

$('.btn-close').click(function() {
  doodlecontext.clearRect(0, 0, 800, 450);
});

// Doodle Share
$('#doodle-share').click(function(){
	setTimeout(AlertShow, 0);
	setTimeout(AlertHide, 1000);
	setTimeout(PopupHide, 1000);
	share.setAttribute('download', 'myLDRRimg.png');
	share.setAttribute('href', doodlecanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
});

let saveFile = () => {
    	
	// Get the data from each element on the form.
	const msg = document.getElementById('doodle-msg');

	// This variable stores all the data.
	let data = msg.value;

	// Convert the text to BLOB.
	const textToBLOB = new Blob([data], { type: 'text/plain' });
	const sFileName = 'MyLDRRmsg.txt';	   // The file to save the data.

	let newLink = document.createElement("a");
	newLink.download = sFileName;

	if (window.webkitURL != null) {
		newLink.href = window.webkitURL.createObjectURL(textToBLOB);
	}
	else {
		newLink.href = window.URL.createObjectURL(textToBLOB);
		newLink.style.display = "none";
		document.body.appendChild(newLink);
	}

	newLink.click(); 
}

function AlertShow(){
	$('.alert').fadeIn();
}

function AlertHide(){
	$('.alert').fadeOut();
}

function PopupHide(){
	$('.popup').bPopup().close();
	$.fn.fullpage.setAllowScrolling(true);
}

