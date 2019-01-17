const cookieMonster = require('../lib/index.js');

const requestExample = {
    headers: {
        cookie: "_ga=GA1.1.206842275.1547456732"
    },
}

const parsedCookie = cookieMonster.get(requestExample);