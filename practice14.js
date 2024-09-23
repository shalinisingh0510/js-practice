//.Create two promises: one that resolves after 1 second and another that resolves after 2 seconds. Chain these promises so that the second 
//one starts after the first one finishes.
//Create a div with some text. When the mouse is moved over the div, change its background color to blue. 
//When the mouse moves out, change it back to the original color.ffffffffffffvfffffffffffggfvffh

let promise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
    resolve("INSIDE promise 1");

    },1000);
})

let prom = new Promise((resolve, reject)=> {
    setTimeout(()=>{
    resolve("inside promise 2");

    },2000);
}) 

promise.then((msg)=>{
    console.log(msg);
    return prom
}

).then((msg)=>{
    console.log(msg);

}
)

 


