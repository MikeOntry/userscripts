// ==UserScript==
// @name          Employees Report
// @description   Export employees data to TSV
// @include       http://www.erepublik.com/*/economy/manage-employees/*
// @version       1.3
// @grant         none
// ==/UserScript==

/** PREPARE DATA **/
var listings = jQuery('div.area.employees > div.listing_holder > div.list_group > div.listing');
var rows = [];
listings.each(function (index, e) {
  var id = jQuery(e).find('div.employee_info > a.remove').attr('id');
  var row = {
    citizenId: parseInt(id.substr(id.lastIndexOf('_') + 1), 10),
    citizenName: jQuery(e).find('div.employee_info > a.employee_entry > strong').html(),
    salary: parseFloat(jQuery(e).find('div.employee_salary > input.old_salary_value').val()).toString().replace('.', ',')
  };

  var day = 1;
  jQuery(e).find('div.employee_presence > div.working_days > span').each(function (index, e) {
    var status = 0;
    if (jQuery(e).hasClass('worked')) {
      status = parseInt(jQuery(e).find('b').html().trim());
    } else if (jQuery(e).hasClass('nan')) {
      status = null;
    }
    row['day' + day] = status;
    day++;
  });
  rows.push(row);
});

/** CONVERT TO TSV **/
var glue = "\t";
var tsv = [];
var line;
var first = true;
for (var i in rows) {
  if (first) {
    line = [];
    for (var key in rows[i]) {
      line.push(key);
    }
    tsv.push(line.join(glue));
    first = false;
  }
  line = [];
  for (var key in rows[i]) {
    line.push(rows[i][key]);
  }
  tsv.push(line.join(glue));
}
tsv = tsv.join("\n");

jQuery('div.area.employees > h4').after(
  '<textarea readonly="readonly" id="textarea-export-employees" onfocus="this.select()" onMouseUp="return false" '+
  'style="font-size: 11px;font-family:consolas, monospace;width:100%;height:100px;margin-bottom:5px;">' + tsv + '</textarea>');
