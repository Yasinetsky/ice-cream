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
    arrows: false, // не показувати стрілки
    dots: false, //  показувати точки індикатори
    dotsClass:'slick-dots', // назва класу для точок
    ade: fade,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
});