// new angular module called 'MyApp'
var myApp = angular.module( 'myApp', [] );

// adding controller
myApp.controller( 'LifeGallery', function(){
  console.log( 'NG is up' );
  vm = this;

  // init cards
  vm.cards = [];
  var temp = {
    url: 'pics/walkerPB.jpg',
    description: 'This summer, with Cassie in costume as Westley and Buttercup',
    likes: 0,
    showText: false
  };
  vm.cards.push( temp );
  temp = {
    url: 'pics/bballfam.jpg',
    description: 'With brother, brother-in-law, and Dad before a Twins game',
    likes: 0,
    showText: false
  };
  vm.cards.push( temp );
  temp = {
    url: 'pics/con.jpg',
    description: 'With friends Sidney, Dusty, and James at Con 2015',
    likes: 0,
    showText: false
  };
  vm.cards.push( temp );
  temp = {
    url: 'pics/minigolf.jpg',
    description: 'I got two holes-in-one that day.  Minigolf Master over here!',
    likes: 0,
    showText: false
  };
  vm.cards.push( temp );
  temp = {
    url: 'pics/batb.jpg',
    description: 'Summer of 2006, Beauty and the Beast -- I\'m Cogsworth!',
    likes: 0,
    showText: false
  };
  vm.cards.push( temp );
  temp = {
    url: 'pics/costumes.jpg',
    description: 'Oh man... 1993?  I\'m the cute Raphael.',
    likes: 0,
    showText: false
  };
  vm.cards.push( temp );

  // toggle showing card or text by inverting showText value
  vm.toggleCard = function( index ){
    console.log( 'in toggleCard:', index );
    vm.cards[ index ].showText = !vm.cards[ index ].showText;
  }; //end toggleCard

  vm.like = function( index ){
    vm.cards[ index ].likes++;
  }; //end like
}); //end LifeGallery
