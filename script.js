let body = document.querySelector("body");
let btn = document.querySelector("#btn");
let color = document.querySelector("#color");
let colors = ["red", "#F1f5f8", "green", "Rgba(133,122,200)", "#F15025"];

btn.addEventListener("click", () =>{
    let random = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[random];
    color.innerText = colors[random];
})
