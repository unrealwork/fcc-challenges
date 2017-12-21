var roman = require('../src/roman.js');
var assert = require('chai').assert;


describe('convertToRoman', function () {
    var tests = [
        {arg: 2, expected: 'II'},
        {arg: 83, expected: 'LXXXIII'},
        {arg: 4, expected: 'IV'}
    ];
    tests.forEach(function (test) {
        it('should return ' + test.expected + ' for: ' + test.arg, function () {
            assert.equal(roman.convertToRoman(test.arg), test.expected);
        });
    });
});
