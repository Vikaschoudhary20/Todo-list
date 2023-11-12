
let input = document.getElementById("inp");
let taskshower = document.querySelector(".taskshower");

function Add(){
    if (inp.value =="") {
        alert("Please Enter Your Task.")
    }
    else{
        let newEle = document.createElement('ul');
         newEle.innerHTML = `${inp.value}<i class="fa-solid fa-trash"></i>`;
         taskshower.appendChild(newEle);
         inp.value = "";
         newEle.querySelector("i").addEventListener('click', remove);
         function remove(){
            newEle.remove()
         }
    }
        
}


