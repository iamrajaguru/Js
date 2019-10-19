console.log("Logical Implementation");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const userList = document.querySelector("#users");

//One time alert

// myForm.addEventListener("submit", onSubmit);
// function onSubmit(e) {
//   e.preventDefault();
//   if (nameInput.value =="" || emailInput.value =="") {
//     msg.innerHTML = "Please Enter the Fields ";
//     msg.classList.add('error');
//     setTimeout(()=>msg.remove(),3000);
//   }
//   else{
//     const li =document.createElement('li');
//     li.appendChild(document.createTextNode(`  Name:${nameInput.value} Email: ${emailInput.value}`));
//     userList.appendChild(li);
//     nameInput.value='';
//     emailInput.value='';
//   }
// }

//Proper Working Code for alert
const span = document.querySelector(".empty");
const butn = document.querySelector(".btn");
var title = document.querySelector("h1");
 
if (!localStorage.getItem("username")) {
  var inp = nameInput.value;
  console.log(nameInput.value); // - getting name from inputfields
  localStorage.setItem("username", inp);
  title.textContent = "Welcome  " + inp;
}else{
  console.log(localStorage.getItem("username"));
  var getName = localStorage.getItem("username");
  title.textContent = "Welcome " + getName;
}

   

butn.onclick = function(e) {
  e.preventDefault();
  if (nameInput.value == "" || emailInput.value == "") {
    span.innerHTML = "<div class='msg'></div>";
    console.log(span);
    const msg = document.querySelector(".msg");
    msg.innerHTML = "Please Enter the Fields ";
    msg.classList.add("error");
    setTimeout(() => msg.remove(), 5000);
    localStorage.clear();
  } else {
            if (!localStorage.getItem("username")) {
              var inp = nameInput.value;
              console.log(nameInput.value); // - getting name from inputfields
              localStorage.setItem("username", inp);
              title.textContent = "Welcome  " + inp;
            }
              const li = document.createElement("li");
              li.appendChild(
                document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
              );
              userList.appendChild(li);
              nameInput.value = "";
              emailInput.value = "";
              
               
          
  }
};

