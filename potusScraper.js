const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then( html => {
    //success!!
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    return Promise.all(
      wikiUrls.map(url => {
        return potusParse('https://en.wikipedia.org' + url);
      })
    )
  })
  .then(data => {
    console.log(data);
  })
  .catch( err => {
    //if err
    console.log(err)
  })