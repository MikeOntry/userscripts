// ==UserScript==
// @name          Gwardia
// @description   Twitter Gwardii
// @include       http://www.erepublik.com/*
// @version       1.2.2
// @grant         none
// ==/UserScript==

jQuery(document).ready(function () {
  var baseUrl = 'http://gwardia.org';
  var column = jQuery('#content div.column').eq(1);
  if (column.length == 0) return;
  column.prepend(
    '<div style="width:409px;height:200px;">' +
    '<iframe scrolling="no" style="border:0;width:100%;height:100%;" src="' + baseUrl + '/feed"></iframe>' +
    '</div>'
  );
  jQuery.post(baseUrl + '/log', erepublik.citizen);
});
