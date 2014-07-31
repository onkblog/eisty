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
    _0xd41ax1('#bloggernotification')['prepend']('<a style="margin-top:0px; margin-left:7px; color:#666666; float:left;" href="/"><img src="data:image/png;base64,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"/></a>');
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