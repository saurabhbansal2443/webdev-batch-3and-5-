let inputTag = document.querySelector(".in");
let opt = document.querySelector(".opt");
let btn = document.querySelector(".btn");
let cont = document.querySelector(".cont");

btn.addEventListener("click",function(){
    cont.innerHTML="";
    for(let i=1;i<=inputTag.value;i++){
    let box = document.createElement("div");
    box.classList.add("box");
    box.classList.add(opt.value);
    cont.appendChild(box);
    }
})