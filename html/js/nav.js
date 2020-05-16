window.onscroll = function () {
  navSticky();
};

var navbar = document.getElementsByTagName("nav")[0];
var sticky = navbar.offsetTop;
const navLinkActive = "active";

function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}

function underscoreBinding(link) {
  var navLinks = document.getElementsByClassName("nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];
    if (navLink.getAttribute("href") == link) {
      navLink.classList.add(navLinkActive);
    } else {
      navLink.classList.remove(navLinkActive);
    }
  }
}
