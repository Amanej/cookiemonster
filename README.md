<h1 align="center">
<br/>
<img width="400" src="assets/logo.png">
<br/>
<br/>
</h1>

> Small cookie parsing library

This is a small library to parse cookies from requests in Node.

## Install

`
const cookieMonster = require('cookiemonster');
`

## Usage

* Parse request for cookies

`const cookies = cookieMonster.get(req);`

This returns the parsed cookies as an array of objects.

```
[
    {
        "name": "_ga",
        "value": "GA1.1.206842275.1547456732"
    }
]
```
