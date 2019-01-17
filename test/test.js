const assert = require('assert');
const chai = require('chai');
const chaiAssert = chai.assert;
const cookieMonster = require('../lib/index.js');

describe('Parse request with cookie', function() {
    const requestExample = {
        headers: {
            cookie: "_ga=GA1.1.206842275.1547456732"
        },
    }
    describe('Get cookie from request', function() {
        const parsedCookie = cookieMonster.get(requestExample);
        it('should be an array', function() {
            assert.equal(parsedCookie.constructor, Array);
        });
        it('with a length of 1', function() {
            assert.equal(parsedCookie.length, 1);
        });
        it('array of objects', function() {
            assert.equal(parsedCookie[0].constructor, Object);
        });
    });
});

describe('Parse request with empty cookies', function() {
    const requestExample = {
        headers: {
            cookie: ""
        },
    }
    const parsedCookie = cookieMonster.get(requestExample);
    it('should be an empty array', function() {
        assert.equal(parsedCookie.length, 0);
        assert.equal(parsedCookie.constructor, Array);
    });
});

describe('Parse cookies by name', () => {
    const requestExample = {
        headers: {
            cookie: "_ga=GA1.1.206842275.1547456732; randomSite=9cs09ds0cisd; _alluc=v8s9d8sv9s9e;"
        },
    }
    const parsedCookie = cookieMonster.getByName(requestExample, 'randomSite');
    //console.log("parsedCookie ",parsedCookie);
    it('should return an object', () => {
        assert.equal(parsedCookie.constructor, Object);
    })
    // with specific value
    it('should have the right value', () => {
        assert.equal(parsedCookie.value, "9cs09ds0cisd");
    });
    const emptyRequestExample = {
        headers: {
            cookie: "_ga=GA1.1.206842275.1547456732; _alluc=v8s9d8sv9s9e;"
        },
    }
    const parsedCookieMissing = cookieMonster.getByName(emptyRequestExample, 'randomSite');
    //console.log("parsedCookieMissing ",parsedCookieMissing);
    it('should be empty', () => {
        assert.equal(parsedCookieMissing === null, true);
    })

})