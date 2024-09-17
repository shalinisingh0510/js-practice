//Write a function that takes an array of numbers and returns an object with the sum of positive and negative numbers.




function sumofpositiveandnegative(numbers){
    let res={"positivenumber":0,"negativenumber":0}
    for(const number of numbers){
        if ( number>0){
            res.positivenumber++;
        }
    
        else(number<0)
        res.negativenumber++;

}
return res;
}




const numbers = [1, -2, 3, -4, 5, -6];
const result= sumofpositiveandnegative(numbers);
console.log(result);




    






