exports.whatIsInAName = function (collection, source) {
    function isValid(object) {
        var keys = Object.keys(source);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!(object.hasOwnProperty(key) && source[key] === object[key])) {
                return false;
            }
        }
        return true;
    }

    return collection.filter(isValid);
};