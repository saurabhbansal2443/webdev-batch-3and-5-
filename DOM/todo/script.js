// let input = document.querySelector(".in");
// let btn = document.querySelector(".btn");

// let cont = document.querySelector(".cont");

// btn.addEventListener("click",function(){
//     let task = input.value ;
//         input.value="";
//     let myele  = document.createElement("li");

//     myele.innerHTML=task;

//     cont.appendChild(myele);
// })

let inputTag = document.querySelector(".in");
let btn = document.querySelector(".btn");
let ultag = document.querySelector(".ul");

btn.addEventListener("click",function(){
    let task = inputTag.value;
    inputTag.value="";
    console.log(task);
    let myele = document.createElement("li");
    myele.innerHTML = task + "<button class='delbtn'>delete</button>";

    let delBtn = myele.querySelector(".delbtn");
    delBtn.addEventListener("click",function(){
        myele.remove();
    })
    ultag.appendChild(myele);
})