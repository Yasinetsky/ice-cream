$('.slideshow').slick({
    draggable: true,
    touchMove:true,
    fade: true,
    cssEase: 'linear',
    arrows: false, // не показувати стрілки
    dots: true, // показувати точки індикатори
    dotsClass: 'slick-dots', // назва класу для точок
});

$('.gallery__slider').slick({
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // не показувати стрілки
    dots: false, // показувати точки індикатори
    dotsClass: 'slick-dots', // назва класу для точок
});