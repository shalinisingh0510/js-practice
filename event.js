let button = document.querySelector("#button");

button.onclick = () =>{
    console.log("button was clicked");
    let a = 25;
    a++;
    console.log(a);

}
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
}