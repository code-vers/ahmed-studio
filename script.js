const eye = document.querySelector(".eye");
const password = document.querySelector(".password-box input");

eye.addEventListener("click", () => {

if(password.type === "password"){
password.type = "text";
eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
}else{
password.type = "password";
eye.innerHTML = `<i class="fa-regular fa-eye"></i>`;
}

});