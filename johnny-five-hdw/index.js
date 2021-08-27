var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  var one = new five.Button(2, 6);
  var two = new five.Button(3,7);
  five.
  console.log(one, two);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe(500);

  this.repl.inject({
     led: led,
     board: board
  });


});