document.querySelector('.first-button').addEventListener('click', function () {

  document.querySelector('.animated-icon1').classList.toggle('open');
  });
  document.querySelector('.second-button').addEventListener('click', function () {
  
  document.querySelector('.animated-icon2').classList.toggle('open');
  });
  document.querySelector('.third-button').addEventListener('click', function () {
  
  document.querySelector('.animated-icon3').classList.toggle('open');
  });
   $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});