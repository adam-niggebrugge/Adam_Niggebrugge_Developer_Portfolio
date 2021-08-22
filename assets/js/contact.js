const indexURL = 'index.html';

document.addEventListener('DOMContentLoaded', function() {
  const sideNavEls = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(sideNavEls);
});

document.addEventListener('DOMContentLoaded', function() {
  const parallaxEl = document.querySelectorAll('.parallax');
  const parallaxinstances = M.Parallax.init(parallaxEl);
});

  function switchPages(event){
     let area = event.currentTarget.attributes.href.value;
     document.location.replace(indexURL+area).scrollIntoView({behavior: 'smooth'});
}