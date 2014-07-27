$(function() {
  $('#toggler').click(function() {
    $(this).toggleClass('active');
    $('#comments').slideToggle('slow');
    return false;
  });
});
$(function () {
    $('#sidebar-wrapper .widget-content').hide();
    $('#sidebar-wrapper h2:first').addClass('active').next().slideDown('slow', "easeOutBounce");
    $('#sidebar-wrapper h2').css('cursor', 'pointer').click(function () {
        if ($(this).next().is(':hidden')) {
            $('#sidebar-wrapper h2').removeClass('active').next().slideUp('slow', "easeOutBounce");
            $(this).toggleClass('active').next().slideDown('slow', "easeOutBounce");
        } else {
            $(this).removeClass('active').next().slideUp('slow', "easeOutBounce");
        }
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backtoTop').fadeIn();
        } else {
            $('#backtoTop').fadeOut();
        }
    });
    $('#backtoTop> img').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800).animate({
            scrollTop: 25
        }, 200).animate({
            scrollTop: 0
        }, 150).animate({
            scrollTop: 10
        }, 100).animate({
            scrollTop: 0
        }, 50);
    });
});