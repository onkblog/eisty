// Komentar
$(function() {
  $('#toggler').click(function() {
    $(this).toggleClass('active');
    $('#comments').slideToggle('slow');
    return false;
  });
});
// Accordion
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
// Back to top
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
    _0xd41ax1['fn']['kodnote'] = function (_0xd41ax2) {
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
            _0xd41ax6 = _0xd41ax5['find']('#kodnote'),
            _0xd41ax7 = _0xd41ax6['find']('.link'),
            _0xd41ax8 = _0xd41ax6['find']('#closekodnote'),
            _0xd41ax9 = _0xd41ax5['find']('#openkodnote'),
            _0xd41axa = {}, _0xd41axb = '',
            _0xd41axc = {}, _0xd41axd = '',
            _0xd41axe = function () {
                _0xd41axc[_0xd41axd] = _0xd41ax4['totalHeight'];
                _0xd41ax9['animate'](_0xd41axc, (_0xd41ax4['duration'] / 2), _0xd41ax4['easing']);
                _0xd41ax5['removeClass']('openkodnote');
            }, _0xd41axf = function () {
                _0xd41axc[_0xd41axd] = -Math['abs'](34 - _0xd41ax4['height']);
                _0xd41ax9['animate'](_0xd41axc, (_0xd41ax4['duration'] / 2), function () {
                    _0xd41ax10();
                });
            }, _0xd41ax10 = function () {
                _0xd41axa[_0xd41axb] = 0;
                _0xd41ax5['animate'](_0xd41axa, _0xd41ax4['duration'], _0xd41ax4['easing'], function () {
                    _0xd41ax5['addClass']('openkodnote');
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
            kodnoteExtras['multipleMessages']['init']();
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
    _0xd41ax1('#kodnote')['prepend']();
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
    _0xd41ax1('#kodbar')['kodnote']({
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
// Recent Post with Thumbnail
function dropdownposts(json) {
    var entry = json.feed.entry;
    for (var i = 0; i < numposts; i++) {
        var posturl;
        for (var j = 0; j < entry[i].link.length; j++) {
            if (entry[i].link[j].rel == 'alternate') {
                posturl = entry[i].link[j].href;
                break;
            }
        }
        for (var l = 0; l < entry[i].link.length; l++) {
            if (entry[i].link[l].rel == "replies" && entry[i].link[l].type == "text/html") {
                cmnum = entry[i].link[l].title.split(" ")[0];
                break
            }
        }

        var poststitle = entry[i].title.$t,
            postdate = entry[i].published.$t.substring(0, 10),
            postdate = postdate.replace(/-/g, "/");

        if ("media$thumbnail" in entry[i]) {
            postimg = entry[i].media$thumbnail.url;
        } else {
            postimg = pBlank;
        }
        document.write('<li><img src="' + postimg + '" class="rp-thumb" alt="thumb" />');
        document.write('<strong><a href="' + posturl + '">' + poststitle + '</a></strong><span class="footer-outer"><span class="itp">' + postdate + '</span><span class="cm"> - ' + cmnum + ' ' + cmtext + '</span></span></li>');
    }
}

// Recent Comment
function dropdowncomment(json) {
    var entry, commurl, commsum, lihatkomentar;
    for (var i = 0; i < numcomment; i++) {
        entry = json.feed.entry[i];
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                commurl = entry.link[k].href;
                break
            }
        }

        if ("content" in entry) {
            commsum = entry.content.$t;
        } else if ("summary" in entry) {
            commsum = entry.summary.$t;
        } else {
            commsum = "";
        }

        var re = /<\S[^>]*>/g;
        commsum = commsum.replace(re, "");
        if (commsum.length > cmsumm) {
            commsum = commsum.substring(0, cmsumm) + "...";
        }

        document.write('<li>');
        document.write('<strong><a rel="nofollow" href="' + commurl + '">' + entry.author[0].name.$t + ':</a></strong> <span>' + commsum + '</span>');
        document.write('</li>');
    }
}