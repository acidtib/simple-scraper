var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.artmiamifair.com/desktopdefault.aspx?tabid=17";

request(url, function(error, response, html) {
  if (!error) {

    var $ = cheerio.load(html);

    $('.LinkDealer').each(function(i, elem) {
      var name = $(this).text();
      var link = "http://www.artmiamifair.com/"+$(this).attr('href');

      request(link, function(error, response, html) {
        if (!error) {
          var $ = cheerio.load(html);

          email = $('table#_ctl7_dlDealOnFair tr#_ctl7_dlDealOnFair__ctl0__ctl0_trMail .linkdealer a').attr('href').replace('mailto:','');
          website = $('table#_ctl7_dlDealOnFair tr#_ctl7_dlDealOnFair__ctl0__ctl0_trURL .linkdealer a').attr('href');

          console.log(name);
          console.log(email);
          console.log(website);
          console.log('------------------');
        }
      });
    });

  }
})
