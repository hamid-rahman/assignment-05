// hamid custom
// AOS Initialized 
AOS.init();

//message
document.getElementById("popup").addEventListener("click", popupMsg);
      
function popupMsg() {
  alert ("This item not working. Check another one.");
}

//second message
document.getElementsById('popupSec').addEventListener("click",secMessage);
function secMessage(){
  alert ("This item not working. Check another one.");
}