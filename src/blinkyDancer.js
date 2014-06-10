var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function(){
  var that = this;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  that.$node.toggle();

};

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var dancer = new BlinkyDancer(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};
