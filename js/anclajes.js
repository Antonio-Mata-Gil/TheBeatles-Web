$('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    
    var $target = $(this.hash);
    var positionTarget = $target.offset().top;

    $('html, body').animate({scrollTop: positionTarget}, 2000);
});
