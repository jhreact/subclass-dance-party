var KatanaGuy = function(top, left, timeBetweenSteps, imageQueue){
  Dancer.call(this, top, left, timeBetweenSteps, imageQueue);
  this.$node = $('<span class="katanaGuy"><img /></span>');
  this.$node.find('img').attr('src', this.currImg);
  var dancer = this;
  this.$node.on('mouseover', function() {
    console.dir(this);
    dancer.rotateImgQueue();
    $(this).find('img').attr('src', dancer.currImg);
  });
};
KatanaGuy.prototype = Object.create(Dancer.prototype);
KatanaGuy.prototype.constructor = KatanaGuy;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
KatanaGuy.prototype.oldStep = Dancer.prototype.step;

KatanaGuy.prototype.step = function(){
  var that = this;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // that.$node.toggle();

};

var makeKatanaGuy = function(top, left, timeBetweenSteps) {
  var images = ["gifs/katanaGuy1.gif","gifs/katanaGuy2.gif","gifs/katanaGuy5.gif"];
  var dancer = new KatanaGuy(top, left, timeBetweenSteps, images);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};
