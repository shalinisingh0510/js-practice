//Create a function countTypes that takes an array of mixed data types (e.g., numbers, strings, booleans)
 //and returns an object with the count of each type in the array.
//const mixedArray = [1, 'hello', true, 3.14, 'world', false, 42];

//function countTypes(array) 

//Question: Given an array of objects representing people, each with a name and an age property, write a function averageAge that uses filter, map, and reduce to calculate the average age of people who are 18 years old or older.
const people = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 16 },
];

let averageAge = people.filter((person) => person.age >= 18).map((person )=> person.age).reduce((s, a) => s + a ); 
console.log("average age is",averageAge)