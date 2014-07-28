// Blogger JSON - Archive List
var postTitle = [],
    postUrl = [],
    postDate = [],
    postMonth = [],
    postYear = [],
    postYearMonth = [],
    postDateNum = [],
    monthArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], link, enclosure;

function loadArchive(json) {
    if ("entry" in json.feed) {
        var total = json.feed.entry.length;
        for (var i = 0; i < total; i++) {
            var entry = json.feed.entry[i],
                title = entry.title.$t,
                a = entry.published.$t.substring(0,10),
                b = entry.published.$t.substring(5,7),
                c = entry.published.$t.substring(8,10),
                pub = monthArray[parseInt(b,10) - 1] + " " + entry.published.$t.substring(0,4),
                date = "/" + entry.published.$t.substring(0,4) + "_" + b + "_01_archive.html";
            for (var j = 0; j < entry.link.length; j++) {
                if (entry.link[j].rel == "alternate") {
                    link = entry.link[j].href;
                    break;
                }
            }
            for (var k = 0; k < entry.link.length; k++) {
                if (entry.link[k].rel == "enclosure") {
                    enclosure = entry.link[k].href;
                    break;
                }
            }
            postTitle.push(title);
            postDate.push(a);
            postUrl.push(link);
            postYearMonth.push(pub);
            postYear.push(date);
            postDateNum.push(c);
        }
    }
    displayToc();
}

function displayToc() {
    var a = 0, b = 0, skeleton = "";
    while (b < postTitle.length) {
        temp = postYearMonth[b];
        skeleton += '<p><h4><a title="' + temp + '" href="' + postYear[b] + '" target="_blank">' + temp + '</a></h4>';
        skeleton += '<ul>';
        do {
            skeleton += '<li>';
            skeleton += '<a title="' + postTitle[a] + '" href="' + postUrl[a] + '" target="_blank">' + postTitle[a] + '</a> <time class="right">' + postDateNum[a] +'  ' + postYearMonth[a] +'</time>';
            skeleton += '</li>';
            a = a + 1;
        } while (postYearMonth[a] == temp);
        b = a;
        skeleton += '</ul>';
        if (b > postTitle.length) {
            break;
        }
    }
    document.getElementById('archive-container').innerHTML = skeleton;
}

(function() {
    var head = document.getElementsByTagName('head')[0],
        script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "/feeds/posts/summary/?alt=json-in-script&callback=loadArchive&max-results=9999";
    head.appendChild(script);
})();