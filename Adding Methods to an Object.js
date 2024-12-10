/*Q: 10
Adding Methods to an Object
Create an object rectangle that has the following properties:

length (number)
width (number)
Add the following methods to the object:

calculateArea - Returns the area of the rectangle.
calculatePerimeter - Returns the perimeter of the rectangle.
Write a program to call both methods and display the results.*/
let rectangle = {
  length: 5,
  width: 3,
  calculateArea: function() {
    return this.length * this.width;
  },
  calculatePerimeter: function() {
    return 2 * (this.length + this.width);
  }
};
console.log("Area of the rectangle:", rectangle.calculateArea());
console.log("Perimeter of the rectangle:", rectangle.calculatePerimeter());
