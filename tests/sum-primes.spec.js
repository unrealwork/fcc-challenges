var sumPrimes = require('../src/sum-primes').sumPrimes;
var assert = require('chai').assert;


describe('sumPrimes', function () {
    var tests = [
        {arg: 10, expected: 17},
        {arg: 977, expected: 73156}
    ];
    tests.forEach(function (test) {
        it('should return ' + test.expected + ' for: ' + test.arg, function () {
            assert.equal(sumPrimes(test.arg), test.expected);
        });
    });
});
