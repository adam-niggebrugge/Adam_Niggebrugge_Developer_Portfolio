//This creates a listner event that will call
window.onscroll = function() {stickyElement()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyElement() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}