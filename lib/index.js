const cookieMonster = {
    checkRequest: (req) => {
        if(!req) {
            return false
        } else if(!req.headers) {
            return false
        } else if(!req.headers.cookie) {
            return false
        }
        return true
    },
    parse: (cookie) => {
        // Parse 
        const parsedCookie = cookie.split(";").map(c => {
            const cookieArr = c.split("=");
            return {
                name: cookieArr[0].trim(),
                value: cookieArr[1],
            }
        });
        return parsedCookie //"parsed object"
    },
    get: (req) => {
        if(cookieMonster.checkRequest(req)) {
            return cookieMonster.parse(req.headers.cookie);
        } else {
            return []
        }
    },
    getByName: (req,name) => {
        if(cookieMonster.checkRequest(req)) {
            const parsedCookies = cookieMonster.parse(req.headers.cookie);
            const _pc = parsedCookies.filter(p => p.name === name);
            if(_pc.length) {
                return _pc[0];
            } else {
                return null
            }
        } else {
            return null
        }
    }
}

module.exports = cookieMonster;