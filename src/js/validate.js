/*
 <div class="component-container">
          <input type="text" placeholder="Email Address" class="input-email">
          <button class="btn"><span><img src="./images/icon-arrow.svg" alt="" srcset=""></span></button>
          <img class = "icon-error" src="./images/icon-error.svg" alt="" srcset="">
        </div>
*/

const inputEmail = document.querySelector(".input-email");
const btnEmail = document.querySelector(".btn");
const iconError = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".error-message");

btnEmail.addEventListener("click", function(e){
   
    e.preventDefault();     

    if(!validateEmail(inputEmail.value)){
        handleErrorActive();
    }
    else{
        handleErrorDesactivate();
    }
});

inputEmail.addEventListener("input", function(e){
    
    /* if(e.target.value === " "){
        console.log(e.target.value);
        iconError.classList.remove("activate-error");
    errorMessage.classList.remove("activate-error");
    }

    if(!validateEmail(e.target.value)){
        handleErrorActive();
    }
    else{
        handleErrorDesactivate();
    } */
        
});

function handleErrorActive(){
    iconError.classList.add("activate-error");
    errorMessage.classList.add("activate-error");
    inputEmail.classList.add("activate-error");
}

function handleErrorDesactivate(){
    iconError.classList.remove("activate-error");
    errorMessage.classList.remove("activate-error");
    inputEmail.classList.remove("activate-error");
}


function validateEmail(email){
    
    let re = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/;

    return re.test(email);

}
