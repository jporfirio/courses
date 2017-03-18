function incrementLeft(){
  Game.incrementLeft();
  updateScore();
}

function incrementRight(){
  Game.incrementRight();
  updateScore();
}

function setLimit(){
  Game.scoreLimit = Number(document.querySelector("input[type='number']").value) || 5;
  document.getElementById('scoreLimit').textContent = Game.scoreLimit;
}

function reset(){
  Game.reset();
  updateScore();
}

function updateScore(){
  var lefty = document.getElementById('leftPlayerScore');
  lefty.textContent = Game.scoreLeft;
  var righty = document.getElementById('rightPlayerScore');
  righty.textContent = Game.scoreRight;
  if(Game.scoreLeft == Game.scoreLimit){ lefty.classList.add("winner"); }
  else { lefty.classList.remove("winner"); }
  if(Game.scoreRight == Game.scoreLimit){ righty.classList.add("winner"); }
  else { righty.classList.remove("winner"); }
}

var Game = {
  scoreLeft: 0, scoreRight: 0, scoreLimit: 5,
  canIncrement: function(){
    return (this.scoreLeft < this.scoreLimit && this.scoreRight < this.scoreLimit);
  },
  incrementRight: function(){
    if(this.canIncrement()){this.scoreRight += 1;}
  },
  incrementLeft: function(){
    if(this.canIncrement()){this.scoreLeft+=1;}
  },
  reset: function(){
    this.scoreLeft = 0; this.scoreRight = 0;
  }
}

document.getElementById('leftPlayerBtn').addEventListener("click", incrementLeft);
document.getElementById('rightPlayerBtn').addEventListener("click", incrementRight);
document.getElementById('resetBtn').addEventListener("click", reset);
document.getElementById('scoreLimitBox').addEventListener("change", setLimit);
