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
    _0xd41ax1['fn']['bloggernotification'] = function (_0xd41ax2) {
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
            _0xd41ax6 = _0xd41ax5['find']('#bloggernotification'),
            _0xd41ax7 = _0xd41ax6['find']('.link'),
            _0xd41ax8 = _0xd41ax6['find']('#closebloggernotification'),
            _0xd41ax9 = _0xd41ax5['find']('#openbloggernotification'),
            _0xd41axa = {}, _0xd41axb = '',
            _0xd41axc = {}, _0xd41axd = '',
            _0xd41axe = function () {
                _0xd41axc[_0xd41axd] = _0xd41ax4['totalHeight'];
                _0xd41ax9['animate'](_0xd41axc, (_0xd41ax4['duration'] / 2), _0xd41ax4['easing']);
                _0xd41ax5['removeClass']('openbloggernotification');
            }, _0xd41axf = function () {
                _0xd41axc[_0xd41axd] = -Math['abs'](34 - _0xd41ax4['height']);
                _0xd41ax9['animate'](_0xd41axc, (_0xd41ax4['duration'] / 2), function () {
                    _0xd41ax10();
                });
            }, _0xd41ax10 = function () {
                _0xd41axa[_0xd41axb] = 0;
                _0xd41ax5['animate'](_0xd41axa, _0xd41ax4['duration'], _0xd41ax4['easing'], function () {
                    _0xd41ax5['addClass']('openbloggernotification');
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
            bloggernotificationExtras['multipleMessages']['init']();
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
    _0xd41ax1('#bloggernotification')['prepend']('<a style="margin-top:0px; margin-left:7px; color:#666666; float:left;" href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAZCAYAAACclhZ6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAASlSURBVFhH7ZdbiFV1FMYnr5lZFiZlFGVWSBFkSdRLUGFQkRYaYXaxm1FkVCQYBRnYQPgSPURo9RCGGEnzGEhZgeRkamg5RjVgF0ymi5WZmjP91lrfWXv/58zlCNGTP/j47/V9a+1z5uzrtB3jKOjr6ztOm/8PfODo3t7euazzWG/SegvrCLU4eNPRfHQz2RytoxUneOeQLWPdwLoL7UDr0N14I9VWQHY+uh3dix5A96OFaIE+ayaaoPbBofl0VMDgwf7D1J8odqiPsExU7OA9hH6PjgHZTH6R2hO8NcoHhZ4f0Up0gcaaIZyMii9ggywnqMV6zkKHIg2oOxU71EsUDQl9Paj4g6jfVDws9P7BMkejJYSnol+iNaDuZslTiHphJBV4KxRbPkt2S9C/i6X+Y62KpDXo/wddrvEKzJPQXvU51F0sefGyvdaDGvTMUnY829+G2zrMLPedA9uvyG4ZZrawlDcYzHHo+2gJqD9X3Mh/UuRQ70XjlTcdNQP/L/Q+6pRVgG+n9iTt46VwK/BeQHPRI2iT7AL8G20+wRuFaadVQp3XA9u3yU7wVim2+Q3hVpDvRNPVYvuYjQ4oTvDuU/6irATvDB8GyhHU70ZSgfe2Wiow7RxOqDfJP61/Ji6znHUS+Z9hBdR/o4HuWI+qpc5aZc+rdqiNC31QYJ+C93N0BNR7WPLaczC3RxxQ70NrUHH6GXgdGrO5q2QneKsVFxCNIbO7ZEK9wzLWpbIc6iNomg/WwHtNLQneJYoDjC0oUV/S8Fi60Zkaszl72Hpe4w7FTZB1REuyR/7jUSaH2e1UH6qB96ByR599g+IA41MLhoKeQ+hSjTjUdylO8K5R3ATZSrU51L/KL05Bavusc32oBl7T9QvzFAcYm8MfHHZkLNGIQz1fcYJX/lI1yN5Sm0PdI3+xLIf6MGr6Y4juiY4K+mYrDjC2okR9jqwGPVgna8zm/GEZUfKU4ibI7C5Xp1v+k1Em9lA8z4dq4NntOtFnX6k4wPjCggbU9hxZgH6QleAt1ZjNTUP2jpZQb1VcgH+9WupsUPaMaofaaHoHw9umFod6P5qs2A+d3cO/jjiwIWXPhVNBZg/QE5WPpP7Kgxp4z1regHoK+kZxgteufLmsBK84zajtrbsAb6PiAGMs2q3coe5SZi+h+2UneE/4MLC9QnYB/jtoEXoaFftvgD9zsH3gXYvs7cO+w8PooKIE7zH/Eg0wJiB7+CTU9q41Svkb4Vbg7UZjLaecyrbdSo8KZj62eYPtl2UnePbwtefcb+GUkNkDtPgXxL7MQE/W79A4y1lnyC7Av9N3AGy3y24ZZq7QuM2/KrtlmFmk8QpMO4z71ONQ25Hy68Kg/jCSCryNLP7Wymrvdx950AL05k3EoG46+kNB/4BvGbajKepJ8Oz8zENIfWskJfh5kVJOpF4fyeDQs0wjCd46xcNCr71hl6/+DQjH287QNrQd2TNnNQNj1NL45V9XTxf6EnXg5zOnAb69muwkS6gPoPXI/wfqD/5i9AGyo23/Wtt3sFesz1Aneg+1oxka+W/gwwb+VWrQY7fsi1mvY72a9WxFxxietrZ/AQpf5AYKWEjhAAAAAElFTkSuQmCC"/></a>');
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
    _0xd41ax1('#bloggernotificationWrap')['bloggernotification']({
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