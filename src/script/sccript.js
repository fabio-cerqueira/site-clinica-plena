//Menu event Transparent
var navbar = document.querySelector('header');
document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  console.log(posicaoy);
  navbar.style.backgroundColor = posicaoy == 0 ? "transparent" : "white";
  navbar.style.boxShadow = posicaoy == 0 ? "none" : "0 0 15px 0 rgb(0 0 0 / 8%)";
      // transition: width 500ms ease-in 500ms;

});


//Menu Mobile
function clickMenu() {
  if (menu.style.display == "block") {
    menu.style.display = "none";
    navbar.style.backgroundColor = "transparent";

    
  } else {
    menu.style.display = "block";
    navbar.style.backgroundColor = "white";
  }
}

function clickMenuHidden() {
  const checkbox = document.getElementById("checkbox-menu");
  checkbox.checked = false; // desmarcou
  menu.style.display = "none";
}
