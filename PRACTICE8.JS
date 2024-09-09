//Write a function that takes an array of numbers and returns an object with the count of even and odd numbers.


function evencount(numbers){
  
    res={"even":0,"odd":0};

    
    for (const number of numbers) {
        
        if (number % 2 == 0) {
            res.even++; 
        } else {
            res.odd++;  
        }
    }
    return res;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let result = evencount(numbers);
   console.log("result" , result);


name.array.forEach(element => {
    
});

