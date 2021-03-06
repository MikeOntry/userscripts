// ==UserScript==
// @name           eRepublik - Donate Autofill
// @match          http://www.erepublik.com/*/economy/donate-items/*
// @version        1.2
// @grant          none
// ==/UserScript==

if (!window.location.hash) return;
var hash = window.location.hash;
// #i2q5a10.auto
var pattern = /^#i([0-9]+)q([0-9]+)a([0-9]+)(\.auto)?$/;
var result = hash.match(pattern);
if (result === null) return;
var industry = result[1],
  quality = result[2],
  amount = result[3],
  auto = result[4] !== undefined,
  input = jQuery(document).find('input[industry="' + industry + '"][quality="' + quality + '"]');

if (input.length === 1) {
  var id = input[0].id.replace('item_', '')
  jQuery('#donate_item_' + id).val(amount);
  jQuery('#buttonDonateItem_' + id)
    .css('background', 'url(data:image/gif;base64,R0lGODlhRgAgAIAAAP82NpEAACH5BAAAAAAALAAAAABGACAAAAJAhI+py+0Po5y02ouz3rz7D4biSJbmiabqyi5B0H4vHHMzXWc3nls735v8gr4bsfg6IpVFpvMJjUqn1Kr1is1CCwA7)')
    .css('color', 'white')
    .css('border-radius', '5px');
  if (auto === true) {
    jQuery('#buttonDonateItem_' + id).trigger('click');
  }
}
