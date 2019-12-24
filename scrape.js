const request = require('request')
const cheerio = require ('cheerio')

request('https://www.hypoport.nl/who-we-are/team/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const items = $('.et_pb_team_member');
        items.each((i, el) => { 
            const name = $(el).find('h4').text();
            const email = $(el).next().find('a').text();
            console.log(`employee name: ${name}, employee e-mail: ${email || 'none'}`);
        });
    }
});
