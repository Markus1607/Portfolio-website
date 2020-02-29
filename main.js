$(function() {
  $(function() {
    $(document).click(function(event) {
      $(".navbar-collapse").collapse("hide")
    })
  })

  //This is smooth scrolling to divs
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault()
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear",
      null
    )
  })

  //This will scroll to the about div
  $(".text img").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      500
    )
  })

  //this function is for events firing when scrolling
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop()
    var about = $("#about").offset().top
    if (wScroll >= about - 40 && $(this).width() > 360) {
      $(".navbar-default").css({
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#fff",
        transition: "0.2s ease-in-out",
      })
    } else {
      $(".navbar-default").css({
        backgroundColor: "rgba(0,0,0,0)",
      })
    }
    if (wScroll >= about - 320 && $(this).width() > 360) {
      $("#left-in, #right-in").css({
        display: "block",
      })
      $("#left-in").addClass("animated bounceInLeft")
      $("#right-in").addClass("animated bounceInRight")
    }
    if (wScroll >= about && $(this).width() > 360) {
      $(".fa").css({
        display: "block",
      })

      $(".fa").hover(function() {
        $(this).toggleClass("fa-hover")
      })
    }

    //stop animations on mobile
    if ($(this).width() <= 360 || $(this).width() === 414) {
      if (wScroll >= about - 40) {
        $(".navbar-header").addClass("mobile-nav")
      } else {
        $(".navbar-header").removeClass("mobile-nav")
      }

      $("#left-in, #right-in").css({
        display: "block",
      })

      $(".fa").css({
        display: "block",
      })
      $(".fa")
        .removeClass("fa-3x")
        .addClass("fa-2x")
    }
  }) // End of scrolling function
}) // End of main Jquery main function
