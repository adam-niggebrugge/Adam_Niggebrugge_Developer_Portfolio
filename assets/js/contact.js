const indexURL = 'index.html';

(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space

  function switchPages(event){
     let area = event.currentTarget.attributes.href.value;
     document.location.replace(indexURL+area).scrollIntoView({behavior: 'smooth'});
  }