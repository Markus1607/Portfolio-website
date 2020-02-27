$(function() {
  //autoplay video
  $("#myVideo")[0].autoplay = true

  // if ($("#myVideo")[0].play) {
  //   location.reload()
  // }

  //This is smooth scrolling to divs
  $("a[href^='#']").on("click", function(e) {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear",
      function() {}
    )
    e.preventDefault()
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

    if (wScroll >= about - 40) {
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

    if (wScroll >= about - 320) {
      $("#left-in, #right-in").css({
        display: "block",
      })
      $("#left-in").addClass("animated bounceInLeft")
      $("#right-in").addClass("animated bounceInRight")
    }

    if (wScroll >= about + 15) {
      $(".fa").css({
        display: "block",
      })
      $(".fa").addClass("animated bounceInUp")
      $(".fa").hover(function() {
        $(this)
          .removeClass("animated bounceInUp")
          .toggleClass("fa-hover")
      })
    }
  }) // End of scrolling function
}) // End of main Jquery main function
