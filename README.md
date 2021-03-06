<h1 align="center" style="text-align: center;">
<br/>
<img width="400" src="assets/logo.png">
<br/>
<h2 align="center">Cookies Monster</h2>
<br/>
<br/>
</h1>

> Small cookie parsing library

![Build Status](https://travis-ci.org/Amanej/cookiemonster.svg?branch=master)

This is a small library to parse cookies from requests in Node.

## Install

`$ npm install cookiesmonster`

## Usage

`const cookieMonster = require('cookiemonster');`

* Parse request for cookies

`const cookies = cookieMonster.get(req);`

Pass a default node request, or from express etc. This returns the parsed cookies as an array of objects or empty array.

```
[
    {
        "name": "_ga",
        "value": "GA1.1.206842275.1547456732"
    }
]
```

* Get cookie by name

`const cookies = cookieMonster.getByName(req,'randomSite');`

This return an object with the name of the site, value of the cookie and if the cookie is not found it returns `null`.

```
{
    "name": "randomSite",
    "value": "9cs09ds0cisd"
}
```

## Future features

* ~~Get cookie by name~~

Suggestions and pull requests welcome!