    $el = $(".external");
    $linkToUpdate = $(".js-link-to-update");

    $el.each(function(){
      $extLink = $(this).find(".link a").text();
      $(this).find(".link").remove();
      console.log($extLink);
      $(this).find($linkToUpdate).attr("href", $extLink);
    });

window.viewportUnitsBuggyfill.init();

$(function(){
    var disqus_div = $("#disqus_thread");
    if (disqus_div.size() > 0 ) {
        var ds_loaded = false,
            top = disqus_div.offset().top, // WHERE TO START LOADING
            disqus_data = disqus_div.data(),
            check = function(){
                if ( !ds_loaded && $(window).scrollTop() + $(window).height() > top ) {
                    ds_loaded = true;
                    for (var key in disqus_data) {
                        if (key.substr(0,6) == 'disqus') {
                            window['disqus_' + key.replace('disqus','').toLowerCase()] = disqus_data[key];
                        }
                    }

                    var dsq = document.createElement('script'); 
                    dsq.type = 'text/javascript';
                    dsq.async = true;
                    dsq.src = 'http://' + window.disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                }
            };

        $(window).scroll(check);
        check();
    }
});

$(function() {
    $('.read-time').each(function() {
      $(this).readingTime({
        readingTimeTarget: $(this),
        remotePath: $(this).attr('data-file'),
        remoteTarget: $(this).attr('data-target'),
        wordsPerMinute: 250,
        lessThanAMinuteString: '1 min',
      });
    });
  });

  $('article').readingTime({
    readingTimeTarget: $('.read-time'),
    wordCountTarget: $('.word-count'),
    wordsPerMinute: 250,
    lessThanAMinuteString: '1 min',
  });

  jQuery(".post-template .title").fitText(1.2); // Turn the compressor down (resizes less aggressively)


$(document).ready(function(){

  $('pre').each(function(i, e) {hljs.highlightBlock(e)});
  $('pre code').addClass('syntax');
  $(".post-content .content").fitVids();

});

/*

$("#search").ghostHunter({
    results         : "#results",
    onKeyUp         : true,
    zeroResultsInfo     : false
});*/

/* This is the code for the external link href swapper */