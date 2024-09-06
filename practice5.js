//Question: Write a function sumArray that takes an array of numbers and returns the sum of all the elements.
//use loop;
function sumArray(numbers) {
    
    let total = 0; 

    
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]; 
    }

    return total;
}
const myArray = [1, 2, 3, 4, 5];
let res=sumArray(myArray);
console.log("sum of total",res);
