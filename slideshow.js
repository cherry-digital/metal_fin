$('.slideshow-references').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-references",
    appendDots: ".slideshow-dots-references",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
    }
        ]
});

$('.slideshow-eqiupment').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-eqiupment",
    appendDots: ".slideshow-dots-eqiupment",
    autoplay: true,
    autoplaySpeed: 3000
});

$('.slideshow-car').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-car",
    appendDots: ".slideshow-dots-car",
    autoplay: true,
    autoplaySpeed: 3000
});

$('.slideshow-small-refrences').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-small-references",
    appendDots: ".slideshow-dots-small-references",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
    }
        ]
});

$('.slideshow-photogallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-photogallery",
    appendDots: ".slideshow-dots-photogallery",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
    }
        ]
});

$('.slideshow-clients').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-clients",
    appendDots: ".slideshow-dots-clients",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
    }
        ]
});
