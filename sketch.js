//Randomly Generates values between 0 and 3
let randInt4 = Math.round(Math.random() * 3);
/*
1 = Rectangle
2 = Ellipse
3 = Triangle
4 = Quadrilateral
*/

//create canvas and run the randomization function
function setup() {
  createCanvas(400, 400);
  randElements();
}

//Randomization function
function randElements() {

  let rgbValShape = [random(255), random(255), random(255)] //Gets the color for the shape
  let rgbValBackground = [random(255), random(255), random(255)] //Gets the color of the Background
  sizeValRect = [random(width), random(height), random(width), random(height)] // Gets the (X,Y) values of the top left and bottom right points in the Rectangle
  sizeValTri = [random(width), random(height), random(width), random(height), random(width), random(height)] //// Gets the (X,Y) values of the 3 points in the Triangle
  sizeValQuad = [random(width), random(height), random(width), random(height), random(width), random(height), random(width), random(height)] // Gets the (X,Y) values of all four points in the Rectangle

  //Makes sure that the Background and Shape do not have the same color by setting the shape to white
  if (rgbValShape == rgbValBackground) {
    rgbValShape = (0, 0, 0)
  }
  background(rgbValBackground) //sets background color to the random value from above
  fill(rgbValShape) //sets shape color to the random value from above
}

//The main draw function, loops repeatedly
function draw() {
  noStroke(); //Removes outline that comes with shapes by default

  //Gets the value of the random number and draws the associated shape, then writes the random number to the log
  switch (randInt4) {
    case 0:
      rect(sizeValRect[0], sizeValRect[1], sizeValRect[2], sizeValRect[3]);
      console.log(randInt4);
      break; //Makes sure the code stops after it draws the matching shape
    case 1:
      ellipse(sizeValRect[0], sizeValRect[1], sizeValRect[2], sizeValRect[3]);
      console.log(randInt4);
      break;
    case 2:
      triangle(sizeValTri[0], sizeValTri[1], sizeValTri[2], sizeValTri[3], sizeValTri[4], sizeValTri[5]);
      console.log(randInt4);
      break;
    case 3:
      quad(sizeValQuad[0], sizeValQuad[1], sizeValQuad[2], sizeValQuad[3], sizeValQuad[4], sizeValQuad[5], sizeValQuad[6], sizeValQuad[7])
      console.log(randInt4);
      break;
    default: //When there are no matches, the default block runs
      console.log('failed render')
  }
}