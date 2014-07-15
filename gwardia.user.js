// ==UserScript==
// @name          Gwardia
// @description   Twitter Gwardii
// @include       http://www.erepublik.com/*
// @require       https://github.com/erpk/userscripts/raw/master/injection.user.js
// @version       1.2.1
// ==/UserScript==

function main() {
  if (!jQuery) return;
  jQuery(document).ready(function () {
    var baseUrl = 'http://gwardia.org';
    var column = jQuery('#content div.column').eq(1);
    if (column.length == 0) return;
    column.prepend(
      '<div style="width:409px;height:200px;">' +
      '<iframe scrolling="no" style="border:0;width:100%;height:100%;" src="' + baseUrl + '/feed"></iframe>' +
      '</div>'
    );
    var img = new Image();
    img.src = baseUrl + '/log?' + jQuery.param({
      citizenId: erepublik.citizen.citizenId,
      currentEnergy: erepublik.citizen.energy,
      remainingFood: erepublik.citizen.energyToRecover,
    });
  });
}

contentEval(main);
