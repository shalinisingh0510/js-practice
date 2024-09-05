let numbers=[2,4,6,8,10,12];
let squarenum = numbers.map((n)=>n*n);
console.log(numbers);
console.log(squarenum)

//let num=[1,2,3,4,];
//let add=num.map((num)=>num+1);
console.log("original number is",numbers)
console.log("incremented number is",squarenum)


// function add(a,b){
//     return a+b;
// }
// let var1 = (a,b)=>a+b;
// function increment(num){
//     return num+1;
// }

// normal function
function square(a){
    return a*a;
}
console.log("squre number",square(5));

//arrow function;
let var1 = (a)=>a*a
console.log(var1(6));

let stringarray= ["my","name","shalini","kumari"];
let var2 = stringarray.map((str)=>str.length);
//console.log("var 2 is",var2)//

let stringarra= ["my","name","shalini","kumari"];
let arr2=stringarra.slice(1,2);
console.log(arr2);






const arr=[2,4,8,9]
//Q finding sum
const output= arr.reduce((acc,curr)=> acc = acc*curr)
// multiplying by 2
const output1= arr.map((n)=>n*2)
//filtering even number
const output2=arr.filter((n)=>n%2==0)
console.log(output2)
console.log(output1)

console.log(output)



//Q finf the even number  in array and find the sum of its  square;
const arry=[4,6,7,8,2]
const even=arry.filter((n)=>n%2==0)
const sq= even.map((n)=>n*n);
const sqsum= sq.reduce((c,a)=>c+a);
console.log(sqsum);

//one liner solution
const result= arry.filter((n)=>n%2==0).map((n)=>n*n).reduce((a,c)=>a+c);
console.log("the finl result is",result)
2.//You have a list of numbers representing the ages of people in a group: [23, 18, 30, 17, 45, 29, 21, 34]. You want to process this list with the following steps:

/*Keep only the ages that are 21 or older.
Increase each remaining age by 5 years.
Compute the total sum of these adjusted ages.
Write code in your preferred language to perform these operations and determine the final result*/

const array=[23,18,30,17,45,29,21,34]
const age= array.filter((n)=>n>=21).map((n)=>n+5).reduce((ac,cr)=>ac+cr)
console.log("the age is",age)

//Given an array of words, capitalize the first letter of each word and return the resulting array.
const fruits=['apple', 'banana', 'cherry']

//const captilies=fruits.map((n)=>n=)

//Even Product: Given a list of integers, use map to double each number,
// filter to keep only even numbers, and reduce to calculate the product of these even numbers.


const integers=[1,2,3,4,5,6,7,8,9,10]
const intdouble=integers.map((n)=>n*2).filter((n)=>n%2==0).reduce((ar,cr)=>ar*cr)
console.log("the integers product is",intdouble)


//Capitalized Words: Given a list of words, use map to capitalize each word, filter to keep only words that start with a vowel, and reduce to concatenate these words into a single string.
//const words=[s,h,a,l,i,n,i]
//Grade Analysis: Given a list of student grades, use map to add 5 points to each grade, filter to keep grades above 50, and reduce to find the highest grade
const grades=[45,75,35,50,65]
const sum=grades.map((n)=>n+5).filter((n)=>n>50).reduce((a,c)=>
{
    high=0;
    if(c>high){
        high=a;
    }
    return high;
}
)
console.log("the highest grade is",sum)



//Nested List Aggregation: Given a nested list of integers, use map to flatten the list, filter to keep only numbers that are multiples of 3, and reduce to calculate their product.
//f;at list = [1,2,3,4,5,6,7]

let nestedArray = [[1, 2, 3], [4, 5], [6, 7]]
 let nestedarray=nestedArray.map((list)=>list).flat().filter((n)=>n%3==0).reduce((a,c)=>a*c)
 console.log("nested array is ",nestedarray)
 


//Weighted Average: Given a list of tuples where each tuple contains a name and a score, 
//use map to multiply each score by its corresponding weight (given in a separate list),
 //filter to include only scores above a threshold, and reduce to compute the weighted average score.
 const scores = [['Alice', 90], ['Bob', 80], ['Charlie', 70]];
 const weights = [0.4, 0.3, 0.3];
 const threshold = 25
 //alice 90 index=0  90*0.4      weight[0]
 //bob 80 index=1 80* 0.3           weight[1]
 const multiply=scores.map(([wt,n],index)=>n*weights[index]).filter((n)=>n>threshold).reduce((ae,ce)=>ae+ce)
 
 console.log("multiply is",multiply)


 //Complex Object Transformation: Given a list of dictionaries representing items with keys 'name', 'quantity', and 'price', use map to compute the total value (quantity * price) of each item, filter to keep only items with a total value greater than a certain amount, and reduce to sum these total values
 const items =
  [
    { name: 'item1', quantity: 2, price: 5 },
    { name: 'item2', quantity: 1, price: 15 },
    { name: 'item3', quantity: 4, price: 7 }
  ];
  const hold = 20


  //another version of map
  // 1*0, 4*1 6*2
  //l[3]=5
  l=[1,4,6,5,7];
  res=l.map((n,index)=>n*index)
  console.log("new map answer is ",res)

    


  
  

    


