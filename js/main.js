$(function () {
    $('input[type="text"], input[type="email"], input[type="tel"], textarea').focus(function () {
        if ($(this).val() == $(this).attr("title")) {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val($(this).attr("title"));
        }
    });


    $('.slider-content').slick({
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000

        }
    );

    var $tabItem = $('.main-tab-item');
    var $tabContent = $('.main-tab-content');
    var selectedStyle = 'selected';
    (function () {
        var ind = 0;
        $tabItem.each(function () {
            if ($(this).hasClass(selectedStyle)) {
                ind = $(this).index();
            }
        });
        $tabContent.hide().eq(ind).show();
    })();
    $tabItem.click(function () {
        var _ = $(this);
        var ind = _.index();

        if (!_.hasClass(selectedStyle)) {
            $tabItem.removeClass(selectedStyle);
            _.addClass(selectedStyle);
            $tabContent.hide().eq(ind).show();
        }
    });
    $('#feedback').click(function (e) {
        e.preventDefault();
        showPopup();
    });
    closePopup();

    function showPopup() {

        var popup = $('.popup');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        var winH = $(window).height();
        var winW = $(window).width();
        popup.css('display', 'block');

        var popupHeight = popup.height();
        if (popupHeight == 0) {
            popupHeight = 505;
        }
        popup.css('top', winH / 2 - popupHeight / 2);
        popup.css('left', winW / 2 - popup.width() / 2);
        $('.fade').css({'width': maskWidth, 'height': maskHeight}).fadeTo("slow", 0.6);
    }

    function closePopup() {
        $('.fade, .close').click(function () {
            $('.fade').fadeOut(500);
            $('div[class*="popup"]').hide();
        });
    }

    //$('.mobile-menu,.fade').click(function () {
    //    $('.fade').toggle();
    //    $('.navigation').toggle();
    //    $('.nav-link').toggleClass('mobile');
    //});


    //function resizeReservText() {
    //    var maxHeight = 0;
    //    var $item = $('.reservation-item ._description');
    //    $item.each(function () {
    //        $(this).height('auto');
    //        var $h = $(this).height();
    //        if ($h > maxHeight) {
    //            maxHeight = $h;
    //        }
    //    });
    //    $item.each(function () {
    //        var $h = $(this).height();
    //        if ($h < maxHeight) {
    //            $(this).height(maxHeight);
    //        }
    //    });
    //}
    //
    //$('.main-tab-item.reserv').click(function () {
    //    resizeReservText();
    //});


});



