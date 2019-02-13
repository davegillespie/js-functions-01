// /*Area of a Circle*/
//
// let radius = prompt("What is the radius of your circle in ft?");
// area(radius);
//
// /*radius is the user input*/
// /*area is the area of the circle based on user input*/
//
// function getAreaOfCircle(radius) {
//   return (Math.PI * (radius * radius));
// }
//
// function area() {
//   let area = getAreaOfCircle(radius);
//   console.log("Your circle has an area of " + area + "ft.");
// }





/*Circumference of a Circle*/

// let radius = prompt("What is the radius of your circle in ft?");
// circ(radius);
//
// /*radius is the user input*/
// /*circ is the circumference of the circle based on user input*/
//
// function getCircumferenceOfCircle(radius) {
//   return (Math.PI * radius * 2);
// }
//
// function circ() {
//   let circ = getCircumferenceOfCircle(radius);
//   console.log("Your circle has a circumference of " + circ + "ft.");
// }





// /*Area of a Square*/
//
// let height = prompt("What is the height of your square in ft?");
// let width = prompt("What is the width of your square in ft?");
// area(height, width);
//
// /*width is the user input*/
// /*height is the user input*/
// /*area is the area of the square based on the user inputs*/
//
// function getAreaOfSquare(height, width) {
//   return (height * width);
// }
//
// function area() {
//   let area = getAreaOfSquare(height, width);
//   console.log("Your square has an area of " + area + "ft.");
// }





/*Area of a Triangle version1*/

// let a = prompt("What is the length of the 1st side of your triangle in ft?");
// let b = prompt("What is the length of the 2nd side of your triangle in ft?");
// let c = prompt("What is the length of the 3rd side of your triangle in ft?");
// let p = (a / 2) + (b / 2) + (c / 2);
// area();
//
// function getAreaOfTriangle() {
//   return (Math.sqrt(p*(p-a)*(p-b)*(p-c)));
// }
//
// function area() {
//   let area = getAreaOfTriangle(a, b, c, p, Math.sqrt(p*(p-a)*(p-b)*(p-c)));
//   console.log("Your triangle has an area of " + area + "ft.");
// }





// /*Area of a Triangle version2*/

let width = prompt("What is the width of your triangle in ft?");
let height = prompt("What is the height of your triangle in ft?");
area(width, height);

/*width is the user input*/
/*height is the user input*/
/*area is the area of the square based on the user inputs*/

function getAreaOfTriangle(width, height) {
  return ((width * height)/2);
}

function area() {
  let area = getAreaOfTriangle(width, height);
  console.log("Your triangle has an area of " + area + "ft.");
}
