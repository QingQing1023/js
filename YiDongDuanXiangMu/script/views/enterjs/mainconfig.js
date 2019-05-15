require.config({
	paths:{
		jquery:"../../libs/jquery",
		swiper:"../../plugs/swiper.min"

	}
})
require(['jquery','swiper'],function(){
	var topSlider=new Swiper('#topSlider', {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: true
    });


})