// ==UserScript==
// @name           eRepublik - PM Autofill
// @include        http://www.erepublik.com/*/main/messages-inbox*
// @version        1.2.7
// @grant          none
// ==/UserScript==

function b64_to_utf8(str) {
  return unescape(decodeURIComponent(window.atob(str)));
}

var closeWindow = false;
var ajaxLoad = function (data) {
  data = data.replace('var href = window.location.href;', 'var href = "";');
  jQuery('.message_ajax_container').slideUp('fast', function () {
    jQuery('.message_ajax_container').html(data);
    jQuery('.message_ajax_container').slideDown('fast', function () {
      if (jQuery('.message_unread:first').length != 0) {
        jQuery(window).scrollTop(jQuery('.message_unread:first').offset().top);
      }
    });

    jQuery('#content form').submit(function (ev) {
      ev.preventDefault();
      handle_form(ev.target.children[0]);
    });
    ajaxify_messages();
    submit_form();

    jQuery('#citizen_subject').val(query.subject);
    jQuery('#citizen_message').val(query.content);

    if (closeWindow === true) {
      window.setTimeout(
        function () {
          window.close();
        },
        1000
      );
    } else if (query.auto === true) {
      jQuery(document).ready(function () {
        closeWindow = true;
        jQuery('.message_submit').trigger('click');
      });
    }
  });
}

if (window.location.hash) {
  var json = b64_to_utf8(window.location.hash.substr(1));
  var query = JSON.parse(json);
  jQuery.get('/' + erepublik.settings.culture + '/main/messages-compose/' + query.id, ajaxLoad);
}
