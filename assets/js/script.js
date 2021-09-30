const contactPage = 'contact.html';
const divOverlayEl = document.getElementsByClassName('.sidenav-overlay');
const bodyEl = document.getElementById('mainBody');

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
};

/**
 * This initializes the modal window to open when triggered
 *
* Options for the modal, default in []
* place in init function, after element variable from query selector
* all options are placed in {} with comma separation, {option1 : value, option2 : value2, etc}
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
  const modEls = document.querySelectorAll('.modal');
  const modalInstances = M.Modal.init(modEls);
});


function switchPages(){
  document.location.replace(contactPage);
};
//Materialize instance of tabs iniitializer
document.addEventListener('DOMContentLoaded', function() {
  const tabsEls = document.querySelectorAll('.tabs');
  const tabsInstance = M.Tabs.init(tabsEls);
});
  
// //Materialize instance to activate the carousel functionality
// document.addEventListener('DOMContentLoaded', function() {
//   const carouselEls = document.querySelectorAll('.carousel');
//   const carouselInstances = M.Carousel.init(carouselEls, {
//     numVisible: 0, 
//     noWrap: true, 
//     indicators: true
//   });
// });

/**
* edge	[String	'left']	Side of screen on which Sidenav appears.
* draggable	[Boolean	true]	Allow swipe gestures to open/close Sidenav.
* inDuration	[Number	250]	Length in ms of enter transition.
* outDuration	[Number	200]	Length in ms of exit transition.
* onOpenStart	[Function	null]	Function called when sidenav starts entering.
* onOpenEnd	[Function	null]	Function called when sidenav finishes entering.
* onCloseStart	[Function	null]	Function called when sidenav starts exiting.
* onCloseEnd	[Function	null]	Function called when sidenav finishes exiting.
* preventScrolling	[Boolean	true]	Prevent page from scrolling while sidenav is open.
 */
document.addEventListener('DOMContentLoaded', function() {
  const sideNavEls = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(sideNavEls, {
    preventScrolling: true
  });
  instances.isFixed = true;
});

document.addEventListener('DOMContentLoaded', function() {
  const parallaxEl = document.querySelectorAll('.parallax');
  const parallaxinstances = M.Parallax.init(parallaxEl);
});
