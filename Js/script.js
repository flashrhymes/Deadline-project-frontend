//var countDownDate = new Date("2018-05-16 22:55:25").getTime();


var x = setInterval(function () {

   var govaxt = document.getElementById("countdownhide").value;

   var qalvaxt = new Date(govaxt).getTime();
   
   var now = new Date().getTime();

   
   var distance = qalvaxt - now;

 
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   
   document.getElementById("days").innerHTML = days + "<span> Days</span>";
   document.getElementById("hours").innerHTML = hours + "<span> Hours</span>";
   document.getElementById("minutes").innerHTML = minutes + "<span> Minutes</span>";
   document.getElementById("seconds").innerHTML = seconds + "<span> Seconds</span>";

   if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
   }
}, 1000);
$(document).ready(function () {


   $('.cof-tab-nav a').click(function () {
      $('.cof-tab-nav a').removeClass('tab-active');
      $(this).addClass('tab-active');

      $('.cof-tab-content .cof-tabs').hide();
      var tab = $(this).data('tab');

      $('.cof-tab-content .cof-tabs[data-tabcontent=' + tab + ']').show();
   })
   $('.search-btn').click(function () {
      $('.search-popup').fadeIn();
   })
   $('.search-exit-btn').click(function () {
      $('.search-popup').fadeOut();
   })
    
   
   
   $('.countupper').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  

});
   
   
   $('#big-slider').owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 2500,
      autoplayTimeout: 5500,
      nav: false,
      responsiveClass: true,
      animateOut: 'fadeOut',
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }

   });
   $('#event-slider').owlCarousel({
      loop: true,
      items: 2,

      smartSpeed: 2500,
      autoplayTimeout: 3500,
      nav: false,
      margin: 40,


      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 2
         }
      }

   });
   $('#news-slider').owlCarousel({
      loop: true,
      items: 4,
      autoplay: true,
      smartSpeed: 2500,
      autoplayTimeout: 7500,
      nav: false,
      margin: 40,
      center: true,

      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 2
         },
         1000: {
            items: 4
         }
      }

   });
   $('#client-slider').owlCarousel({
      loop: true,
      items: 2,
      autoplay: false,
      smartSpeed: 2500,
      nav: false,
      margin: 40,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 2
         }
      }

   });

});
