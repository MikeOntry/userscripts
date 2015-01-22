// ==UserScript==
// @name           eRepublik - Donate Autofill v2
// @match          http://www.erepublik.com/*/economy/donate-*/*
// @version        2.0
// @grant          none
// ==/UserScript==
 
if (!window.location.hash) return;
var hash = window.location.hash;
// #i2q5a10.auto
// for money donations
// - i can be anything but needs to be there. I'm just using 0
// - q1 for cc and q62 for gold
// - a allows decimals
// - .auto works the same
var pattern = /^#i([0-9]+)q([0-9]+)a([+-]?\d*\.?\d+)(\.auto)?$/;
var result = hash.match(pattern);
if (result === null) return;
var industry = result[1],
  quality = result[2],
  amount = result[3],
  auto = result[4] !== undefined,
  inputMoney = jQuery(document).find('input[currency="' + quality + '"]'),
  inputItems = jQuery(document).find('input[industry="' + industry + '"][quality="' + quality + '"]');
 
if (inputItems.length === 1) {
  var id = inputItems[0].id.replace('item_', '')
  jQuery('#donate_item_' + id).val(amount);
  jQuery('#buttonDonateItem_' + id)
    .css('background', 'url(data:image/gif;base64,R0lGODlhRgAgAIAAAP82NpEAACH5BAAAAAAALAAAAABGACAAAAJAhI+py+0Po5y02ouz3rz7D4biSJbmiabqyi5B0H4vHHMzXWc3nls735v8gr4bsfg6IpVFpvMJjUqn1Kr1is1CCwA7)')
    .css('color', 'white')
    .css('border-radius', '5px');
  if (auto === true) {
    jQuery('#buttonDonateItem_' + id).trigger('click');
  }
}
 
if (inputMoney.length === 1) {
  var id = inputMoney[0].id.replace('currency_', '')
  jQuery('#donate_money_' + id).val(amount);
  jQuery('#buttonDonateId_' + id)
    .css('background', 'url(data:image/gif;base64,R0lGODlhRgAgAIAAAP82NpEAACH5BAAAAAAALAAAAABGACAAAAJAhI+py+0Po5y02ouz3rz7D4biSJbmiabqyi5B0H4vHHMzXWc3nls735v8gr4bsfg6IpVFpvMJjUqn1Kr1is1CCwA7)')
    .css('color', 'white')
    .css('border-radius', '5px');
  if (auto === true) {
    jQuery('#buttonDonateId_' + id).trigger('click');
  }
}
