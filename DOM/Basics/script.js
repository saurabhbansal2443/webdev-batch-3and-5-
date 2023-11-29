// let h1tag = document.querySelector("h1");
// // let ptag = document.getElementsByClassName("pclass");
// // let box = document.getElementById("abc");
// let ptag  = document.querySelector(".pclass");
// let box = document.querySelector("#abc")

// let imagetag = document.querySelector(".tmgtag");

// h1tag.innerText = " I am chnaged through js "

// // box.classList.add("blue")

// // box.classList.remove("blue")

// box.classList.toggle("red");
// box.classList.toggle("red");

// ptag.setAttribute("abc","xyz")

// let att = ptag.getAttribute("abc");

// console.log(imagetag);

// imagetag.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtba-cqKkEAO0JOp3jrWDOsOnQYDbgSsrOAacCX8wIR29hvww2uIgyvAlNsA&s")

let containerBox = document.querySelector(".container");

let mybox = document.createElement("div");

mybox.classList.add('box');

containerBox.appendChild(mybox);

console.log(mybox)