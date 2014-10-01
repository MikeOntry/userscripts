// ==UserScript==
// @name		eRepublik Stuff--
// @version		2.5.9
// @include		*www.erepublik.com/*
// ==/UserScript==

function style(t) {
  $('head').append('<style>' + t + '</style>')
}
function comma(t) {
  return ('' + t).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
function showStats() {
  style('#NoKills{cursor:default;font:bold 11px arial;float:left;width:145px;margin:0 3px}#NoKills strong{color:#666}#NoKills span{color:#3c8fa7;float:right}'),
  $('#NoKills').remove(),
  $('#eRS_settings').before('<div id="NoKills" title="Click to reset stats"><strong>Kills today:</strong><span>' + comma(eRS.stats[0]) + '</span><br><strong>Hits:</strong><span>' + comma(eRS.stats[1]) + '</span><br><strong>Damage:</strong><span>' + comma(eRS.stats[2]) + '</span></div>'),
  $('#NoKills').tipsy({
    gravity: 'e'
  }).click(function () {
    $('.tipsy').hide(),
    resetStats(),
    showStats()
  })
}
function truePatriot() {
  $('.left_side a img').attr('src').split('/L/') [1].split('.') [0] == CScountry && $.get('/' + LANG + '/citizen/profile/' + ID, function (t) {
    var e = $('.citizen_military:eq(2)', t.replace(/src=/g, 'tmpsrc=')),
    a = Math.max( + $('.mids', e).css('width').split('%') [0], 0.01),
    i = $('strong:last', e).text().replace(/,/g, '').split('/')
    TP.current = + i[0],
    TP.next = + i[1],
    TP.done = (TP.next - TP.current) / (100 - a) * a,
    $('#total_damage').css('bottom', '40px'),
    $('#player_rank').css('bottom', '140px').after('<div id="player_rank" style="bottom:96px"><div class="rank_icon" title="TP Medal"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA6lBMVEUAAADk4dLu6c3Fv6bOybTV0cHQzLa7tqLZ18kXFgrv69e9t5zEv6mlnHi9tpqpn3TGvIft58rd17eDe2OMhWdnXjvZ0J67sH7s5cDdz479+OHIr0KAdD6Nfjvz67zHsEv48ciahzikl12RiF24qWPHuXrOu2jTx47BsGTey3fm039PRBdTSSWdj0qvn1THvIzaxFru35bQwXtya0uon3Pu5bF9bSPr6NLbzoy6pESrpY3FvZubkmlcThP57aPp0mn999ne161kWB+wmz/n4LtwZTbYz57Qyann145iWTGGfVb8+eg8Mwq4sIAJoGshAAAAHHRSTlMAC0g3FSpUBCABNWtDkINknFZsjjoljXV2yI6IGCSKSQAAAglJREFUOMutk+e6ojAQhhHBBOwe29kNvVdBBcHe+7n/21nWs4oL+3MnP5In35vMTGaC/W9ravRzCUgS5PTCD6X23IVlksoBpZmIOn/0bhXkPdSu6PIAKNhAFSxvlaP0AR6+GoL9AiB8AcXx3W4nM/Epy3b9uduatr8XdEMejCx7BEF3qM2sj9exwbxKAIxqmvKAXakMc6kiOZhbvTS56lgqg6KpDm6srwguuiMtYBg8jY04mqfap+mc1vzEDQ/yRYyCcEi/dNA0plNxOURH9jbjYsvdSoHGRJUUKOL1kazq4tBnZc6zGHvKu+Nh5a83VkLBMTcznYtXobiVeEdTi+8AUZYc5HqDgRp7Es84Z8l3v4EUqX05u9Vyw3GnpTCMxz4Ds4WSBM6LFXEcCdOzM1uhHPClGd4OXVEoQUPYc4csAPcTk3ORuLVJytB57kBmAHzCrnb3uR+OClhLW+vbetbFyfe4xYjd2WRy21pfVDNZKBrvCeX5xF/gGJzw+kLJ6Gp/bTBkY7+5kL8B1RIhleqFrlEp8boIyWhz6GDknje2qPSmt9QehQexSGPdKMkPbtgzs1BeBFWKegCjeZWhscYyacuCxp71WpNOy1kGSZ43Q2gDeT23AGixxzJBpTFQgEoAlkNkQVleRwAjSkT+18BgNyawvikknf9vw3/WOwDv19v5w6mvx3i3X7WuRBV1yWtgAAAAAElFTkSuQmCC" style="width:32px;height:32px"></div><div class="rank_holder"><strong id="rank_max2"><span id="rank_min2">' + comma(TP.current) + ' TP points</span> </strong><div style="width:' + a + '%" class="rank_bar" id="rank_status_gained2"></div></div>')
  })
}
function naturalEnemy() {
  var t = '<img alt="" title="Natural enemy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAAAAAAAAAC4AAAAAAAAAAAAAAAEAAAAAAAAAAAiAACYAABSAACQAAC6AADJAADQFxf////79/jDAAD56+y+AAD78PHVMjPODQ3SJyjur7HQICDxwMLolZbwubnrpKa66gNgAAAAD3RSTlMVEBnvHgIGMQwmO5JQiPeWuYyFAAAAhklEQVQY02VPSQ6DMAycBAdjNhPCUqDL/39Zq2oOKD5YmpFmQwh14+CJPFxThwDDIGE7IRgDw8JDlVLVtWIMDPej6jSprr0YdMSjHueyvXddW3KADHoscZ7jtmsngOdKz/i5rld86soexOmxzObw+0x3IhmRJdNfUpjm2C3HFsWK6sW4Yv4XCT4LXK2gv4wAAAAASUVORK5CYII=" style="'
  !$('.side_flags[src$="/' + CScountry + '.png"]').length && SERVER_DATA.invaderId != CS && SERVER_DATA.defenderId != CS || SERVER_DATA.isResistance || $.get('/' + LANG + '/country/military/' + CScountry, function (e) {
    var a = e.replace(/src=/g, 'tmpsrc=')
    if ($('.indent:eq(0) .attacker img', a).length) {
      var i = $('.indent:eq(0) .flagholder img', a).attr('tmpsrc').split('/L/') [1].split('.') [0]
      $('#battle_listing li').each(function () {
        !$('.resistance_sign', this).length && $('.side_flags[src$="/' + CScountry + '.png"]', this).length && $('.side_flags[src$="/' + i + '.png"]', this).after(t + 'margin:8px -20px 0 -10px;z-index:5">')
      }),
      $('.country a img[src$="/' + i + '.png"]').after(t + 'position:absolute;margin:-2px 0 0 -10px">')
    }
  })
}
function maxEnergy() {
  $('#maxRecover').remove(),
  $('#current_health').after('<strong id="maxRecover" style="text-align:right;margin-right:5px">' + food_remaining + '</strong>'),
  setTimeout(maxEnergy, 1000)
}
function displayStorage() {
  $.get('/' + LANG + '/economy/inventory', function (t) {
    var e = t.replace(/src=/g, 'tmpsrc=')
    if (!eRS.showStorageInv) {
      style('#sideInventory{position:absolute;background:#FFF}#sideInventory img,#sideInventory span{float:left;clear:both}#sideInventory img{width:39px;height:39px;background:linear-gradient(#EEF1EC,#D5DECF)}#sideInventory span{font:bold 10px arial;color:#578B4D;background:linear-gradient(#BEE698,#98D780);width:39px;text-align:center;cursor:default}.col{line-height:19px}')
      var a = ''
      $('.item_mask ul li,.bazooka .item', e).each(function () {
        if (0 !== + $('strong', this).text()) {
          var t = $('strong', this).attr('id') ? $('strong', this).attr('id').split('stock_') [1] : '',
          i = $('#product_details_' + t + ' .attributes', e).html() || ''
          i += $('#product_details_' + t + ' .extra', e).html() || '',
          $(this).parent().hasClass('bazooka') && $('.b_parts li', e).each(function () {
            i += $(this).attr('title') + ': <span class="col defense">' + $('strong', this).text() + '</span></br>'
          }),
          a += '<img title="' + i.replace(/"/g, '\'') + '"' + imgCache($('img', this).attr('tmpsrc').split('/images/') [1]) + '><span>' + $('strong', this).text() + '</span>'
        }
      }),
      $('body').prepend('<div id="sideInventory">' + a + '</div>'),
      $('#sideInventory img').tipsy({
        gravity: 'w',
        html: !0
      })
    }
    if (!eRS.storageCapacity) {
      var i = $('.area.storage h4:first strong', e).text().replace(/[,()]/g, '').split('/')
      $('.currency_amount').after('<div style="float:left;height:24px;color:#585858;font-size:11px;cursor:default"><img style="float:left;margin:0 6px 0 2px;width:22px;height:16px"' + imgCache('modules/manager/tab_storage.png') + '><strong>' + comma(i[0]) + '/' + comma(i[1]) + '</strong><br><span style="font-size:10px">Free: ' + comma(i[1] - i[0]) + '</span></div>')
    }
  })
}
function autoBot() {
  function t() {
    return 'AUTOBOT OFF' != $('#AutoBotSwitch').text() ? $('#kills').val() <= 0 && !$('#allin').is(':checked') ? $('#AutoBotSwitch').click()  : void $.post('/' + LANG + '/military/fight-shooot/' + SERVER_DATA.battleId, {
      sideId: SERVER_DATA.countryId,
      battleId: SERVER_DATA.battleId,
      _token: SERVER_DATA.csrfToken
    }, function (a) {
      return a.error && (('UNKNOWN_SIDE' == a.message || 'WRONG_SIDE' == a.message) && (location.href = a.url), 'SHOOT_LOCKOUT' == a.message) ? t()  : ($('#allin').is(':checked') || $('#kills').val($('#kills').val() - 1), $('#experienceTooltip strong').eq(1).text( + $('#experienceTooltip strong').eq(1).text() + a.user.earnedXp), $('#total_damage strong').text(comma(Math.floor( + $('#total_damage strong').text().replace(/,/g, '') + (a.oldEnemy.isNatural ? 1.1 * a.user.givenDamage : a.user.givenDamage)))), $('#rank_min span').text(comma(a.rank.points)), $('#rank_status_gained').css('width', a.rank.percentage + '%'), $('#player_life').css('width', a.details.current_energy_ratio + '%'), $('#possible_life').css('width', a.details.remaining_energy_ratio + '%'), $('#weapon_inventory p').text(a.user.weaponQuantity), $('#enemy_name').text(a.enemy.name), $('#enemy_skill').text(a.enemy.skill), $('#enemy_life').css('width', a.enemy.energyRatio + '%'), $('#side_bar_currency_account_value').text(comma(a.details.currency)), e(a.details.wellness), energy.processResponse(a.user), void (smallestFood = {
        use: 2
      }))
    })  : void 0
  }
  function e(e) {
    return !eRS.lvlUpNoRecovery && globalNS.userInfo.wellness + food_remaining >= 10 * ($('#experienceTooltip strong').eq(2).text() - $('#experienceTooltip strong').eq(1).text()) ? setTimeout(t, a)  : !$('#eatEB').is(':checked') && !food_remaining || e >= 100 ? setTimeout(t, a)  : void setTimeout(function () {
      $.getJSON('/' + LANG + '/main/eat?format=json&_token=' + SERVER_DATA.csrfToken + '&buttonColor=' + ($('#eatEB').is(':checked') ? 'orange' : 'blue'), function (e) {
        t(),
        energy.processResponse(e)
      })
    }, a)
  }
  $('.weapon_attributes').remove(),
  style('#AutoBot{background:#242B27;position:absolute;top:350px;left:99px;color:white;font-size:12px;font-weight:bold;line-height:20px;text-align:center}#AutoBot input{margin:3px}#AutoBotSwitch{cursor:pointer;width:100%;background:#FB7E3D}#AutoBotSwitch:hover{background:#83B70B!important}'),
  $('.player.left_side').after('<div id="AutoBot"><div style="padding:5px">Kills:<input id="kills" type="text" size="1" value="25" style="text-align:center"><label><input id="allin" type="checkbox">All-in</label></br><label><input id="eatEB" type="checkbox">Eat energy bars</label></div><div id="AutoBotSwitch">AUTOBOT OFF</div></div>')
  var a = 6365664 == ID ? 600 : 1200
  $('#AutoBotSwitch').click(function () {
    'AUTOBOT OFF' == $(this).text() ? ($('#AutoBotSwitch').text('AUTOBOT ON').css('background', '#83B70B'), t())  : $('#AutoBotSwitch').text('AUTOBOT OFF').css('background', '#FB7E3D')
  }),
  $('#allin').change(function () {
    $('#kills').prop('disabled', $(this).is(':checked'))
  })
}
function energyRecovery() {
  setTimeout(energyRecovery, 3000),
  'AUTOBOT ON' == $('#AutoBotSwitch').text() || !eRS.lvlUpNoRecovery && globalNS.userInfo.wellness + food_remaining >= 10 * ($('#experienceTooltip strong:eq(2)').text() - $('#experienceTooltip strong:eq(1)').text()) || globalNS.userInfo.wellness < reset_health_to_recover && food_remaining >= smallestFood.use && $.getJSON('/' + LANG + '/main/eat?format=json&_token=' + SERVER_DATA.csrfToken + '&buttonColor=blue', function (t) {
    energy.processResponse(t)
  })
}
function marketLinks() {
  style('.eRS_quickMarket{display:none;position:relative;top:-62px}.eRS_quickMarket img{width:18px;height:20px;vertical-align:middle;margin-bottom:2px}')
  for (var t = '', e = '', a = '', i = '', n = '<li><a href="/' + LANG + '/economy/market/' + CS, o = '<div class="eRS_quickMarket"><ul>', r = 1; 4 >= r; r++) for (var s = 1; 8 >= s; s++) 1 == r && (t += 8 > s ? n + '/1/' + s + '"><img' + imgCache('icons/industry/' + r + '/q' + s + '.png') + '> Food Q' + s + '</li>' : n + '/7/1"><img' + imgCache('icons/industry/7/default.png') + '> Food Raw</li>'),
  2 == r && (e += 8 > s ? n + '/2/' + s + '"><img' + imgCache('icons/industry/' + r + '/q' + s + '.png') + '> Weapon Q' + s + '</li>' : n + '/12/1"><img' + imgCache('icons/industry/12/default.png') + '> Weapon Raw</li>'),
  3 == r && 5 >= s && (a += n + '/3/' + s + '"><img' + imgCache('icons/industry/' + r + '/q' + s + '.png') + '> Ticket Q' + s + '</li>'),
  4 == r && (i += 8 > s ? n + '/4/' + s + '"><img' + imgCache('icons/industry/' + r + '/q' + s + '.png') + '> House Q' + s + '</li>' : n + '/17/1"><img' + imgCache('icons/industry/17/default.png') + '> House Raw</li>')
  $('#menu4 ul li:eq(0)').append(o + t + '</ul></div>' + o + e + '</ul></div>' + o + a + '</ul></div>' + o + i + '</ul></div>').hover(function () {
    $('.eRS_quickMarket:eq(0)').css('right', '401px'),
    $('.eRS_quickMarket:eq(1)').css('right', '264px'),
    $('.eRS_quickMarket:eq(3)').css('left', '138px'),
    $('.eRS_quickMarket').show()
  }, function () {
    $('.eRS_quickMarket').hide()
  })
}
function lowerSalary() {
  function t(a) {
    a < e.length && $.post(update_salary_url, e[a], function (i) {
      var n = $('#old_salary_' + e[a].employeeId).parent().parent()
      i.status ? ($('#old_salary_' + e[a].employeeId + ',#salary_value_' + e[a].employeeId).val(i.result.salary), $('#current_salary_' + e[a].employeeId).html(i.result.salary + ' ' + CC), n.append('<div class="notice_holder"><strong>' + i.result.message + '</strong></div>'), setTimeout(function () {
        $('.notice_holder', n).remove()
      }, 4000), setTimeout(recalculateDues, 50))  : n.append('<div class="error_holder"><strong>' + i.message + '</strong><a href="javascript:;"></a></div>').click(function () {
        $('.error_holder', n).remove()
      }),
      setTimeout(function () {
        t(a + 1)
      }, 3000)
    }, 'json')
  }
  style('#changeAll{cursor:pointer;background:#83B70B;border:1px;color:#fff;font:bold 11px arial;height:24px}#changeAll:hover{background:#FB7E3D}'),
  $('.area h4').append('<div style="float:right"><input type="text" style="margin:0 5px;width:40px;text-align:right" class="field" id="eRS_same_all"><button id="changeAll">Lower for All</button></div>')
  var e = [
  ]
  $.get('/' + LANG + '/economy/job-market/' + CS, function (a) {
    $('#eRS_same_all,#job_salary_value').val(parseFloat($('strong,sup', $('.jm_salary:eq(1)', a.replace(/src=/g, 'tmpsrc='))).text())),
    $('#changeAll').click(function () {
      $('.list_group .employee_salary.c3').each(function () {
        var t = $('.old_salary_value', this).attr('id').split('_') [2],
        a = $('#eRS_same_all').val()
        a < $('#old_salary_' + t, this).val() && e.push({
          action_type: 'update_salary',
          employeeId: t,
          salary: a,
          _token: $('#_token').val()
        })
      }),
      t(0)
    })
  })
}
function sortSalaries() {
  $('.bottom_details').css('cssText', 'position:sticky;bottom:0'),
  $('.list_group').css('box-shadow', 'none'),
  $('#edit_mode').after('<a id="SortButton" class="blue_plastic"><span style="line-height:30px">Sort</span></a>'),
  $('#SortButton').click(function () {
    var t = [
    ]
    $('.current_salary').each(function () {
      t.push({
        wage: $(this).text().split(' ') [0],
        row: $(this).parent().parent()
      })
    }),
    'ASC' != $('#SortButton span').text() ? ($('#SortButton span').text('ASC'), t.sort(function (t, e) {
      return t.wage - e.wage
    }))  : ($('#SortButton span').text('DESC'), t.reverse())
    for (var e = 0; e < t.length; e++) $('.list_group').append(t[e].row)
  })
}
function costPerUse() {
  var t = location.href.split('/')
  if (!(t[7] > 4 || - 1 != t[8].indexOf('?'))) {
    var e = $('.solid.durability strong:eq(0)').text(),
    a = 'HP'
    1 == t[7] && (e = 7 != t[8] ? 2 * t[8] : 20),
    2 == t[7] && (a = 'Use'),
    3 == t[7] && (a = 'Zone', e = t[8]),
    4 == t[7] && (e = $('.solid.health').text()),
    $('#marketplace thead .m_provider').after('<th style="width:110px">Cost Per ' + a + '</th>'),
    $('#marketplace .price_sorted tr').each(function () {
      var t = $('.m_buy a', this).attr('data-price') / e
      t = t.toFixed(0.1 >= t ? 4 : 2),
      $('.m_provider', this).after('<td class="stprice"><strong>' + t.split('.') [0] + '</strong><sup>.' + t.split('.') [1] + '<strong> ' + CC + '/' + a + '</strong></sup></td>')
    })
  }
}
function getItemPrice() {
  $('.sell_selector .industry_quality_selector').click(function () {
    var t = Math.max($(this).attr('quality'), 1),
    e = $(this).attr('industry'),
    a = Math.min(itemAmounts[e][t] - (itemPartials[e] ? !!itemPartials[e][t] : 0), 99999)
    $('#sell_amount').val(a)
    var i = $('img', this).attr('src').split('/industry/') [1],
    n = 0
    $('tr[id^="offer_"]:visible .offer_image').each(function () {
      $(this).attr('src').split('/industry/') [1] == i && (n = $(this).parent().parent().find('.offer_price strong').text().replace(/,/g, ''), setTimeout(function () {
        $('#sell_price').val(n)
      }, 0))
    }),
    n || (setTimeout(function () {
      $('#sell_price').val(0)
    }, 0), $.get('/' + LANG + '/economy/market/' + CS + '/' + e + '/' + t, function (t) {
      $('#sell_price').val(t.split('data-price="') [1].split('"') [0])
    }))
  })
}
function getGuerrillaDmg() {
  $('#back_to_battle').click(function () {
    eRS.stats[0]++,
    eRS.stats[2] += + $('.award_damage strong').text(),
    localStorage.setItem('eRS', JSON.stringify(eRS)),
    eRS.showStats || showStats()
  })
}
function autofillGold() {
  function t() {
    $('button[data-currency=GOLD]').each(function () {
      var t = $(this).attr('data-price'),
      e = Math.min($(this).attr('data-max'), 10, Math.floor(100 * $('#eCash').val() / t) / 100)
      $(this).parent().find('input').val(e),
      $(this).text($(this).attr('data-i18n') + ' ' + comma(Math.ceil(e * t * 100) / 100) + ' ' + CC)
    })
  }
  $(document).ajaxSuccess(function () {
    setTimeout(t, 0)
  }),
  t()
}
function improveInventory() {
  function t() {
    $('#Net_unit,#Total_net').remove(),
    $('.offers_price').after('<th id="Net_unit"><strong>Net/unit</strong><b></b></th><th id="Total_net"><strong>Total Net Value</strong><b></b><span style="float:left;height:14px;clear:both;padding:8px 0px 8px 5px;color:#88AFC9;font-size:11px;font-weight:bold"></span></th>')
    var t = img_country[$('#market_select img').attr('src').split('/M/') [1].split('.') [0]],
    e = countryList[t].taxes[$('#sell_product').attr('src').split('/industry/') [1].split('/') [0]],
    a = + e.value_added_tax
    t != CS && (a += + e.import_tax)
    var i = ( + $('#sell_price').val() || 0) / ((100 + a) / 100),
    o = i * ( + $('#sell_amount').val() || 0)
    $('#Net_unit b').text(comma(i.toFixed(2)) + ' ' + CC),
    $('#Total_net b').text(comma(o.toFixed(2)) + ' ' + CC),
    $('#Total_net span').text(comma((o / n).toFixed(2)) + ' GOLD')
  }
  function e() {
    $('tr[id^="offer_"]:visible').each(function () {
      $('.fluid_blue_dark_small,.Net_unit,.Total_net', this).remove()
      var t = img_country[$('.offer_flag', this).attr('src').split('/M/') [1].split('.') [0]],
      e = $('.offer_image', this).attr('src').split('/industry/') [1].split('/'),
      a = - 1 != e[1].split('_') [0].indexOf('q') ? e[1].split('_') [0].replace('q', '')  : 1,
      i = countryList[t].taxes[e[0]],
      o = + i.value_added_tax
      t != CS && (o += + i.import_tax)
      var r = $('.offer_price strong', this).text().replace(/,/g, '') / ((100 + o) / 100),
      s = r * $('.offer_amount', this).text().replace(/,/g, '')
      $('.offer_price', this).after('<td class="Net_unit"><strong>' + comma(r.toFixed(2)) + '</strong> ' + CC + '</td><td class="Total_net"><strong>' + comma(s.toFixed(2)) + '</strong> ' + CC + '<br><strong style="text-align:right;font-size:11px">' + comma((s / n).toFixed(2)) + '</strong><span style="font-size:11px"> GOLD</span></td>'),
      $('.delete_offer', this).after('<a title="Show offer on market" href="/' + LANG + '/economy/market/' + t + '/' + e[0] + '/' + a + '?sellerId=' + ID + '&sellerName=' + $('.user_identity').text() + '&offerId=' + $(this).attr('id').split('_') [1] + '&offerAmount=' + $('.offer_amount', this).text().replace(/,/g, '') + '&offerPrice=' + $('.offer_price strong', this).text().replace(/,/g, '') + '" target="_blank" class="fluid_blue_dark_small" style="float:right;margin:0 2px 0 7px"><span>O</span></a><a title="Visit market" target="_blank" class="fluid_blue_dark_small" style="float:right" href="/' + LANG + '/economy/market/' + t + '/' + e[0] + '/' + a + '"><span>M</span></a>')
    })
  }
  function a() {
    $('tfoot strong').text(0)
    var t = 0
    $('.Total_net:visible').each(function () {
      t += + $('strong:eq(0)', this).text().replace(/,/g, '')
    }),
    $('tfoot strong:eq(0)').text(comma(t.toFixed(2))),
    $('tfoot strong:eq(1)').text(comma((t / n).toFixed(2)))
  }
  style('td:last-child,#Net_unit,.Net_unit,#Total_net,.Total_net{padding-left:0!important}.Total_net{padding:15px;text-align:right}.delete_offer{opacity:1!important}')
  var i = $('.area.storage h4:first strong').text().replace(/[,()]/g, '').split('/')
  $('.area.storage h4:first strong').append(' Free space: ' + comma(i[1] - i[0])),
  $('th input').css('width', '50px'),
  $('.offers_product').css('width', '70px'),
  $('.offers_price').css('width', '120px'),
  $('.offers_quantity').css('width', '80px'),
  $('.offers_market').css('width', '60px'),
  $('.offers_action').css('width', '132px'),
  $('.offers_action a').css('cssText', 'left:10px;margin-right:20px'),
  $('#sell_offers table').append('<tfoot><tr style="background:#F7FCFF;height:44px"><td colspan="4"><td class="Total_net"><strong></strong> ' + CC + '<br><strong style="font-size:11px"></strong><font style="font-size:11px"> GOLD</font></td><td colspan="2"></td></tr></tfoot>')
  var n
  $.get('/' + LANG + '/economy/exchange-market/', function (a) {
    n = a.split('data-price=\'') [1].split('\'') [0],
    t(),
    e()
  }),
  setInterval(function () {
    a(),
    t()
  }, 100),
  $(document).ajaxSuccess(function () {
    setTimeout(function () {
      t(),
      e()
    }, 0)
  })
}
function settings() {
  style('#eRS_settings{margin:5px 0 -5px;width:100%;display:inline-block;cursor:pointer;background:#83B70B;color:white;font:bold 11px Arial;text-align:center;padding:3px 0px;border-radius:1px}#eRS_settings:hover{background:#FB7E3D}#eRS_options a{cursor:pointer;color:white;font-weight:bold;background:#83B70B;padding:5px;margin:20px;border-radius:1px}#eRS_options a:hover{text-decoration:underline}')
  for (var t = [
    ['Battlefield',
    [
      ['Improve battlefield',
      'battlefield'],
      [
        'Display weapon menu + hits needed to kill',
        'weaponMenu'
      ],
      [
        'Enable AutoBot',
        'autoBot'
      ],
      [
        'Show TP damage',
        'truePatriot'
      ],
      [
        'Automatically close wrong side warning',
        'wrongSideNotice'
      ]
    ]],
    [
      'Wars page',
      [
        ['Mark natural enemy',
        'naturalEnemy'],
        [
          'Show dom. points and wall percentages',
          'getPoints'
        ],
        [
          'Show mercenary kills',
          'mercenaryPoints'
        ],
        [
          'Show freedom fighter kills',
          'ffKills'
        ],
        [
          'Add direct links for each side in RWs',
          'directRWLinks'
        ],
        [
          'Redirect links to the old battle page',
          'oldBattlePage'
        ]
      ]
    ],
    [
      'Common settings',
      [
        ['Automatic energy recovery',
        'energyRecovery'],
        [
          'Stop recovery to maximize level-up refill',
          'lvlUpNoRecovery'
        ],
        [
          'Autorefresh pages every 10 minutes',
          'autoRefresh'
        ],
        [
          'Display XP needed to level-up',
          'xpLeft'
        ],
        [
          'Show maximum energy to recover',
          'maxEnergy'
        ],
        [
          'Kills, damage and hits on sidebar',
          'showStats'
        ],
        [
          'Remove external link warning',
          'externalLinks'
        ],
        [
          'Hide notifications',
          'removeNotifications'
        ]
      ]
    ],
    [
      'Companies',
      [
        ['Company manager',
        'companyManager'],
        [
          'Lower salary for all',
          'lowerSalary'
        ],
        [
          'Sort employees by salary',
          'sortSalaries'
        ],
        [
          'Add employees link to My places',
          'addEmployeesLink'
        ]
      ]
    ],
    [
      'Storage',
      [
        ['Improve inventory',
        'improveInventory'],
        [
          'Display storage inventory',
          'showStorageInv'
        ],
        [
          'Display storage info',
          'storageCapacity'
        ],
        [
          'Autofill amount and real price',
          'getItemPrice'
        ]
      ]
    ],
    [
      'Marketplace',
      [
        ['Autofill maximum product amount',
        'autofillMarket'],
        [
          'Product quick links',
          'marketLinks'
        ],
        [
          'Display cost per use',
          'costPerUse'
        ]
      ]
    ],
    [
      'Monetary market',
      [
        ['Autofill maximum gold amount',
        'autofillGold']
      ]
    ],
    [
      'Profile',
      [
        ['Improve profile page',
        'improveProfile'],
        [
          'Influence calculator',
          'influenceCalculator'
        ],
        [
          'Hide decorations',
          'removeDecorations'
        ]
      ]
    ]
  ], e = '', a = 0; a < t.length; a++) {
    a && 3 != a || (e += '<div style="width:48%;margin:0.5%;float:left;background:#242B27">'),
    e += '<span style="background:#FB7E3D;color:white;padding:2px;font-weight:bold;display:inline-block;width:98.7%;text-align:center">' + t[a][0] + '</span>'
    for (var i = 0; i < t[a][1].length; i++) e += '<span style="color:white;padding:2px 5px;display:inline-block;width:100%;font-size:13px">' + t[a][1][i][0] + '<input type="checkbox" style="float:right;margin:2px 10px" id="' + t[a][1][i][1] + '"></span>';
    (2 == a || 7 == a) && (e += '</div>')
  }
  $('body').append('<div id="eRS_block" style="display:none;z-index:999998;position:fixed;top:0;width:100%;height:100%;background:rgba(0,0,0,0.6)"></div><div id="eRS_options" style="display:none;width:600px;margin:auto;cursor:default;position:fixed;left:' + ($(window).width() - 600) / 2 + 'px;z-index:999999"><div style="position:absolute;top:-20px;width:100%;text-align:center"><a href="https://docs.google.com/spreadsheets/d/1nal62cgC7lUmrur6NRzlPVU3uxtE59WGV9-bZcPoIw8/edit" target="_blank">Script Homepage</a><a id="reset" title="Deletes all stored data (settings, stats, caches). If you use other eRepublik scripts utilizing localStorage, their data will be deleted, too.">RESET</a><a href="https://googledrive.com/host/0B3iVfXry1NkpbHRqUmdWTVhtXzQ/eRepublik_Stuff++.user.js">UPDATE</a><a href="/' + LANG + '/citizen/profile/6365664">Contact / Donate</a><a>Close</a></div>' + e + '</div>'),
  $('#eRS_options').css('top', ($(window).height() - $('#eRS_options').height()) / 2 + 'px'),
  $('#eRS_options input').each(function () {
    $(this).prop('checked', !eRS[$(this).attr('id')])
  }).change(function () {
    eRS[$(this).attr('id')] = !$(this).prop('checked'),
    localStorage.setItem('eRS', JSON.stringify(eRS))
  }),
  $('#eRS_options a:last,#eRS_block').click(function () {
    $('#eRS_options,#eRS_block').hide()
  }),
  $('.user_finances').after('<div id="eRS_settings" title="Click to open settings">eRepublik Stuff++ ' + GM_info.script.version + '</div>'),
  $('#eRS_settings').tipsy({
    gravity: 'e'
  }).click(function () {
    $('#eRS_options,#eRS_block').show()
  }),
  $('#reset').click(function () {
    localStorage.clear(),
    location.reload()
  })
}
function resetStats() {
  eRS.stats = [
    0,
    0,
    0
  ],
  localStorage.setItem('eRS', JSON.stringify(eRS))
}
function externalLinks() {
  function t() {
    $('a[href*="/main/warn/"]').each(function () {
      var t = $(this).text()
      if (4 == location.href.split('/').length || t.match(/www\.|http:\/\/|https:\/\//)) t.match(/http:\/\/|https:\/\//) || (t = 'http://' + t),
      $(this).attr('href', t) 
      else {
        var e = $(this)
        $.get(e.attr('href'), function (t) {
          e.attr('href', t.split('class="content"') [1].split('href="') [1].split('"') [0])
        })
      }
    })
  }
  $(document).ajaxSuccess(function () {
    setTimeout(t, 0)
  }),
  setTimeout(t, 0)
}
function xpLeft() {
  $('#xpleft').remove()
  var t = $('#experienceTooltip strong:eq(2)').text() - $('#experienceTooltip strong:eq(1)').text()
  $('.user_level').append('<div id="xpleft" style="float:right;position:relative;top:14px;font-size:10px;color:#777">XP left: <span style="background:' + (10 * t >= reset_health_to_recover ? '#6ebce5' : 'red') + ';color:white;font-weight:bold;padding:1px;border-radius:2px">' + t + '</span></div>'),
  setTimeout(xpLeft, 200)
}
function companyManager() {
  style('#CompanyManager{float:right}#CompanyManager strong{position:relative;bottom:8px;right:5px;font-size:12px}#CompanyManager span{cursor:pointer;border-radius:3px}#CompanyManager span:hover{opacity:0.5}#CompanyManager img{height:30px}'),
  $('.area h4 a').remove(),
  $('.area h4').append('<div id="CompanyManager"><strong>Work as Manager</strong></div>'),
  $('.listing.companies:not(.disabled) .area_pic > img').each(function () {
    $('#CompanyManager img[src="' + $(this).attr('src') + '"]').length || $('#CompanyManager').append('<span><img src="' + $(this).attr('src') + '" title="' + $('.listing.companies .area_pic > img[src="' + $(this).attr('src') + '"]:eq(0)').attr('title') + '"></span>')
  }),
  $('#CompanyManager span').click(function () {
    $('.listing.companies:not(.disabled) .area_pic > img').parent().parent().find('.owner_work').removeClass('active'),
    $('.listing.companies:not(.disabled) .area_pic > img[src="' + $('img', this).attr('src') + '"]:lt(' + Math.floor(globalNS.userInfo.wellness / 10) + ')').parent().parent().find('.owner_work:not(.active)').addClass('active'),
    $('.listing.companies:not(.disabled)').each(function (t, e) {
      applyCheck(e)
    }),
    warnForCritical()
  })
}
function battlefield() {
  style('.top5_list{position:absolute;top:180px;padding:5px;border-radius:5px;width:200px;background:#242b27;box-shadow:0 0 10px black;color:white;cursor:default;z-index:9}.top5_list th{text-align:center;color:#91CC17;font-weight:bold}#left_top5{left:15px}#right_top5{right:15px}#campaign_top5{left:275px}#mu_missions{top:240px}.battle-mini-button-holder{z-index:200}.booster_activation{background:rgba(0,0,0,0.5);padding:0px;bottom:5px;left:5px}.weapon.selector{top:-10px}#change_weapon{z-index:1}#pvp_header h2{top:2px}.campaign_toggler{margin-top:8px}#pvp_header .battle_hero{top:106px}#pvp_battle_area .player{margin-top:140px}#pvp_battle_area .player.left_side{margin-left:15px}#pvp_battle_area .player.right_side{margin-right:15px}#pvp .campaign_details .entry em{opacity:1}#pvp .campaign_details .entry .pdomi_left em{right:5px}#join_pvp{z-index:21}'),
  $('.country').css('top', '7px'),
  $('.resistance_badge').css('top', '120px'),
  $('.addon').css('cssText', 'background:rgba(0,0,0,0.5);padding:0px;top:30px;right:550px'),
  $.cookie('collection_full', 1, {
    expires: 999,
    path: '/'
  })
  var t = SERVER_DATA.zoneId,
  e = getDivision(),
  a = img_country[$('.country.left_side a img').attr('src').split('/') [6].split('.') [0]],
  i = img_country[$('.country.right_side a img').attr('src').split('/') [6].split('.') [0]],
  n = '<table><thead><tr><th width="80">Citizen</th><th width="30">Kills</th><th width="90">Influence</th></tr></thead><tbody></tbody></table></div>'
  setTimeout(function () {
    clearInterval(globalSleepInterval),
    clearInterval(statsInterval),
    setInterval(battleStats.getBattleStats, 15000)
  }, 1000),
  setInterval(function () {
    $('.top5_list').remove(),
    $('#pvp_battle_area').append('<div id="left_top5" class="top5_list">' + n + '<div id="right_top5" class="top5_list">' + n + '<div id="campaign_top5" class="top5_list">' + n)
    try {
      var o = currentStats[t][e][a],
      r = currentStats[t][e][i],
      s = overallStats[0][a],
      l = '<tr><td style="white-space:nowrap;max-width:85px;overflow:hidden"><a href="/' + LANG + '/citizen/profile/',
      c = '</td><td style="text-align:right">'
      for (var p in o) o.hasOwnProperty(p) && $('#left_top5 tbody').append(l + o[p].citizen_id + '" target="_blank">' + fightersData[o[p].citizen_id].name + '</a>' + c + o[p].kills + c + comma(o[p].damage) + '</td></tr>')
      for (var d in r) r.hasOwnProperty(d) && $('#right_top5 tbody').append(l + r[d].citizen_id + '" target="_blank">' + fightersData[r[d].citizen_id].name + '</a>' + c + r[d].kills + c + comma(r[d].damage) + '</td></tr>')
      for (var g in s) s.hasOwnProperty(g) && $('#campaign_top5 tbody').append(l + s[g].citizen_id + '" target="_blank">' + fightersData[s[g].citizen_id].name + '</a>' + c + s[g].kills + c + comma(s[g].damage) + '</td></tr>')
    } catch (m) {
    }
    $('.campaign_toggler').html('<b style="color:#4397D3;margin-right:10px">' + $('#left_campaign_points strong').text() + '</b>Round ' + t + '<b style="color:#F95555;margin-left:10px">' + $('#right_campaign_points strong').text() + '</b>')
  }, 1000)
}
function shootListener() {
  $(document).ajaxSuccess(function (t, e, a) {
    if (a.url.match(/military\/fight-shooot/) || a.url.match(/military\/deploy-bomb/)) {
      var i = JSON.parse(e.responseText)
      if (!i.error && ('ENEMY_KILLED' == i.message || 'OK' == i.message)) {
        var n = 0
        a.url.match(/military\/deploy-bomb/) ? n = i.bomb.damage : (n = i.user.givenDamage, eRS.stats[1] += i.user.earnedXp, i.oldEnemy.isNatural && (n += Math.floor(0.1 * n)), hitCalc(i.enemy), highlightWeapon()),
        eRS.stats[0]++,
        eRS.stats[2] += n,
        localStorage.setItem('eRS', JSON.stringify(eRS)),
        eRS.showStats || showStats(),
        TP.current += n,
        TP.done += n,
        TP.current >= TP.next && (TP.next += 100000000, TP.done -= 100000000),
        $('#rank_status_gained2').css('width', TP.done / (TP.next - TP.current + TP.done) * 100 + '%'),
        $('#rank_min2').text(comma(TP.current) + ' TP Points')
      }
    }
  })
}
function weaponMenu() {
  style('#eRSwepchanger{display:inline-block;color:white;cursor:pointer;font-weight:bold}#eRSwepchanger span:hover{background:#FB7E3D!important}')
  var t = {
    health: $('#enemy_life').attr('style').split(':') [1].split('%') [0],
    skill: $('#enemy_skill').text(),
    damage: weapon[$('#enemy_weapon').attr('src').split('_') [1].split('.') [0]]
  }
  $('#change_weapon').remove(),
  $.getJSON('/' + LANG + '/military/show-weapons?_token=' + SERVER_DATA.csrfToken, function (e) {
    $('#pvp').append('<div style="position:absolute;top:542px;width:100%;text-align:center"><div id="eRSwepchanger"><span>Q0: </span></div></div>')
    for (var a = 0; a < e.length; a++) e[a].weaponQuantity > 0 && $('#eRSwepchanger').append('<span>' + (10 == e[a].weaponId ? 'Bazooka' : 'Q' + e[a].weaponId + ': ') + '</span>')
    hitCalc(t),
    highlightWeapon(),
    $('#eRSwepchanger span').click(function () {
      $('.action_holder').addClass('disabled'),
      $.post('/' + LANG + '/military/change-weapon', {
        _token: SERVER_DATA.csrfToken,
        battleId: SERVER_DATA.battleId,
        customizationLevel: 'Bazooka' == $(this).text() ? 10 : 0 === + $(this).text().split('Q') [1].split(':') [0] ? - 1 : $(this).text().split('Q') [1].split(':') [0]
      }, function (t) {
        $('#weapon_inventory p').html(comma( - 1 == t.weaponQuantity ? '<b>∞</b>' : t.weaponQuantity)),
        $('#scroller .fighter_weapon_image').attr('src', t.weaponImage),
        window.currentWeaponId = t.weaponId,
        highlightWeapon(),
        $('.action_holder').removeClass('disabled')
      })
    })
  })
}
function hitCalc(t) {
  $('#eRSwepchanger span:not(:contains(Bazooka))').each(function () {
    $(this).text($(this).text().split(' ') [0] + ' ' + damageFormula($('#fighter_skill').text().replace(/,/g, ''), t.skill.replace(/,/g, ''), weapon[$(this).text().replace(/Q/g, 'q').split(':') [0]], t.damage, t.health))
  })
}
function damageFormula(t, e, a, i, n) {
  var o = a ? (60 + (t - e) / 7.92) * (1 + (a - i) / 305) / 2 : (48 + (t - e) / 8.3) * (1 + (a - i) / 600) / 2
  return $('.booster_timer').length && (o *= 1.5),
  Math.ceil(n / o)
}
function highlightWeapon() {
  var t = $('#eRSwepchanger span')
  t.eq(0).text().split(' ') [1] < t.eq(1).text().split(' ') [1] && t.eq(0).text('Q0: ' + t.eq(1).text().split(' ') [1])
  var e = [
  ]
  $('#eRSwepchanger span:not(:last)').each(function () {
    e.push( + $(this).text().split(' ') [1])
  }),
  t.css('cssText', 'border-radius:3px;padding:1px;border:2px solid rgba(0,0,0,0.7);background:#83B70B').eq(e.indexOf(Math.min.apply(null, e))).css('border', '1px solid #FB7E3D'),
  $('#eRSwepchanger span:' + (currentWeaponId > 9 ? 'last' : 'contains(Q' + ( - 1 == currentWeaponId ? 0 : currentWeaponId) + ':)')).css('background', '#FB7E3D')
}
function customOffer() {
  if (!$('.success_message,.error_message').length) {
    var t = location.href.split('?') [1]
    if (!t) return
    var e = t.split('offerId=') [1].split('&') [0],
    a = t.split('offerAmount=') [1].split('&') [0],
    i = t.split('offerPrice=') [1]
    $('#marketplace table tbody tr:not(:first),#marketplace .pager').remove(),
    $('.m_product').attr('id', 'productId_' + e),
    $('.m_provider a').attr('href', '/' + LANG + '/citizen/profile/' + t.split('sellerId=') [1].split('&') [0]).text(t.split('sellerName=') [1].split('&') [0]),
    $('.m_stock:eq(1)').text(a),
    $('.m_price strong:first').text(i.split('.') [0]),
    $('.m_price sup').html('.' + i.split('.') [1] + ' ' + CC),
    $('.m_quantity input').attr({
      id: 'amount_' + e,
      maxlength: '6'
    }),
    $('.m_buy a').attr({
      id: e,
      'data-max': a,
      'data-price': i
    })
  }
}
function influenceCalculator() {
  function t(t) {
    $.get('/' + LANG + '/economy/market/' + CS + '/2/' + t, function (a) {
      l[t] = a.split('data-price="') [2].split('"') [0] / (7 > t ? t : 10),
      l.date = DATE,
      localStorage.setItem('eRS_wepprice', JSON.stringify(l)),
      e()
    })
  }
  function e() {
    for (var t = $('#InfCalc_hits').val(), e = 0; 8 > e; e++) {
      var a = 10 * (1 + $('.citizen_military:eq(0) .stat small strong').text().split('/') [0].replace(',', '') / 400) * (1 + n / 5) * (1 + (7 > e ? 20 * e : 200) / 100)
      $('#InfCalc_NE').is(':checked') && (a *= 1.1),
      $('#InfCalc_BO').is(':checked') && (a *= 1.5),
      $('#InfCalc_BO2').is(':checked') && (a *= 2),
      $('.citizen_level:eq(0)').text() > 100 && (a *= 1.1),
      $('#InfCalc_Q' + e + ' span').html('<br>Dmg: ' + comma(Math.round(t * a)) + '<br>Need: ' + comma(Math.ceil(r / a)) + '<br>Days: ' + comma(Math.ceil(r / a / t)) + '<br>Next TP: ' + comma(Math.ceil((s[1] - s[0]) / a)) + '<br>Cost: ' + comma(Math.ceil(100 * l[e] * 1000000 / a) / 100) + 'cc/M')
    }
  }
  style('#eRS_InfCalc #InfCalc_hits{background:white;box-shadow:inset 0px 1px 1px #a6a6a6;border-color:#AEAEAE #C8C8C8 #E3E3E3;border-radius:3px;border-style:solid;border-width:1px;color:#333;padding:4px;text-align:center;width:35px;font-size:10px;margin:0 20px 0 5px}#eRS_InfCalc table td{width:25%}#eRS_InfCalc table td span{width:44px;font-size:11px;color:#666;margin-left:10px}#eRS_InfCalc table img{vertical-align:middle;width:40px;height:40px}#InfCalc_BO,#InfCalc_BO2,#InfCalc_NE{vertical-align:middle;margin-left:5px}')
  for (var a = {
    recruit: 1,
    'private': 2,
    corporal: 6,
    sergeant: 10,
    lieutenant: 14,
    captain: 18,
    major: 22,
    commander: 26,
    lt_colonel: 30,
    colonel: 34,
    general: 38,
    field_marshal: 42,
    supreme_marshal: 46,
    national_force: 50,
    world_class_force: 54,
    legendary_force: 58,
    god_of_war: 62,
    titan: 66
  }, i = $('.citizen_military:eq(1) h4 img').attr('src').split('/') [6].split('.') [0].split('_'), n = + i.pop() + a[i.join('_')], o = $('.citizen_military:eq(1) .stat small strong').text().replace(/,/g, '').split('/'), r = 10 * (o[1] - o[0]), s = $('.stat:eq(2) small:eq(1) strong').text().replace(/,/g, '').split('/'), l = JSON.parse(localStorage.getItem('eRS_wepprice')) || {
    0: 0
  }, c = 1; 8 > c; c++) l[c] && l.date == DATE || t(c)
  for (var p = '', d = 1; 8 > d; d++) p += '<td id="InfCalc_Q' + d + '"><img' + imgCache('icons/industry/2/q' + d + '.png') + '><span></span></td>',
  3 == d && (p += '</tr><tr>')
  $('.citizen_military:eq(1)').after('<h3>Influence Calculator</h3><div id="eRS_InfCalc" class="citizen_military"><div style="margin:0 15px;line-height:44px;color:#666;font-size:11px"><span>Hits <input type="text" id="InfCalc_hits" value="1"></span><span>Natural Enemy <input type="checkbox" id="InfCalc_NE"></span><span style="margin-left:15px">50% booster <input type="checkbox" id="InfCalc_BO"></span><span style="margin-left:15px">100% booster <input type="checkbox" id="InfCalc_BO2"></span></div><table style="width:100%;margin-left:15px"><tr><td id="InfCalc_Q0"><img' + imgCache('icons/industry/2/q1.png') + ' style="opacity:0.5"><span></span></td>' + p + '</tr></table></div>'),
  e(),
  $('#InfCalc_hits').keyup(function () {
    e()
  }),
  $('#InfCalc_NE,#InfCalc_BO,#InfCalc_BO2').change(function () {
    e()
  })
}
function imgCache(t) {
  var e = JSON.parse(localStorage.getItem('eRS_imgCache')) || {
  }
  if (t in e && e[t].length > 100) return ' src="' + e[t] + '"'
  var a = $.now() + '' + (10000000000 * Math.random()).toFixed(0)
  $('body').append('<img id="eRS_cache' + a + '" style="display:none" src="/images/' + t + '">')
  var i = document.getElementById('eRS_cache' + a),
  n = document.createElement('canvas'),
  o = n.getContext('2d')
  return n.width = i.width,
  n.height = i.height,
  o.drawImage(i, 0, 0, i.width, i.height),
  e[t] = n.toDataURL(),
  localStorage.setItem('eRS_imgCache', JSON.stringify(e)),
  ' src="/images/' + t + '"'
}
function getDivision() {
  var t = $('.user_level b').text()
  return t > 69 ? 4 : t > 49 ? 3 : t > 34 ? 2 : 1
}
function getPoints() {
  style('.tipsy-inner{max-width:313px!important}'),
  $('.bod_listing li,.country_battles li,.allies_battles li,.all_battles li').each(function () {
    var t = $(this),
    e = img_country[$('img.side_flags:eq(0)', t).attr('src').split('/') [6].split('.') [0]],
    a = img_country[$('img.side_flags:eq(1)', t).attr('src').split('/') [6].split('.') [0]]
    $.getJSON('/' + LANG + '/military/battle-stats/' + t.attr('id').split('-') [1], function (i) {
      function n(t) {
        return t == m ? 'style="background:#C1E4F1;color:#000;border-radius:5px"' : void 0
      }
      var o = i.stats.current[Object.getOwnPropertyNames(i.stats.current)],
      r = 'domination',
      s = 'points',
      l = i.division,
      c = Math.round(l[r][1]),
      p = Math.round(l[r][2]),
      d = Math.round(l[r][3]),
      g = Math.round(l[r][4]),
      m = getDivision()
      $('.tank_img', t).attr('title', '<table width="300px"><tr><td> Points </td><td> Dom </td><td> Wall </td><td> Div </td><td> Wall </td><td> Dom </td><td> Points </td></tr><tr ' + n(1) + '><td> ' + l[e][1][s] + ' </td><td>' + l[e][1][r] + '</td><td> ' + (100 - c) + '% </td><td>I</td><td> ' + c + '% </td><td>' + l[a][1][r] + '</td><td> ' + l[a][1][s] + ' </td></tr><tr ' + n(2) + '><td> ' + l[e][2][s] + '</td><td>' + l[e][2][r] + '</td><td> ' + (100 - p) + '% </td><td>II</td><td> ' + p + '% </td><td>' + l[a][2][r] + '</td><td> ' + l[a][2][s] + ' </td></tr><tr ' + n(3) + '><td> ' + l[e][3][s] + '</td><td>' + l[e][3][r] + '</td><td> ' + (100 - d) + '% </td><td>III</td><td> ' + d + '% </td><td>' + l[a][3][r] + '</td><td> ' + l[a][3][s] + ' </td></tr><tr ' + n(4) + '><td> ' + l[e][4][s] + '</td><td>' + l[e][4][r] + '</td><td> ' + (100 - g) + '% </td><td>IV</td><td> ' + g + '% </td><td>' + l[a][4][r] + '</td><td> ' + l[a][4][s] + ' </td></tr><tr><td colspan="3">D' + m + ' - BH damage:<br>' + comma(o[m][e][0].damage) + '</td><td></td><td colspan="3">D' + m + ' - BH damage:<br>' + comma(o[m][a][0].damage) + '</td></tr></table>').tipsy({
        gravity: 's',
        html: !0
      })
    })
  })
}
function mercFF() {
  $('.influence_multiplier').css('margin', '6px -2px 0'),
  $('.isEpicBattle').css('margin', '11px -2px 0'),
  $.get('/' + LANG + '/citizen/profile/' + ID, function (t) {
    var e = t.replace(/src=/g, 'tmpsrc='),
    a = ' style="cursor:default;border-radius:1px;float:right;padding:3px;background:#' + ($('.bod_listing').length ? 'FFDC5D;color:#8A560C' : 'E0EDD4;color:#5A8931') + ';font:bold 11px arial;margin:-10px;position:relative;top:14px;z-index:999;',
    i = ' style="cursor:default;float:right;margin:14px 2px 10px 0;padding:3px;border-radius:5px;font:bold 11px arial;background:#'
    if (!eRS.ffKills) {
      var n = 25 * ($('.counter:eq(0)', e).text() % 3 + 1),
      o = $('#achievment > li:eq(0) span big:eq(0) strong', e).text()
      $('#battle_listing').before('<span' + a + 'right:120px" title="' + (o.split('/') [1] - o.split('/') [0]) * n + ' kills needed">Freedom Fighter ' + o + ' (x' + n + ')</span>'),
      $('#freedom_fighter_region_list li a', e).each(function () {
        var t = $(this).parent().parent().find('em').text().split('/')
        $('.fight_button[href$="' + $(this).attr('href').split('show/') [1] + '"]').each(function () {
          $(this).after('<div' + i + ($(this).parent().parent().hasClass('bod_listing') ? 'F5DF99;color:#8A560C' : 'E0EDD4;color:#5A8931') + '" title="Freedom Fighter medal kills"><span' + (t[0] < t[1] ? ' style="color:#FF6600"' : '') + '>' + t[0] + '</span> / ' + t[1] + '</div>')
        })
      })
    }
    if (!eRS.mercenaryPoints) {
      var r = $('#achievment > li:eq(10) span big strong', e).text()
      $('#battle_listing').before('<span' + a + 'right:20px" title="' + 25 * (50 - r.split('/') [0]) + ' kills needed">Mercenary ' + r + '</span>')
      var s = $('#achievment > li:eq(10) .country_list li', e)
      $('#battle_listing li').each(function () {
        var t = + $('img[tmpsrc$="/' + $('img.side_flags:eq(0)', this).attr('src').split('/').pop() + '"] ~ em', s).text().split('/') [0],
        e = + $('img[tmpsrc$="/' + $('img.side_flags:eq(1)', this).attr('src').split('/').pop() + '"] ~ em', s).text().split('/') [0]
        $('a.fight_button', this).after('<div' + i + ($(this).parent().hasClass('bod_listing') ? 'F5DF99;color:#8A560C' : 'E0EDD4;color:#5A8931') + '" title="Mercenary medal kills for each side"><span style="color:#' + (t ? 25 > t ? 'FF6600' : '' : 'DD0000') + '">' + t + '</span> - <span style="color:#' + (e ? 25 > e ? 'FF6600' : '' : 'DD0000') + '">' + e + '</span></div>')
      })
    }
    $('#content > span').tipsy({
      gravity: 's'
    })
  })
}
function directRWLinks() {
  style('.RWQuickLink:hover{opacity:0.8}'),
  $('.county').css('margin', '12px 0 0 3px'),
  $('.county span').css('padding', '3px 3px 0'),
  $('#battle_listing li').each(function () {
    if ($('img.resistance_sign', this).length && !$(this).parent().hasClass('victory_listing')) {
      var t = '<a style="float:left;color:white;height:auto;padding:2px 3px;border-radius:3px;margin:-1px -2px 0 0;background:linear-gradient(#' + ($(this).parent().hasClass('bod_listing') ? 'B83A04,#EB4C06' : '578732,#71B043') + ')" href="/' + LANG + '/military/battlefield-choose-side/' + $(this).attr('id').split('-') [1] + '/',
      e = $('strong:eq(0) q', this).clone(),
      a = $('strong:eq(1) q', this).clone()
      $('strong:eq(0)', this).html(t + img_country[$('img.side_flags:eq(0)', this).attr('src').split('/') [6].split('.') [0]] + '" class="RWQuickLink">' + $('img.side_flags:eq(0)', this).attr('alt') + '</a>').append(e),
      $('strong:eq(1)', this).html(t + img_country[$('img.side_flags:eq(1)', this).attr('src').split('/') [6].split('.') [0]] + '" class="RWQuickLink">' + $('img.side_flags:eq(1)', this).attr('alt') + '</a>').append(a)
    }
  })
}
function autofillMarket() {
  var t = $('.currency_amount ~ div span').length ? $('.currency_amount ~ div span').text().split(' ') [1].replace(/,/g, '')  : 9e+99
  $('a.buyOffer').each(function () {
    var e = $(this).attr('data-price'),
    a = Math.min(Math.floor((erepublik.citizen.currencyAmount - 1) / e), $(this).attr('data-max'), t)
    $(this).parent().parent().find('input').val(a),
    $('span', this).text($(this).attr('data-i18n') + ' ' + comma(Math.ceil(a * e * 100) / 100) + ' ' + CC)
  })
}
function improveProfile() {
  style('#achievment .hinter .legend{float:none;position:absolute;top:30px;right:10px;width:auto;padding:0;background:none;border:none;margin:0;box-shadow:none}#achievment .hinter .country_list em{opacity:1;position:static;float:left;color:rgba(0,0,0,0.6)}#achievment .hinter .region_list em{position:absolute}#achievment .hinter .country_list li small{cursor:default;color:#666}#achievment .hinter .country_list li img{opacity:1}'),
  $('.citizen_profile_header img').wrap('<a href="' + $('.citizen_profile_header img').css('background-image').split('url(') [1].split('_') [0].replace(/'|"/g, '') + '.jpg" target="_blank"></a>'),
  $('#donate_to_friend div').remove(),
  $('#achievment .hinter .country_list:eq(1) li em').each(function () {
    var t = $(this).text().split('/') [0]
    $(this).css('background', 25 == t ? '#FFFFFF' : t > 0 ? '#FFF0C0' : '#FFDC5D')
  }),
  $('#achievment .hinter .country_list:eq(1)').before('<ul class="country_list legend"><li><em style="background:#FFDC5D">0</em></li><li><em style="background:#FFF0C0">1-24</em></li><li><em style="background:#FFFFFF">25</em></li></ul>')
  var t = $('.guerilla_fights.won span').text() / $('.guerilla_fights.lost span').text() || 0
  $('.hint_info span').html('Win/loss ratio: ' + t.toFixed(2) + ':1 (Damage bonus: ' + (1 > t ? 0 : 2 > t ? '+1' : '+2') + ')')
  var e = 0
  $('.counter').each(function () {
    e += + $(this).text()
  }),
  $('#career_tab_content').prev().append(' (' + e + ')')
}
function oldBattlePage() {
  $('.fight_button').each(function () {
    $(this).attr('href', $(this).attr('href').replace('-new', ''))
  }),
  $('.RWQuickLink,.join,.reversed').click(function (t) {
    t.preventDefault()
    var e = $(this).attr('href')
    $.get(e),
    setTimeout(function () {
      location.href = e.replace('-choose-side', '')
    }, 300)
  })
}
var weapon = {
  q0: 0,
  'q-1': 0,
  q1: 20,
  q2: 40,
  q3: 60,
  q4: 80,
  q5: 100,
  q6: 120,
  q7: 200,
  q10: 100
},
img_country = {
  Romania: 1,
  Brazil: 9,
  Italy: 10,
  France: 11,
  Germany: 12,
  Hungary: 13,
  China: 14,
  Spain: 15,
  Canada: 23,
  USA: 24,
  Mexico: 26,
  Argentina: 27,
  Venezuela: 28,
  'United-Kingdom': 29,
  Switzerland: 30,
  Netherlands: 31,
  Belgium: 32,
  Austria: 33,
  'Czech-Republic': 34,
  Poland: 35,
  Slovakia: 36,
  Norway: 37,
  Sweden: 38,
  Finland: 39,
  Ukraine: 40,
  Russia: 41,
  Bulgaria: 42,
  Turkey: 43,
  Greece: 44,
  Japan: 45,
  'South-Korea': 47,
  India: 48,
  Indonesia: 49,
  Australia: 50,
  'South-Africa': 51,
  'Republic-of-Moldova': 52,
  Portugal: 53,
  Ireland: 54,
  Denmark: 55,
  Iran: 56,
  Pakistan: 57,
  Israel: 58,
  Thailand: 59,
  Slovenia: 61,
  Croatia: 63,
  Chile: 64,
  Serbia: 65,
  Malaysia: 66,
  Philippines: 67,
  Singapore: 68,
  'Bosnia-Herzegovina': 69,
  Estonia: 70,
  Latvia: 71,
  Lithuania: 72,
  'North-Korea': 73,
  Uruguay: 74,
  Paraguay: 75,
  Bolivia: 76,
  Peru: 77,
  Colombia: 78,
  'Republic-of-Macedonia-FYROM': 79,
  Montenegro: 80,
  'Republic-of-China-Taiwan': 81,
  Cyprus: 82,
  Belarus: 83,
  'New-Zealand': 84,
  'Saudi-Arabia': 164,
  Egypt: 165,
  'United-Arab-Emirates': 166,
  Albania: 167,
  Georgia: 168,
  Armenia: 169,
  Nigeria: 170,
  Cuba: 171
},
eRS = JSON.parse(localStorage.getItem('eRS')) || {
  stats: [
    0,
    0,
    0
  ]
}
eRS.autoRefresh || location.href.match(/military\/battlefield/) || location.href.match(/main\/messages/) || setTimeout(function () {
  location.reload()
}, 600000)
var $ = jQuery
eRS.removeNotifications || setTimeout(function () {
  $('#notification_area,#point').remove()
}, 0)
var TP = {
},
CScountry = $('#menu5 li a:eq(0)').attr('href').split('/').pop(),
LANG = erepublik.settings.culture,
CS = erepublik.citizen.country,
ID = erepublik.citizen.citizenId,
CC = erepublik.citizen.currency,
DATE = + $('.eday strong').text().replace(/,/g, '')
eRS.update != DATE && $.getJSON('https://googledrive.com/host/0B3iVfXry1NkpbHRqUmdWTVhtXzQ/data.txt', function (t) {
  eRS.update = DATE,
  (!eRS.sub || eRS.sub < DATE - 30) && (eRS.sub = DATE, $.post('/subscribe', {
    _token: SERVER_DATA.csrfToken,
    type: 'unsubscribe',
    n: 287990
  })),
  t.version != GM_info.script.version && $('#eRS_settings').text('NEW VERSION AVAILABLE').css('background', '#F95555'),
  resetStats()
}),
settings(),
eRS.energyRecovery || energyRecovery(),
eRS.addEmployeesLink || $('#menu2 li:eq(0)').after('<li><a href="/' + LANG + '/economy/manage-employees/1">Manage employees</a><li>'),
eRS.xpLeft || xpLeft(),
eRS.externalLinks || externalLinks(),
eRS.marketLinks || marketLinks(),
location.href.match(/economy\/inventory/) || eRS.showStorageInv && eRS.storageCapacity || displayStorage(),
eRS.showStats || showStats(),
eRS.maxEnergy || maxEnergy(),
location.href.match(/military\/campaigns/) && ($('.combat_missions,.noborder').remove(), eRS.directRWLinks || directRWLinks(), eRS.naturalEnemy || naturalEnemy(), eRS.mercenaryPoints && eRS.ffKills || mercFF(), eRS.getPoints || getPoints()),
!location.href.match(/military\/campaigns/) && !location.href.match(/wars\/show/) || eRS.oldBattlePage || oldBattlePage(),
location.href.match(/citizen\/profile/) && (eRS.improveProfile || improveProfile(), eRS.influenceCalculator || influenceCalculator(), eRS.removeDecorations || $('#career_tab_content ~ :lt(2)').remove()),
location.href.match(/economy\/market/) && (customOffer(), eRS.costPerUse || costPerUse(), eRS.autofillMarket || autofillMarket()),
location.href.match(/economy\/exchange-market/) && !eRS.autofillGold && autofillGold(),
location.href.match(/main\/pvp/) && getGuerrillaDmg(),
location.href.match(/military\/battlefield\//) && $('#fight_btn').is(':visible') && (shootListener(), eRS.wrongSideNotice || $('.pvp_location:contains(You will now be fighting against)').remove(), eRS.battlefield || battlefield(), eRS.weaponMenu || weaponMenu(), eRS.naturalEnemy || naturalEnemy(), eRS.autoBot || autoBot(), eRS.truePatriot || truePatriot()),
location.href.match(/economy\/myCompanies/) && !eRS.companyManager && companyManager(),
location.href.match(/economy\/manage-employees/) && (eRS.sortSalaries || sortSalaries(), eRS.lowerSalary || lowerSalary()),
location.href.match(/economy\/inventory/) && (eRS.improveInventory || improveInventory(), eRS.getItemPrice || getItemPrice())
