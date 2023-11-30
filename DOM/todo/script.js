let input = document.querySelector(".in");
let btn = document.querySelector(".btn");

let cont = document.querySelector(".cont");

btn.addEventListener("click",function(){
    let task = input.value ;
        input.value="";
    let myele  = document.createElement("li");

    myele.innerHTML=task;

    cont.appendChild(myele);
})