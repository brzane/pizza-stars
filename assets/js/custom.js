
jQuery(function($){


  
  /* FIXED NAVBAR */
  
  jQuery(window).bind('scroll', function(){
    if (jQuery(window).scrollTop() > 200) {
        jQuery('.mu-main-navbar').addClass('navbar-bg');
        jQuery('.navbar-brand').addClass('navbar-brand-small');        
      } else {
          jQuery('.mu-main-navbar').removeClass('navbar-bg');          
          jQuery('.navbar-brand').removeClass('navbar-brand-small');          
      }
  });
  
  /* TOP SLIDER (SLICK SLIDER)*/   

    jQuery('.mu-top-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,     
      autoplay: true,
      fade: true,
      cssEase: 'linear'
    });

  /* DATEPICKER */   
    jQuery('#datepicker').datepicker();

  /* CHEF SLIDER (SLICK SLIDER)*/  

    jQuery('.mu-chef-nav').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  /*  6. TESTIMONIAL SLIDER (SLICK SLIDER)*/

    jQuery('.mu-testimonial-slider').slick({
      dots: true,      
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 500,      
      cssEase: 'linear'
    });       

  /* MENU SMOOTH SCROLLING */

      // Cache selectors
      var lastId,
      topMenu = $(".mu-main-nav"),
      topMenuHeight = topMenu.outerHeight()+13,
      // All list items
      menuItems = topMenu.find('a[href^=\\#]'),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

      // Bind click handler to menu items
      // so we can get a fancy scroll animation
      menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
        jQuery('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 1500);           
         jQuery('.navbar-collapse').removeClass('in');  
        e.preventDefault();
      });

      // Bind to scroll
      jQuery(window).scroll(function(){
         // Get container scroll position
         var fromTop = $(this).scrollTop()+topMenuHeight;
         
         // Get id of current scroll item
         var cur = scrollItems.map(function(){
           if ($(this).offset().top < fromTop)
             return this;
         });
         // Get the id of the current element
         cur = cur[cur.length-1];
         var id = cur && cur.length ? cur[0].id : "";
         
         if (lastId !== id) {
             lastId = id;
             // Set/remove active class
             menuItems
               .parent().removeClass("active")
               .end().filter("[href=\\#"+id+"]").parent().addClass("active");
         }           
      })

  /* HOVER DROPDOWN MENU */
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

  /*  SCROLL TOP BUTTON */

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     
    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  /* PRELOADER */

   jQuery(window).load(function() {     
      jQuery('#aa-preloader-area').delay(300).fadeOut('slow');    
    })

 /* Send RESERVATION DATA  */
 $('#reservationForm').on('submit', (e) =>{
   e.preventDefault();
   let that= $('#reservationForm'),
       url = that.attr('action'),
       type = that.attr('method'),
       data={};
       that.find('[name]').each(function(index) {
         let that = $(this),
         name= that.attr('name'),
         value = that.val();
         data[name]=value;
       });
       console.log(data);
       $.ajax({
      type:type,
      // url:url,
      data:data,    
      success: function (response) {
        // console.log(response)
      }

    });
    return false;
 });
 
 /* SEND CONTCAT DATA */

  $('#contactForm').on('submit', (e) =>{
    e.preventDefault();
    let that= $('#contactForm'),
        url = that.attr('action'),
        type = that.attr('method'),
        data={};
        that.find('[name]').each(function(index) {
          let that = $(this),
          name= that.attr('name'),
          value = that.val();
          data[name]=value;
        });
        console.log(data);
        $.ajax({
       type:type,
       // url:url,
       data:data,    
       success: function (response) {
        //  console.log(response)
       }
 
     });
     return false;
  });
});