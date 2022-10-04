
  let app = document.getElementById('typewriter');
 
  let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });
  

 typewriter
    .pauseFor(2500)
    .typeString('vive, dale vida a tu empresa')
    .pauseFor(200)
    .deleteChars(10)
    .start();
    
    
    $("#offcanvasScrolling").mouseleave(function() {
    $("#collapse").trigger("click");
  });
  ('offcanvas.in,.open').removeClass('in open');
  $('.btn-navbar').click();  
  $('.nav-collapse').toggle();