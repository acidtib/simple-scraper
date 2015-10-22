var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.artmiamifair.com/desktopdefault.aspx?tabid=17";


request(url, function(error, response, html){
  if(!error){

    var $ = cheerio.load(html);

    var ttt = $("#_ctl7_dlDealersByName > tbody > tr > td > h1").text();

    console.log(ttt);
  }
})
