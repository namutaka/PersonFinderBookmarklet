((function () {
  var URL="http://japan.person-finder.appspot.com/results?subdomain=&role=seek&small=&style=&query="
  var link_tag = "<a target='pf' href='" + URL + "$1'>$1</a>"
  var run = function() {
    jQuery("#lhid_comments .gphoto-comment .gphoto-comment-content > div").each(function() {
      var com = jQuery(this);
      console.debug(com);
      var txt = com.html();
      console.debug(txt);
      var names = txt.replace(/\<wbr\>/g,"").split("<br>")
      linked_names = names.map(function(e) {
        return e.replace(/^([^(（]+)/, link_tag);
      });
      linked = linked_names.join("<br>")
      console.debug(linked);
      com.html(linked);
    });
  };

  if (typeof jQuery == 'undefined') {
    var e = document.createElement('script');
    e.setAttribute('language','JavaScript');
    e.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js');
    e.onload = run;
    document.body.appendChild(e);
  } else {
      run();
  }

})());

