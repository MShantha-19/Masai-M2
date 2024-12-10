/* 
Traversing an Object
Create an object book with the following properties:

title (string)
author (string)
year (number)
genres (array of strings)
Write a program to:

Use a for...in loop to traverse and display all the properties and their values.*/
// Create the book object with specified properties
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Drama", "Historical"]
};

// Use a for...in loop to traverse and display all the properties and their values
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}
