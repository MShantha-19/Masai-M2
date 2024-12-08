// 1.Question 
const fruits = ['apple', 'banana', 'orange'];
//adding grapes into list/Array
fruits.push('grape');
//removing apple from list/Array
fruits.shift();
console.log(fruits);


//2.Question
const sentence = ' JavaScript is fun ';
//Remove extra spaces at the beginning and end of the string using a relevant string method.
const trimmedSentence = sentence.trim();

//Convert the string to uppercase using another string method.
const uppercaseSentence = trimmedSentence.toUpperCase();

//Split the string into an array of words using an inbuilt string method.
const words = uppercaseSentence.split(' ');

console.log(words); // Output: ['JAVASCRIPT', 'IS', 'FUN']


//3.Question
const numbers = [10, 20, 30, 40, 50];

// Extract the sub-array [20, 30, 40] using an inbuilt array method.
const subArray = numbers.slice(1, 4);

// Reverse the order of this sub-array using another array method.
subArray.reverse();

//Combine it back with the rest of the original array elements in reversed order using array concatenation.
const reversedNumbers = numbers.slice(4).concat(subArray).concat(numbers.slice(0, 1));

console.log(reversedNumbers); // Output: [50, 40, 30, 20, 10]

//4.Question
const emails = "john@example.com, jane.doe@company.com, user123@gmail.com";
//Split the string into an array of individual email addresses using an appropriate string method.
const emailArray = emails.split(',');

/*For each email, extract only the username (the part before @) using a combination of string methods.
                            &
Join the extracted usernames back into a single string, separated by semicolons (;), using an inbuilt array method.*/
const usernames = emailArray.map(email => email.split('@')[0]).join(';');

console.log(usernames); // Output: "john; jane.doe; user123"
