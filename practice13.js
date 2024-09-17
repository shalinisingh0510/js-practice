/*Get user to input a number using prompt(“Enter a number:

    ”). Check if the number is
    
    a multiple of 5 or not.*/
    let userinput = prompt("enter a number");
    let number = parseInt(userinput);
    if (number  % 5===0 ){
        (number + "is a multiple of 5.");
    }
    
    else (number + "is not a multiple of 5.");