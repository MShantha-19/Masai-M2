/*Question-8(2 Dec, 2024 - 9 Dec, 2024)
Creating Objects and Accessing Properties
Create an object student using object literal syntax with the following properties:

name (string)
age (number)
grades (an array of numbers)
Perform the following tasks:

Access the name property using both dot notation and bracket notation.
Add a new property school with the value "Green Valley High" using dot notation.
Display the object in the console.*/

let student = {
  name: "John Doe",
  age: 16,
  grades: [90, 85, 78, 92, 88]
};
console.log(student.name);
console.log(student['name']);
student.school = "Green Valley High";
console.log(student);
