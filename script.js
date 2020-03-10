var modal2 = document.getElementById("cont2");
var modal1 = document.getElementById("cont1");

var btn = document.getElementById("registr");

var close = document.getElementById('cancel');

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal2.style.display = "block";
  modal1.style.display = "none"

}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal2.style.display = "none";
  modal1.style.display = "block"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}