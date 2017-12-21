var smallestCommons = require('../src/smallest-commons').smallestCommons;
var assert = require('chai').assert;

describe('smallestCommons', function () {
    var tests = [
        {arg: [1, 5], expected: 60},
        {arg: [23, 18], expected: 60}
    ];
    tests.forEach(function (test) {
        it('should return ' + test.expected + ' for: ' + test.arg, function () {
            assert.equal(smallestCommons(test.arg), test.expected);
        });
    });
});
