function BowlingGame(frame){
  this.frame = frame || new Frame();
}

  BowlingGame.prototype.getScore = function(){
    return this.frame.gameScore;
  };

  BowlingGame.prototype.bowl = function(pins){
    this.frame.bowl(pins);
  };
