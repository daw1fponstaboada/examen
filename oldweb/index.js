//Menu dropdown
function myFunction() {
 document.getElementById("myDropdown").classList.toggle("show");
}

// Variables
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");

var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
//Clicadores

btn.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
btn3.onclick = function () {
    modal3.style.display = "block";
}
btn4.onclick = function () {
    modal4.style.display = "block";
}
btn5.onclick = function () {
    modal5.style.display = "block";
}
btn6.onclick = function () {
    modal6.style.display = "block";
}
btn7.onclick = function () {
    modal7.style.display = "block";
}
btn8.onclick = function () {
    modal8.style.display = "block";
}
btn9.onclick = function () {
    modal9.style.display = "block";
}
btn10.onclick = function () {
    modal10.style.display = "block";
}
//Cerrador
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
     if (event.target == modal3) {
        modal3.style.display = "none";
    }
     if (event.target == modal4) {
        modal4.style.display = "none";
    }
     if (event.target == modal5) {
        modal5.style.display = "none";
    }
     if (event.target == modal6) {
        modal6.style.display = "none";
    }
     if (event.target == modal7) {
        modal7.style.display = "none";
    }
     if (event.target == modal8) {
        modal8.style.display = "none";
    }
     if (event.target == modal9) {
        modal9.style.display = "none";
    }
     if (event.target == modal10) {
        modal10.style.display = "none";
    }
}