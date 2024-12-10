/*Q: 12 (3 Dec, 2024 at 4:00 PM- 10 Dec, 2024 )
Title: L0 - Square and Cube of a Number with Implicit Return
Problem Statement:
Write an arrow function that takes a number as input and returns both its square and cube in an object, using implicit return. The function should be as concise as possible.
Requirements:
The arrow function should use implicit return (no curly braces or return keyword).
The function should return an object in the format { square, cube }.
Example Input:
5
Example Output:
{ square: 25, cube: 125 }*/
const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(3, 4)); 
console.log(multiply());     
console.log(multiply(5));    
console.log(multiply(7, 2));
