 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var footerOffset = $('footer').offset().top - window.innerHeight;
    
    if (scroll > footerOffset) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});