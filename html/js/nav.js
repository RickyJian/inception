window.onscroll = function () {
  navSticky();
};

var navbar = document.getElementsByTagName("nav")[0];
var sticky = navbar.offsetTop;

function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}

function underscoreBinding(link) {
}
