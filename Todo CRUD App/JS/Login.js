var attempt = 3;

function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
    
if ( username == "Admin" && password == "Admin"){
window.location = "TodoCRUD.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}