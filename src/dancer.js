// Creates and returns a new dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps){
//   // use jQuery to create an HTML <span> tag
//  this.$node = $('<span class="dancer"></span>');
//  this._timeBetweenSteps = timeBetweenSteps;
//  this.setPosition(top, left);
//  this.step();

// };

// Dancer.prototype.step = function(){
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(function(){
//     console.log("Inside the timeout function");
//   }, this._timeBetweenSteps);

// };

// Dancer.prototype.setPosition = function(top, left){
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//  this.$node.css({
//     top: top,
//     left: left
//   });
//   // this.$node.css(styleSettings);
// };

// // var myDancer = new Dancer();


// // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// // this one sets the position to some random default point within the body
// // var dancer = new Dancer();


// // // Creates and returns a new dancer object that can step
// // var makeDancer = function(top, left, timeBetweenSteps){

// //   var dancer = {};

// //   // use jQuery to create an HTML <span> tag
// //   dancer.$node = $('<span class="dancer"></span>');


// //   dancer.step = function(){
// //     // the basic dancer doesn't do anything interesting at all on each step,
// //     // it just schedules the next step
// //     setTimeout(dancer.step, timeBetweenSteps);
// //   };
// //   dancer.step();

// //   dancer.setPosition = function(top, left){
// //     // Use css top and left properties to position our <span> tag
// //     // where it belongs on the page. See http://api.jquery.com/css/
// //     //
// //     var styleSettings = {
// //       top: top,
// //       left: left
// //     };
// //     dancer.$node.css(styleSettings);
// //   };

// //   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// //   // this one sets the position to some random default point within the body
// //   dancer.setPosition(top, left);

// //   return dancer;
// // };


// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(this.top, this.left);
  // this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  // setTimeout(that.step, that._timeBetweenSteps);
  // setTimeout(function(){
  //   console.log("Inside the timeout function");
  //   debugger;
  //   that.$node.toggle('fast');
  // }, that._timeBetweenSteps);
   setTimeout(function() {
    that.step()}, that._timeBetweenSteps);
   



  //   window.setTimeout(function(){
  //   that.$node.toggle(200, function(){
  //     console.log("I am toggling");
  //     that.step.callCount++;
  //   });
  // }, that._timeBetweenSteps);

};
Dancer.prototype.step.callCount = 0;

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

var makeDancer = function(top, left, timeBetweenSteps) {
  var dancer = new Dancer(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};

