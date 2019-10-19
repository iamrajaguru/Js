//Get elements by id name it applicable for more than one
console.log(document.getElementById("my-form"));

//Get elements by class name it applicable for more than one
console.log(document.getElementsByClassName('item'));

//Get props using tag, class and id need to specify (. or # or tag<p>) but applicable for only one item
console.log(document.querySelector('#my-form'));
console.log(document.querySelector('.item'));

//QuerySelectorAll select more than one item
console.log(document.querySelectorAll(".item"));

console.log("========================== >< ===========================" );
var items = document.querySelectorAll(".item");
items.forEach((item)=>console.log(item));

var ul = document.querySelector(".items");
//ul.remove(); ->Remove all elements  ul
/*console.log(ul);
ul.lastElementChild.remove();
ul.firstElementChild.remove();
*/

//ul.lastElementChild.textContent="Zozo";- override last element 
//ul.firstElementChild.innerHTML =' <li class="item">Item 0</li>'; - override first element 
// ul.children[1].innerHTML="Yoyo";

const btn = document.querySelector('.btn');
//if button click the event occurs
btn.addEventListener('click',(e)=>{
    e.preventDefault(); //if there is no preventDefault then it will submit the document
    // console.log("Click");
   // console.log(e.target); // e.target.id to get id
   console.log(document.querySelector('#my-form'));
   const stylez=document.querySelector("#my-form");
   var attr = stylez.getAttribute('style');
   console.log("Initial: "+attr);
   if (attr != "background:#F1C40F;") {
     document
       .querySelector("#my-form")
       .setAttribute("style", "background:#F1C40F;");
     document.querySelector("body").classList.add("bg-dark");
   } else {
     document
       .querySelector("#my-form")
       .setAttribute("style", "background:#ECF0F1;");
     document.querySelector("body").classList.remove("bg-dark");
     console.log("else: " + attr);
   }
   
});

//If mouse goes out then event occurs
        // btn.addEventListener("mouseout", e => {
        // e.preventDefault(); 
        // document.querySelector("#my-form").style.background = "#D6DBDF ";
        // document.querySelector("body").classList.add("bg-out");
        // });

//if mouse is on the event occurs
    // btn.addEventListener("mouseover", e => {
    // e.preventDefault();
    // document.querySelector("#my-form").style.background = "#F1C40F";
    // document.querySelector("body").classList.add("bg-over");
    // });

//if mouse moves then event occurs
    // btn.addEventListener("mousemove", e => {
    // e.preventDefault();
    // document.querySelector("#my-form").style.background = "#D6DBDF ";
    // document.querySelector("body").classList.add("bg-move");
    // });

