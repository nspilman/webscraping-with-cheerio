const rp = require('request-promise');
const url = 'http://oldsaltblog.com/';
const fs = require('fs');


rp(url).then(
    html => {
        fs.writeFile('index2.html',html,(err) => {})
    //    console.log(html)
    }
)

