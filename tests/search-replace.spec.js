var myReplace = require('../src/search-replace').myReplace;
var assert = require('chai').assert;


describe('myReplace', function () {
    var tests = [
        {args: ['Let us go to the store', 'store', 'mall'], expected: 'Let us go to the mall'},
        {args: ['He is Sleeping on the couch', 'Sleeping', 'sitting'], expected: 'He is Sitting on the couch'},
    ];
    tests.forEach(function (test) {
        it('should return ' + test.expected + ' for: ' + test.arg, function () {
            assert.equal(myReplace.apply(null, test.args), test.expected);
        });
    });
});
