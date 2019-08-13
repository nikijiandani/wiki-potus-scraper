const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = url => {
  return rp(url)
    .then( html => {
      return {
        name: $('h1', html).text(),
        birthday: $('.bday', html).text()
      }
    })
    .catch(err => {
      //if err
      console.log(" You encountered the following error: ",err)
    })
}

module.exports = potusParse;