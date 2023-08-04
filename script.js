let body = document.querySelector("body");
let btn = document.querySelector("#btn");
let container = document.querySelector("#container");
let color = document.querySelector("#color");
let colors = ["red", "white", "green", "purple", "blue"];

btn.addEventListener("click", () =>{
    let random = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[random];
    color.innerText = colors[random];
})
