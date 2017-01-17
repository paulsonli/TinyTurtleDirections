/*global TinyTurtle */
TinyTurtle.apply(window);
/*forward(40);
right(90);
forward(50);
right(90);
forward(40);
right(90);
forward(50);
left(140);
forward(37);
left(90);
forward(29);
stamp(5);*/

/*forward(50);
right(180);
forward(25);
left(90);
forward(35);
left(90);
forward(25);
right(180);
forward(50);
stamp(5);*/

/*right(45);
forward(25);
right(45);
forward(40);
right(45);
forward(25);
right(45);
forward(25);
right(45);
forward(25);
right(45);
forward(40);
right(45);
forward(25);
right(45);
forward(25);
*/

function box(length) {
  for (var i = 0; i < 6; i++) {
    forward(length);
    right(60);
  }
}

box(40);
