// new angular module called 'MyApp'
var myApp = angular.module( 'myApp', [] );

// adding controller
myApp.controller( 'LifeGallery', function(){
  console.log( 'NG is up' );
  vm = this;
  vm.cards = [];

  vm.cards.push( new Card('pics/walkerPB.jpg','This summer, with Cassie in costume as Westley and Buttercup'));
  vm.cards.push( new Card('pics/bballfam.jpg','With brother, brother-in-law, and Dad before a Twins game'));
  vm.cards.push( new Card('pics/con.jpg', 'With friends Sidney, Dusty, and James at Con 2015'));
  vm.cards.push( new Card('pics/minigolf.jpg', 'I got two holes-in-one that day.  Minigolf Master over here!'));
  vm.cards.push( new Card('pics/costumes.jpg', 'Oh man... 1993?  I\'m the cute Raphael.'));
  vm.cards.push( new Card('pics/batb.jpg', 'Summer of 2006, Beauty and the Beast -- I\'m Cogsworth!'));

});

// card object constructor
// call with 'new Card(url, desc)'
var Card = function(url, desc) {
  this.url = url;
  this.desc = desc;
  this.likes = 0;
  this.showText = false;
};

// add functions to card class with .prototype
Card.prototype.likeCard = function() {
  console.log('likeCard called');
  this.likes++;
}; // end likeCard

Card.prototype.toggleCard = function() {
  console.log('toggleCard called');
  this.showText = !this.showText;
}; // end toggleCard
