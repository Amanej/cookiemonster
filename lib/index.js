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
                name: cookieArr[0],
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
    }
}

module.exports = cookieMonster;