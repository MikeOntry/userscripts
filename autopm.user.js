// ==UserScript==
// @name           eRepublik - PM Autofill
// @include        http://www.erepublik.com/*/main/messages-inbox*
// @version        1.3.0
// @grant          none
// ==/UserScript==

function b64_to_utf8(str) {
  return unescape(decodeURIComponent(window.atob(str)));
}

if (window.location.hash) {
  var pm = JSON.parse(b64_to_utf8(window.location.hash.substr(1))),
    $ = jQuery;
  pm.filled = false;
  history.pushState("", document.title, window.location.pathname + window.location.search); // remove hash from URL

  $(document).ready(function() {
    var a = $('a[href$="messages-compose/0"]');
    a.attr('href', a.attr('href').replace('0', pm.id));
    var intervalId = window.setInterval(function() {
      if ($('.message_unread').length > 0) {
        window.clearInterval(intervalId);
        window.close();
      } else if (!pm.filled && $('#message_form').length > 0) {
        $('#citizen_subject').val(pm.subject);
        $('#citizen_message').val(pm.content);
        pm.filled = true;
        if (pm.auto === true) {
          $('#message_form .message_submit').trigger('click');
        }
      }
    }, 50);
    a.trigger('click');
  });
}
