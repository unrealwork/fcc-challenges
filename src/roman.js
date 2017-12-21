module.exports = {
    convertToRoman: function (num) {
        var res = '';
        var convert = {
            1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'
        };
        var categories = Object.keys(convert);
        var categoryIndex = categories.length - 1;
        var rest = num;
        while (rest > 0) {
            var romanKey = parseInt(categories[categoryIndex]);
            var count = ~~(rest / romanKey);
            rest -= (count * romanKey);
            if (count < 5) {
                if (count > 3) {
                    res += convert[categories[categoryIndex]];
                    res += convert[categories[categoryIndex + 1]];
                } else {
                    res += (convert[categories[categoryIndex]]).repeat(count);
                }
            } else {
                if (count > 8) {
                    res += convert[categories[categoryIndex]];
                    res += convert[categories[categoryIndex + 2]];
                } else {
                    res += convert[categories[categoryIndex + 1]];
                    res += (convert[categories[categoryIndex]]).repeat(count - 5);
                }
            }

            categoryIndex -= 2;
        }
        return res;
    }
};
