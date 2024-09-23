let mypromice = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("success");
    },2000);
})
mypromice.then((message) => {
    console.log(message);
});
