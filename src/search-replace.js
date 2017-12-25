exports.myReplace = function (str, before, after) {
    function replacer(found) {
        var first = found.charAt(0);
        if (/[A-Z]/.test(first)) {
            var firstCharAfter = after.charAt(0);
            return firstCharAfter.toUpperCase() + after.substr(1);
        }
        return after;
    }

    return str.replace(new RegExp(before, 'g'), replacer);
};