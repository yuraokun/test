var icon = $(".responsive_nav i");

var body = $("body");
var width = body.outerWidth();
console.log(width);

if (width > 1030) {
  $(".main_nav2").css("display", "none");
} else {
}
$("h2").on("click", function() {
  $(this).css("background-color", "red");
});

var thisOffset;
$(window).on("load", function() {
  thisOffset = $(".introduction").get(0).offsetTop - 200;
});

$(window).scroll(function() {
  if ($(window).scrollTop() > thisOffset) {
    $(".main_logo").addClass("sticky");
    $(".responsive_nav").css("color", "#555");
  } else {
    // 特定の要素を超えていない
    $(".main_logo").removeClass("sticky");
    $(".responsive_nav").css("color", "#fff");
  }
});

$(".scroll_contact").on("click", function() {
  $("html, body").animate({ scrollTop: $(".contact").offset().top }, 1000);
});

$(".home").on("click", function() {
  $("html, body").animate({ scrollTop: $("header").offset().top }, 1000);
});

$(".about").on("click", function() {
  var about = $(".introduction").offset().top;

  if (icon.hasClass("fa-times")) {
    $("html, body").animate({ scrollTop: about - 150 }, 1000);
  } else {
    $("html, body").animate({ scrollTop: about }, 1000);
  }
});

$(".openings").on("click", function() {
  var opening = $(".opening").offset().top;

  if (icon.hasClass("fa-times")) {
    $("html, body").animate({ scrollTop: opening - 190 }, 1000);
  } else {
    $("html, body").animate({ scrollTop: opening }, 1000);
  }
});

$(".contacts").on("click", function() {
  var contact = $(".contact").offset().top;

  if (icon.hasClass("fa-times")) {
    $("html, body").animate({ scrollTop: contact - 190 }, 1000);
  } else {
    $("html, body").animate({ scrollTop: contact }, 1000);
  }
});

$(".workpoints").waypoint(
  function(direction) {
    $(".workpoints")
      .addClass("animated fadeIn")
      .css("opacity", 1);
  },
  { offset: "50%" }
);

// $(".responsive_nav").on("click", function() {
//   $(".main_nav").slideToggle(200);
// });

$(".responsive_nav").on("click", function() {
  var icon = $(".responsive_nav i");
  $(".main_nav2").slideToggle(200);

  if (icon.hasClass("fa-bars")) {
    icon.addClass("fa-times").removeClass("fa-bars");
  } else {
    icon.addClass("fa-bars").removeClass("fa-times");
  }
});
