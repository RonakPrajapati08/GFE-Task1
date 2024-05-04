$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 50,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".Testimonials").slick({
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 250,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".chodu").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 250,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// var btn = $("#Aenker");
// var btn1 = $("#Aenker1");

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 100) {
//     btn.addClass("show");
//   } else {
//     btn.removeClass("show");
//   }
// });

// btn.on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate({ scrollTop: 0 }, "100");
// });

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 100) {
//     btn1.addClass("show");
//   } else {
//     btn1.removeClass("show");
//   }
// });

// btn1.on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate({ scrollTop: 0 }, "300");
// });
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     { pageLanguage: "en" },
//     "google_translate_element"
//   );
// }

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}
