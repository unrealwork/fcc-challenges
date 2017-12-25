var whatIsInAName = require('../src/wherefore-art-thou').whatIsInAName;
var assert = require('chai').assert;


describe('whatIsInAName', function () {
    var tests = [
        {
            args: [[{first: 'Romeo', last: 'Montague'}, {first: 'Mercutio', last: null}, {
                first: 'Tybalt',
                last: 'Capulet'
            }], {last: 'Capulet'}],
            expected: [{first: 'Tybalt', last: 'Capulet'}]
        }
    ];
    tests.forEach(function (test) {
        it('should return ' + test.expected + ' for: ' + test.arg, function () {
            assert.deepEqual(whatIsInAName.apply(null, test.args), test.expected);
        });
    });
});
