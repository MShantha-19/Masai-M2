/*Q: 14(3 Dec, 2024 at 4:00 PM - 10 Dec, 2024 )
Title:
L1 - Merging and Updating Nested Objects with Spread Operator

Problem Statement:
You are given two nested objects: profile and updates. Your task is to merge the two objects using the spread operator, ensuring that specific nested properties in updates overwrite those in profile.

Steps:
Create two objects:
profile: contains name, age, address (which is an object with properties like city and zipcode).
updates: contains updated age, and an updated address object with a new zipcode and added country property.
Merge the objects using the spread operator, ensuring the updated properties from updates overwrite the existing ones.
Return the new merged object.
Example Input

const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

Example Output:

{ name: "Charlie", age: 30, address: { city: "San Francisco", zipcode: "94109", country: "USA" } }*/
const profile = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    zipcode: "94101"
  }
};

const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];

const formatPeople = (people) => {
  return people.map(({ name, address: { city, street: { name: streetName } } }) =>
    `${name} lives in ${city} on ${streetName}`
  );
};

const result = formatPeople(people);
console.log(result);

const updates = {
  age: 30,
  address: {
    zipcode: "94109",
    country: "USA"
  }
};

const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(mergedProfile);
