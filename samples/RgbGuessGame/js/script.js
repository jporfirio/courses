var squares = document.querySelectorAll('.square');
var message = document.getElementById('message');
var modes = document.querySelectorAll(".mode");
var running = false;
var easy = false;
var numSq = (easy ? 3 : 6);
var mistakes;
for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", checkState);
}
for( var i = 0; i < modes.length; i++){
  modes[i].addEventListener("click", changeDifficulty);
}
document.getElementById('newGame').addEventListener('click', newGame);

newGame();

function generateRandomColors(num){
  var colors = [];
  for(var i = 0; i < num; i++){
    var rgb = [];
    for(var j = 0; j < 3; j++){
      rgb[j] = Math.floor(Math.random() * 256);
    }
    colors[i] = "RGB(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
  }
  return colors;
}

function setMessage(msg){
  document.getElementById('message').textContent = msg;
}

function pickRandomColor(){
  randomPick = squares[parseInt(Math.random() * numSq)].style.backgroundColor;
  document.getElementById('colorDisplay').textContent = randomPick;
}

function newGame(){
  var colors = generateRandomColors(numSq);
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i] || "";
  }
  document.querySelector('#newGame').textContent = "New colors";
  setMessage("");
  pickRandomColor();
  updateVisibility();
  running = true;
  mistakes = 0;
}

function endGame(victory){
  if(victory){
    changeAllColors(randomPick);
    document.querySelector('h1').style.backgroundColor = randomPick;
  } else {
    changeAllColors("#232323");
  }
  running = false;
  document.querySelector('#newGame').textContent = "Play again?";
}

function changeAllColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function checkState(){
  if(running){
    if(this.style.backgroundColor == randomPick){
      setMessage("Winner!");
      endGame(true);
    } else {
      this.style.backgroundColor = "#232323";
      setMessage("Try again...");
      mistakes += 1;
      if(mistakes == (easy ? 2 :5)){
        setMessage("Loser!");
        endGame(false);
      }
    }
  }
}

function changeDifficulty(){
  for(var i = 0; i < modes.length; i++){
    modes[i].classList.remove("selected");
  }
  this.classList.add("selected");
  easy = !easy;
  updateVisibility();
  newGame();
}

function updateVisibility(){
  if(easy){
    for(var i = 3; i < squares.length; i++){
      squares[i].style.display = "none";
    }
  } else {
    for(var i = 3; i < squares.length; i++){
      squares[i].style.display = "block";
    }
  }
}
