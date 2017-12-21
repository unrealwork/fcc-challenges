exports.smallestCommons = function (arr) {
    function gcd(a, b) {
        var i = a;
        var j = b;
        while (i !== j) {
            if (i > j) {
                i = i - j;
            } else {
                j = j - i;
            }
        }
        return i;
    }

    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    var acc = start;
    for (var i = start + 1; i <= end; i++) {
        var g = gcd(acc, i);
        acc = acc / g * i;
    }
    return acc;
};
