const viewOn = document.getElementById("off");
const viewOff = document.getElementById("on");
const passwordField = document.getElementById("passw");
let flag = true;

viewOn.style.display = "none"; 

viewOff.addEventListener("click", () => {
    passwordField.type = "password";
    viewOff.style.display = "none";
    viewOn.style.display = "inline";
});

viewOn.addEventListener("click", () => {
    passwordField.type = "text";
    viewOn.style.display = "none";
    viewOff.style.display = "inline";
});