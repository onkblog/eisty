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
(function (_0xd41ax1) {
    _0xd41ax1['fn']['nav'] = function (_0xd41ax2) {
        var _0xd41ax3 = {
            duration: 500,
            position: 'top',
            closeable: true,
            showAfter: 0,
            keepHidden: false,
            borderSize: 3,
            height: 40,
            easing: 'linear'
        }, _0xd41ax4 = _0xd41ax1['extend']({}, _0xd41ax3, _0xd41ax2);
        if (_0xd41ax4['easing'] == 'swing') {
            _0xd41ax4['easing'] = '';
        };
        _0xd41ax4['totalHeight'] = parseInt(_0xd41ax4['height'], 10) + parseInt(_0xd41ax4['borderSize'], 10);
        _0xd41ax4['duration'] = parseInt(_0xd41ax4['duration'], 10);
        _0xd41ax4['showAfter'] = parseInt(_0xd41ax4['showAfter'], 10) * 1000;
        var _0xd41ax5 = _0xd41ax1(this),
            _0xd41ax6 = _0xd41ax5['find']('#nav'),
            _0xd41ax7 = _0xd41ax6['find']('.link'),
            _0xd41ax8 = _0xd41ax6['find']('#close-nav'),
            _0xd41ax9 = _0xd41ax5['find']('#open-nav'),
            _0xd41axa = {}, _0xd41axb = '',
            _0xd41axc = {}, _0xd41axd = '',
            _0xd41axe = function () {
                _0xd41axc[_0xd41axd] = _0xd41ax4['totalHeight'];
                _0xd41ax9['animate'](_0xd41axc, (_0xd41ax4['duration'] / 2), _0xd41ax4['easing']);
                _0xd41ax5['removeClass']('open-nav');
            }, _0xd41axf = function () {
                _0xd41axc[_0xd41axd] = -Math['abs'](34 - _0xd41ax4['height']);
                _0xd41ax9['animate'](_0xd41axc, (_0xd41ax4['duration'] / 2), function () {
                    _0xd41ax10();
                });
            }, _0xd41ax10 = function () {
                _0xd41axa[_0xd41axb] = 0;
                _0xd41ax5['animate'](_0xd41axa, _0xd41ax4['duration'], _0xd41ax4['easing'], function () {
                    _0xd41ax5['addClass']('open-nav');
                });
            }, _0xd41ax11 = function () {
                _0xd41axa[_0xd41axb] = -_0xd41ax4['totalHeight'];
                _0xd41ax5['animate'](_0xd41axa, _0xd41ax4['duration'], function () {
                    _0xd41axe();
                });
            }, _0xd41ax12 = false;
        switch (_0xd41ax4['position']) {
        case 'top':
            _0xd41axb = 'marginTop';
            _0xd41axd = 'top';
            break;;
        case 'top_fixed':
            _0xd41axb = 'top';
            _0xd41axd = 'top';
            break;;
        case 'bottom_fixed':
            _0xd41axb = 'bottom';
            _0xd41axd = 'bottom';
            break;;
        };
        _0xd41ax5['detach']();
        _0xd41ax5['prependTo']('body')['css']({
            display: 'block'
        });
        if (_0xd41ax6['find']('.multiMessages')['length']) {
            navExtras['multipleMessages']['init']();
        };
        if (_0xd41ax12 && _0xd41ax4['keepHidden'] && _0xd41ax4['closeable']) {
            setTimeout(function () {
                _0xd41axe();
            }, _0xd41ax4['showAfter']);
        } else {
            setTimeout(function () {
                _0xd41ax10();
            }, _0xd41ax4['showAfter']);
        };
        _0xd41ax8['click'](function () {
            _0xd41ax11();
            setCookie();
        });
        _0xd41ax9['click'](function () {
            _0xd41axf();
            setCookie();
        });
        _0xd41ax7['click'](function () {
            _0xd41ax1['ajax']({
                type: 'post',
                data: 'click=true',
                success: function (_0xd41ax13) {}
            });
            return true;
        });
    };
})(window['jQuery']);
jQuery(document)['ready'](function (_0xd41ax1) {
    _0xd41ax1('#nav')['prepend']();
    if (!_0xd41ax1['easing']['hasOwnProperty']('easeOutBounce')) {
        _0xd41ax1['extend'](_0xd41ax1['easing'], {
            easeOutBounce: function (_0xd41ax14, _0xd41ax15, _0xd41ax16, _0xd41ax17, _0xd41ax18) {
                if ((_0xd41ax15 /= _0xd41ax18) < (1 / 2.75)) {
                    return _0xd41ax17 * (7.5625 * _0xd41ax15 * _0xd41ax15) + _0xd41ax16;
                } else {
                    if (_0xd41ax15 < (2 / 2.75)) {
                        return _0xd41ax17 * (7.5625 * (_0xd41ax15 -= (1.5 / 2.75)) * _0xd41ax15 + 0.75) + _0xd41ax16;
                    } else {
                        if (_0xd41ax15 < (2.5 / 2.75)) {
                            return _0xd41ax17 * (7.5625 * (_0xd41ax15 -= (2.25 / 2.75)) * _0xd41ax15 + 0.9375) + _0xd41ax16;
                        } else {
                            return _0xd41ax17 * (7.5625 * (_0xd41ax15 -= (2.625 / 2.75)) * _0xd41ax15 + 0.984375) + _0xd41ax16;
                        };
                    };
                };
            }
        });
    };
    _0xd41ax1('#main-nav')['nav']({
        position: 'top',
        showAfter: 0,
        keepHidden: true,
        duration: 300,
        closeable: true,
        height: 40,
        borderSize: 1,
        easing: 'swing'
    });
});