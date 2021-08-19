const contactPage = 'contact.html';

//This creates a listner event that will call
// window.onscroll = function() {stickyElement()};

// const navbar = document.getElementById("navbar");
// const sticky = navbar.offsetTop;

// function stickyElement() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/**
 * This initializes the modal window to open when triggered
 *
* Options for the modal
* @member Modal#options
* @prop {Number} [opacity=0.5] - Opacity of the modal overlay
* @prop {Number} [inDuration=250] - Length in ms of enter transition
* @prop {Number} [outDuration=250] - Length in ms of exit transition
* @prop {Function} onOpenStart - Callback function called before modal is opened
* @prop {Function} onOpenEnd - Callback function called after modal is opened
* @prop {Function} onCloseStart - Callback function called before modal is closed
* @prop {Function} onCloseEnd - Callback function called after modal is closed
* @prop {Boolean} [dismissible=true] - Allow modal to be dismissed by keyboard or overlay click
* @prop {String} [startingTop='4%'] - startingTop
* @prop {String} [endingTop='10%'] - endingTop
*/
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
  const modalInstances = M.Modal.init(elems);
});


function switchPages(){
  document.location.replace(contactPage);
}
//Materialize instance of tabs iniitializer
document.addEventListener('DOMContentLoaded', function() {
  let el = document.querySelectorAll('.tabs');
  const tabsInstance = M.Tabs.init(el, {swipeable: true});
} )
  
//Materialize instance to activate the carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.carousel');
  const caruselInstances = M.Carousel.init(elems, {numVisible: 0, dist: 0, fullWidth: true});
})