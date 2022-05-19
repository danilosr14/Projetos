var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:800,
    autoplayHoverPause:true,
    responsive: {
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[800])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})