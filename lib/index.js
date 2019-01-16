const cookieMonster = {
    parse: (cookie) =>{
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
        return cookieMonster.parse(req.headers.cookie);
    }
}

module.exports = cookieMonster;