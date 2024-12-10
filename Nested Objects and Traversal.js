/*Q: 12
Nested Objects and Traversal
Create an object library that represents a library catalog. The object should have the following structure:

name (string): Name of the library.
location (string): Location of the library.
books (array of objects): Each object in the array represents a book with the following properties:
title (string)
author (string)
available (boolean)
Perform the following tasks:

Add at least 3 books to the books array.
Use a loop to iterate through the books array and display the title and author of all available books.
Add a method findBook to the library object that takes a book title as input and returns the corresponding book object.
Test the findBook method by passing a title of a book that exists in the catalog.*/
let library = {
  name: "City Central Library",
  location: "Downtown",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      available: true
    },
    {
      title: "1984",
      author: "George Orwell",
      available: false
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      available: true
    }
  ],
  findBook: function(title) {
    return this.books.find(book => book.title === title);
  }
};
console.log("Available books:");
for (let book of library.books) {
  if (book.available) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
  }
}
let searchTitle = "1984";
let foundBook = library.findBook(searchTitle);
if (foundBook) {
  console.log(`Found book: Title: ${foundBook.title}, Author: ${foundBook.author}`);
} else {
  console.log("Book not found.");
}
