// init dom function event
window.onload = function () {
  navLinkEventBinding();
};

function navLinkEventBinding() {
  var navLinks = document.getElementsByClassName("nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    // use inner function to prevent addEventListener not effect
    (function (index) {
      var href = navLinks[index].getAttribute("href");
      if (href.length < 2 || href.charAt(0) != "#") {
        return;
      }

      navLinks[index].addEventListener("click", function () {
        underscoreBinding(href);
      });
    })(i);
  }
}
