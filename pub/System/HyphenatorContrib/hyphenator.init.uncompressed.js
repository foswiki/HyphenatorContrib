"use strict";
jQuery(function($) {
  var doneInit = false,
    opts = {
      classname: 'hyphenate',
      donthyphenateclassname: 'donthyphenate',
      minwordlength: 6,
      intermediatestate: 'visible',
      displaytogglebox: false,
      hyphenchar: '&shy;',
      urlhyphenchar: '',
      remoteloading: true,
      orphancontrol: 2,
      defaultlanguage: 'en',
      onhyphenationdonecallback: function() {
        //$("."+opts.classname).addClass("jqInitedHyphenate");
        //$("#HyphenatorToggleBox").css({position:'fixed'});
        //console.log("done hyphenate");
      }
    };

  // any further run is initiated by async content later on
  $("."+opts.classname+":not(.jqInitedHyphenate)").livequery(function() {
    var $this = $(this);
    $this.addClass("jqInitedHyphenate");
    if(!doneInit) {
      doneInit = true;
      Hyphenator.config(opts);
      Hyphenator.run();
    }
  });

});
