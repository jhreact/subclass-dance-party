// var BlinkyDancer = function(top, left, timeBetweenSteps){
//   var BlinkyDancer = Dancer(top, left, timeBetweenSteps);

//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
// };

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

// var oldStep = Dancer.prototype.step;

// BlinkyDancer.prototype.step = function(){
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
// };

// BlinkyDancer.prototype.step();

// BlinkyDancer.prototype.setPosition = function(top, left){
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: top,
//     left: left
//   };

//   this.$node.css(styleSettings);
// };



// var myBlinky = new BlinkyDancer();

// now that we have defined the BlinkyDancer.prototype.object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// BlinkyDancer.prototype.setPosition(top, left);
// var ourBlinkyDancer = new BlinkyDancer;

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
  // var name = "Me";
  // setTimeout(function(name){
  //   alert("I am being called in BlinkyDancer" + name);
  // }, 200);
  setTimeout(function() {
    return function(){
      alert("I am being called in BlinkyDancer" + name);
    };
  }, 200);

  that.$node.toggle();

  // setTimeout(function(){
  //   that.$node.toggle(200, function(){
  //     console.log("Toggling BlinkyDancer");
  //   });
  // }, that._timeBetweenSteps);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  // setTimeout(function(){
  // that.$node.toggle(200, function(){
  //   console.log("I am toggling");
  //   that.step.callCount++;
  // });
  // }, that._timeBetweenSteps);

};

// BlinkyDancer.prototype.step.callCount = 0;

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var dancer = new BlinkyDancer(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};
