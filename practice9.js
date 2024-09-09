// Question: Write a function that returns the sum of values of an object.
// use object methods


function sumofvalue(numbers){

    const sum = Object.values(numbers).reduce((accumulator, currentValue) => accumulator + currentValue);




    return sum
}


const value={ a:1, b: 2, c: 3 }

let res=sumofvalue(value);
console.log(res);





