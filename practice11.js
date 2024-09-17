//Write a function that takes an array of numbers and returns an object where the keys are the numbers and the values are the square of those numbers, but only for numbers that are even.



function EvenSquares(numbers) {
    res={};
     for(let number of numbers){
        res[number]=number*number
     }
     return res;
     //res[1]=1*1
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenSq = EvenSquares(numbers);
  console.log(evenSq); 
 // res={"1":1,"2":4,"3":9}


       //object

       obj1={"name":"shalini","name2":"kumar","name3":"gaurav"}
       console.log("initiual object",obj1);
       //key
       //value
       
       //obj1["name"]
       let key = Object.keys(obj1);
       let names= Object.values(obj1);
       console.log("key is",key)
       console.log(names);
       obj1["name4"]="singh";
       console.log("object is",obj1)


       //uing for
       let arr=[1,2,3,4,5,6,7]

       ///foreach loop
      let res1= arr.forEach((elm)=>elm*2)
       console.log(res1)

