$(function(){
  //This is smooth scrolling to divs
  $("a[href^='#']").on("click", function(e) {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500, "linear", function(){});

    e.preventDefault();
  });
	

//This will scroll to the about div
$(".text img").on("click", function(){
  $("html, body").animate({
    scrollTop: $("#about").offset().top
  }, 500);
})





//this function is for events firing when scrolling
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var about = $("#about").offset().top;
		var portfolio = $("#portfolio").offset().top;
	


    if(wScroll >= (about - 280)){
      $(".navbar-default").css({
        "backgroundColor": 'rgba(0,0,0,0.6)',
				"color": "#fff",
        "transition": "0.2s ease-in-out"
      });
    } else {
      $(".navbar-default").css({
        "backgroundColor": "rgba(0,0,0,0)"
      });
    }
		
		if(wScroll >= (about - 320)){
			$("#left-in").addClass("animated slideInLeft");
			$("#right-in").addClass("animated slideInRight")
		}else{
			$("#left-in").removeClass("animated slideInLeft");
			$("#right-in").removeClass("animated slideInRight");
			
		};
		
		
		if(wScroll >= 674){
			
			
			$("#portfolio figure").addClass("animated fadeInDown");
		}else {
			$("#portfolio figure").removeClass("animated fadeInDown");
		}
		
		

  }); // End of scrolling function
	
		
});// End of main Jquery main function
